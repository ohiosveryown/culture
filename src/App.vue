<template>
  <div id="culture">
    <img class="mt-9" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import './util/var.scss';
  @import './util/reset.scss';
  @import './util/grid.scss';
  @import './util/util.scss';
  @import './util/type.scss';

  #culture {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--sagan);
    margin-top: 60px;
    @include breakpoint(lg) { color: var(--gravity); }
  }
</style>

<script>
  export default {
    name: 'culture'
  }
</script>
