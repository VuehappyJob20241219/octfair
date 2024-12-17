<template>
<div class="container">
    <!-- <SnowSkin :snowConfig="snowConfig"/> -->
    <!-- <MusicBox class="wrapper" :width="width" /> -->
    <FoodMenu class="wrapper" :width="width" />
    <!-- <Toast /> -->
</div>
</template>

<script setup>
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