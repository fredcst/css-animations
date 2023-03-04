<script setup>
    import AboutVue from '../components/AboutVue.vue'
</script>

<template>
    <AboutVue />
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$root.imagenFondo = ""
    });
  },
};
</script>