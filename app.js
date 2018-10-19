new Vue({
  el: "#app",
  data: {
    health: 100,
    gameOver: false
  },
  methods: {
    // When health = 0 -> change image
    punch: function(){
      this.health -= 10;

      if(this.health == 0){
        this.gameOver = true;
      }
    },
    restart: function(){
      this.health = 100;
      this.gameOver = false;
    }

  },
  computed: {

  }
})
