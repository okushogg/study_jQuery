const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js!",
    count: 98,
    user:{
      lastName: 'Nakano',
      firstname: 'Joji',
      prefecture: 'Tokyo'
    },
    colors: ['Red','Green', 'Blue']
  }),
});
app.mount("#app");
