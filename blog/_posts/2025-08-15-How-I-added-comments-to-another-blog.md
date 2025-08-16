---
title: How I added comments to another blog
layout: post
author: NateDhaliwal
category: general
tags: [tips & tricks, coding & programming]
readtime: true
published: false
---

## Introduction
So, I haven’t been posting much recently, but I’m back with a new one – how I added blog comments on an [AstroJS](https://astro.build/) blog I run.
I’ve always thought – how can I get readers to interact, to ask questions and get responses? Well, I’ve done research into the different softwares that can implement comments, and I’ll also tell you why I opted to make my own from scratch, instead of using an existing one.

## Existing software – why they just don’t make the cut
There are *many* commenting softwares out there. Widgets, scripts, etc. But they wouldn’t be too bad, if not for the following reasons:

### A logo and a paywall
Sadly, many commenting widgets out there have logos at the bottom. And the “best” part? Removing them is locked behind some sort of paid membership, for example things like Elfsight.

### Design inconsistency
My blog did not match a lot of tools and software that gave comments. The difference in style was quite jarring, and didn’t really match the look of the blog, either.

### Third-party software and their trackers
I really don’t like to use 3rd-party software that tracks users’ data, like location, IP address, and other PII that most people wouldn’t want flying about. I made it a point not to use the very popular Disqus, as I’m also big on open-source.

### Difficult to set up
My blog is running on Vercel. Some comment systems like Schnack or Remark42 needed VPSs themselves, some even running in Docker containers – something Vercel doesn’t really provide. And I didn’t want to spend any money on this. And another thing – some have used [Staticman](https://staticman.net/) and had some success with it, but to me, it felt too complicated.

### So?
So, well, yes -  creating a comments system with something already out there proved to be harder than I thought. I saw Rachel Smith’s [blog post](https://rachsmith.com/static-blog-comments/) (the mouse trail is pretty cool) on how she added comments to her own Astro blog, but she used Netlify forms, something I didn’t have because I was using Vercel (though I could have used Netlify, but I was lazy). Therefore, I gritted my teeth and got to work.

## The self-made comments system
I used a relatively simple Python app. Originally in full HTML and embedded via an Iframe, I wished to add authentication. To cut a (very) long story short, that didn’t work out. In the end, I used a Flask web app behind Gunicorn, deployed on Vercel.
The app handled POST requests to add comments, and GET requests every 5 seconds by the host to update the comments list [^1]. This way, all I needed now was some vanilla JS and a form.
Well, not so simple. I needed a way to store the names of posters, so I used a text box that could not be edited by the user if they had posted before, which I called being ‘signed in’. There is a link to ‘sign out’, so to speak – it clears the username from `localStorage` and the textbox is now editable.
I used Flask-SQLAlchemy to structure the database model, and used a cloud database to store it. Originally using CockroachDB Cloud, I switched to Neon when my free trial was over (which I didn’t even know was possible). This went fairly smoothly, and now the database can be accessed from pretty much anywhere.

For the JS logic that handled the form submission, I obfuscated the whole file. Some “power users” could obviously realise I was using `readonly` on the name input, and I wasn’t taking my chances. The blog isn't programming-related, but you never know.

### Database model
My `models.py` file was not advanced, just a barebones structure of a comment:
```python
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime
import pytz

db = SQLAlchemy()
migrate = Migrate()

class Comment(db.Model):
  __tablename__ = "comments"

  comment_id = db.Column(db.Integer, primary_key=True)
  comment_poster = db.Column(db.Text, nullable=False)
  comment_content = db.Column(db.String(300), nullable=False)
  belongs_to = db.Column(db.String(100), nullable=False)
  date_posted = db.Column(db.DateTime, default=datetime.now(pytz.timezone("************")))
```
I may add a `reply_to` feature in the future, where it corresponds to another comment's `comment_id`. My main issue with this is that I'm unsure how this will be displayed, like with nested replies?

###

[^1]: Courtesy of ChatGPT – so much for trying not to use AI… well, at least I don’t do vibe coding, but that’s a story for another day
