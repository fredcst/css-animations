<template>
    <section id="tutorial" class="page page3">
        <div class="page-size-wf">
            <div class="grid-container">
              <div class="title">Small tutorial for scroll animation</div>
              <div class="intro"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at distinctio facilis! Eveniet accusamus quae doloribus, facilis temporibus aut ex a odio tempore non alias illo modi eos, quibusdam molestias.</div>
            </div>
            <div class="grid-container">
              <div>
                <h2>Subtitle</h2>
                <p class="text">explaination</p>
              </div>
              <div>
                image of the code
              </div>
            </div>
            <div class="grid-container">
              <div class="invert-order">
                <h2>Subtitle</h2>
                <p class="text"> explaination</p>
              </div>
              <div>
                image of the code  
              </div>
            </div>
            <div class="grid-container">
              <div>
                <h2>subtitle</h2>
                <p class="text">explaination</p>
              </div>
              <div>
                image of the code
              </div>
            </div>
            <div class="grid-container">
              <div class="invert-order">
                <h2>Subtitle</h2>
                <p class="text"> explaination</p>
              </div>
              <div>
                image of the code  
              </div>
            </div>
            <div class="grid-container">
              <div>
                <h2>subtitle</h2>
                <p class="text">explaination</p>
              </div>
              <div>
                image of the code
              </div>
            </div>
            <div class="grid-container">
              <div class="invert-order">
                <h2>Subtitle</h2>
                <p class="text"> explaination</p>
              </div>
              <div>
                image of the code  
              </div>
            </div>
          </div>
        </section>
  </template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$root.imagenFondo = require("@/assets/img/tutorial_img.png")
    });
  },
};
</script>