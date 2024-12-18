import axios from 'axios';

export const noticeDetailUpdateApi = async (detailValue, idx, fileData) => {
    const textData = {
        ...detailValue.value,
        noticeSeq: idx,
        context: detailValue.value.content,
    };
    const formData = new FormData();
    if(fileData.value)
        formData.append('file', fileData.value);
    formData.append('text', new Blob([JSON.stringify(textData)], {type:'application/json'}));
    await axios.post('/api/board/noticeUpdateFileForm.do', formData);
};