import { useQuery } from '@tanstack/vue-query';
import { noticeListGetApi } from '../../api/notice/noticeListGetApi';

export const useNoticeListGetQuery = (injectedSearchValue, cPage, itemPerPage) => {
    return useQuery({
        queryKey: ['noticeList', injectedSearchValue, cPage], // watch() 효과, 'noticeList'처럼 따옴표(문자열)인 Key는 useQueryClient로 호출한 경우 감지된다.
        queryFn: () => noticeListGetApi(injectedSearchValue, cPage, itemPerPage), // callback() 효과
        // staleTime: 1000 * 60, // 캐시유지 주기
        // refetchInterval: 1000, // 자동갱신 주기
    });
};