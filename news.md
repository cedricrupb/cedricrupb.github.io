---
layout: default
title: News
permalink: /news/
---

# News & Announcements

Updates on my research, publications, and academic activities.

{% assign sorted_news = site.news | sort: "date" | reverse %}

{% for item in sorted_news %}
<div class="news-entry">
  <span class="news-date">{{ item.date | date: "%b %Y" }}</span>
  <div>
    <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
    <p>{{ item.excerpt | strip_html | truncatewords: 35 }}</p>
  </div>
</div>
{% endfor %}
