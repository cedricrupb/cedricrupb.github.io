---
layout: default
title: News
permalink: /news/
---

# News & Announcements

Updates on my research, publications, and academic activities.

{% include visible-news.html %}

{% for item in visible_news %}
<div class="news-entry">
  {% include news-date.html item=item %}
  <div>
    <a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a>
    <p>{{ item.excerpt | strip_html | truncatewords: 35 }}</p>
  </div>
</div>
{% endfor %}
