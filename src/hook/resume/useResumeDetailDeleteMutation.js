import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { resumeDetailDeleteApi } from '../../api/resume/resumeDetailDeleteApi';

export const useResumeDetailDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['resumeDelete'],
        mutationFn: (idx) => resumeDetailDeleteApi(idx),
        onSuccess: () => {
            queryClient.invalidateQueries({ // 'noticeList'란 key로 NoticeMain에 있는 useQuery를 가동시켜 list 새로고침
                queryKey: ['resumeList']
            });
        },
    });
};