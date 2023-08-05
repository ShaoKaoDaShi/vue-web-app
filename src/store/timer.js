import { defineStore } from "pinia";

const timer = defineStore("timer", {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    setTime(time) {
      this.count = time;
    },
  },
});

setInterval(() => {
  timer().increment();
}, 1000);
export default timer;
