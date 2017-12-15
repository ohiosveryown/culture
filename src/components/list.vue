<!-- layout -->
<template>
  <div class="">

    <!-- <router-link :to="{ name: 'tracey' }">
      <div class="fade-in box"/>
    </router-link> -->

    <main class="fade-in-delay pt-9 pb-9">
      <!-- <router-link :to="{ name: 'terris' }"> -->
        <figure class="jc">
          <img src="../imgs/roy__sm.jpg" alt="">
          <figcaption class="uc">roy handy</figcaption>
          <span class="op-4">design team</span>
        </figure>
      <!-- </router-link> -->

      <router-link :to="{ name: 'terris' }">
        <figure class="jc">
          <img src="../imgs/terris__sm.jpg" alt="">
          <figcaption class="uc">terris johnson</figcaption>
          <span class="op-4">design team</span>
        </figure>
      </router-link>

      <!-- <router-link :to="{ name: 'terris' }"> -->
        <figure class="jc">
          <img src="../imgs/parker__sm.jpg" alt="">
          <figcaption class="uc">parker jennette</figcaption>
          <span class="op-4">support team</span>
        </figure>
      <!-- </router-link> -->

      <!-- <router-link :to="{ name: 'terris' }"> -->
        <figure class="jc">
          <img src="../imgs/anne__sm.jpg" alt="">
          <figcaption class="uc">anne simone</figcaption>
          <span class="op-4">marketing team</span>
        </figure>
      <!-- </router-link> -->

      <!-- <router-link :to="{ name: 'terris' }"> -->
        <figure class="jc">
          <img src="../imgs/david__sm.jpg" alt="">
          <figcaption class="uc">david posey</figcaption>
          <span class="op-4">development team</span>
        </figure>
      <!-- </router-link> -->

      <!-- <router-link :to="{ name: 'terris' }"> -->
        <figure class="jc">
          <img src="../imgs/pence__sm.jpg" alt="">
          <figcaption class="uc">matthew pence</figcaption>
          <span class="op-4">design team</span>
        </figure>
      <!-- </router-link> -->

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
    filter:saturate(0) brightness(140%);
    transform-origin: bottom;
    transition: var(--ease_slow_very);
    will-change: transform;
  }

  img:hover {
    filter:saturate(1) brightness(100%);
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
