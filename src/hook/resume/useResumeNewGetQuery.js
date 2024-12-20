import { useQuery } from '@tanstack/vue-query';
import { resumeNewGetApi } from '../../api/resume/resumeNewGetApi';

export const useResumeNewGetQuery = () => {
    return useQuery({
        queryKey: ['resumeNew'], // watch() 효과, 'resumeList'처럼 따옴표(문자열)인 Key는 useQueryClient로 호출한 경우 감지된다.
        queryFn: () => resumeNewGetApi(), // callback() 효과
        // staleTime: 1000 * 60, // 캐시유지 주기
        // refetchInterval: 1000, // 자동갱신 주기
    });
};