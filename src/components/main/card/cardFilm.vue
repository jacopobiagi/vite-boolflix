<script>

export default{
    props:{
        title: String,
        img: String,
        desc:String,
    },
    data(){
        return{
            imageUrl: "http://image.tmdb.org/t/p/w342/" + this.img,
        }
    }
}
</script>
<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="imageUrl" alt="">
            </div>
            <div class="flip-card-back">
                <h3>{{ title }}</h3>
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
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
</style>