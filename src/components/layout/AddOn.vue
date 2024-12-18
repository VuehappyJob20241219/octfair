<template>
<div class="container">
    <!-- <SnowSkin :snowConfig="snowConfig" :url="a"/> -->
    <!-- <MusicBox class="wrapper" :width="width" :url="a" /> -->
    <LunchMenu class="wrapper" :width="width" :url="a" />
    <!-- <Toast /> -->
</div>
</template>

<script setup>
import SnowSkin from './AddOnPack/SnowSkin.vue';
import MusicBox from './AddOnPack/MusicBox.vue';
import LunchMenu from './AddOnPack/LunchMenu.vue';

const width = ref(200);
const snowConfig = ref({
    numSnow: 100,
    minRadius: 1,
    maxRadius: 4,
    minSpeed: 0.5,
    maxSpeed: 1,
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
    font-family: 'Arial', sans-serif;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f4f0e1;
    border: 5px solid gold;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 60%;
    max-width: 600px;
    margin-top: 20px;
    position: relative;
}
</style>