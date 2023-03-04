<script setup>
import AboutVue from '../components/AboutVue.vue'
</script>

<template>
  <main>
    <section class="page page1">
      <div class="page-size-hero">
        <div class="title_with_vectors">
          <div class="vectors">
            <div class="slide-in-circ"></div>
            <div class="circle"></div>
            <div class="slide-in-right"></div>
          </div>
          <h1 class="scale" ref="scaleElement">CSS Animations</h1>
        </div>
        <div id="scroll-to-explore" class="fade-in"><p>Scroll to explore</p><span class="caracter">↓</span></div>
      </div>
    </section>
    <section id="history" class="page page2">
      <div class="page-size">
        <div class="layers layers-left"></div>
        <div class="layers layers-right"></div>
        <RouterLink to="/history"><img src="@/assets/img/histoire_img.png"></RouterLink>
        <div class="description">
          <h2 class="slide-in-d"><RouterLink to="/history">History</RouterLink></h2>
          <p class="subtitle">
            Look through the history of scroll animation and get a glimpse of this remarkable tool.
          </p>
        </div>
      </div>
    </section>
    <section id="tutorial" class="page page3">
      <div class="page-size">
        <div class="layers layers-left"></div>
        <div class="layers layers-right"></div>
        <RouterLink to="/tutorial"><img src="@/assets/img/tutorial_img.png"></RouterLink>
        <div class="description">
          <h2 class="rotate" ref="rotateElement"><RouterLink to="/tutorial">Small Tutorial</RouterLink></h2>
          <p class="subtitle">
            Add some animation effects to your creations, and design an even more impressive visual experience.
          </p>
        </div>
      </div>
    </section>
    <section id="examples" class="page page4">
      <div class="page-size">
        <div class="layers layers-left"></div>
        <div class="layers layers-right"></div>
        <RouterLink to="/examples"><img src="@/assets/img/examples_img.png"></RouterLink>
        <div class="description">
          <h2 class="slide-in-g"><RouterLink to="/examples">Great Examples</RouterLink></h2>
          <div class="subtitle">
            Go through a collection of beautiful horizontal scroll-based animation websites.
          </div>
        </div>
      </div>
    </section>
    <AboutVue />
  </main>
</template>

<script>

export default {
  mounted() {
    //Scale
    const observer5 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer5.unobserve(entry.target);
        }
      });
    });
    const slideIns5 = this.$el.querySelectorAll(".scale");
    slideIns5.forEach((slideIn) => {
      observer5.observe(slideIn);
    });

    //Rotate
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer4.unobserve(entry.target);
        }
      });
    });
    const slideIns4 = this.$el.querySelectorAll(".rotate");
    slideIns4.forEach((slideIn) => {
      observer4.observe(slideIn);
    });
    
    //Fade
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
      });
    });
    observer.observe(document.querySelector('.fade-in'));

    //Slide in droite
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer2.unobserve(entry.target);
        }
      });
    });

    const slideIns2 = document.querySelectorAll('.slide-in-d');
    slideIns2.forEach(slideIn => {
      observer2.observe(slideIn);
    });

    //Slide in gauche
    const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer3.unobserve(entry.target);
        }
      });
    });

    const slideIns3 = document.querySelectorAll('.slide-in-g');
    slideIns3.forEach(slideIn => {
      observer3.observe(slideIn);
    });
  },
};

</script>

<style scoped>

</style>