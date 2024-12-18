import axios from 'axios';
import { Notice } from '../api'

export const noticeImageGetApi = async (imageUrl, idx) => {
    let param = new URLSearchParams();
    param.append('noticeSeq', idx);
    const postAction = {
        url: Notice.GetNoticeImage,
        method: 'POST',
        data: param,
        responseType: 'blob',
    };

    await axios(postAction)
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            imageUrl.value = url;
        }
    );
};