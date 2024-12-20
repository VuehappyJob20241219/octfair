import axios from 'axios';
import { Resume } from '../api'
import { useUserInfo } from '@/stores/userInfo'

export const resumeNewGetApi = async () => {
    const userInfo = useUserInfo();

    const param = {
        loginId: userInfo.user.loginId,
        userNm: userInfo.user.userNm,
        userType: userInfo.user.userType,
    };

    const result = await axios.post(Resume.GetResumeNew, param);
    return result.data;
};