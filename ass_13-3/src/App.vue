


<template>
  <div id="app">
    <ImageCarousel :items="carouselItems"></ImageCarousel>
  </div>
</template>

<script>
import ImageCarousel from './components/ImageCarousel.vue';

export default {
  data() {
    return {
      carouselItems: [
        { src: "https://g1.img-dpreview.com/3ACBE6D011274856888F900E563D7A85.jpg", alt: 'Image 1', caption: 'Caption for Image 1' },
        { src: 'https://images.unsplash.com/photo-1581260466152-d2c0303e54f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8OSUzQTE2fGVufDB8fDB8fHww', alt: 'Image 2', caption: 'Caption for Image 2' },
        {src: "https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8OSUzQTE2fGVufDB8fDB8fHww"}
        ,{src:"https://www.shutterstock.com/image-photo/916-nature-wallpapers-backgrounds-images-260nw-2244360479.jpg"}
        ,{src:"https://wallpaperaccess.com/full/2713199.jpg"}
      ],
    };
  },
  components: {
    ImageCarousel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
