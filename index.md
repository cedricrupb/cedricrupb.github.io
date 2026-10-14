---
layout: default
title: Home
---

# About

{% include visible-news.html %}
{% assign featured = visible_news | where: "featured", true %}
{% if featured.size > 0 %}
<section class="featured-announcements" aria-label="Featured announcements">
{% for item in featured limit: 2 %}
<article class="announcement">
  <p class="announcement-label">Featured initiative · {% include news-date.html item=item class="announcement-date" %}</p>
  <h2><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2>
  {{ item.excerpt | markdownify }}
  {% if item.initiative_url %}<p><a href="{{ item.initiative_url | escape }}">{{ item.initiative_link_text | default: 'Learn more' | escape }} →</a></p>{% endif %}
</article>
{% endfor %}
</section>
{% endif %}

I am a computer scientist and postdoctoral researcher (DFG Walter Benjamin Programme) at
Humboldt-Universität zu Berlin. My research focuses on
**AI-assisted software verification and debugging**, building
on my background in software engineering, software verification,
and machine learning.

Previously, I was a postdoctoral researcher at the
Interdisciplinary Centre for Security, Reliability and Trust
(SnT), University of Luxembourg, working with Mike Papadakis.
I received my PhD in computer science from the University of Oldenburg.

[More about my research]({{ '/research/' | relative_url }})

## Recent News

{% assign recent = visible_news %}
{% for item in recent limit: 5 %}
<div class="news-entry">
  <a class="news-permalink" href="{{ item.url | relative_url }}" aria-label="{{ item.title | escape }}">{% include news-date.html item=item %}</a>
  <div>
    {% if item.featured %}
    <a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a>
    {% else %}
    {{ item.excerpt | markdownify }}
    {% endif %}
  </div>
</div>
{% endfor %}

[All news and announcements]({{ '/news/' | relative_url }})
