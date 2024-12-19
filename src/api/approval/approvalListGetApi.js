import { Approval } from "../api";

export const approvalListGetApi = async (injectedSearchValue, cPage, itemPerPage) => {
    const param = new URLSearchParams({
        ...injectedSearchValue.value,
        searchStDate: injectedSearchValue.value.searchStartDate || '',
        searchEdDate: injectedSearchValue.value.searchEndDate || '',
        currentPage: cPage.value,
        pageSize: itemPerPage.value,
    });

    const result = await axios.post(Approval.GetApprovalList, param);
    return result.data;
};