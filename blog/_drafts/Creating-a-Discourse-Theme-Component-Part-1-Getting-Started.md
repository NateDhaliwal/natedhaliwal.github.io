---
title: "Creating a Discourse Theme Component: Part 1 - Getting Started"
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
This tutorial assumes you know what Discourse is and have used it. If you don't, I breifly explain it now. Discourse is an open-source forum software built on [Ruby on Rails](https://rubyonrails.org) and [Ember.js](https://emberjs.com). It's one of (if not the most) popular and common forum softwares out there. The OpenAI, Google AI for Developers and Unity forums all run on Discourse.

## Actually starting
Okay, enough chatter. Let's actually begin. 

In this multipart-tutorial, we'll be recreating my [Featured User](https://meta.discourse.org/t/discourse-featured-user/382304) TC, which shows a banner to display a user's stats along with text. Final product:

<img width="1035" height="340" alt="39d3a700d4ec0cdc5f4177018795d06becda5987_2_1035x340" src="https://github.com/user-attachments/assets/6c9fbab9-b40a-46cc-9639-2d4e68d61fcd" />

To create a component, it's good to start with a boilerplate (i.e. template) of a TC, with all the configuration files, directories and relevant files. Thankfully, Discourse has that: the [Discourse Theme Skeleton](https://github.com/discourse/discourse-theme-skeleton) for TCs and the [Discourse Plugin Skeleton](https://github.com/discourse/discourse-plugin-skeleton). Go and pick the Theme one, not the Plugin (we're not doing that here) one. There, you should see this:

<img width="1896" height="266" alt="image" src="https://github.com/user-attachments/assets/75b0910b-8188-43cc-98f3-83a9ab81535e" />

Go on and click the green <kbd>Use this template</kbd> button, and create the repo!

## File structure
Here's the important list of directories and files in a TC. The organisation and file structure are important - Discourse looks in specific directories for certain files.
- `common/`: SCSS and HTML files that would appear for both desktop and mobile devices.
- `mobile/`/`desktop/`: SCSS and HTML files that would appear for the corresponding device categories.
- `javascripts/`: Where all the logic will go. Files are typically placed in the `discourse/` subdirectory in here.
- `locales/`: The place for storing all the translations you'll use, like setting descriptions and theme text, as well as the theme description.
- `scss/`: Optional; this is where SCSS code will be placed, then imported into the relevant file in `common/`, `mobile/` or `desktop/`. Not all themes/TCs have this, but it's good practice.
- `assets/`: If you have any assets like pictures that come with the TC, they go in here.
- `about.json`: Compulsory; the file containing the metadata for your TC, like the version number, the author and the About/License URLs.
- `settings.yml`: If you have any settings for your admins to be able to configure your TC, they go in here. We'll have quite a lot of settings in our TC.
- `.discourse-compatibility`: Optional; if Discourse core introduces new updates available on certain branches, you can specify commit hashes here to prevent older sites from breaking.
- Other files: You may see some things like `package.json` or `eslint.config.mjs`, but those aren't compulsory and they mostly help with the Github CI Workflows to test your TC.

Phew! That's quite a lot! Don't worry, we'll explain what each of those do when we get to them. For now, just keep these in mind and make sure you don't misspell any names! It can prevent a number of headaches later on.

## Conclusion
Unfortunately, all good things must come to an end. We've come to the end of this tutorial, where you created the boilerplate for your TC and got to know the basic structure of it. Read the next part of the tutorial [here]()!
