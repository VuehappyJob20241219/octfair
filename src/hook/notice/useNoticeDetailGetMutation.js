import { useQuery } from '@tanstack/vue-query';
import { noticeDetailGetApi } from '../../api/notice/noticeDetailGetApi';

export const useNoticeDetailGetMutation = (detailValue, idx, fileData) => {
    return useQuery({
        // enabled는 key가 아니라 활성여부임에도 true값으로 활성된때 초기 1번은 실행됨, 
        // so 유사key처럼 작동하기도 함 
        // '!!'는 null/false -> false로 치환해주는 로직
        enabled: !!idx,
        queryKey: ['noticeDetail'],
        queryFn: () => noticeDetailGetApi(detailValue, idx, fileData),
    });
};