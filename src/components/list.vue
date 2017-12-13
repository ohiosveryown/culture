<!-- layout -->
<template>
  <div class="hello">


    <router-link :to="{ name: 'tracey' }">
      <div class="box"/>
    </router-link>
    <!-- <router-link @click="trigger = !trigger" :to="{ name: 'feb' }">View Entry</router-link> -->

  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../util/grid.scss';

  .box {
    background: pink;
    width: 400px; height: 400px;
  }

</style>

<!-- logic -->
<script>
  export default {
    name: 'list',
  }
</script>
