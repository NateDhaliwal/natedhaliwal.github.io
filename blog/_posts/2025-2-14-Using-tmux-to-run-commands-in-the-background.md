---
title: "Using tmux to run commands in the background"
layout: post
author: NateDhaliwal
category: bash & terminal
tags: [discourse, tips & tricks, guide, bash]
readtime: true
published: false
---

## What is tmux?
`tmux` is an " open-source terminal multiplexer for Unix-like operating systems. It allows multiple terminal sessions to be accessed simultaneously in a single window. It is useful for running more than one command-line program at the same time. It can also be used to detach processes from their controlling terminals, allowing remote sessions to remain active without being visible." (Source: [Wikipedia](https://en.wikipedia.org/wiki/Tmux)). Succintly put, in my opinion. Basically, you can run commands simultaneously, or in the background. <br>
For this guide, I'll talk about rebuilding your Discourse forum in the background. Of course, this can apply to *anything*, not just Discourse, so I'll be a bit more general and not so Discourse-specific.

---

## Install `tmux`
Follow these steps to get `tmux`:
1. SSH into your server via the terminal.
2. Run `apt install tmux` or `sudo apt install tmux` to install `tmux`.
3. Run `tmux` to make sure it's installed.

## Run your command
1. Get into root by running `sudo -s` or `su root`.
2. Go to your directory where you want to run the command (for Discourse we'll do this, but you don't always have to do this) by running `cd path/to/directory`.
3. 
