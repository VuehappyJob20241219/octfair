<template>
    <CommonButton  
        @click="() => $router.push('resume-new.do')"
        style="float: inline-end;" 
        >새 이력서 작성</CommonButton>
</template>

<script setup>
import CommonButton from '@/components/common/CommonButton.vue';
</script>

<style>
</style>