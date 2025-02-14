---
title: "Tips for installing Discourse"
layout: post
author: NateDhaliwal
category: discourse
tags: [discourse, tips & tricks, guide]
readtime: true
---

As I mentioned in [my first blog post]({{ '/blog/general/2024/12/18/my-first-post/' | relative_url }}), [Discourse](https://discourse.org) is an amazing, modern, and feature-rich forum software. A selling point? It's really easy to install and setup, and support is top-notch.
<br><br>
In this post, I'm going to share with you what you should do when installing Discourse, plus some software that you'd want to use. I'll suggest VPSs, domain providers, and email providers to use for Discourse.

---

## VPS
A VPS (Virtual Private Server) is a server (typically on the cloud) that you can run software. It is typically accessed by [SSH](), and you run commands in that machine. To run Discourse, you'll need a VPS. I'll list a few and talk about them. They are not ranked in any way. All prices are in USD, and are as of February 2025.

- [Google Cloud Platfrom (GCP)](https://cloud.google.com)'s Compute Engine

GCP's Compute Engine product is a product that I use to host my forum. The GCP Cloud Console is fairly simple to navigate, though it has a slightly complex interface. Beginners have lots of support across the web, like on StackOverflow or Google's own forums (which isn't Discourse, pity). <br>
GCP's free plan is not *too* bad. It gives you a free `e2-micro` instance each month, as well as credits that you can use. I use that to run my forum (save $$$!), and it hasn't given me big issues so far except 1 thing: it's very slow. The website itself is a bit on the slow side (but it's alright, actually), however, the rebuilding of the forum for updates or plugin installation takes forever. Like, forever. It takes about 2 to 3 hours long, so go do your own thing while the rebuilding takes place. If you're using GCP's in-built terminal that connects to the server, it may timeout when you leave it alone, so your progress may go down the drain. <br>
A workaround is to use `tmux` to run the rebuild command in the background, so you can safely close the terminal and come back later to find your forum updated. I tried it on a busy day and it worked like magic. I may write a guide in the future on how to accomplish this.

- [Digital Ocean](https://digitalocean.com)

This is Discourse's reccommended way of hosting Discourse. A bit on the pricey side (in my opinion) when you take a look at the other VPS providers I list below. The upside is that it is beginner-friendly and most people use this, so assistance is not hard to find. They have a $300 credit on signup that you can use to offset costs of your server for a while. <br>
I think DO is a great way to get started with managing your own forum. If GCP intimidates you, try DO.

- [Hetzner](https://hetzner.com/cloud)

Hetzner seems line a good option for your VPS. Their price starts from $5 bucks (like DigitalOcean), but you have better resources than DO at that price. I have not run Discourse on Hetzner before, but people have done so with little to no problems. Just a note that they currently only have locations in Germany and Finland (and Singapore, but that doesn't seem like an option on the pricing page). 

- [Contabo](https://contabo.com/en/vps)

The prices of Contabo look really good. Again, I haven't ran Discourse on Contabo, but it has been tried by others without little to no trouble. For <$7, you can get a 4 CPU, 4 GB RAM server. It's pretty worth it, not to mention inexpensive.

### Conclusion
The VPSs I listed are ones that look pretty worth it, or are widely used for hosting Discourse. I didn't list other providers, like AWS's Lightsail or Vultr or Linode. Those don't seem as good a deal as these, although they are viable options as well. <br>
You can find the full list of hosting providers [here](https://meta.discourse.org/t/recommended-hosting-providers-for-self-hosters/79562/1).

---

## Domain providers
A domain provider is where you get your domain from (duh!). You'll need this to get a URL for your forum.

- [NameCheap](https://namecheap.com)

NameCheap is a reliable domain provider that I use for my forum. It's cheap (it's in the name!), and you can get some domains as low as $0.98 for the first year. Great stuff, and I have no problems with using it. It has a fairly clean interface and is reccommended by most people.

- [Porkbun](https://porkbun.com)

Another option is Porkbun, which provides relatively inexpensive domains. I've never used them before, but I've heard it's not too bad.

- [Cloudflare](https://cloudflare.com)

Besides web security, Cloudflare *does* have a domain product. It gives you domain protection out of the box, and ***should*** work with Discourse. I'm not 100% sure, so confirm this before using Cloudflare for your domains.

### Conclusion
I would suggest using NameCheap as your domain provider. There are others, of course, that are not listed, like GoDaddy, but it has become quite expensive so I didn't list it here. Of course, you should look up different domain providers and search which one has the best deals fitting to the domain you want to get.

---

## Transactional email providers
No, I'm not talking about Gmail or Outlook. I am referring to sending of automated emails from a website. Heard of MailGun, MailChimp, Brevo (previously Sendinblue)? These are what we're going to look at.

- [Brevo, previously Sendinblue](https://brevo.com)

Brevo is my favourite of all (because I've only used it and nothing else). It's free plan is generous, allowing 300 emails a day. I use this for my forum, and had no trouble setting it up. Really clean interface, with no confusing directions. It was a breeze to set up, and I really recommend it.

- [MailGun](https://mailgun.com) and [MailJet](https://mailjet.com)

I see MailGun used more than MailJet, but both are listed under the recommended list of email providers for Discourse. Their free plans are less generous, though, so I'm not too keen on choosing them. MailGun: 100 emails a day. MailJet: 200 emails a day.

### Conclusion
There aren't a lot of providers out there, but I would put Brevo up there for free ones. Check out [SendGrid](https://sendgrid.com) or AWS's [SES (Simple Email Service)](https://aws.amazon.com/ses). It (SES) comes pretty cheap: $0.10 for 1000 emails. Seems quite reasonable, actually. To look at the full list of recommended providers, see [this guide](https://github.com/discourse/discourse/blob/main/docs/INSTALL-email.md).

---

## Summary
Setting up Discourse has a lot of moving parts. It's a big task to upkeep all of them. You can follow my slightly-biased opinions above, but I've tried a few and given my honest feedback. When setting up your own forum, the choice is yours. It's always good to look at your options instead of following all my recommendations. <br>
For the official install guide on how to set up your own forum, see [this guide](https://github.com/discourse/discourse/blob/main/docs/INSTALL-cloud.md).
<br><br>
Good luck!
