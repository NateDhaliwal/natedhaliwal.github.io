/*!
  * Simple-Jekyll-Search
  * Copyright 2015-2020, Christian Fei
  * Licensed under the MIT License.
*/

!function() {
  "use strict";

  // Search functionality object
  var f = {
    // Compiles the search result template
    compile: function(r) {
      return i.template.replace(i.pattern, function(t, e) {
        var n = i.middleware(e, r[e], i.template);
        return void 0 !== n ? n : r[e] || t; // Return the processed template or the original value
      });
    },
    // Sets options for the search
    setOptions: function(t) {
      i.pattern = t.pattern || i.pattern; // Update pattern if provided
      i.template = t.template || i.template; // Update template if provided
      if (typeof t.middleware === "function") {
        i.middleware = t.middleware; // Set middleware if it's a function
      }
    }
  };

  // Default options for the search
  const i = {
    pattern: /\{(.*?)\}/g, // Pattern to match placeholders in the template
    template: "", // Template for search results
    middleware: function() {} // Placeholder for middleware function
  };

  // Function to check if a string matches another string
  var n = function(t, e) {
    var n = e.length,
        r = t.length;
    if (n < r) return !1; // If the search term is longer than the text, return false
    if (r === n) return t === e; // If lengths are equal, check for equality

    t: for (var i = 0, o = 0; i < r; i++) {
      for (var u = t.charCodeAt(i); o < n;) {
        if (e.charCodeAt(o++) === u) continue t; // Check for character matches
        return !1; // If no match found, return false
      }
    }
    return !0; // Return true if all characters match
  };

  // Object to handle case-insensitive matches
  e = new function() {
    this.matches = function(t, e) {
      return n(e.toLowerCase(), t.toLowerCase()); // Compare lowercased strings
    }
  };

  // Object to handle word-based matches
  r = new function() {
    this.matches = function(e, t) {
      return !!e && (e = e.trim().toLowerCase(), (t = t.trim().toLowerCase()).split(" ").filter(function(t) {
        return 0 <= e.indexOf(t); // Check if all words in the search term are in the text
      }).length === t.split(" ").length);
    }
  };

  // Main search object
  d = {
    // Adds a new item to the search index
    put: function(t) {
      if (l(t)) return a(t); // If it's a valid object, add it to the index
      if (function(t) {
        return Boolean(t) && "[object Array]" === Object.prototype.toString.call(t);
      }(t)) {
        return function(n) {
          const r = [];
          s(); // Clear the current index
          for (let t = 0, e = n.length; t < e; t++) {
            l(n[t]) && r.push(a(n[t])); // Add valid items to the index
          }
          return r; // Return the updated index
        }(t);
      }
      return undefined; // Return undefined if input is invalid
    },
    clear: s, // Clear the search index
    // Searches for items based on the input
    search: function(t) {
      return t ? function(e, n, r, i) {
        const o = [];
        for (let t = 0; t < e.length && o.length < i.limit; t++) {
          var u = function(t, e, n, r) {
            for (const i in t) {
              if (!function(n, r) {
                for (let t = 0, e = r.length; t < e; t++) {
                  var i = r[t];
                  if (new RegExp(i).test(n)) return !0; // Check for excluded terms
                }
                return !1;
              }(t[i], r.exclude) && n.matches(t[i], e)) return t; // Check for matches
            }
          }(e[t], n, r, i);
          u && o.push(u); // If a match is found, add it to the results array
        }
        return o; // Return the array of matched results
      }(u, t, c.searchStrategy, c).sort(c.sort) : []; // Sort results based on the defined strategy
    },
    // Sets options for the search
    setOptions: function(t) {
      c = t || {}; // Update configuration
      c.fuzzy = t.fuzzy || !1; // Enable fuzzy search if specified
      c.limit = t.limit || 10; // Set the limit for search results
      c.searchStrategy = c.fuzzy ? e : r; // Choose search strategy based on fuzzy option
      c.sort = t.sort || o; // Set sorting function
      c.exclude = t.exclude || []; // Set excluded terms
    }
  };

  function o() {
    return 0; // Default sorting function
  }

  const u = []; // Array to hold search index
  let c = {}; // Configuration object

  // Clears the search index
  function s() {
    return u.length = 0, u; // Reset the index
  }

  // Checks if the input is a valid object
  function l(t) {
    return Boolean(t) && "[object Object]" === Object.prototype.toString.call(t);
  }

  // Adds an item to the search index
  function a(t) {
    return u.push(t), u; // Push item to the index and return it
  }

  // Default configuration
  c.fuzzy = !1;
  c.limit = 10;
  c.searchStrategy = c.fuzzy ? e : r;
  c.sort = o;
  c.exclude = [];

  // Function to load JSON data for search
  var p = {
    load: function(t, e) {
      const n = window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
      n.open("GET", t, !0); // Open a GET request
      n.onreadystatechange = h(n, e); // Set the callback for when the request state changes
      n.send(); // Send the request
    }
  };

  // Handles the response from the JSON request
  function h(e, n) {
    return function() {
      if (4 === e.readyState && 200 === e.status) {
        try {
          n(null, JSON.parse(e.responseText)); // Parse and return the JSON data
        } catch (t) {
          n(t, null); // Handle parsing errors
        }
      }
    };
  }

  // Validator for required options
  var m = function y(t) {
    if (!(e = t) || !("undefined" != typeof e.required && e.required instanceof Array)) throw new Error("-- OptionsValidator: required options missing");
    var e;
    if (!(this instanceof y)) return new y(t);
    const r = t.required;
    this.getRequiredOptions = function() {
      return r; // Return required options
    };
    this.validate = function(e) {
      const n = [];
      r.forEach(function(t) {
        "undefined" == typeof e[t] && n.push(t); // Check for missing required options
      });
      return n; // Return any missing options
    };
  };

  // Utility functions for merging and checking JSON
  w = {
    merge: function(t, e) {
      const n = {};
      for (const r in t) n[r] = t[r], "undefined" != typeof e[r] && (n[r] = e[r]); // Merge options
      return n; // Return merged options
    },
    isJSON: function(t) {
      try {
        return t instanceof Object && JSON.parse(JSON.stringify(t)) ? !0 : !1; // Check if input is valid JSON
      } catch (e) {
        return !1; // Return false if an error occurs
      }
    }
  };

  // Main function to initialize the search
  !function(t) {
    let i = {
      searchInput: null, // Input field for search
      resultsContainer: null, // Container for displaying results
      json: [], // Array to hold JSON data
      success: Function.prototype, // Callback for successful search
      searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>', // Template for search results
      templateMiddleware: Function.prototype, // Middleware for template processing
      sortMiddleware: function() {
        return 0; // Default sorting function
      },
      noResultsText: "No results found", // Message when no results are found
      limit: 10, // Default limit for results
      fuzzy: !1, // Default fuzzy search option
      debounceTime: null, // Time to wait before searching
      exclude: [] // Terms to exclude from search
    }, n;

    // Deb ounce function to limit the rate of search input processing
    const e = function(t, e) {
      e ? (clearTimeout(n), n = setTimeout(t, e)) : t.call(); // Execute the function after a delay
    };

    var r = ["searchInput", "resultsContainer", "json"]; // Required options for initialization
    const o = m({ required: r }); // Validate required options

    // Function to initialize search input event listener
    function u(t) {
      d.put(t); // Add data to the search index
      i.searchInput.addEventListener("input", function(t) {
        // Listen for input events
        -1 === [13, 16, 20, 37, 38, 39, 40, 91].indexOf(t.which) && (c(), e(function() {
          l(t.target.value); // Trigger search on input
        }, i.debounceTime));
      });
    }

    // Clear the results container
    function c() {
      i.resultsContainer.innerHTML = ""; // Reset the results display
    }

    // Append search results to the results container
    function s(t) {
      i.resultsContainer.innerHTML += t; // Add new results to the display
    }

    // Perform the search based on the input
    function l(t) {
      var e;
      (e = t) && 0 < e.length && (c(), function(e, n) {
        var r = e.length;
        if (0 === r) return s(i.noResultsText); // Show no results message if no matches
        for (let t = 0; t < r; t++) e[t].query = n, s(f.compile(e[t])); // Compile and display each result
      }(d.search(t), t));
    }

    // Error handling for missing required options
    function a(t) {
      throw new Error("SimpleJekyllSearch --- " + t); // Throw an error with a message
    }
    console.log("Search Index:", d); // Log the search index
    console.log("Search Term:", t); // Log the search term
    // Main function to set up the search
    t.SimpleJekyllSearch = function(t) {
      var n;
      0 < o.validate(t).length && a("You must specify the following required options: " + r); // Validate options
      i = w.merge(i, t); // Merge user options with defaults
      f.setOptions({ template: i.searchResultTemplate, middleware: i.templateMiddleware }); // Set template and middleware
      d.setOptions({ fuzzy: i.fuzzy, limit: i.limit, sort: i.sortMiddleware, exclude: i.exclude }); // Set search options
      w.isJSON(i.json) ? u(i.json) : (n = i.json, p.load(n, function(t, e) {
        t && a("failed to get JSON (" + n + ")"), u(e); // Load JSON data and initialize search
      }));
      t = { search: l }; // Return the search function
      return "function" == typeof i.success && i.success.call(t), t; // Call success callback if defined
    };
  }(window);
}();
