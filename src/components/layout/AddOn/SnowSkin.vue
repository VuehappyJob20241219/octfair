<template>
    <div class="snow-container">
        <canvas ref="snowCanvas"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// 눈송이 관련 상태 및 변수 선언
const props = defineProps(['snowConfig']);
const snowCanvas = ref(null);
const snowflakes = [];
let canvas, context;

// 캔버스 초기화 함수
const initCanvas = () => {
    canvas = snowCanvas.value;
    context = canvas.getContext("2d");
    resizeCanvas();
    createSnowflakes();
};

// 캔버스 크기 재조정
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

// 눈송이 생성 함수
const createSnowflakes = () => {
    const numFlakes = props.snowConfig.numSnow;
    for (let i = 0; i < numFlakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * props.snowConfig.maxRadius + props.snowConfig.minRadius,
            speed: Math.random() * props.snowConfig.maxSpeed + props.snowConfig.minSpeed,
        });
    }
};

// 눈송이 애니메이션 함수
const animateSnow = () => {
    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        snowflakes.forEach((flake) => {
            context.beginPath();
            context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            context.fillStyle = "white";
            context.fill();

            // 눈송이 이동
            flake.y += flake.speed;
            if (flake.y > canvas.height) {
                flake.y = -flake.radius; // 화면 위로 다시 이동
                flake.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    };

    draw();
};

// 컴포넌트 마운트 시 실행
onMounted(() => {
    initCanvas();
    window.addEventListener("resize", resizeCanvas);
    animateSnow();
});

// 컴포넌트 언마운트 시 이벤트 제거
onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeCanvas);
});
</script>

<style>
.snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background: #001a33; /* 어두운 배경 */
    background-image: url('@/assets/toy.gif');
    background-size: cover;
}

canvas {
    display: block;
}
</style>
