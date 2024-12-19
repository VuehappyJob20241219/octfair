import axios from 'axios';
import { Resume } from '../api'

export const resumeAllCopyApi = async (idx) => {
    alert("api"+idx)
    const param = {
        resIdx: idx,
    };

    const result = await axios.post(Resume.CopyResumeAll, param);
    return result.data;
};