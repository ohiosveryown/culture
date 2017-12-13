<!-- layout -->
<template>
  <div class="">

    <router-link :to="{ name: 'tracey' }">
      <div class="box"/>
    </router-link>

  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../util/grid.scss';

  .cover {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 100vh;
    background: cornflowerblue;
    transform: translateX(90vw);
    transform-origin: right;
    transition: all 500ms ease;
    will-change: transform;
  }

  .triggerActive {
    transform: translateX(0vw);
  }

  .box {
    background: pink;
    width: 400px; height: 400px;
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
