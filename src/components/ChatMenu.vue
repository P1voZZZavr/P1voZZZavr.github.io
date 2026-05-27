<script setup>
    import { ref } from 'vue';
    const props = defineProps({
        user:{
            type: Object,
            required: true,
        }
    });
    const emit = defineEmits(['delete-message', 'add-message'])
    const del = (i) => {
        emit('delete-message', i)
    }
    const elem = ref("");
    const add_elem = () => {
        if(!elem.value.trim()) return
        emit('add-message', elem.value)
        elem.value = ""
    }
</script>

<template>
    <div class="chat">
        <div class="messages">
            <div v-for="(mess,i) in props.user.messages" :class="{my: mess.my}" class="mess">
                <div class="message"><p>{{ mess.message }}</p><img @click="del(i)" :class="{myimg: mess.my}" src="../assets/trash.png" alt=""></div>
            </div>            
        </div>
        <input @keydown.enter="add_elem" v-model="elem" id="search" type="text">
    </div>
</template>

<style scoped>
    .messages{
        height: 90%;
        width: 100%;
        overflow-y: auto;
    }
    img{
        height: 25px;
        position: absolute;
        top: 5px;
        right: 10px;
        display: none;
    }
    .myimg{
        display: block;
    }
    .message{
        color: white;
        width: 30%;
        text-align: left;
        margin: 10px 15px 5px 15px;
        position: relative;
    }
    p{
        margin: 1px 0px 0px 5px;
        background-color: #303030;
        border-radius: 5px;
        padding: 5px;
        overflow-wrap: anywhere; 
    }
    .mess{
        display: flex;
        justify-content: left;
        width: 100%;
        
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
        align-items: center;
        justify-content: space-between;
    }
    #search{
        width: 97%;
        background-color: #303030;
        border: 2px solid #454545;
        border-radius: 10px;
        color: white;
        margin: 0px 0px 10px 0px;
    }
</style>