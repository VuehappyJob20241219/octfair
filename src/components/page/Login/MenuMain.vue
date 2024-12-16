<template>
    <div class="container">
      <h1>오늘의 메뉴판</h1>
      <p v-if="imageUrl === 'loading'" class="loading-message">이미지 로딩중 ...</p>
      <p v-else-if="imageUrl === 'error'" class="error-message">이미지 로딩에 실패했습니다.</p>
      <div v-else class="image-wrapper">
        <img :src="imageUrl" alt="Scraped" class="styled-image" />
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'MenuMain',
    setup() {
        const imageUrl = ref('loading');

        onMounted(() => {
        axios
            .get('/dashboard/menu.do')
            .then((response) => { imageUrl.value = response.data.imageUrl; })
            .catch(() => { imageUrl.value = 'error'; });
        });
        console.log(imageUrl)

        return {
            imageUrl,
        };
    },
};
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
