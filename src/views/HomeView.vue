<script setup>
import AboutVue from "../components/AboutVue.vue";
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
          <h1 class="scale">CSS Animations</h1>
        </div>
        <div id="scroll-to-explore" class="fade-in">
          <p>Scroll to explore</p>
          <span class="caracter">↓</span>
        </div>
      </div>
    </section>
    <section id="history" class="page page2">
      <div class="page-size">
        <div class="layers layers-left bounce"></div>
        <div class="layers layers-right bounce-opp"></div>
        <RouterLink to="/history"
          ><img src="@/assets/img/histoire_img.png" class="fall-in"
        /></RouterLink>
        <div class="description">
          <h2 class="slide-in-d">
            <RouterLink to="/history">History</RouterLink>
          </h2>
          <p class="subtitle slide-in-g">
            Look through the history of scroll animation and get a glimpse of
            this remarkable tool.
          </p>
        </div>
      </div>
    </section>
    <section id="tutorial" class="page page3">
      <div class="page-size">
        <div class="layers layers-left bounce"></div>
        <div class="layers layers-right bounce-opp"></div>
        <RouterLink to="/tutorial"
          ><img src="@/assets/img/tutorial_img.png" class="fall-in"
        /></RouterLink>
        <div class="description">
          <h2 class="slide-in-g">
            <RouterLink to="/tutorial">Small Tutorial</RouterLink>
          </h2>
          <p class="subtitle slide-in-d">
            Add some animation effects to your creations, and design an even
            more impressive visual experience.
          </p>
        </div>
      </div>
    </section>
    <section id="examples" class="page page4">
      <div class="page-size">
        <div class="layers layers-left bounce"></div>
        <div class="layers layers-right bounce-opp"></div>
        <RouterLink to="/examples"
          ><img src="@/assets/img/examples_img.png" class="fall-in"
        /></RouterLink>
        <div class="description">
          <h2 class="slide-in-d">
            <RouterLink to="/examples">Great Examples</RouterLink>
          </h2>
          <div class="subtitle slide-in-g">
            Go through a collection of beautiful horizontal scroll-based
            animation websites.
          </div>
        </div>
      </div>
    </section>
    <AboutVue />
  </main>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$root.imagenFondo = "";
    });
  },
  mounted() {
    const classToAnimate = [
      "fall-in",
      "scale",
      "rotate",
      "fade-in",
      "slide-in-d",
      "slide-in-g",
    ];
    // ScrollAnimate
    classToAnimate.forEach((element) => {
      const boxes = document.querySelectorAll(`.${element}`);
      window.addEventListener("scroll", () => {
        for (let i = 0; i < boxes.length; i++) {
          const boxPosition = boxes[i].getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (boxPosition < windowHeight) {
            boxes[i].classList.add("visible");
            boxes[i].classList.add("animate");
          }
        }
      });
    });
  },
};
</script>

<style scoped></style>
