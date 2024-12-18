import axios from 'axios';
import { Notice } from '../api'

export const noticeListGetApi = async (injectedSearchValue, cPage, itemPerPage) => {
    const param = new URLSearchParams({
        ...injectedSearchValue.value,
        searchStDate: injectedSearchValue.value.searchStartDate || '',
        searchEdDate: injectedSearchValue.value.searchEndDate || '',
        currentPage: cPage.value,
        pageSize: itemPerPage.value,
    });

    const result = await axios.post(Notice.GetNoticeList, param);
    return result.data;
};