---
title: "Creating a Discourse Theme Component: Part 1"
layout: post
author: NateDhaliwal
category: discourse
tags: [discourse, coding & programming, tutorial]
readtime: true
---

## Introduction
Well! This begins the start of a multi-part tutorial to create [Discourse](https://discourse.org) Theme Components. Why? I realised that although the [Discourse documentation](https://meta.discourse.org/c/documentation/developer-guides/56) contains *lots* of helpful guides, there's still a lot left that isn't written down, except in the Discourse codebase or in other TCs made.

## What you need
1. Github/any VCS that supports Git (e.g. GitLab)
2. You own development environment **OR** [Discourse Theme Creator (slightly unstable)](https://discourse.theme-creator.io)
3. JavaScript and HTML knowledge (a little is fine)
4. (RECOMMENDED) A [Discourse Meta](https://meta.discourse.org) account

## Things to note
1. I will use the abbreviation 'TC' or 'TCs' to refer to 'Theme Component' and 'Theme Components' respectively.
2. If you are facing any trouble following the tutorial, please post in the comments section and I'll try and reply ASAP.
3. I am not a professional or a Discourse staff. I'll try to be accurate, but may not be 100% correct all the time. I will, however, link relevant files in the Discourse codebase or documentation where possible.
4. All code will be run and tested on the `tests-passed` Discourse branch, not `stable`. See [this topic](https://meta.discourse.org/t/configure-a-supported-tracking-branch-to-get-discourse-software-updates/17014) for more details on `tests-passed` vs `stable`. Due to more frequent updates, this guide may not be always accurate, but I will try my best to ensure compatibility.

## Discourse: A quick overview
This tutorial assumes you know what Discourse is and have used it. If you don't, I breifly explain it now. Discourse is an open-source forum software built on [Ruby on Rails](https://rubyonrails.org) and [Ember.js](https://emberjs.com). 
