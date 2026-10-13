
---
layout: default
title: Home
---

<div class="profile">
  <img src="{{ '/CR.jpg' | relative_url }}" alt="Portrait of Cedric Richter" class="profile-photo">
  <div>
    <h1>Cedric Richter</h1>
    <p class="position">
      Walter Benjamin Fellow<br>
      Humboldt-Universität zu Berlin
    </p>
    <p class="research-tagline">
      Trustworthy Agentic Software Engineering<br>
      Software Verification · Machine Learning
    </p>
    <p class="profile-links">
      <a href="https://scholar.google.com/citations?user=5Yw10ycAAAAJ">Google Scholar</a> ·
      <a href="https://github.com/cedricrupb">GitHub</a> ·
      <a href="https://bsky.app/profile/cedrichter.bsky.social">Bluesky</a> ·
      <a href="{{ '/RichterCV.pdf' | relative_url }}">CV</a>
    </p>
  </div>
</div>

## About

I am a computer scientist and Walter Benjamin Fellow at
Humboldt-Universität zu Berlin. My research lies at the
intersection of software engineering, formal verification,
and machine learning.

My current research focuses on **trustworthy agentic software
engineering**. I investigate how LLM-based agents can use
software verification tools and hypotheses about intended
program behavior to detect and repair software bugs.

Previously, I was a postdoctoral researcher at the
Interdisciplinary Centre for Security, Reliability and Trust
(SnT), University of Luxembourg. I received my PhD in
computer science from the University of Oldenburg.

[More about my research]({{ '/research/' | relative_url }})

## Announcements

{% assign featured = site.news | where: "featured", true | sort: "date" | reverse %}
{% for item in featured limit: 2 %}
<div class="announcement">
  <span class="announcement-date">{{ item.date | date: "%B %Y" }}</span>
  <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
  {{ item.excerpt | markdownify }}
</div>
{% endfor %}

## Recent News

{% assign recent = site.news | sort: "date" | reverse %}
{% for item in recent limit: 5 %}
<div class="news-entry">
  <span class="news-date">{{ item.date | date: "%b %Y" }}</span>
  <span><a href="{{ item.url | relative_url }}">{{ item.title }}</a></span>
</div>
{% endfor %}

[All news]({{ '/news/' | relative_url }})
