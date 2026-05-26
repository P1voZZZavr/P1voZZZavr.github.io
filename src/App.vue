<script setup>
	import AppChats from './components/AppChats.vue';
	import ChatMenu from './components/ChatMenu.vue';
	import { ref } from 'vue';
	const chats = ref({user: {messages:[{message:'Hi', my:false}, {message:'How are you?', my:false},{message:'Fine', my:true}],name:"User" },admin: {messages:["Hello", "What's your name?"], name:"Admin"},})
</script>

<template>
	<div style="display: flex;height: 100%;">
		<div class="w-25" style="height: 100%;"><AppChats :chats="chats" /></div>
		<div class="w-75" style="height: 100%;"><ChatMenu :user="chats.user" /></div>		
	</div>
</template>

<style scoped>
	.w-25{
		background-color: #303030;
	}
</style>