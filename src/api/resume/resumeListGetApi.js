import axios from 'axios';
import { Resume } from '../api'
import { useUserInfo } from '@/stores/userInfo'

export const resumeListGetApi = async (cPage, itemPerPage) => {
    const userInfo = useUserInfo();

    const param = {
        currentPage: cPage.value,
        pageSize: itemPerPage.value,
        loginId: userInfo.user.loginId,
        userNm: userInfo.user.userNm,
        userType: userInfo.user.userType,
    };

    const result = await axios.post(Resume.GetResumeList, param);
    return result.data;
};