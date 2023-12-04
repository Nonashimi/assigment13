Vue.component('timeline', {
    props: {
      events: {
        type: Array,
        required: true,
      },
    },
    template: `
      <div class="timeline">
        <div class="event" v-for="event in sortedEvents" :key="event.date">
          <div class="event-date">{{ event.date }}</div>
          <div class="event-details">
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    `,
    computed: {
      sortedEvents() {
       
        return this.events.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      },
    },
  });
  
  new Vue({
    el: '#app',
    data() {
      return {
        events: [
          { title: 'Event 1', date: '2023-01-15', description: 'Description for Event 1' },
          { title: 'Event 2', date: '2023-03-20', description: 'Description for Event 2' },
         
        ],
      };
    },
  });
  