<template>
  <div>
    <textarea v-model="englishText" rows="4" cols="50"></textarea>
    <button @click="translateAndShow()">Dịch sang tiếng Việt</button>
    <div></div>
    <button @click="speak()">Phát âm</button>
    <div class="mt-4">
      <p>{{ vietnameseText }}</p>
    </div>
  </div>
</template>

<script>
import { translateText } from "../utils/translation.js";
import { textToSpeech } from "../utils/speechText.js";

export default {
  data() {
    return {
      englishText: "",
      vietnameseText: ""
    };
  },
  methods: {
    async translateAndShow() {
      try {
        this.vietnameseText = await translateText("englishText");
      } catch (error) {
        // Xử lý lỗi nếu cần
      }
    },
    speak() {
			textToSpeech("englishText");
		}
  }
};
</script>