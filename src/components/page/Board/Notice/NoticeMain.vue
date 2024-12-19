<template>
    <!-- 테이블블뷰 -->
    <div class="divNoticeList">
        현재 페이지: {{ cPage }} 총 개수: {{ noticeList?.noticeCnt || 0 }}
        <table>
            <colgroup>
                <col width="10%" />
                <col width="50%" />
                <col width="30%" />
                <col width="10%" />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성일</th>
                    <th scope="col">작성자</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="noticeList">
                    <template v-if="noticeList.noticeCnt > 0">
                        <tr v-for="notice in noticeList.notice" :key="notice.noticeIdx"
                            v-on:click="handlerModal(notice.noticeIdx)">
                            <td>{{ notice.noticeIdx }}</td>
                            <td>{{ notice.title }}</td>
                            <td>{{ notice.createdDate.substr(0, 10) }}</td>
                            <td>{{ notice.author }}</td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="7">일치하는 검색 결과가 없습니다</td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </table>

        <!-- 페이지네이션 -->
        <Pagination 
            :totalItems="noticeList?.noticeCnt || 0"
            :items-per-page="itemPerPage"
            :max-pages-shown="5"
            :onClick="searchList"
            v-model="cPage"
        />

        <!-- 모달 -->
        <NoticeDetailTanstack v-if="modalStore.modalState"
            :idx="noticeIdx"
            @postSuccess="searchList"
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
    axios.post('/api/board/noticeListBody.do', param)
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
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0px 0px 0px;
    font-size: 18px;
    text-align: left;

    th,
    td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }

    th {
        background-color: #2676bf;
        color: #ddd;
    }

    /* 테이블 올렸을 때 */
    tbody tr:hover {
        background-color: #d3d3d3;
        opacity: 0.9;
        cursor: pointer;
    }
}
</style>
