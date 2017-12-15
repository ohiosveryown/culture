<!-- layout -->
<template>
  <div>

    <div class="cover coverActive"/>

    <div class="cover-content fade-in-delay-2">
      <div class="adj-one-lg">
        <h1 class="f-xl uc">loyal</h1>
      </div>
      <div class="adj-one-wrapper">
        <h3 class="f-sm">Super</h3>
        <h3 class="f-sm">Great</h3>
        <h3 class="f-sm">Terrific</h3>
        <h3 class="f-sm">Amazing</h3>
      </div>
      <div class="adj-main">
        <h1 class="f-xxl rotate">Inspiring</h1>
      </div>
      <div class="adj-two-wrapper">
        <h3 class="f-sm">Genuine</h3>
        <h3 class="f-sm">Tactful</h3>
        <h3 class="f-sm">Strong Shirt Game</h3>
        <h3 class="f-sm">Kind</h3>
      </div>
      <div class="adj-two-lg">
        <h1 class="f-xl uc">wise</h1>
      </div>
    </div>

    <section class="fade-in-delay">
      <figure class="main-img-enter" />
      <div class="start-date">
        <h2 class="f-md monospace">3.2.14</h2>
      </div>
      <div class="info">
        <h2 class="f-lg">Terris Johnson</h2>
        <h4 class="f-sm">Design Team</h4>
        <svg width="35" height="34"><path d="M20.755 17.94a1.685 1.685 0 0 1-2.364 0 1.638 1.638 0 0 1 0-2.337 1.688 1.688 0 0 1 2.364 0 1.638 1.638 0 0 1 0 2.336zm-9.68-16.267a.377.377 0 0 1 0 .696c-.661.276-1.2.81-1.481 1.462a.381.381 0 0 1-.352.23.38.38 0 0 1-.352-.23 2.803 2.803 0 0 0-1.48-1.462.377.377 0 0 1 0-.696A2.8 2.8 0 0 0 8.89.209c.12-.279.584-.279.704 0a2.8 2.8 0 0 0 1.48 1.464zm-4.309 5.06A.378.378 0 0 1 7 7.081a.378.378 0 0 1-.234.348 5.245 5.245 0 0 0-2.772 2.74.382.382 0 0 1-.352.23.382.382 0 0 1-.352-.23 5.247 5.247 0 0 0-2.774-2.74.377.377 0 0 1 0-.696 5.248 5.248 0 0 0 2.774-2.74c.119-.278.584-.278.704 0a5.252 5.252 0 0 0 2.772 2.74zm26.952 24.878a.377.377 0 0 1 0 .695c-.66.277-1.2.81-1.482 1.463a.382.382 0 0 1-.352.231.38.38 0 0 1-.351-.23 2.802 2.802 0 0 0-1.48-1.464.377.377 0 0 1 0-.695c.66-.277 1.199-.81 1.48-1.463a.382.382 0 1 1 .703 0 2.806 2.806 0 0 0 1.482 1.463zm-9.666-19.444l-1.517-1.788-.593-.698 7.392-4.376-5.282 6.862zm5.492 11.776l-.436 1.05a2.16 2.16 0 0 1-2.732 1.197l-8.08-2.893-.004-.002-2.564-.925a2.14 2.14 0 0 1-1.417-2.002v-2.415c0-.626-.514-1.134-1.148-1.134-.634 0-1.148.508-1.148 1.134v2.415c0 1.712 1.024 3.258 2.576 3.975v6.355L2.613 23.807a28.857 28.857 0 0 1 11.518-12.572l.85-.497c.288-.167.488-.453.546-.78l.63-3.564 3.16 3.723v.003l3.9 4.593v.002l5.984 7.05c.516.609.648 1.444.343 2.178zM34.707.552a1.157 1.157 0 0 0-1.445-.217L20.448 7.92 16.33 3.068a1.157 1.157 0 0 0-1.177-.367 1.14 1.14 0 0 0-.833.9l-.963 5.451-.394.23C7.243 12.62 2.67 17.787.09 23.835a1.129 1.129 0 0 0 .48 1.421l14.591 8.395a1.156 1.156 0 0 0 1.15.004c.356-.203.576-.578.576-.984v-7.466l.528.189.09.032 8.09 2.896c2.253.807 4.728-.278 5.637-2.467l.436-1.05a4.349 4.349 0 0 0-.708-4.497l-5.395-6.358 9.201-11.955a1.125 1.125 0 0 0-.059-1.443z" style="mix-blend-mode:multiply" fill="#EFEEF5" fill-rule="evenodd"/></svg>
      </div>
      <div class="quote">
        <h4 class="f-sm">"Perfect is the Enemy of Good"</h4>
        <h4 class="f-sm">—Terris</h4>
      </div>
    </section>

  </div>
</template>


<!-- style -->
<style lang="scss" scoped>
  @import '../../util/grid.scss';

  // grid-area: row-start / col-start / row-end / col-end

  .f-xxl {
    font-family: 'GT-Sectra-Fine-Bold';
    font-size: 8rem;
    will-change: transform;
    &:hover {
      text-stroke: 0.5px var(--gravity);
      -webkit-text-stroke: 0.5px var(--gravity);
      color: transparent;
    }
  }

  .f-xl {
    font-family: 'PxGrotesk';
  }

  .f-lg {
    font-family: 'GT-Sectra-Fine-Bold';
    font-size: 3.2rem;
  }

  .f-sm {
    font-family: 'Akkurat';
  }

  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: relative;
    top: 0; left: 50vw;
    width: 50vw;
    z-index: var(--z2);
  }

  .cover {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    position: fixed;
    top: 0; left: 0;
    z-index: var(--zmax);
    width: 100vw; height: 100vh;
    background: #E5E3E9;
    transform-origin: right;
    will-change: transform;
  }

  .cover-content {
    position: fixed;
    z-index: var(--zmax);
    padding: 1.2rem 4rem;
    width: 50%;
  }

  .adj-one-lg, .adj-two-lg {
    position: absolute;
    right: 2.4rem;
    text-align: right;
    text-stroke: 1px var(--cloud);
    -webkit-text-stroke: 1px var(--cloud);
    color: transparent;
    font-size: 6.8rem;
    line-height: 1;
  }

  .adj-two-lg {
    position: absolute;
    z-index: var(--zmin);
    top: 80rem; left: 2rem;
    text-align: left;
    font-size: 5.6rem;
  }

  .adj-one-wrapper {
    // width: 100%;
    position: relative;
    top: 1.6rem; right: 1rem;
    padding-top: 6.4rem;
    text-align: right;
  }

  .adj-two-wrapper {
    position: relative;
    top: 40rem; left: 1.6rem;
    padding-top: 6.4rem;
  }

  .adj-main {
    position: relative;
    top: 19.2rem;
    text-align: center;
  }

  figure {
    grid-area: 1 / 1 / 1 / 5;
    position: relative;
    top: 0;
    z-index: var(--z4);
    background: url('../../imgs/terris__lg.jpg') no-repeat top center;
    background-size: cover;
    height: 88vh;
    border: 24px solid var(--cloud);
    transform: translateX(50vw);
    will-change: transform;
    // opacity: 0;
    // border-right: 80px solid var(--cloud);
  }

  svg {
    position: absolute;
    left: 4rem;
    z-index: var(--zmin);
    margin-top: -1rem;
    transform: scale(2);
  }

  .start-date {
    position: relative;
    z-index: var(--z4);
    grid-area: 2 / 3 / 2 / 4;
    text-align: right;
    transform: translate(72%, -3.2rem);
  }

  .info {
    grid-area: 2 / 1 / 2 / 5;
    padding: 0 2.4rem;
  }

  .quote {
    grid-area: 3 / 3 / 3 / 5;
    padding: 3.2rem 3.2rem 8rem;
  }

</style>

<!-- logic -->
<script>
export default {
  name: 'terris',
  data() {
    return {
      cvr: false,
    };
  }
}
</script>
