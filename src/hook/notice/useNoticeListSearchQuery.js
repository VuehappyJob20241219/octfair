import { useQuery } from '@tanstack/vue-query';
import { noticeListSearchApi } from '../../api/notice/noticeListSearchApi';

export const useNoticeListSearchQuery = (injectedValue, cPage) => {
    return useQuery({
        queryKey: ['noticeList', injectedValue, cPage], // watch() 효과
        queryFn: () => noticeListSearchApi(injectedValue.value, cPage.value), // searchList함수는 먼저 위에 이미 서술되어 있어야함
        // staleTime: 1000 * 60, // 신선여부판단 주기
        // refetchInterval: 1000, // 갱신 주기
    });
};