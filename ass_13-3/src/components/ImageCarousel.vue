<template>
  <!-- <div class="image-carousel">
    <transition name="slide">
      <img :src="currentItem.src" :alt="currentItem.alt" :key="currentItem.src" />
    </transition>
    <div class="carousel-caption">{{ currentItem.caption }}</div>
    <button @click="prevItem">Previous</button>
    <button @click="nextItem">Next</button>
  </div> -->
  <div class="section">
    <!-- <div class="image-carousel"  >
      <button v-on:click="prevItem" class="prevButton"><i class="fa-solid fa-chevron-left"></i></button>
    <img :src='currentItem.src' alt="" class="image">
    <button v-on:click="nextItem" class="nextButton"><i class="fa-solid fa-chevron-right"></i></button>
  </div> -->
  <div class="image-carousel">
    <button v-on:click="prevItem" class="prevButton"><i class="fa-solid fa-chevron-left"></i></button>
    <div class="hidden">
       <div  class="" v-for="item in items" :key="item.required">
        <img :src="item.src" alt="" class="image">
      </div>
    </div>
      <button v-on:click="nextItem" class="nextButton"><i class="fa-solid fa-chevron-right"></i></button>

  </div>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      scroll:0,
    };
  },
  computed: {
    currentItem() {
      return this.items[this.currentIndex];
    },
  },
  methods: {
    prevItem() {
      let hi= document.querySelector(".hidden");
      let next = document.querySelector(".nextButton");
      let prev = document.querySelector(".prevButton");
      if(this.scroll-260==0){
       prev.classList.add("disable");
      }
      next.classList.remove("disable");
      this.scroll-=260;
        hi.style = `transform:translate(-${this.scroll}px)`;
    },
    nextItem() {
      let prev = document.querySelector(".prevButton");
      let next = document.querySelector(".nextButton");
      this.scroll+=260;
      let hi = document.querySelector(".hidden");
   console.log(this.scroll);
   if(this.scroll+260 == 260*5){
      next.classList.add("disable");
   }
   prev.classList.remove("disable");

     hi.style = `transform:translate(-${this.scroll}px)`;
      // this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
  },
};
</script>

<style scoped>
.section{
  width: 20%;
  margin: 0 auto;
}
.image-carousel {
 position: relative;
 height: 360px;
  overflow: hidden;

}


.image {
  width: 200px;
  min-height: 360px;
  height: auto;
}
.prevButton{
  position: absolute;
  top: 48%;
  left: 0;
  z-index: 2;
}
.disable{
  background-color: gray;
  pointer-events: none;
}
button{
  padding: 15px 20px;
  border-radius: 50px;
  border: none;
}

.nextButton{
  position: absolute;
  top: 48%;
  right: 0;
  z-index: 2;
}
.hidden{
margin-left: 50px;
display: flex;
gap: 60px;
transition: all .3s;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: center;
}
.image {
    transition: opacity 0.5s ease;
  }


</style>
