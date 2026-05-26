<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        user:{
            type: Object,
            required: true,
        }
    });
</script>

<template>
    <div class="chat">
        <div v-for="mess in props.user.messages" :class="{my: mess.my}" class="mess" style="width: 100%;">
            <div class="message"><p>{{ mess.message }}</p><img :class="{myimg: mess.my}" src="../assets/trash.png" alt=""></div>
        </div>
        <input id="search" type="text">
    </div>
</template>

<style scoped>
    img{
        height: 25px;
        position: absolute;
        top: 2px;
        right: 10px;
        display: none;
    }
    .myimg{
        display: block;
    }
    .message{
        color: white;
        background-color: #303030;
        width: 30%;
        height: 30px;
        text-align: center;
        margin: 10px 15px 0px 15px;
        border-radius: 5px;
        position: relative;
    }
    .mess{
        display: flex;
        justify-content: left;
    }
    .my{
        justify-content: right;
    }
    .chat{
        margin: 20px;
        background-color: #292929;
        height: 75%;
        border-radius: 25px;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    #search{
        position: absolute;
        bottom: 15px;
        left: 12px;
        width: 97%;
        background-color: #303030;
        border: 2px solid #454545;
        border-radius: 10px;
        color: white;
        
    }
</style>