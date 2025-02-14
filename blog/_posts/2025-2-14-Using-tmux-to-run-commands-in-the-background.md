---
title: "Using tmux to run commands in the background"
layout: post
author: NateDhaliwal
category: bash & terminal
tags: [tips & tricks, guide, bash]
readtime: true
---

## What is `tmux`?
`tmux` is an "open-source terminal multiplexer for Unix-like operating systems. It allows multiple terminal sessions to be accessed simultaneously in a single window. It is useful for running more than one command-line program at the same time. It can also be used to detach processes from their controlling terminals, allowing remote sessions to remain active without being visible." (Source: [Wikipedia](https://en.wikipedia.org/wiki/Tmux)). Succintly put, in my opinion. Basically, you can run commands simultaneously, or in the background. <br>
For this guide, I'll talk about rebuilding your Discourse forum in the background. Of course, this can apply to *anything*, not just Discourse, so I'll be a bit more general and not so Discourse-specific.

---

## Install `tmux`
Follow these steps to get `tmux`:
1. SSH into your server via the terminal.
2. Run `apt install tmux` or `sudo apt install tmux` to install `tmux`.
3. Run `tmux --help` to make sure it's installed.

## Run your command
1. Get into root by running `sudo -s` or `su root`.
2. Go to your directory where you want to run the command (for Discourse we'll do this, but you don't always have to do this) by running `cd path/to/directory`. For Discourse, run `cd /var/discourse`.
3. Once in the directory (or not), run `tmux` to start a new session. You should see a new, blank session appear in the terminal. At the bottom, in green, it should say something about '[0]'. Good! This refers to the default session, 0.
4. Now, you can run the command. It could be some command that does extensive tests on your program, that could take a few hours, or a forum rebuild (in Discourse's case). Simply run your command (`./launcher rebuild app` for Discourse) in the session!

## Detaching the session
1. Now, you'll need to detach the session so that it can run in the background. Press `CTRL`+`B`. If you don't see anything, don't worry. Now, press `D` on your keyboard. You should now see the terminal with you in root BEFORE entering the session.
2. Now that the session is detached and running, you can exit root with `exit` and logout with `logout`. Don't worry, the command you entered earlier is still running.

## Attaching the session
1. At any point in time when you want to check the progress of your command, SSH into your container, get into root, and run `tmux attach -t 0` to attach session 0. You should now see the session opened up, displaying whatever is being logged to the terminal. Yay 🎉! You did it! Now just detatch the session again and be on your way.
2. The session will be deleted once your command finishes. No need to stress about it staying there forever to the end of time [^1].

---

That's it! Now you know who to simultaneously run commands (have multiple sessions at the same time), and to run commands in the background. Good luck! <br>
For more information on `tmux`, see [this Red Hat guide](https://www.redhat.com/en/blog/introduction-tmux-linux)

---

[^1]: Or, more realistically, until you delete your server.
