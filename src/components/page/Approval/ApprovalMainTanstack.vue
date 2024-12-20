<template>
  <div class="divNoticeList">
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
                    <!-- <template v-if="resultData.resultCount> 0">
                        <tr v-for=" approval in resultData.resultList" :key="approval.postIdx">
                            <td>{{ approval.postIdx }}</td>
                            <td>{{ approval.title }}</td>
                            <td>{{ approval.workLocation }}</td>
                            <td>{{ approval.expRequired}}</td>
                            <td>{{ approval.endDate}}</td>
                            <td>{{ approval.endDate }}</td>
                            <td>{{ approval.appStatus }}</td>
                        </tr>
                    </template>
                   
                    <template v-else>
                        <tr>
                            <td colspan="7">일치하는 검색 결과가 없습니다</td>
                        </tr>
                    </template> -->
          
              
            </tbody>
        </table>

        <!-- 페이지네이션 -->
        <!-- :totalItems="resultData.resultCount || 0" -->
        <Pagination 
            :items-per-page="itemPerPage"
            :max-pages-shown="5"
            :onClick="searchList"
            v-model="cPage"
        />
    </div>
    <router-view></router-view>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useApprovalListGetQuery } from '../../../hook/approval/useApprovalListGetQuery';

const route = useRoute();
const injectedSearchValue = inject('providedSearchValue');
const itemPerPage = ref(6);
const cPage = ref(1);

const path = route.path;

const {
        data: resultData, // useQuery로 가져온 데이터
        isLoading,
        isSuccess,
        isError,
} = useApprovalListGetQuery(injectedSearchValue, cPage, itemPerPage, path);


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
    
    /* 승인여부 열 */
    th:nth-child(7), td:nth-child(7) {
        min-width: 100px; /* 최소 너비 */
    }
    /* 등록일 열 */
    th:nth-child(6), td:nth-child(6) {
        min-width: 120px; /* 등록일 최소 너비 */
    }/* 마감일 열 */
    th:nth-child(5), td:nth-child(5) {
        min-width: 120px; /* 마감일 최소 너비 */
    }

    /* 테이블 올렸을 때 */
    tbody tr:hover {
        background-color: #d3d3d3;
        opacity: 0.9;
        cursor: pointer;
    }
}
</style>