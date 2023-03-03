<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
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
        <div id="scroll-to-explore" class="fade-in"><p>Scroll to explore</p><span class="caracter">↓</span></div>
      </div>
    </section>
    <section id="history" class="page page2">
      <div class="page-size">
        <div class="layers layers-left"></div>
        <div class="layers layers-right"></div>
        <img src="@/assets/img/histoire_img.png">
        <div class="description">
          <h2><RouterLink to="/history">History</RouterLink></h2>
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
        <img src="@/assets/img/tutorial_img.png">
        <div class="description">
          <h2><RouterLink to="/tutorial">Small Tutorial</RouterLink></h2>
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
        <img src="@/assets/img/examples_img.png">
        <div class="description">
          <h2><RouterLink to="/examples">Great Examples</RouterLink></h2>
          <div class="subtitle">
            Go through a collection of beautiful horizontal scroll-based animation websites.
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="page page5">
        <div class="about-page">
          <div class="about-text">
            <h2>About FedecaM<span class="copyright">©</span></h2> 
            <p>FedecaM is a tutorial website created by students for students. Our goal is to provide an easy-to-follow tutorial on the topic of scroll animation. Whether you're a beginner looking to learn the basics of scroll animation or an experienced learner seeking for inspiration, this website is tailored for you.</p>
            <p>FedecaM was largely inspired to follow the trend of Ultimate Simplification. Minimalistic, sleek, and presenting a tiny amount of text content. The idea behind ultra-minimalism is to create a sense of luxury, whilst focusing the user’s attention on what is truly required.</p>
            <p>Why Horizontal scrolling? Vertical scrolling is the navigational norm, and the user can be quite easily bored scrolling down an ultra-minimalistic website. FedecaM believes that breaking the norms to bring new to the user is a way to keep our users interested.</p>
            <p>This tutorial for horizontal scroll animation is designed to be easy to follow while still providing a lot of value. Walk through each step of the process and create more advanced transitions.</p>
          </div>
          <div class="about-misc">
            <div class="about-misc-links">
              <h3>Links to Get Inspired</h3>
              <div><p>A meeting point, where digital design professionals from across the globe find inspiration.</p>
              <a href="https://www.awwwards.com">awwwards.com</a></div>
              <div><p>A meeting point, where digital design professionals from across the globe find inspiration.</p>
              <a href="https://www.tympanus.net/codrops">tympanus.net/codrops</a></div>
              <div><p>A meeting point, where digital design professionals from across the globe find inspiration.</p>
              <a href="https://www.armory.visualsoldiers.com">armory.visualsoldiers.com</a></div>
            </div>
            <div class="about-misc-follow">
              <p>Interested in our work? Follow us on linkedIn </p>
              <div class="about-rss">
                <a href="#rss"><img class="rss" src="@/assets/linkedinlogo.svg">Frédéric Castro</a>
                <a href="#rss"><img class="rss" src="@/assets/linkedinlogo.svg">Camille Bresson</a>
              </div>
              <hr>
              <ul class="footer">
                <li><a href="#">Legal Notice</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Conditions</a></li>
                <li><a href="#">CAWEB website</a></li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  </main>
</template>

<style scoped>

</style>