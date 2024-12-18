import axios from 'axios';
import { Notice } from '../api'

export const noticeDetailGetApi = async (detailValue, idx, fileData) => {
    const result = await axios.post(Notice.GetNoticeDetail, {noticeSeq : idx});
    return result.data;
};