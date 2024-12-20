<template>
  <div class="signUpModal">
    <div class="signUpModalContent">
      <h1> 일반회원가입 </h1>

      <Button @click="signUpModalClose()">닫기</Button>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modalState';
import { toast } from '@/common/toastMessage';
  import { useEscKey } from '@/common/hook/useEscKey';

const modalStore = useModalStore();

const signUpModalClose = () => {
    modalStore.setModalState();
    toast("1111");
    toast.success("2222");
    toast.error("3333");
    toast.info("4444");
    toast.warning("5555");
};

//useEscKey(signUpModalClose);
</script> 

<style scoped>
.signUpModal{
  background-color: rgba(128, 128, 128, 0.7); /* 회색 배경, 투명도 60% */
  position: fixed; /* 화면에 고정 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 999; 다른 요소 위에 표시되도록 설정 */
}

.signUpModalContent {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 600px;
  font-size: 20px;  
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button {
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: none;
    color: white;
    width: 70px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px #999;
    background-color: #3bb2ea;
}
button:hover {
    background-color: #45a049;
}

button:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(2px);
}
</style>
