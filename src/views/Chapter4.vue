<template>
  <div>
    <textarea v-model="englishText" rows="4" cols="50"></textarea>
    <button @click="translateAndShowEn()">Dịch sang tiếng Việt</button>
    <button @click="translateAndShowVi()">Dịch sang tiếng Anh</button>
    <div></div>
    <button @click="speakEn()">Phát âm</button>
    <div class="mt-4">
      <p>{{ vietnameseTextResponse }}</p>
      <p>{{ englishTextResponse }}</p>
    </div>
  </div>
</template>

<script>
import { translateTextEn } from "../utils/en/translation.js";
import { textToSpeechEn } from "../utils/en/speechText.js";

import { translateTextVi } from "../utils/vi/translation.js";

export default {
  data() {
    return {
      englishText: "",
      vietnameseTextResponse: "",
      englishTextResponse: ""
    };
  },
  methods: {
    async translateAndShowEn() {
      try {
        this.vietnameseTextResponse = await translateTextEn(this.englishText);
      } catch (error) {

      }
    },
    async translateAndShowVi() {
      try {
        this.englishTextResponse = await translateTextVi(this.englishText);
      } catch (error) {

      }
    },
    async speakEn() {
			textToSpeechEn(this.englishText);
		}
  }
};
</script>