import axios from 'axios';
import { Resume } from '../api'

export const resumeDetailCopyApi = async (idx) => {
    const result = await axios.post(Resume.CopyResumeDetail, { resIdx: idx});
    return result.data;
};