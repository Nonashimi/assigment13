<template>
  <div id="app">
    <Accordion :items="accordionItems">
      <div slot="content" v-for="(item, index) in accordionItems" :key="index">
      </div>
    </Accordion>
    <Accordion />
  </div>
</template>

<script>
import Accordion from '@/components/Accordion.vue';
export default {
  components: {
    Accordion,
  },
  data() {
    return {
      accordionItems: [
        { header: 'Accordion 1'},
        { header: 'Accordion 2'},
      ],
    };
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