import axios from 'axios';
import { Notice } from '../api'
import { useUserInfo } from '@/stores/userInfo'

export const noticeDetailSaveApi = async (detailValue, idx, fileData) => {
    const userInfo = useUserInfo();
    
    const textData = {
        ...detailValue.value, // title
        context: detailValue.value.content, // 변수명 오타 차이
        loginId: userInfo.user.loginId,
    };

    const formData = new FormData();
    if(fileData.value)
        formData.append('file', fileData.value);
    formData.append('text', new Blob([JSON.stringify(textData)], {type:'application/json'}));
    
    await axios.post(Notice.SaveNoticeDetail, formData);
};