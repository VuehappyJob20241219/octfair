<template>
    <div class="container">
        <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            width="560" 
            height="315" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
        >
        </iframe>
        <h1>오늘의 메뉴</h1>
        <div v-if="imageUrl === 'loading'" class="loading-message">
            <img src="../../../assets/loading_circle.gif" alt="로딩 이미지" class="styled-image" />
        </div>
        <div v-else-if="imageUrl === 'error'" class="error-message">이미지 로딩에 실패했습니다.>
            <img src="../../../assets/noImage.jpg" alt="빈 이미지" class="styled-image" />
        </div>
        <div v-else class="image-wrapper">
            <img :src="imageUrl" alt="오늘의 메뉴" class="styled-image" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const imageUrl = ref('loading');

onMounted(async () => {
    const baseURL = '/api';
    const apiURL = '/dashboard/menu.do';
    const menuURL = 'https://pf.kakao.com/_QLvRn'; // 좌측은 이츠푸드, 우측은 벽산더이룸푸드: "https://pf.kakao.com/_xdLzxgG"
    const queryParam = `?menuURL=${menuURL}`;

    try {
        const response = await axios.get(`${baseURL}${apiURL}${queryParam}`);
        imageUrl.value = `${baseURL}${response.data.imageUrl}`;
    } catch (error) {
        imageUrl.value = 'error';
    }
});
</script>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
    font-family: 'Arial', sans-serif;
}

.container h1 {
    font-size: 2rem;
    color: #333;
}

.image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f4f0e1;
    border: 5px solid gold;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 60%;
    max-width: 600px;
    margin-top: 20px;
    position: relative;
}

.styled-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    border: 3px solid #d4af37;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    object-fit: cover;
}

.loading-message {
    font-size: 1.2rem;
    color: #555;
}

.error-message {
    font-size: 1.2rem;
    color: red;
}
</style>
