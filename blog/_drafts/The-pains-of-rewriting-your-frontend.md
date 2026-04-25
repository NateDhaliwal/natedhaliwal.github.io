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

This may be debatable, but I felt that Ember seemed 'cleaner' in terms of the syntax. I've never liked React, and after pretty negative experiences with Astro.js (running the blog [I added comments to]({{ '/blog/general/2026/01/24/My-Raspberry-Pi-as-a-VSCode-Tunnel/' | relative_url }})), I wanted a simple framework to step into the JS framework ecosystem (yes, it was my first time, and no, not everyone will call Ember 'simple').

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

## The migration

## Okay, so I changed it (again)
Ember? Uhh... well... while doing some research into which framework/library is the best, a clear winner stood out: React. You probably already know what's coming. Yes! So being the impulsive me, I changed the frontend to React with React Router and shadcn/ui.

### Hold on a sec! Shadcn? Really?
With Ember, I used Bootstrap. I actually was trying (with little success) to move to Tailwind with Ember, but the whole mess of classes, plus the fact that I had to write a whole mobile version for the navbar, pushed me to the faraway, "mystical" shadcn/ui. 

For one thing, the UI is a *lot* cleaner, and I used [shadcn/ui Create](https://ui.shadcn.com/create) to give it a bit more variety of colors besides just white and black.

However, the downside is that the UI looks like it was vibe-coded... since AI loves Tailwind (from my experience), and shadcn/ui uses Tailwind. Plus, I've seen a bunch of AI use shadcn, so... that's certainly a point not in its favor.

### Why React?
I chose React, because of the HUGE ecosystem for it out there. Ember's ecosystem is more limited, so React was like a whole new world. I spent the first few days just doing pure research into the tools I wanted to use. Radix? Base? (I went with Base) Tanstack Query? SWR? (I went with `fetch()`)

Plus, there more support for it out there. With Ember, I found myself turning to AI a lot because of the docs not always explaining everything. With React, everything is really well-documented, and it allowed me to be more focused on my migration.

## The 
