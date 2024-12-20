<template>
  <div class="signUpModal">
    <div class="signUpModalContent">
      <h1>회원가입</h1>
      <table>
        <tr>
          <th>회원 유형 <span class="required">*</span></th>
          <td>
            <select id="userType" name="userType">
              <option value="general">선택</option>
              <option value="general">일반회원</option>
              <option value="business">기업회원</option>
              </select>
          </td>
        </tr>
        <tr>
          <th>아이디 <span class="required">*</span></th>
          <td>
            <div class="table_span">
              <input type="text">
              <button>중복 확인</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>비밀번호 <span class="required">*</span></th>
          <td><input type="text"></td>
        </tr>
        <tr>
          <th>비밀번호 확인 <span class="required">*</span></th>
          <td><input type="text"></td>
        </tr>
        <tr>
          <th>이름 <span class="required">*</span></th>
          <td><input type="text"></td>
          <th>성별 <span class="required">*</span></th>
          <td>
            <select id="userType" name="userType">
              <option value="general">선택</option>
              <option value="general">남자</option>
              <option value="business">여자</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>생년월일 <span class="required">*</span></th>
          <td><input type="date"></td>
        </tr>
        <tr>
          <th>전화번호 <span class="required">*</span></th>
          <td><input type="text"></td>
        </tr>
        <tr>
          <th>이메일 <span class="required">*</span></th>
          <td><input type="text"></td>
        </tr>
        <tr>
          <th>우편번호 <span class="required">*</span></th>
          <td><input type="text"></td>
          <td>
            <button>우편번호 찾기</button>
          </td>
        </tr>
        <tr>
          <th>주소 <span class="required">*</span></th>
          <td><input type="text"></td>
        </tr>
        <tr>
          <th>상세주소</th>
          <td><input type="text"></td>
        </tr>
      </table>

      <button @click="signUpModalClose()">닫기</button>
      <button >회원가입</button>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modalState';
import { toast } from '@/common/toastMessage';

const modalStore = useModalStore();

const signUpModalClose = () => {
    modalStore.setModalState();
    toast("1111");
    toast.success("2222");
    toast.error("3333");
    toast.info("4444");
    toast.warning("5555");
};
</script> 

<style scoped>
/* 모달 전체 스타일 */
.signUpModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 모달 내용 박스 */
.signUpModalContent {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}


/* 테이블 스타일 */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th {
  text-align: left;
  width: 150px;
  font-size: 14px;
}

td {
  padding: 10px;
  width: auto;
}

.required {
  color: red;
}

input[type="text"], input[type="password"], input[type="email"], input[type="date"], select {
  width: auto;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="button"] {
  background-color: #007BFF;
  margin-left: 10px;
}

button[type="submit"] {
  background-color: #28a745;
  width: 100%;
  margin-top: 20px;
}

button:hover {
  background-color: #45a049;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.table_span{
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
