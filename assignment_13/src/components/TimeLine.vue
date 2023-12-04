<template>

<div class="flex">
<div class="datas" v-for="item in items" :key="item.required">
  <img class = "img" :src="item.src" alt="" >
 <div class="datas_title">{{ item.title }}</div>
  <div class="datas_data">{{ item.data }}</div>
  <div class="datas_date">{{ item.date }}</div>
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
data(){
    return{

    };
},
sort:{
  sortArr(){
    console.log(this.type);
  }
},
methods:{

}
}
</script>
<style scoped>
.datas{
 background-color:cadetblue;
 text-align: center;
 margin-bottom: 20px;
 padding: 10px 5px;
 position: relative;
 transition: all .3s;
 border-radius: 5px;
 height: 230px;

}
.img{
  width: 300px;
}
.flex{
  display: flex;
  gap: 20px;
}
.datas_title{
  color: #fff;
  font-size: 25px;
}
.datas_data{
  color: aliceblue;
  font-size: 18px;
  display: none;
  transition: all .3s;
}
.datas:hover .datas_data{
  display: block;
}
.datas_date{
  position: absolute;
  right: 10px;
  top: 90%;
  color: #e1d5d5;
}
</style>