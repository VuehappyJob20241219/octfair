
import { useQuery } from '@tanstack/vue-query';
import { approvalListGetApi } from '../../api/approval/approvalListGetApi';


export const useApprovalListGetQuery = (injectedSearchValue, cPage, itemPerPage) => {
    return useQuery({
        queryKey: ['approvalList', injectedSearchValue, cPage], 
        queryFn: () => approvalListGetApi(injectedSearchValue, cPage, itemPerPage), // callback() 효과
        // staleTime: 1000 * 60, // 캐시유지 주기
        // refetchInterval: 1000, // 자동갱신 주기
    });
};