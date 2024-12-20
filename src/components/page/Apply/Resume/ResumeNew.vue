<template>
    <ContextBox>이력서 작성</ContextBox>
    <br>
    <div class="garo_wrapper">
        <label class="title-input">제목: </label>
        <input type="text" v-model="resumeNew.result.resTitle">
    </div>
    <div class="garo_wrapper">
        <label class="readonly-input">이름: </label>
        <input type="text" v-model="resumeNew.result.userNm" readonly>
    </div>
    <div class="garo_wrapper">
        <label class="readonly-input">이메일: </label>
        <input type="text" v-model="resumeNew.result.email" readonly>
    </div>
    <div class="garo_wrapper">
        <label class="readonly-input">전화번호: </label>
        <input type="text" v-model="resumeNew.result.phone" readonly>
    </div>

    <div class="resumeDetail_body_header">간단소개글</div>
    <div class="border" />
    <div class="sero_wrapper">
        <p class="resumeDetail_body_guide_text">
        • 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요. <br />
        • 3~5줄로 요약하여 작성하는 것을 추천합니다!
        </p>
        <textarea></textarea>
    </div>
</template>

<script setup>
import { useResumeNewGetQuery } from '../../../../hook/resume/useResumeNewGetQuery';

const {
    data: resumeNew, // useQuery(useResumeListSearchQuery) 내 callback함수 return값이 입력된다
    isLoading,
    isSuccess,
    isError,
    isStale, // 캐시유지 주기
    refetch, // 자동갱신 주기
} = useResumeNewGetQuery();
</script>

<style lang="scss" scoped>
.garo_wrapper {
    display: flex;
    align-items: center; /* 수직 정렬 */
    width: 100%; /* 부모 요소의 전체 너비 차지 */
    margin-bottom: 15px; /* 그룹 간 간격 */
}

.sero_wrapper {
    display: flex;
    flex-direction: column; /* 세로 방향으로 나열, 없으면 기본값 가로나열 */
    justify-content: center; /* 수평 정렬 */
    width: 100%; /* 부모 요소의 전체 너비 차지 */
    margin-bottom: 15px; /* 그룹 간 간격 */
}

label {
    flex: 0 0 80px; /* 고정 너비 설정 (필요에 따라 조정) */
    margin-right: 10px; /* label과 input 사이 간격 */
    font-weight: bold; /* 라벨 강조 */
}

input,
textarea {
    flex: 1; /* 나머지 공간을 입력 필드가 차지 */
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
}

input:focus,
textarea:focus {
    flex: 1; /* 나머지 공간을 입력 필드가 차지 */
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
    border-color: #3498db;  /* 포커스 시 테두리 색상 변경 (파란색) */
    background-color: #e6f7ff;  /* 포커스 시 배경색 변경 (연한 파란색) */
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.6); /* 파란색 그림자 추가 */
    outline: none;
}

.resumeDetail_body_header {
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: bold;
}

.resumeDetail_body_guide_text {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 10px;
}
</style>