---
title: "Tips for installing Discourse"
layout: post
author: NateDhaliwal
category: discourse
tags: [discourse, tips & tricks, guide]
readtime: true
published: false
---

As I mentioned in [my first blog post]({{ '/blog/general/2024/12/18/my-first-post/' | relative_url }}), [Discourse](https://discourse.org) is an amazing, modern, and feature-rich forum software. A selling point? It's really easy to install and setup, and support is top-notch.
<br><br>
In this post, I'm going to share with you what you should do when installing Discourse, plus some software that you'd want to use. I'll suggest VPSs, domain providers, and email providers to use for Discourse.

---

## VPS
A VPS (Virtual Private Server) is a server (typically on the cloud) that you can run software. It is typically accessed by [SSH](), and you run commands in that machine. To run Discourse, you'll need a VPS. I'll list a few and talk about them. They are not ranked in any way.

1. [Google Cloud Platfrom (GCP)](https://cloud.google.com)'s Compute Engine

GCP's Compute Engine product is a product that I use to host my forum. The GCP Cloud Console is fairly simple to navigate, though it has a slightly complex interface. Beginners have lots of support across the web, like on StackOverflow or Google's own forums (which isn't Discourse, pity). <br>
GCP's free plan is not *too* bad. It gives you a free `e2-micro` instance each month, as well as credits that you can use. I use that to run my forum (save $$$!), and it hasn't given me big issues so far except 1 thing: it's very slow. The website itself is a bit on the slow side (but it's alright, actually), however, the rebuilding of the forum for updates or plugin installation takes forever. Like, forever. It takes about 2 to 3 hours long, so go do your own thing while the rebuilding takes place. If you're using GCP's in-built terminal that connects to the server, it may timeout when you leave it alone, so your progress may go down the drain. <br>
A workaround is to use `tmux` to run the rebuild command in the background, so you can safely close the terminal and come back later to find your forum updated. I tried it on a busy day and it worked like magic. I may wite a guide in the future on how to accomplish this.

2. [Digital Ocean](https://digitalocean.com)

This is Discourse's reccommended way of hosting Discourse. A bit on the pricey side (in my opinion) when you take a look at the other VPS providers I list below. The upside is that it is beginner-friendly and most people use this, so assistance is not hard to find. They have a $300 credit on signup that you can use to offset costs of your server for a while.
