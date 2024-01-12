<script>

export default {
  props: {
    title: String,
    img: String,
    desc: String,
    lang: String,
    name: String,
    vote: Number,
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5]
    }
  }
}
</script>
<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="'http://image.tmdb.org/t/p/w342' + img" alt="">
      </div>
      <div class="flip-card-back">
        <div class="container-flag w-100 d-flex align-items-center justify-content-center">
          <img v-if="lang == 'en'" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="">
          <img v-else-if="lang == 'it'" src="https://flagicons.lipis.dev/flags/4x3/it.svg" alt="">
          <img v-else-if="lang == 'fr'" src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="">
          <img v-else-if="lang == 'ja'" src="https://flagicons.lipis.dev/flags/4x3/jp.svg" alt="">
          <img v-else-if="lang == 'es'" src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="">
          <img v-else-if="lang == 'de'" src="https://flagicons.lipis.dev/flags/4x3/de.svg" alt="">
          <img v-else
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAM1BMVEXlAAB3AIj/7gD/jQACgSEATP//8gD3bgD/jwD/igD/rgAAeyICgwABXs0ASv82O957AIF+6HPOAAABQUlEQVR4nO3Zt2ECAADEwCfagAn7T+sN1NDejaBWGwAAAAAAAADA934I+yXsRJAnyZPkSfIkeZI8SZ4kT5InyZPkSfIkeZI8SZ4kT5InyZPkSfIkeZI8SZ4kT5In7UbYnbArYUeCPEmeJE+SJ8mT5EnyJHmSPEmeJE+SJ8mT5EnyJHmSPEmeJE+SJ8mT5EnyJHmSPEme5LGnPQg7E+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8qT9EfYk7EXYhSBPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkiftTdiHsANBniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkif9A2l2UDuACQJ/AAAAAElFTkSuQmCC"
            alt="">
        </div>
        <h3>{{ title }}</h3>

        <div class="d-flex w-100 justify-content-center">
          <div class=" justify-content-center" v-for="i of arr">
            <div v-if="i < Math.ceil(vote / 2) + 1">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            </div>
            <div v-else>
              <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
            </div>
          </div>
        </div>


        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 342px;
  height: 513px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #000000;
  color: white;
  transform: rotateY(180deg);
  width: 342px;
  height: 513px;
}

.container-flag {
  height: 70px;
}

.container-flag img {
  width: 65px;
  height: 40px;
}
</style>