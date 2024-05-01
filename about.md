---
layout: default
title: About
---

<div class="container-lg">
  <div class="mt-5 row">
    <h1 class="fw-light">About</h1>
  </div>
  <div class="mt-1 row">
    <div class="d-flex align-items-top">
      <div class="flex-shrink-0">
        <img class="img-small shadow p-1 mb-1 bg-body-tertiary rounded-end-circle" src="{{site.baseurl}}/assets/images/sutro.jpg" alt="Sutro Tower">
      </div>
      <div class="flex-grow-1 mx-5">
        <div class="col w-75">
          <h3 class="fw-lighter">I'm a software developer based in beautiful San Francisco, California.</h3>
        </div>
        <br>
        <h6 class="fw-light lh-base">
          Originally from the SF Bay Area, I have lived in several cities up and down the Golden State, but for the last decade-plus my home has been the City by the bay. When I'm not knee-deep in the hoopla, you'll find me cooking, listening to music, or doing something sporty.
        </h6>
      </div>
    </div>
  </div>
  <div class="d-flex flex-row-reverse mt-3">
    <div class="flex-shrink-0">
      <img class="img-small shadow p-1 mb-1 bg-body-tertiary rounded-start-pill" src="{{site.baseurl}}/assets/images/cat.jpg" alt="Super-cute cat">
    </div>
    <div class="flex-grow-1 mx-5 text-end">
      <h3 class="fw-lighter">I've always been an animal lover.</h3>
      <br>
      <h6 class="fw-light lh-base">
        Unfortunately, I've only somewhat recently found myself in a living situation that would allow me to share my space with an animal friend.  I got Allie Katt in 2022 and she has been a faithful sidekick ever since. Mostly she supports me by napping and letting me know when it's time to take a break to play with her or feed her. 
      </h6>
    </div>
  </div>
  <div class="d-flex flex-row mt-3">
    <div class="flex-shrink-0">
      <img class="img-small shadow p-1 mb-1 bg-body-tertiary rounded-end-circle" src="{{site.baseurl}}/assets/images/surfing.jpg" alt="Sutro Tower">
    </div>
    <div class="flex-grow-1 mx-5">
      <h3 class="fw-lighter">Out and About</h3>
      <h6 class="fw-light lh-base">
        While I enjoy getting immersed in a coding project, there are also many outdoor activities that I enjoy. Levels of interest (and injuries) wax and wane, but any given day I may be surfing, weightlifting, playing tennis, volleyball, or ultimate frisbee
      </h6>
      </div>
      <!-- </div> -->
    </div>
    <hr class="mt-5"/>
    <div class="mt-5 row">
      <h1 class="fw-light">Just for fun</h1>
      <p class="fw-light">Other cute little projects, just to learn some technologies and be creative in other ways.</p>
    </div>
    {% for item in site.data.projects %}
    <div class="mt-3 row shadow p-1 mb-1 bg-body-tertiary rounded">
      <div class="d-flex align-items-center">
        <div class="flex-shrink-0">
          <img class="rounded-6 img-small p-3 " src="{{ item.img }}" alt="{{ item.name }}">
        </div>
        <div class="flex-grow-1 ms-3">
          <h3>{{ item.name }}</h3>
          <p class="fw-lighter">{{ item.desc }}</p>
          <p class="project-uses">Uses: {{ item.uses }}</p>
          {% if item.link == "#" %}
          <p class="project-link">Not Available</p>
          {% else %}
          <a class="link-primary project-link" href="{{ item.link }}">Link</a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>