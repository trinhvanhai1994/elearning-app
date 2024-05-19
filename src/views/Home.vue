<template>
	<main id="Home-page">
		<h1 class="text-center">Mục Lục</h1>
		<h3>Chương 1. Từ loại (Parts of speech)</h3>
		<button class="btn btn-success" @click="speak($event.target.innerText)">Parts of speech</button>
		<div v-if="isDisabled">
			This is the content of the div.
		</div>
	</main>
</template>

<script>
import { textToSpeech } from "../utils/speechText.js";

export default {
	data() {
		return {
			isDisabled: false
		};
	},
  	methods: {
		speak(text) {
			textToSpeech(text);
			this.isDisabled = true;
		}
  }
};
</script>