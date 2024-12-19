import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { resumeAllCopyApi } from '../../api/resume/resumeAllCopyApi';
import { useRouter } from 'vue-router';

export const useResumeAllCopyMutation = (idx) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    alert("mutate"+idx)

    return useMutation({
        mutationKey: ['resumeCopy'],
        mutationFn: () => resumeAllCopyApi(idx),
        onSuccess: () => {
            router.go(-1);
            queryClient.invalidateQueries({ // 'noticeList'란 key로 NoticeMain에 있는 useQuery를 가동시켜 list 새로고침
                queryKey: ['resumeList']
            });
        },
    });
};