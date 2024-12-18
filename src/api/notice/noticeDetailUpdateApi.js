import axios from 'axios';

export const noticeDetailUpdateApi = async (detailValue, idx) => {
    const textData = {
        ...detailValue.value,
        noticeSeq: idx,
        context: detailValue.value.content,
    };
    await axios.post('/api/board/noticeUpdateBody.do', textData);
};