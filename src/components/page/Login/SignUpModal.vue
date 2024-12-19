<template>
  <div class="signUpModal">
    <div class="signUpModalContent">
      <h1> 일반회원가입 </h1>

      <table></table>


    </div>
  </div>
</template>

<script setup>
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
</style>
