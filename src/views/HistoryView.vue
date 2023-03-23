<template>
  <section id="history" class="page page2">
    <div class="page-size-wf">
      <div class="grid-container">
        <div class="title">Small history of CSS animations</div>
        <div class="text">
          <p>
            The history of CSS animation dates back to the early days of the
            web. Initially used to add visual interest to static web pages,
            <strong
              >CSS animations have evolved into dynamic and interactive effects
              that respond to user interactions</strong
            >. Today, CSS animations are a fundamental part of modern web and
            mobile design, enhancing user engagement and elevating the overall
            user experience.
          </p>
          <p>
            Among the various types of CSS animations, there are many creative
            possibilities. From transforming and moving elements to color
            changes and more,
            <strong
              >CSS animation allows designers to create visually compelling
              effects that bring web pages to life</strong
            >.
          </p>
          <p>
            FedecaM employs CSS animation to provide visitors with an
            exceptional user experience.
            <strong
              >CSS animation is used to elevate the website's visual appeal,
              draw attention to important elements, and create a dynamic user
              experience</strong
            >
            that is both effective and memorable. By utilizing CSS animation,
            the website showcases unique and engaging effects that bring it to
            life and demonstrate the team's expertise in programming and design.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$root.imagenFondo = require("@/assets/img/histoire_img.png");
    });
  },
};
</script>
