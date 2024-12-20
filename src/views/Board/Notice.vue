<template>
    <!-- <NoticeSearch /> --> <!-- (비교군으로 남겨둠) Tanstack 이전 기존방식 검색창 -->
    <NoticeSearchTanstack />

    <ContextBox>공지사항</ContextBox>
    
    <ImageNoticeMain />
    <!-- <NoticeMain /> --> <!-- (비교군으로 남겨둠) Tanstack 이전 기존방식 메인창 -->
    <!-- <NoticeMainTanstack /> --> <!-- (비교군으로 남겨둠) 이미지뷰 적용 전 Tanstack방식 메인창 -->
</template>

<script setup>
const providedSearchValue = ref({});
provide('providedSearchValue', providedSearchValue);
</script>

<style lang="scss" scoped>
</style>
