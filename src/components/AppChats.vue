<script setup>  
    import { ref } from 'vue';
    defineProps(['chats'])
    
    const emit = defineEmits(['change', 'new'])

    const user_change = (i) => {
        emit('change',i);
    }

    const new_user = () => {
        emit('new')
    }

</script>

<template>
<div @click="user_change(i)" v-for="(user,i) in chats" class="card bg-dark text-white d-flex flex-row">
  <div class="card-body">
    <h5 class="card-title">{{user.name}}</h5>
    <p class="card-text">{{ user.messages[user.messages.length - 1].message }}</p>
  </div>
  <div class="img"><img class="user" src="../assets/user.png" alt=""></div>
</div>
<div @click="new_user" class="card bg-dark text-white d-flex flex-row">
  <div class="card-body">
    <h5 class="card-title">New</h5>
    <p class="card-text">Добавить нового пользователя</p>
  </div>
  <div class="img"><img class="user" src="../assets/user.png" alt=""></div>
</div>
</template>

<style scoped>
    :root{
        background-color: #333741;
    }
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
    }
    .user{
        height: 50px;
        width: 50px;
    }
</style>