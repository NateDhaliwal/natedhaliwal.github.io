---
layout: blog-base
title: All categories
---

# All categories

{% for category in site.categories %}
  {% if category[0] == "blog" %}
    {% continue %}
  {% endif %}
  
  <h3 id='{{ category[0] }}'><i class="fa-solid fa-folder-open"></i> {{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
