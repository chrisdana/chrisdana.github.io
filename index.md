---
layout: default
title: "CD Github Hub"
---

<div class="container-lg">
  <div class="mt-5 row">
    <div class="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
      <div class="flex-shrink-0">
        <img class="img-small shadow p-1 mb-1 bg-body-tertiary rounded-circle" data-aos="fade-in" data-aos-duration="1000" src="{{ '/assets/images/about/headshot.jpg' | relative_url }}" alt="headshot" width="200" height="200" loading="eager" fetchpriority="high" decoding="async">
      </div>
      <div class="flex-grow-1 ms-md-3 mt-3 mt-md-0">
        <h1 class="fw-lighter">Welcome</h1>
        <p class="fs-6 fw-lighter">
          My name is Chris and I'm a software developer with experience spanning SDK development, firmware engineering, QA automation, and some DevOps thrown in there for good measure. This page outlines my experience as well as my professional and personal projects, so please have a look around.
        </p>
      </div>
    </div>
  </div>
  <!-- Section: Timeline -->
  <div class="mt-3 row justify-content-md-center">
    <div class="col-12 col-md-10">
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
  <h2 class="fw-lighter mt-5 mb-3">Professional Projects</h2>
  <div id="proproject-mobile-selector" class="proproject-mobile-selector d-md-none mt-1 shadow p-2 mb-1 bg-body-tertiary rounded">
    <div class="proproject-mobile-controls d-flex align-items-center justify-content-between">
      <button class="proproject-selector-control" type="button" data-proproject-selector-prev aria-label="Previous project">
        <i class="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <div class="proproject-mobile-indicators" aria-label="Professional project selector">
        {% for item in site.data.proprojects %}
        <button type="button" data-proproject-selector-index="{{ forloop.index0 }}" class="{% if forloop.first %}active{% endif %}" {% if forloop.first %}aria-current="true"{% endif %} aria-label="{{ item.name }}"></button>
        {% endfor %}
      </div>
      <button class="proproject-selector-control" type="button" data-proproject-selector-next aria-label="Next project">
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
    <div class="proproject-mobile-panels">
      {% for item in site.data.proprojects %}
      <div class="proproject-mobile-panel" data-proproject-panel {% unless forloop.first %}hidden{% endunless %}>
        <div class="proproject-mobile-content d-flex flex-column align-items-center text-center pt-2">
          <h3 class="proproject-mobile-title fw-lighter">{{ item.name }}</h3>
          <div class="flex-shrink-0">
            {% if item.gallery %}
            <div class="project-mobile-shot-strip" aria-label="{{ item.name }} screenshots">
              {% for image in item.gallery %}
              <img
                class="project-mobile-shot rounded-6"
                src="{{ image.src | relative_url }}"
                alt="{{ item.name }} screenshot {{ forloop.index }}"
                width="{{ image.width }}"
                height="{{ image.height }}"
                loading="lazy"
                decoding="async">
              {% endfor %}
            </div>
            {% else %}
            <img class="rounded-6 img-small" src="{{ item.img | relative_url }}" alt="{{ item.name }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
            {% endif %}
          </div>
          <div class="flex-grow-1 mt-3">
            <p class="fw-lighter">{{ item.desc }}</p>
            <p class="project-uses">Categories: {{ item.categories }}</p>
            <p class="project-uses">Used: {{ item.uses }}</p>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
  <div class="mt-1 row justify-content-md-center shadow p-2 p-md-1 mb-1 bg-body-tertiary rounded d-none d-md-flex">
    <div class="col-12 col-md-11">
      <nav>
        <div class="nav nav-underline nav-fill" id="nav-tab" role="tablist">
          {% for item in site.data.proprojects %}
          <button class="nav-link text-muted fw-lighter {% if forloop.first %} active {% endif %}" 
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
          <div class="d-flex flex-column flex-md-row align-items-center text-center text-md-start">
            <div class="flex-shrink-0">
              {% if item.gallery %}
              <div id="proproject-{{ forloop.index0 }}-carousel" class="project-gallery proproject-gallery carousel slide carousel-fade" data-bs-ride="false">
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
                <button class="carousel-control-prev project-carousel-control" type="button" data-bs-target="#proproject-{{ forloop.index0 }}-carousel" data-bs-slide="prev" aria-label="Previous screenshot">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next project-carousel-control" type="button" data-bs-target="#proproject-{{ forloop.index0 }}-carousel" data-bs-slide="next" aria-label="Next screenshot">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
                {% endif %}
              </div>
              {% else %}
              <img class="rounded-6 img-small" src="{{ item.img | relative_url }}" alt="{{ item.name }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
              {% endif %}
            </div>
            <div class="flex-grow-1 mx-0 mx-md-5 mt-3 mt-md-0">
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
  <div class="mt-3 row shadow p-2 p-md-1 mb-1 bg-body-tertiary rounded" data-aos="fade-in">
    <button class="fun-project-toggle d-flex d-md-none align-items-center justify-content-between w-100" type="button" data-bs-toggle="collapse" data-bs-target="#fun-project-{{ forloop.index0 }}" aria-expanded="false" aria-controls="fun-project-{{ forloop.index0 }}">
      <span>{{ item.name }}</span>
      <i class="bi bi-chevron-down" aria-hidden="true"></i>
    </button>
    <div id="fun-project-{{ forloop.index0 }}" class="collapse d-md-none">
      <div class="fun-project-mobile-content d-flex flex-column align-items-center text-center pt-3">
        <div class="flex-shrink-0">
          {% if item.gallery %}
          <div class="project-mobile-shot-strip" aria-label="{{ item.name }} screenshots">
            {% for image in item.gallery %}
            <img
              class="project-mobile-shot rounded-6"
              src="{{ image.src | relative_url }}"
              alt="{{ item.name }} screenshot {{ forloop.index }}"
              width="{{ image.width }}"
              height="{{ image.height }}"
              loading="lazy"
              decoding="async">
            {% endfor %}
          </div>
          {% else %}
          <img class="rounded-6 img-small p-3" src="{{ item.img | relative_url }}" alt="{{ item.name }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
          {% endif %}
        </div>
        <div class="flex-grow-1 mt-3">
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
    <div class="d-none d-md-flex flex-md-row align-items-center text-md-start">
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
      <div class="flex-grow-1 ms-md-3 mt-3 mt-md-0">
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
