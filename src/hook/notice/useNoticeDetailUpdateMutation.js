import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { noticeDetailUpdateApi } from '../../api/notice/noticeDetailUpdateApi';
import { useRouter } from 'vue-router';

export const useNoticeDetailUpdateMutation = (detailValue, idx, fileData) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationKey: ['noticeUpdate'],
        mutationFn: () => noticeDetailUpdateApi(detailValue, idx, fileData),
        onSuccess: () => {
            router.go(-1);
            queryClient.invalidateQueries({ // 'noticeList'란 key로 NoticeMain에 있는 useQuery를 가동시켜 list 새로고침
                queryKey: ['noticeList']
            });
        },
    });
};