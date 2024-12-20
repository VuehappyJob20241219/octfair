<template>
    <div class="divResumeList">
        현재 페이지: {{ cPage }} 총 개수: {{ resumeList?.resume?.length || 0 }}
        <table>
            <colgroup>
                <col width="50%" />
                <col width="35%" />
                <col width="15%" />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">이력서 제목</th>
                    <th scope="col">관리</th>
                    <th scope="col">최종 수정일</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="isLoading">...로딩중</template>
                <template v-if="isSuccess">
                    <template v-if="resumeList?.resume?.length > 0">
                        <tr v-for="resume in resumeList.resume" 
                        :key="resume.resIdx" 
                        @click="handlerGetResumeDetail(resume.resIdx)"
                        >
                            <td>{{ resume.resTitle }}</td>
                            <td>
                                <CommonButton @click="handlerCopyResumeBtn(resume.resIdx)">복사하기</CommonButton>
                                <CommonButton @click="handlerDeleteResumeBtn(resume.resIdx)">삭제하기</CommonButton>
                            </td>
                            <td>{{ resume.updatedDate.substr(0, 10) }}</td>
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
        <!-- <Pagination 
            :totalItems="resumeList?.resume?.length || 0"
            :items-per-page="itemPerPage"
            :max-pages-shown="5"
            :onClick="searchList"
            v-model="cPage"
        /> -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useResumeListGetQuery } from '../../../../hook/resume/useResumeListGetQuery';
import { useResumeDetailCopyMutation } from "../../../../hook/resume/useResumeDetailCopyMutation";
import { useResumeDetailDeleteMutation } from "../../../../hook/resume/useResumeDetailDeleteMutation";
import Pagination from '../../../common/Pagination.vue';

const router = useRouter();
const itemPerPage = ref(12);
const cPage = ref(1);

const searchList = () => {
    queryClient.invalidateQueries({ // 'resumeList'란 key로 ResumeMain에 있는 useQuery를 가동시켜 list 새로고침
        queryKey: ['resumeList']
    })
};

// const handlerGetDetailBtn = (param) => {
//     router.push({ // URLpath를 push해도 되고 router(index.js)에 명시된 name을 push해도 된다.
//         name: 'resumeDetail',
//         params: { idx : param },
//     });
// };

const {
    data: resumeList, // useQuery(useResumeListSearchQuery) 내 callback함수 return값이 입력된다
    isLoading,
    isSuccess,
    isError,
    isStale, // 캐시유지 주기
    refetch, // 자동갱신 주기
} = useResumeListGetQuery(cPage, itemPerPage);
const { mutate: handlerCopyResumeBtn, } = useResumeDetailCopyMutation();
const { mutate: handlerDeleteResumeBtn, } = useResumeDetailDeleteMutation();
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