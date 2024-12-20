import { Approval } from "../api"
import axios from "axios";

export const approvalListGetApi = async (injectedSearchValue, cPage, itemPerPage, path) => {
    const result = ref({
        resultList: ref([]),
        resultCount: ref(0),
    });
    const param = new URLSearchParams({
        ...injectedSearchValue.value,
        searchStDate: injectedSearchValue.value.searchStartDate || '',
        searchEdDate: injectedSearchValue.value.searchEndDate || '',
        currentPage: cPage.value,
        pageSize: itemPerPage.value,

    })
    try {
        console.log("여거ㅣ는 api닫다다다다다ㅏ")
        const res = await axios.post(Approval.GetApprovalList, param);
        switch (path) {
            case '/vue/manage-post/post.do':
                    resultList.value = res.data.approvalList;
                    resultCount.value = res.data.approvalPostCnt;
                break;
            case '/vue/manage-post/approval.do':
                    resultList.value = res.data.pendingList;
                    resultCount.value = res.data.pendingPostCnt;
                    break;
        }
        //if(path) cPage.value = 1; 
        console.log('res--------------------------->', res.data);
        console.log('result--------------------------->',result);

    } catch (error) {
        console.error('데이터 로딩 실패', error)
    }
    
    return result.value;
};


