<template>
    <div class="snow-container">
      <canvas ref="snowCanvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    name: "SnowMain",
    data() {
      return {
        snowflakes: [], // 눈송이 배열
        canvas: null,
        context: null,
      };
    },
    mounted() {
      this.initCanvas();
      window.addEventListener("resize", this.resizeCanvas);
      this.animateSnow();
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.resizeCanvas);
    },
    methods: {
      initCanvas() {
        this.canvas = this.$refs.snowCanvas;
        this.context = this.canvas.getContext("2d");
        this.resizeCanvas();
        this.createSnowflakes();
      },
      resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      },
      createSnowflakes() {
        const numFlakes = 100;
        for (let i = 0; i < numFlakes; i++) {
          this.snowflakes.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
          });
        }
      },
      animateSnow() {
        const draw = () => {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
          this.snowflakes.forEach((flake) => {
            this.context.beginPath();
            this.context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            this.context.fillStyle = "white";
            this.context.fill();
  
            // 눈송이 이동
            flake.y += flake.speed;
            if (flake.y > this.canvas.height) {
              flake.y = -flake.radius; // 화면 위로 다시 이동
              flake.x = Math.random() * this.canvas.width;
            }
          });
  
          requestAnimationFrame(draw);
        };
  
        draw();
      },
    },
  };
  </script>
  
  <style scoped>
  .snow-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* 배경으로 표시 */
  }
  canvas {
    display: block;
  }
  </style>
  