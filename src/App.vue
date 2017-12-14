<!-- layout -->
<template>
  <div id="culture">

    <!-- cover -->
    <!-- <div v-bind:class="{ coverActive: trigger }" class="cover"/> -->

    <!-- magic 🎩 happens below -->
    <transition name="fade">
      <router-view class="abs" @click.native="trigger = !trigger" />
    </transition>

  </div>
</template>


<!-- style -->
<style lang="scss">
  @import './util/var.scss';
  @import './util/reset.scss';
  @import './util/grid.scss';
  @import './util/util.scss';
  @import './util/type.scss';
  @import './util/anim.scss';

  .abs {
    position: absolute;
    left: 0; right: 0;
    margin: 0 auto;
   }

  // .cover {
  //   position: fixed;
  //   top: 0; left: 0;
  //   z-index: var(--z2);
  //   width: 100vw; height: 100vh;
  //   background: cornflowerblue;
  //   transform: scaleX(0.01);
  //   transform-origin: right;
  //   transition: all 500ms cubic-bezier(.55, .085, .68, .53);
  //   will-change: transform;
  // }
</style>


<!-- logic -->
<script>
  export default {
    name: 'culture',
    data() {
      return {
        trigger: false,
      };
    }
  }
</script>
