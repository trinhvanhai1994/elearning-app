<template>
	<main id="Home-page">
		<h1 class="text-center">Mục Lục</h1>
		<h3>Chương 1. Từ loại (Parts of speech)</h3>
		<button class="btn btn-success" @click="speak($event.target.innerText)">Parts of speech</button>
		<div v-if="isDisabled">
			<p>{{ englishTextResponse }}</p>
		</div>
	</main>
</template>

<script>
import { textToSpeechEn } from "../utils/en/speechText.js";
import { translateTextEn } from "../utils/en/translation.js";

export default {
	data() {
		return {
			isDisabled: false,
			englishTextResponse: ""
		};
	},
  	methods: {
		async speak(text) {
			textToSpeechEn(text);
			this.englishTextResponse = await translateTextEn(text);
			this.isDisabled = true;
		}
  	}
};
</script>