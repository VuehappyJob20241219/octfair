import { useQuery } from "@tanstack/vue-query"
import { approvalListGetApi } from "../../api/approval/approvalListGetApi"

export const useApprovalListGetQuery = (injectedSearchValue, cPage, itemPerPage, path) => {
    return useQuery({
        queryKey: ['resultData', injectedSearchValue, cPage, path],
        queryFn: () => approvalListGetApi(injectedSearchValue, cPage, itemPerPage, path),
        
    });
};