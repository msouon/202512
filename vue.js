const cardApp = Vue.createApp({
    data() {
      return {
        cards: [], // 存放從後端獲取的資料
      };
    },
    mounted() {
      // 使用 Ajax 獲取資料
      $.ajax({
        url: "/profolio",
        method: "get",
        dataType: "json",
        success: results => {
          this.cards = results; // 將資料賦值給 Vue 的 cards
        },
        error: err => {
          console.error("Error fetching data:", err);
        }
      });
    }
  });
  
  cardApp.mount("#card");