import axios from 'axios';
import { Notice } from '../api'

export const noticeDetailUpdateApi = async (detailValue, idx, fileData) => {
    const textData = {
        ...detailValue.value, // title
        content: detailValue.value.content, // 변수명 오타 차이
        noticeSeq: idx,
    };

    const formData = new FormData();
    if(fileData.value)
        formData.append('file', fileData.value);
    formData.append('text', new Blob([JSON.stringify(textData)], {type:'application/json'}));
    
    await axios.post(Notice.UpdateNoticeDetail, formData);
};