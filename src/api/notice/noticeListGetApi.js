import axios from 'axios';
import { Notice } from '../api'

export const noticeListGetApi = async (injectedSearchValue, cPage, itemPerPage) => {
    const param = new URLSearchParams({
        currentPage: cPage.value,
        pageSize: itemPerPage.value,
        ...injectedSearchValue.value, // NoticeSearch에서 주입된 cPage=1을 유지하기위해해 inject를 cPage보다 후순서로로
        searchStDate: injectedSearchValue.value.searchStartDate || '',
        searchEdDate: injectedSearchValue.value.searchEndDate || '',
    });

    const result = await axios.post(Notice.GetNoticeList, param);
    return result.data;
};