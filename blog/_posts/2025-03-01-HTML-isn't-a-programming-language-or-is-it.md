---
title: "HTML isn't a programming language... or is it?"
layout: post
author: NateDhaliwal
category: general
tags: [general, discussion]
readtime: true
---

## Introduction
One of the most controversial, debatable programming topics out there. Is HyperText Markup Language *really* a programming language? Let me discuss it.

## HTML's structure
HTML, which is used to make webpages, is made out of *tags*, like so: `<p>Hello</p>`. This makes some text appear, namely, 'Hello'. However, you don't have variables and if statements and loops and all sorts of things conventional languages have. Of course, templating languages (which are technically still not languages) provide that functionality, like Jinja or Liquid.

Programming langauges also have error catching. In HTML, there are no "errors". If something is wrong, it just renders wrongly, or doesn't appear at all. 

People argue that HTML has a syntax, which makes it a programming language. Arguably, yes, but would you consider a bunch of arrow brackets and letters *syntax*? Yes, it's unique, but it doesn't convey a "feel" of a programming language. To me, it's more like just tags. Not actual code, just tags.

Let's take a look at one more part. Indentation. Most languages are quite picky about indentation and random whitespace. ESLint was catching errors in my code because of *trailing whitespace*. Prettier was making a big fuss of all of this. Python scolds you for not being indented, or for inconsistent indentation. But what about HTML? Indent 10 tabs and it won't matter. 3 spaces and it makes no difference (except that your code would look plain ugly). I don't think this makes it a language. Though, it's debatable 🤷.

## Conclusion
No, no, and a thousand times no. HTML is **not** a language. Look at the evidence! Weird syntax, no loops, not ifs, no variables! It only "prints" stuff. I would not consider it a programming language, and the language's name says 'Markup Language' not 'Programming language'.
