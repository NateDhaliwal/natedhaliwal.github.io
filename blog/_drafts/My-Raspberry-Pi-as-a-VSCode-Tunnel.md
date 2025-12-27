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

Again, Github Codespaces couldn't work out, as I kept hitting limits I never knew where there. So I embarked on a mission to find the perfect solution.

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

To make it run 24/7, I added this to `systemd` as a service, to run in the background. With the help of ChatGPT, I created a Telegram bot (my first, and probably my last) to send me updates of my Pi starts overheating (to err on the side of caution, I set it to remind me if it goes past 50°C.

#### Remote Host
