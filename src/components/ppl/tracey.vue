<!-- layout -->
<template>
  <div class="hello">

    <h1 class="fade-in-delay">Tracey</h1>

    <router-link :to="{ name: 'list' }">
      <h2>Home</h2>
    </router-link>

  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../../util/grid.scss';

  // h1 { opacity: 0; }

  .box {
    background: pink;
    width: 400px; height: 400px;
  }

  h2 { position: absolute; right: 10%; }

</style>

<!-- logic -->
<script>
  export default {
    name: 'tracey',
  }
</script>
