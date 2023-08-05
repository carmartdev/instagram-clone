const app = Vue.createapp({
  setup() {
    const message = ref("Hello Vue!");
    return {
      message,
    };
  },
});

app.mount("#app");
