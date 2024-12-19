<template>
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
                    <th scope="col">근무지역</th>
                    <th scope="col">경력여부</th>
                    <th scope="col">마감일</th>
                    <th scope="col">등록일</th>
                    <th scope="col">승인여부</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="isLoading">...로딩중</template>
                <template v-if="isSuccess">
                    <template v-if="approvalList.approvalPostCnt > 0">
                        <tr v-for="approval in approvalList.approval" :key="approval.postIdx"
                            v-on:click="handlerGetDetailBtn(notice.noticeIdx)">
                            <td>{{ approval.postIdx }}</td>
                            <td>{{ approval.title }}</td>
                            <td>{{ approval.duties }}</td>
                            <td>{{ approval.workLocation }}</td>
                            <td>{{ approval.workLocation }}</td>
                            <td>{{ approval.workLocation }}</td>
                            <td>{{ approval.workLocation }}</td>
                        </tr>
                        
                    </template>
                    <template v-else>
                        <tr>
                            <td colspan="7">일치하는 검색 결과가 없습니다</td>
                        </tr>
                    </template>
                </template>
                <template v-if="isError">...에러</template>
            </tbody>
        </table>

        <!-- 페이지네이션 -->
        <Pagination 
            :totalItems="approvalList?.approvalPostCnt || 0"
            :items-per-page="itemPerPage"
            :max-pages-shown="5"
            :onClick="searchList"
            v-model="cPage"
        />
    </div>
    <router-view></router-view>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { useApprovalListGetQuery } from '../../../hook/notice/useNoticeListGetQuery';



const router = useRouter();
const injectedSearchValue = inject('providedSearchValue');
const itemPerPage = ref(6);
const cPage = ref(1);


useApprovalListGetQuery(injectedSearchValue, cPage, itemPerPage);
</script>

<style>

</style>