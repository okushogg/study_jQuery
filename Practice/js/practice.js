// テンプレート
// const app = Vue.createApp({
//   data: () => ({

//   })
// })
// app.mount('#app')

// section11
// const app = Vue.createApp({
//   data: () => ({
//     message: "Hello Vue.js!",
//     count: 98,
//     user:{
//       lastName: 'Nakano',
//       firstname: 'Joji',
//       prefecture: 'Tokyo'
//     },
//     colors: ['Red','Green', 'Blue']
//   }),
// });
// app.mount("#app");

// section16 v-if
// const app = Vue.createApp({
//   data: => ({
//     toggle: false
//   })
// })
// app.mount('#app')

// section17 vi-for
// const app = Vue.createApp({
//   data: () => ({
//     colors: ["Red", "Green", "Blue"],
//   }),
// });

// const app2 = Vue.createApp({
//   data: () => ({
//     user: {
//       lastName: "Nakano",
//       firstname: "Joji",
//       age: 39,
//     },
//   }),
// });

// app.mount("#color");
// app2.mount("#user");

// section 19 v-on
// const app = Vue.createApp({
//   data: () => ({
//     now: "-",
//   }),
//   methods: {
//     onClick: function () {
//       // console.log('onClick!');
//       this.now = new Date().toLocaleString();
//     },
//   },
// });
// app.mount("#app");

// section 20 v-model
// const app = Vue.createApp({
//   data: () => ({
//     message: 'Hello, Veu.js!'
//   })
// })
// app.mount('#app')

// section 21
// const app = Vue.createApp({
//   data: () => ({

//   })
// })
// app.component('hello-component',{
//   template: '<p>Hello!</p>'
// })
// app.mount('#app')

const app = Vue.createApp({
  data: () => ({
    message: "Hello, Vue.js!",
  }),
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
app.mount("#app");

$(function() {
 
  //マウスを乗せたら発動
  $('#test').hover(function() {
 
    //マウスを乗せたら色が変わる
    $(this).css('display', 'none');
 
  });
});