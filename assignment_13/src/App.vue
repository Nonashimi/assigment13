<template>

<TimeLine  :items="TimeLine"></TimeLine>
</template>

<script>
import TimeLine from "./components/TimeLine.vue";
export default{
  data(){
    return{
      TimeLine:[
         {data:"defregmjh,kdfss", title:"TIME",date:"2020/12/4", src:"//timeline.knightlab.com/static/img/examples/thumbs/thumb_mandela.jpg" },
         {data:"defregmjh,kdfss", title:"THE MANEATER",date:"2021/11/12", src:"https://timeline.knightlab.com/static/img/examples/thumbs/thumb_univofmissouri.jpg" },
         {data:"defregmjh,kdfss", title:"CNN" ,date:"2023/02/10", src:"https://timeline.knightlab.com/static/img/examples/thumbs/thumb_northkorea.jpg"}
    ],
    };
  },
  components:{
    TimeLine
  }
}

</script>

<style>

</style>
