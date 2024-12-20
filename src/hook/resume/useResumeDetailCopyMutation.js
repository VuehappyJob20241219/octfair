import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { resumeDetailCopyApi } from '../../api/resume/resumeDetailCopyApi';

export const useResumeDetailCopyMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['resumeCopy'],
        mutationFn: (idx) => resumeDetailCopyApi(idx),
        onSuccess: () => {
            queryClient.invalidateQueries({ // 'noticeList'란 key로 NoticeMain에 있는 useQuery를 가동시켜 list 새로고침
                queryKey: ['resumeList']
            });
        },
    });
};