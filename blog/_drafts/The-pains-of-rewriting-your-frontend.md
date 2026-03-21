---
title: The pains of rewriting your frontend
layout: post
author: NateDhaliwal
category: general
tags: [coding & programming]
readtime: true
---

## Introduction
Recently, I moved the frontend of a site I made from Flask's [Jinja](https://jinja.palletsprojects.com) to [Ember.js](https://emberjs.com).Needless to say, it was a pretty big rewrite. When I say 'pretty big', I mean this big in terms of Git diff:

![31,000 lines added!? I don't remember writing that much!]({{ site.baseurl }}/assets/images/git-diff-of-new-emberjs-frontend-from-jinja.png)

## Why change?
The reason for the change was that I wanted greater flexibility - I could apply a great deal of logic and handling to the client, instead of relying on the backend and only a handful of vanilla JS files. It also simplified things - I could improve modularity in my application more than if I used Jinja macros, and I felt that it would be cleaner (and it really was!).

I had problems with plain Jinja too. For instance, multiple pieces of code handling features relied on hacky vanilla JS, and felt like it could break at any moment. Plus, refreshes would reload the whole page instead of in the background, because Jinja doesn't do async.

## Why Ember?
At this point, it really came down to *which* JS framework I wanted to use. I looked at a bunch of things:

- Beginner-friendly?
- Supports API?
- Templating is similar to Jinja?
- Less bloat?

A quick comparison will actually point you towards React, ironically. But because (yes, again) of my exposure to [Discourse](https://discourse.org), and having developed some customizations in Glimmer templates, I leaned towards Ember a bit more.

This may be debatable, but I felt that Ember seemed 'cleaner' in terms of the syntax. I've never liked React, and after pretty negative experiences with Astro.js (running the blog [I added comments to]({{ '/blog/general/2026/01/24/My-Raspberry-Pi-as-a-VSCode-Tunnel/' | relative_url }})), I wanted a simple framework to step into the JS framework ecosystem (yes, it was my first time).

Again, ironically, React seems to be the more beginner-friendly option, but... I guess I didn't do enough research? JSX does seem simpler than Handlebars at first glance... [^1]

One thing that really supported my decision though, was Ember's [EmberData](https://guides.emberjs.com/release/models) - a tool to handle backend API. The thing is that from previously using:

```python
return render_template("dashboard.html", <bunch of args passed here>)
```

the API version would look like:

```python
return jsonify({
  <bunch of args passed here>
}), 200
```

An added benefit was that I could add a `to_dict()` method for my database models to represent them in a dictionary (a.k.a. hash) format for APIs, while also being 
So fortunately or unfortunately, I went with Ember...

[^1]: Of course, it's not viable to switch my framework now. Actually, it technically is, but it'll take a LOT of work.
