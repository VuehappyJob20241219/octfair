import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { noticeDetailSaveApi } from '../../api/notice/noticeDetailSaveApi';
import { useRouter } from 'vue-router';

export const useNoticeDetailSaveMutation = (detailValue, idx, fileData) => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationKey: ['noticeSave'],
        mutationFn: () => noticeDetailSaveApi(detailValue, idx, fileData),
        onSuccess: () => {
            router.go(-1);
            queryClient.invalidateQueries({ // 'noticeList'란 key로 NoticeMain에 있는 useQuery를 가동시켜 list 새로고침
                queryKey: ['noticeList']
            });
        },
    });
};