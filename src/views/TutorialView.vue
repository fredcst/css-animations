<template>
  <section id="tutorial" class="page page3">
    <div class="page-size-wf">
      <div class="grid-container">
        <div class="title">Small tutorial for CSS animation</div>
        <div class="intro">
          <p>
            CSS animation is a way to add movement and visual effects to
            elements on a web page using CSS code.
            <strong
              >With CSS animation, you can make an element fade in or out, move
              across the screen, change colors, or transform in other
              ways</strong
            >.
          </p>
          <p>
            By animating these elements, you can create a more engaging and
            interactive experience for website visitors. For example, you can
            use CSS animation to make a button change color when a user hovers
            over it, or to make an image slide in when a user scrolls down the
            page.
          </p>
          <p>
            Overall,
            <strong
              >CSS animation can be a powerful tool for web designers and
              developers</strong
            >
            to enhance the visual appeal and interactivity of their websites.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="tab">
          <div class="accordion-header">
            <h2 class="tab-title">Transform</h2>
            <div></div>
          </div>
          <hr />
          <div class="accordion-body">
            <div>
              <div>
                <h4>Rotate</h4>
                <p>
                  <b>Transform: rotate(deg)</b> is a CSS property that rotates
                  an element on a web page around its center point by a
                  specified number of degrees that can be positive or negative.
                </p>
              </div>
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Rotate"
                  src="https://codepen.io/fredcst/embed/QWVBrWJ?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/QWVBrWJ"> Rotate</a>
                  by Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </div>
            <div class="invert-order-flex">
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Transate"
                  src="https://codepen.io/fredcst/embed/JjaBvyE?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/JjaBvyE"> Transate</a>
                  by Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
              <div>
                <h4>Translate</h4>
                <p>
                  <b>"transform: translate(x, y)"</b> is a CSS property that
                  moves an element on a web page horizontally and/or vertically
                  from its original position by a specified number of pixels.<br /><br />
                  The "x" and "y" values specify how far to move the element in
                  each direction. For example, if you use "transform:
                  translate(50px, -20px)" on an element, it will move 50 pixels
                  to the right and 20 pixels up from its original position.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4>Scale</h4>
                <p>
                  <b>"transform: scale(factor)"</b> is a CSS property that
                  changes the size of an element on a web page by a specified
                  factor. <br /><br />
                  The "factor" value specifies how much to increase or decrease
                  the size of the element. For example, if you use "transform:
                  scale(2)" on an element, it will double in size, while if you
                  use "transform: scale(0.5)", it will shrink to half its
                  original size.
                </p>
              </div>
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Scale"
                  src="https://codepen.io/fredcst/embed/VwGBxMM?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/VwGBxMM"> Scale</a> by
                  Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="tab">
          <div class="accordion-header">
            <h2 class="tab-title">Transitions</h2>
            <div></div>
          </div>
          <hr />
          <div class="accordion-body">
            <div>
              <div>
                <h4>All and delay</h4>
                <p>
                  <b>"transition: all 1s 2s linear"</b> is a CSS property that
                  specifies how all of an element's properties should transition
                  from one state to another, with a duration of one second and a
                  constant rate of progress. <br /><br />
                  "All" is a keyword that tells the browser to transition all of
                  the element's properties, such as its size, color, position,
                  etc.
                  <br /><br />
                  "1s" is a value that specifies the duration of the transition
                  in seconds. In this case, the transition will last for one
                  second.
                  <br />
                  "2s" is a value that Delay starting the transition for 2s.
                  <br /><br />
                  "Linear" is a keyword that specifies the timing function of
                  the transition, meaning how the transition progresses over
                  time. In this case, it will progress at a constant rate.
                </p>
              </div>
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Untitled"
                  src="https://codepen.io/fredcst/embed/OJowZOB?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/OJowZOB"> Untitled</a>
                  by Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </div>
            <div class="invert-order-flex">
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Untitled"
                  src="https://codepen.io/fredcst/embed/MWqBGBw?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/MWqBGBw"> Untitled</a>
                  by Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
              <div>
                <h4>Background</h4>
                <p>
                  <b>"transition: background-color 1s linear"</b> is a CSS
                  property that specifies how the background color of an element
                  should transition from one state to another, with a duration
                  of one second and a constant rate of progress. <br /><br />
                  "Background-color" is a specific property that you want to
                  apply the transition to. In this case, it is the background
                  color of the element.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4>Easings</h4>
                <p>
                  There are different timing functions that can be used to
                  create a variety of animation effects other than “linear”.
                  <br /><br />
                  <b>"ease"</b> starts slowly, speeds up in the middle, and
                  slows down again at the end
                  <br />
                  <b>"ease-in"</b> starts the animation slowly and then speeds
                  up towards the end
                  <br />
                  <b>"ease-out"</b> starts the animation at a regular speed and
                  then slows down towards the end
                  <br />
                  <b>"ease-in-out"</b> starts the animation slowly, speeds up in
                  the middle, and then slows down again towards the end
                  <br />
                  <b>"steps()"</b> divides the animation into a specified number
                  of steps, and then animates the object by jumping from one
                  step to the next.
                </p>
              </div>
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Untitled"
                  src="https://codepen.io/fredcst/embed/oNPMdMo?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/oNPMdMo"> Untitled</a>
                  by Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="tab">
          <div class="accordion-header">
            <h2 class="tab-title">KeyFrames</h2>
            <div></div>
          </div>
          <hr />
          <div class="accordion-body">
            <div>
              <div>
                <h4>@keyframes</h4>
                <p>
                  <b>"@keyframes"</b> is a CSS rule that allows you to define a
                  sequence of animations that can be applied to an element. It
                  specifies the animation's start and end points, as well as any
                  intermediate steps that should be taken. <br /><br />
                  By using "@keyframes" along with CSS animations or
                  transitions, you can create complex and dynamic animations
                  that respond to user interaction or other events.
                  <br /><br />
                  <b>"@keyframes"</b> is just like a JS fonction that define css
                  rules for a specific animation, you can name it what ever you
                  want.
                </p>
              </div>
              <div class="example-ide">
                <iframe
                  height="300"
                  style="width: 100%"
                  scrolling="no"
                  title="Untitled"
                  src="https://codepen.io/fredcst/embed/MWqzmLy?default-tab=html%2Cresult"
                  frameborder="no"
                  loading="lazy"
                  allowtransparency="true"
                  allowfullscreen="true"
                >
                  See the Pen
                  <a href="https://codepen.io/fredcst/pen/MWqzmLy"> Untitled</a>
                  by Frederic Castro (<a href="https://codepen.io/fredcst"
                    >@fredcst</a
                  >) on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$root.imagenFondo = require("@/assets/img/tutorial_img.png");
    });
  },
  mounted() {
    const accordionTabs = document.querySelectorAll(".tab");
    // ScrollAnimate
    accordionTabs.forEach((element) => {
      element
        .querySelector(".accordion-header")
        .addEventListener("click", () => {
          element.querySelector(".accordion-header").classList.toggle("activ");
          element.querySelector(".accordion-body").classList.toggle("expanded");
        });
    });
  },
};
</script>
