---
title: "Creating a Discourse Theme Component: Part 2 - Settings and Locales"
layout: post
author: NateDhaliwal
category: discourse
tags: [discourse, coding & programming, tutorial]
readtime: true
---

## Introduction
Hello again! In this part, we're going to create all the settings we'll need for our TC, as well as the relevant localizations for the setting descriptions and others. WHat are you waiting for? Read on!

## Setting format
Open up your `settings.yml` file. If you don't already know, YML/YAML (they're the same) is a "language" to write configuration files. If you're familiar with Discourse, you'll notice that your `app.yml` file (the one with your SMTP data, plugin URLs, etc) is also in YML!

Now, let's get familiar with the format of a setting:
```yml
setting_name:
  default: default_option
  type: setting_type
```
Yes, that's basically it. You can name your setting `setting_name` anything. Below that, we'll have to define the default option (optional, but recommended) to something that we want to be the default (duh!). Admins can still change this value. Below that, we define the type of the value of the setting. You can choose from `string`, `integer`, `bool` (checkbox), `list` (multiple selection), `enum` (dropdown; 1 selection), and others.

Of course, it doesn't stop there. You can add the `textarea: true` to render a string input as a textarea for bigger, multiline strings. Additionally, if you're using numbers, you can specify `min` and `max` attributes.

For a comprehensive list of the different attributes you can use, see Arkshine's [post](https://meta.discourse.org/t/developing-discourse-plugins-part-3-add-custom-site-settings/31115/46?u=natedhaliwal). Make sure to loo in the 'TC Syntax' column and not the 'Plugin Syntax' one!

## Creating the settings
Okay, let's start by deleting the `example_setting` inside your `settings.yml` file. Then, go ahead and add this setting:
```yml
featured_user:
  default: ""
  type: string
```
This will contain the username for the user to be featured.

Then, add this whole thing. Don't worry, I explain them.
```yml
featured_user_banner_text_above:
  default: ""
  type: string
  textarea: true

featured_user_banner_text_below:
  default: ""
  type: string
  textarea: true

featured_user_banner_text_align:
  default: center
  type: enum
  choices:
    - right
    - left

auto_resize_banner:
  default: false
  type: bool

featured_user_banner_display_start_date:
  default: "1900-01-01"
  type: string

featured_user_banner_display_end_date:
  default: "2100-01-01"
  type: string

featured_user_banner_display_on_homepage:
  default: true
  type: bool

featured_user_banner_border_color:
  default: "var(--primary)"
  type: string
  
featured_user_banner_border_thickness:
  default: 3
  type: integer
  min: 1

featured_user_banner_border_roundness:
  default: 10
  type: integer
  min: 1

featured_user_show_featured_icon_in_user_card:
  default: true
  type: bool

featured_user_featured_icon_in_user_card:
  default: "award"
  type: string

featured_user_featured_icon_color_on_user_card:
  default: "var(--gold)"
  type: string

display_total_likes_given:
  default: true
  type: bool

display_total_likes_received:
  default: true
  type: bool

display_total_post_count:
  default: false
  type: bool

display_total_topic_count:
  default: false
  type: bool

display_total_read_time:
  default: false
  type: bool

display_total_days_visited:
  default: false
  type: bool

display_gamification_score:
  default: false
  type: bool
```

Alright! Let's break this down!

In `featured_user_banner_text_above` and `featured_user_banner_text_below`, we have a textarea input for the banner text. `featured_user_banner_text_align` then has options as a dropdown for the text align (we'll put this into action later on with CSS). `auto_resize_banner` is a checkbox (boolean) that gives the option to resize the size of the banner based on the number of elements. I made this `false` (off) by default since it may look weird with a banner not taking up the full page width. The next 2 settings, `featured_user_banner_display_start_date` and `featured_user_banner_display_end_date` are for the admins to set how long the banner should display. Note that this has no effect on the banner just yet. We'll need to use JavaScript to add the logic behind these settings.

