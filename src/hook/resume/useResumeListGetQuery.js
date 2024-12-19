import { useQuery } from '@tanstack/vue-query';
import { resumeListGetApi } from '../../api/resume/resumeListGetApi';

export const useResumeListGetQuery = (cPage, itemPerPage) => {
    return useQuery({
        queryKey: ['resumeList', cPage], // watch() 효과, 'resumeList'처럼 따옴표(문자열)인 Key는 useQueryClient로 호출한 경우 감지된다.
        queryFn: () => resumeListGetApi(cPage, itemPerPage), // callback() 효과
        // staleTime: 1000 * 60, // 캐시유지 주기
        // refetchInterval: 1000, // 자동갱신 주기
    });
};