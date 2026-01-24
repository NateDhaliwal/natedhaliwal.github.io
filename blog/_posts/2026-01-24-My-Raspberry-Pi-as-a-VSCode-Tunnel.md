---
title: My Raspberry Pi as a VSCode Tunnel
layout: post
author: NateDhaliwal
category: general
tags: [coding & programming, hardware, raspberrypi]
---

## Introduction
Ever since I moved away from Replit, I have been on a hunt for a good place to code. I tried using IntelliJ and PyCharm, but I just didn't like the feel. I needed something like VSCode.

I found [CodeSandbox](https://codesandbox.io) which was (and is) alright, the only downside being that there's usage limits, with 400 credits a month (Pico workspaces cost 5/hour, Nano 10/hour, of course with ascending specs). I used it for a few months, and although I never hit the limits, I wanted to be *free*. To code anywhere. From any device.

Again, Github Codespaces couldn't work out, as I kept hitting limits I never knew were there. So I embarked on a mission to find the perfect solution.

## Criteria for IDE
The criteria for the IDE was as follows:
- Preferably VSCode-based
- Unlimited
- Code from any device
- I have more control
- Preferably full terminal access

Was it possible? Definitely. I just had to look.

## The Solution
Now, I have a Raspberry Pi 4B sitting around at home collecting dust. So what's the best thing to do with it? Well, for 2 years, the answer was either:
a) Nothing
b) Discourse Development Environment

Having done a) for about 1-2 years and persisted with b) and failed miserably (too little RAM, and an SD Card, I think), I turned to using it to solve my problem of having no IDE.

### 2 options
If I wanted to use my Pi to give me an IDE, I had 2 ways of going about things:
1. VSCode Tunnel
2. Remote Host

#### VSCode Tunnel
This was my preferred and final choice. Essentially, it opens a tunnel from my Pi to https://vscode.dev, the online (and minimal) version of VSCode (with no extensions, terminal, etc). However, with the tunnel, I can access my Pi's filesystem, have terminal access to my Pi, and install extensions of my choice.

#### Remote Host
Remote host works a bit differently. From my understanding, it basically hosts a whole VSCode environment onto localhost/host IP. I didn't choose this because I didn't want a HTTP IP address to be the URL.

## Final choice
So, I eventually went with a tunnel. In my opnion, it's easier to go to the website URL than it is to key in an IP address.

To make it run 24/7, I added this to `systemd` as a service, to run in the background. With the help of ChatGPT, I created a Telegram bot (my first, and probably my last) to send me updates of my Pi starts overheating (to err on the side of caution, I set it to remind me if it goes past 50°C.

The really good thing about the tunnel is that it automatically exposes ports for me, so I can test my app in dev mode whenever I want.

## Conclusion
In summary, I felt that it really wasn't difficult to set this up at all. With `journalctl`, I can check through logs in case anything goes wrong. If I'm feeling lazy and don't want to open up my terminal to SSH into my Pi, I occasionally use the terminal in vscode.dev to connect with my Pi. But the best part? Almost no setup when I want to code on the go. Just open up my web browser and it's all done.
