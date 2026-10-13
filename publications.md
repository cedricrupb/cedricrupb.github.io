---
layout: default
title: Publications
permalink: /publications/
---

# Publications

My work spans software verification, neural bug detection, and AI-assisted
software engineering. See my [research overview]({{ '/research/' | relative_url }})
for an introduction to these topics.

[Google Scholar](https://scholar.google.com/citations?user=5Yw10ycAAAAJ) ·
[DBLP](https://dblp.org/pid/238/3001)

## Conference, Workshop, and Journal Publications

{% assign published = site.data.publications | where: 'status', 'published' %}
{% assign years = published | group_by: 'year' | sort: 'name' | reverse %}
<nav class="publication-years" aria-label="Publication years">
{% for year in years %}<a href="#publications-{{ year.name }}">{{ year.name }}</a>{% endfor %}
<a href="#preprints">Preprints</a>
<a href="#thesis">Thesis</a>
</nav>

{% for year in years %}
<h2 id="publications-{{ year.name }}">{{ year.name }}</h2>
<ul class="publication-list">
{% for paper in year.items %}{% include publication.html paper=paper %}{% endfor %}
</ul>
{% endfor %}

<h2 id="preprints">Preprints</h2>

These manuscripts are available on arXiv; they are listed separately from
conference and journal publications. 

{% assign preprints = site.data.publications | where: 'status', 'preprint' %}
{% assign preprint_years = preprints | group_by: 'year' | sort: 'name' | reverse %}
{% for year in preprint_years %}
<h3>{{ year.name }}</h3>
<ul class="publication-list">
{% for paper in year.items %}{% include publication.html paper=paper %}{% endfor %}
</ul>
{% endfor %}

<h2 id="thesis">Doctoral Thesis</h2>

{% assign theses = site.data.publications | where: 'status', 'thesis' %}
<ul class="publication-list">
{% for paper in theses %}{% include publication.html paper=paper %}{% endfor %}
</ul>
