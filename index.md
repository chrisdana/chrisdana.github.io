---
layout: default
title: "CD Github Hub"
---

<div class="container-lg">
  <div class="mt-5 row">
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0">
        <img class="img-small shadow p-1 mb-1 bg-body-tertiary rounded-circle" data-aos="fade-in" data-aos-duration="1000" src="{{ '/assets/images/headshot.jpg' | relative_url }}" alt="headshot" width="200" height="200" loading="eager" fetchpriority="high" decoding="async">
      </div>
      <div class="flex-grow-1 ms-3">
        <h1 class="fw-lighter">Welcome</h1>
        <p class="fs-6 fw-lighter">
          My name is Chris and I'm a software developer with experience spanning SDK development, firmware engineering, QA automation, and some DevOps thrown in there for good measure. This page outlines my experience as well as my professional and personal projects, so please have a look around.
        </p>
      </div>
    </div>
  </div>
  <!-- Section: Timeline -->
  <div class="mt-3 row justify-content-md-center">
    <div class="col-10">
      <section class="pt-4 pb-3">
        <ul class="timeline-with-icons">
          {% for item in site.data.timeline %}
          <li class="timeline-item mb-2" data-aos="flip-up" data-aos-delay="{{ forloop.index | times: 100 }}">
            <span class="timeline-icon">
              <i class="bi {{ item.icon }}"></i>
            </span>
            <h4 class="fw-lighter">{{ item.name }}</h4>
            <p class="fw-lighter">{{ item.desc }}</p>
          </li>
          {% endfor %}
        </ul>
      </section>
    </div>
  </div>
  <!-- Section: Nav Tabs -->
  <hr class="mt-5"/>
  <h2 class="fw-lighter mt-5 mb-3">Selected Professional Projects</h2>
  <div class="mt-1 row justify-content-md-center shadow p-1 mb-1 bg-body-tertiary rounded">
    <div class="col-11">
      <nav>
        <div class="nav nav-underline nav-fill" id="nav-tab" role="tablist">
          {% for item in site.data.proprojects %}
          <button class="nav-link text-muted fs-3 fw-lighter {% if forloop.first %} active {% endif %}" 
          id="nav-{{ forloop.index0 }}-tab" 
          data-bs-toggle="tab" 
          data-bs-target="#nav-{{ forloop.index0 }}" 
          type="button" 
          role="tab" 
          aria-controls="nav-{{ forloop.index0 }}" 
          aria-selected="true">{{ item.name }}
          </button>
          {% endfor %}
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        {% for item in site.data.proprojects %}
        <div class="tab-pane fade show mt-4 mb-3 {% if forloop.first %} active {% endif %}" 
             id="nav-{{ forloop.index0 }}" 
             role="tabpanel" 
             aria-labelledby="nav-{{ forloop.index0 }}-tab" 
             tabindex="0">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 ">
              <img class="rounded-6 img-small" src="{{ item.img | relative_url }}" alt="{{ item.name }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
            </div>
            <div class="flex-grow-1 mx-5">
              <h6 class="fw-lighter lh-base">{{ item.desc }}</h6>
              <br>
              <p class="project-uses">Categories: {{ item.categories }}</p>
              <p class="project-uses">Used: {{ item.uses }}</p>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
  <!-- Section: Personal Projects -->
  <hr class="mt-5"/>
  <div class="mt-5 row">
    <h2 class="fw-lighter">Just for Fun</h2>
    <p class="fw-lighter">Personal projects to explore programming languages, platforms, technologies, etc. </p>
  </div>
  {% for item in site.data.projects %}
  <div class="mt-3 row shadow p-1 mb-1 bg-body-tertiary rounded" data-aos="fade-in">
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0">
        {% if item.gallery %}
        <div id="project-{{ forloop.index0 }}-carousel" class="project-gallery carousel slide carousel-fade" data-bs-ride="false">
          <div class="carousel-inner">
            {% for image in item.gallery %}
            <div class="carousel-item {% if forloop.first %}active{% endif %}">
              <img
                class="d-block img-project-shot rounded-6 p-3"
                src="{{ image.src | relative_url }}"
                alt="{{ item.name }} screenshot {{ forloop.index }}"
                width="{{ image.width }}"
                height="{{ image.height }}"
                loading="lazy"
                decoding="async">
            </div>
            {% endfor %}
          </div>
          {% if item.gallery.size > 1 %}
          <button class="carousel-control-prev project-carousel-control" type="button" data-bs-target="#project-{{ forloop.index0 }}-carousel" data-bs-slide="prev" aria-label="Previous screenshot">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next project-carousel-control" type="button" data-bs-target="#project-{{ forloop.index0 }}-carousel" data-bs-slide="next" aria-label="Next screenshot">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
          {% endif %}
        </div>
        {% else %}
        <img class="rounded-6 img-small p-3" src="{{ item.img | relative_url }}" alt="{{ item.name }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
        {% endif %}
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
