<template>
<div>
    <!-- 이미지뷰 -->
    <div class="gallery-container" v-if="noticeList?.noticeCnt > 0">
        <div class="card"
            v-for="notice in noticeList.notice"
            :key="notice.noticeIdx"
            v-on:click="handlerModal(notice.noticeIdx)"
        >
            <div class="image-wrapper">
                <img v-if="notice.logicalPath" :src="`/api${notice.logicalPath}`" />
                <img v-else src="../../../../assets/logo.png" />
            </div>
            <div class="title">{{ notice.title }}</div>
        </div>
    </div>

    <!-- 페이지네이션 -->
    <div class="page-navigate-styled">
        <Pagination 
            :totalItems="noticeList?.noticeCnt || 0"
            :items-per-page="itemPerPage"
            :max-pages-shown="5"
            :onClick="searchList"
            v-model="cPage"
        />
    </div>

    <!-- 모달 -->
    <NoticeModal v-if="modalStore.modalState"
        :idx="noticeIdx"
        v-on:postSuccess="searchList"
        @modalClose="noticeIdx=0"
    />
</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';
import Pagination from '../../../common/Pagination.vue';
import { useModalStore } from '@/stores/modalState';

const route = useRoute();
const noticeList = ref();
const itemPerPage = ref(12);
const cPage = ref(1);
const noticeIdx = ref(0);
const modalStore = useModalStore();

const searchList = () => {
    const param = {
        searchTitle: route.query.searchTitle || '',
        searchStDate: route.query.searchStDate || '',
        searchEdDate: route.query.searchEdDate || '',
        currentPage: cPage.value.toString(),
        pageSize: itemPerPage.value.toString(),
    };
    axios.post('/api/board/noticeListBodyThumb.do', param)
        .then((res) => { noticeList.value = res.data; });
};

const handlerModal = (idx) => {
    modalStore.setModalState();
    noticeIdx.value = idx;
}

onMounted(() => { searchList(); });
watch((route), () => searchList());
</script>

<style lang="scss" scoped>
.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding: 16px;
}

.card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.2);
}

.image-wrapper {
    width: 100%;
    height: 150px;
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

.page-navigate-styled {
    margin-top: 20px;
}
</style>
