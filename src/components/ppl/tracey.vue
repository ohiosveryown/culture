<!-- layout -->
<template>
  <div>

    <div class="cover coverActive"/>

    <section class="fade-in-delay">
      <figure/>
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
    background: var(--cloud);
    transform-origin: right;
    // transition: all 500ms cubic-bezier(.55, .085, .68, .53);
    will-change: transform;
  }

  // .main-img {
  //   position: absolute;
  //   top: 0;
  //   z-index: var(--zmin);
  // }

  figure {
    // position: absolute;
    top: 0;
    z-index: var(--z4);
    background: url('../../imgs/tracey__lg.jpg') no-repeat center center;
    background-size: cover;
    height: 100vh;
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
