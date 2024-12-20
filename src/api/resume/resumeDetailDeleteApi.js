import axios from 'axios';
import { Resume } from '../api'

export const resumeDetailDeleteApi = async (idx) => {
    const result = await axios.post(Resume.DeleteResumeDetail + "?resIdx=" + idx);
    return result.data;
};