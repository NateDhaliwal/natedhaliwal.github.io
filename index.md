---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
---

# Who am I?

I am @NateDhaliwal on Replit and Replit Ask (when it was still around), as well as @natme6677 on Scratch.
<br><br>
I code with Python, HTML, CSS and JS!

# My projects
1. [natedhaliwal - My Python PyPi package](https://pypi.org/project/natedhaliwal/)

# Some facts about me!
  - I only started Python and HTML in 2023, but I'm a fast learner and I completed Replit's [100 Days Of Code](https://replit.com/learn/100-days-of-python/hub?utm_source:widget) course!
  
  - I was an active member of Replit Ask (Replit's support forum), and I was a Jr. Mod (Trust Level 4) on that forum, before it got shut down.

  - I am a huge [Discourse](https://discourse.org) fan. I stumbled upon the Replit Ask, which was powered by Discourse, which then led me to be active on [Discourse Meta](https://meta.discourse.org) after Replit Ask shut down.

---

## Recent Posts
{%- if site.posts.size > 0 -%}
    <ul class="post-list">
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {%- for post in site.posts limit:3 -%}
      <li>
        <span class="post-meta">Posted on {{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        In 
        <a class='category-link' href="{{ '/categories' | absolute_url }}#{{ post.category }}">
          {{ post.category }}
        </a>
        {% if post.tags.size > 0 %}
          • Tags:
          {% for tag in post.tags %}
            <a class='tag-link' href="{{ '/tags' | absolute_url }}#{{ tag }}">
              {{ tag }}
            </a>
              {%- if forloop.last == false %}, {% endif -%}
          {% endfor %}
        {% endif %}
        • {{ post.content | number_of_words | divided_by: 180 }} min read
        <br>
        {%- if site.show_excerpts -%}
          {{ post.excerpt | strip_html | truncatewords: 50 }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>
{%- endif -%}
