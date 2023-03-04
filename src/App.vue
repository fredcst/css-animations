<template>
  <header id="nav">
      <div id="static-items">
        <div class="logo">
          <router-link to="/"><h2 id="brand" :class="{ 'hidden': isDeactivated }"><b>F</b>edeca<b>M</b></h2>
            <svg width="79" height="86" viewBox="0 0 79 86" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo-img" :class="{ 'hidden': !isDeactivated }">
              <path d="M12.5539 24.3129C8.95394 42.3129 -5 46.5 1.99899 59.5C15.499 73 46.054 43.3128 52.054 36.8129C58.054 30.3129 48.5531 8.81282 39.0531 1.81282C29.5531 -5.18718 15.5539 9.31287 12.5539 24.3129Z" fill="#6904CA" fill-opacity="0.5"/>
              <path d="M19.5333 59.9862C15.0462 82.3742 40.1 58.7425 48.8237 74.9115C65.6505 91.7025 68.1327 86.4946 75.6113 78.4101C83.0898 70.3257 77.4919 58.1206 65.6509 49.4142C53.8098 40.7078 23.2726 41.3297 19.5333 59.9862Z" fill="#00E6E3" fill-opacity="0.31"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2991 35.6552V18.1453H30.0262V18.1654H59.0917V16.0379H46.6026V16H21V78H23.2991V58.3738L23.2981 58.2095L23.2991 39.5484L39.5633 78H41.3515L57.8219 39.1229L57.7009 58.3738V78H60V35.6877H43.7358V35.6552H23.2991ZM39.7147 37.8585H24.9926L40.4716 74.6372L55.948 37.8647H39.7147V37.8585Z" fill="white"/>
            </svg>  
          </router-link>
        </div>
        <div id="nav-icon" :class="{ 'open': !isActive }" @click="toggleActive">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="menu-content" :class="{ 'hidden': isDeactivated }">
        <nav>
            <ul @click="toggleActive">
              <li><RouterLink to="/history">History</RouterLink></li>
              <li><RouterLink to="/tutorial">Small Tutorial</RouterLink></li>
              <li><RouterLink to="/examples">Great Examples</RouterLink></li>
              <li><RouterLink to="/about">About</RouterLink></li>
            </ul>
          <div class="rss-list">
            <div class="rss-el"><a href="#rss"><img class="rss" alt="linkedin logo" src="./assets/linkedinlogo.svg">Frédéric Castro</a></div>
            <div class="rss-el"><a href="#rss"><img class="rss" alt="linkedin logo" src="./assets/linkedinlogo.svg">Camille Bresson</a></div>
          </div>
        </nav>
        <div id="logo-big" @click="toggleActive">
          <span id="logo-svg">
            <router-link to="/"><img src="./assets/img/big-logo.svg" alt="big-logo"></router-link>
          </span>
        </div>
      </div>
  </header>
<div id="cont">
  <RouterView />
</div>
<footer>
  <div class="footer-list">
    <p>Interested in our work? Follow us on linkedIn: </p>
    <a href="#rss"><img class="rss" src="@/assets/linkedinlogo.svg">Frédéric Castro</a>
    <a href="#rss"><img class="rss" src="@/assets/linkedinlogo.svg">Camille Bresson</a>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isDeactivated: true
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      this.isDeactivated = !this.isDeactivated;
    }
  }
};
</script>