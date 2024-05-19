<template>
	<div>
		<textarea v-model="textToSpeak" rows="4" cols="50"></textarea>
		<button @click="speak">Chuyển thành giọng nói</button>
	</div>
</template>

<script>
import { textToSpeech } from "../utils/speechText.js";

export default {
	data() {
		return {
			textToSpeak: ''
		};
	},
  	methods: {
		speak() {
			textToSpeech(this.textToSpeak);
		}
	}
};
</script>

<style scoped>
/* CSS styles here */
</style>