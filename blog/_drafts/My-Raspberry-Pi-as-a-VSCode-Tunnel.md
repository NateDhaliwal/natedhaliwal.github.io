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

Again, Github Codespaces couldn't work out, as I kept hitting limits I never knew. So I embarked on a mission to find the perfect solution.

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
If I wanted to use my Pi
