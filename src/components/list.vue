<!-- layout -->
<template>
  <div class="">

    <!-- <router-link :to="{ name: 'tracey' }">
      <div class="fade-in box"/>
    </router-link> -->

    <main class="fade-in-delay pt-9 pb-9">
      <router-link :to="{ name: 'tracey' }">
        <figure class="jc">
          <img src="../imgs/tracey__sm.jpg" alt="">
          <figcaption class="uc">tracey brown</figcaption>
          <span class="op-4">support team</span>
        </figure>
      </router-link>

      <router-link :to="{ name: 'tracey' }">
        <figure class="jc">
          <img src="../imgs/tracey__sm.jpg" alt="">
          <figcaption class="uc">tracey brown</figcaption>
          <span class="op-4">support team</span>
        </figure>
      </router-link>

      <router-link :to="{ name: 'tracey' }">
        <figure class="jc">
          <img src="../imgs/tracey__sm.jpg" alt="">
          <figcaption class="uc">tracey brown</figcaption>
          <span class="op-4">support team</span>
        </figure>
      </router-link>

      <router-link :to="{ name: 'tracey' }">
        <figure class="jc">
          <img src="../imgs/tracey__sm.jpg" alt="">
          <figcaption class="uc">tracey brown</figcaption>
          <span class="op-4">support team</span>
        </figure>
      </router-link>

      <router-link :to="{ name: 'tracey' }">
        <figure class="jc">
          <img src="../imgs/tracey__sm.jpg" alt="">
          <figcaption class="uc">tracey brown</figcaption>
          <span class="op-4">support team</span>
        </figure>
      </router-link>

      <router-link :to="{ name: 'tracey' }">
        <figure class="jc">
          <img src="../imgs/tracey__sm.jpg" alt="">
          <figcaption class="uc">tracey brown</figcaption>
          <span class="op-4">support team</span>
        </figure>
      </router-link>

    </main>

    <!-- bg -->
    <!-- <div class="bg"/> -->

  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../util/grid.scss';

  .bg {
    position: absolute;
    top: 0; left: 0;
    z-index: var(--zmin);
    width: 100vw; height: 100%;
    background: #f5f5f8;
  }

  // grid-area: row-start / col-start / row-end / col-end
  main {
    position: relative;
    z-index: var(--z1);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: minmax(400px, max-content);
    grid-gap: 1vw;
    margin: 0 auto;
    max-width: var(--max_width);
    width: 90vw;
  }

  figure {
    display: grid;
    // grid-template-rows: minmax(50px, 350px);
    margin: 1.6rem;
    overflow: hidden;
  }

  img {
    padding-bottom: 1.2rem;
    filter:saturate(0);
    transform-origin: bottom;
    transition: var(--ease_slow_very);
    will-change: transform;
  }

  img:hover {
    filter:saturate(1);
    transform: scale(1.04);
  }

</style>

<!-- logic -->
<script>
  export default {
    name: 'list',
    data() {
      return {
        trigger: false,
      };
    }
  }
</script>
