<template>
  <section id="example" class="page page4">
    <div class="page-size-wf">
      <div class="grid-container">
        <div class="title">Great examples: CSS animation</div>
        <div class="intro">
          <p>
            Explore the unique ways in which designers are using
            <strong>CSS animation to enhance user experience</strong> and create
            visually striking designs on websites.
          </p>
          <p>
            These websites use CSS animation to elegantly display dynamic visual
            effects, such as fading or sliding transitions, between different
            sections or elements on the page. Navigation is enhanced through the
            use of CSS animation to reveal related content, saving space and
            providing a more engaging experience.
          </p>
        </div>
      </div>
      <div class="grid-container">
        <div>
          <h2>Zipeng Zhu</h2>
          <p class="text">
            This website uses CSS animation to apply different types of
            transformations to elements. This allows for the creation of dynamic
            visual effects.
          </p>
          <a href="http://zz-is.it/" target="_blank"
            >Go to Zipeng Zhu website →
          </a>
        </div>
        <div>
          <a href="hhttp://zz-is.it/" target="_blank"
            ><img
              src="@/assets/img/img1-exemplespage.png"
              alt="First Fresh webpage"
          /></a>
        </div>
      </div>
      <div class="grid-container">
        <div class="invert-order">
          <h2>Zorro Design</h2>
          <p class="text">
            This website uses CSS animation to create a parallax scrolling
            effect, with the background moving at a different speed than the
            foreground.
          </p>
          <a href="https://www.zorro.design/" target="_blank"
            >Go to the Zorro Design website →
          </a>
        </div>
        <div>
          <a href="https://www.zorro.design/" target="_blank"
            ><img
              src="@/assets/img/img2-exemplespage.png"
              alt="First Fresh webpage"
          /></a>
        </div>
      </div>
      <div class="grid-container">
        <div>
          <h2>NFT Artwork</h2>
          <p class="text">
            This last website use CSS animation to gradually change the color of
            an element over time and create visually interesting effects.
          </p>
          <a href="https://introspectabilia.illo.tv/" target="_blank"
            >Go to the NFT Artwork website →
          </a>
        </div>
        <div>
          <a href="https://introspectabilia.illo.tv/" target="_blank"
            ><img
              src="@/assets/img/img3-exemplespage.png"
              alt="First Fresh webpage"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$root.imagenFondo = require("@/assets/img/examples_img.png");
    });
  },
};
</script>
