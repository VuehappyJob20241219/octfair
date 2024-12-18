<template>
    <iframe
        :src="playUrl"
        allow="autoplay; encrypted-media" 
        allowfullscreen
        :style="{
            width: props.width + 'px',
            height: props.width * 9/16 + 'px'
        }"
    />
</template>

<script setup>
const props = defineProps(['width']);
const musicUrl = "https://www.youtube.com/embed/tEm9EyEPMYM";
const playUrl = ref(musicUrl + "?start=12&autoplay=1&mute=0");
</script>

<style scoped>
</style>
