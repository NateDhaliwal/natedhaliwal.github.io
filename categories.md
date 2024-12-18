---
layout: page
title: All categories
---

{% for category in site.categories %}
  {{ category[0] }}
  {{ category[1] }}
  <h3 id='{{ category }}'>{{ category }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
