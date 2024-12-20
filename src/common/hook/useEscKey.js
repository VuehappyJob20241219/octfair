import { onMounted } from 'vue';
import { useModalStore } from '@/stores/modalState';

// ESC 눌렸을때 모달창 닫기
export function useEscKey() {
    const modalStore = useModalStore();

    const onKeyDown = (event) => {
        if (event.key === 'Escape') {
            modalStore.setModalState(false);
            console.log("모달창");
        }
    };
    onMounted(() => {
        window.addEventListener('keydown', onKeyDown);
    });
    onUnmounted(() => {
        window.removeEventListener('keydown', onKeyDown);
    });
}
