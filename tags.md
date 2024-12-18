---
layout: page
title: All tags
---

{% for tag in site.tags %}
  <h3 id='{{ tag[0] }}'>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url | absolute_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
