export const Notice = {
    GetNoticeList: '/api/board/noticeListJson.do',
    GetNoticeImage: '/api/board/noticeDownload.do',
    GetNoticeDetail: '/api/board/noticeDetailBody.do',
    SaveNoticeDetail: '/api/board/noticeSaveFileForm.do',
    UpdateNoticeDetail: '/api/board/noticeUpdateFileForm.do',
    DeleteNoticeDetail: '/api/board/noticeDeleteBody.do',
}
export const Resume = {
    GetResumeList: '/api/apply/resumeListBody.do',      // JSON ----> RequestBody
    CopyResumeDetail: '/api/apply/resumeCopyBody.do',   // JSON ----> RequestBody
    DeleteResumeDetail: '/api/apply/resumeDelete.do',   // Param ----> RequestParam
    GetResumeNew: '/api/apply/resumeNew.do',         // JSON --(POST)--> RequestBody 이력서 새 등록 페이지에서, 이름/시간 등을 기반을 제목 등을 자동작성 해놓아주기위한 API
}