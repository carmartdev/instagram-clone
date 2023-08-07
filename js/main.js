const app = Vue.createApp({
  data() {
    return {
      pageName: "Developer Shops",
      firstName: "Joann",
      lastName: "Rodriquez",
      userName: "handball",
      profileImage: "https://randomuser.me/api/portraits/women/42.jpg",
      postImage: "images/post.jpg"
    };
  },
});

app.mount("#app");
