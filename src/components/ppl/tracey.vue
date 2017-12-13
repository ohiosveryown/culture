<!-- layout -->
<template>
  <div>

    <div v-bind:class="{ coverActive: trigger }" class="cover coverActive"/>

    <section>
      <router-link :to="{ name: 'list' }">
        <h2 class="fade-in-delay">Home</h2>
      </router-link>
    </section>

  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../../util/grid.scss';

  h1 { position: relative; z-index: var(--z3); }

  section {
    position: relative;
    top: 0; left: 50vw;
    width: 50vw;
    z-index: var(--z2);
  }

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

</style>

<!-- logic -->
<script>
export default {
  name: 'tracey',
  data() {
    return {
      cvr: false,
    };
  }
}
</script>
