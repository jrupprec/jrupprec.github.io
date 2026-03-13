---
layout: page
permalink: /teaching/
title: teaching
description: Overview of courses I teach at the University of Mannheim.
nav: true
nav_order: 3
semesters: ["Spring 2026", "Autumn 2025"]
---

<div class="teaching">

<h2 class="mt-4">Master Thesis Supervisions</h2>
<div class="thesis-list">
  <ul>
    <li>
      <strong>Evaluating the Impact of Prompting Strategies on Representative Persona Generation with Large Language Models</strong><br>
      <em>Discipline: Mannheim Master in Management</em>
    </li>
  </ul>
</div>

<h2 class="mt-4">Courses</h2>
{% for semester in page.semesters %}
  {% assign semester_courses = site.courses | where: "semester", semester | sort: "importance" %}
  {% if semester_courses.size > 0 %}
  <h2 class="mt-4">{{ semester }}</h2>
  <div class="row row-cols-1 row-cols-md-3">
    {% for course in semester_courses %}
      {% include courses.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endfor %}
</div>
