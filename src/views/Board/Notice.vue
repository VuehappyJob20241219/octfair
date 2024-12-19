<template>
    <!-- <NoticeSearch /> -->
    <NoticeSearchTanstack />

    <ContextBox>공지사항</ContextBox>
    
    <ImageNoticeMain />
    <!-- <NoticeMain /> -->
    <!-- <NoticeMainTanstack /> -->
</template>

<script setup>
const providedSearchValue = ref({});

provide('providedSearchValue', providedSearchValue);
</script>
