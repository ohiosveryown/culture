<!-- layout -->
<template>
  <div id="culture">

    <div v-bind:class="{ triggerActive: trigger }" class="cover"/>
    <!-- magic 🎩 happens below -->
    <router-view v-on:click.native="trigger = !trigger" />

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

  .cover {
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 100vh;
    background: cornflowerblue;
    transform: scaleX(0.01);
    transform-origin: right;
    transition: all 500ms cubic-bezier(.55, .085, .68, .53);
    will-change: transform;
  }

  @keyframes coveractive {
    0%   { transform: scaleX(0.01); }
    50%  { transform: scaleX(1); }
    100% { transform: scaleX(1) translateX(-50vw); }
  }
  .triggerActive {
    animation: coveractive 800ms ease forwards;
  }
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
