<template>
   
      <div class="accordion-item" v-for="(item,index) in items" v-on:click="toggleAccordion(index)">
       <div class="accordion-header">
        <div class="accordion-icon" > {{ isOpen(index) ? '-' : '+' }} </div>
         <div class="accordion-header">{{ item.header }}</div>
       </div>
       <div class="content">{{ content[index] }}</div>
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
        openSections: [],
        content: [`      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, fugit?
`," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat esse molestias veritatis a ipsum at corrupti vitae optio saepe?"]
      };
    },
    methods: {
      toggleAccordion(index) {
        const isOpen = this.isOpen(index);
        let content = document.querySelectorAll(".content");
        content[index].classList.toggle("active");
        console.log(isOpen);
        console.log(this.openSections);
        if (isOpen) {
          this.openSections = this.openSections.filter(i => i != index);
        } else {
          this.openSections.push(index);
        }
      },
      isOpen(index) {
        return this.openSections.includes(index);
      },
    },
  };
  </script>
  
  <style scoped>
  .accordion-item {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .accordion-header {
    padding: 10px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .accordion-icon {
    font-size: 18px;
    margin-right: 5px;
  }
  .content{

  padding:0;
  margin:auto;
  visibility: hidden;
  height:0;
  overflow:hidden;
  background-color: #4c8db8;
  color: #fff;
  opacity:0;
  transition:all 0.2s linear;
  }
  .active{
    padding:10px;
  visibility: visible;
  height:auto;
  overflow:none;
  opacity:1;
  }
  
  </style>