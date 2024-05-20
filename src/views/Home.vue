<template>
	<main id="Home-page">
		<h1 class="text-center animated-text">Mục Lục</h1>
		<section>
			<h3>
				<span class="span-1 beautiful-text">Chương 1. Từ loại </span>
				<span class="span-2">(Parts of speech</span>
				<span class="span-3"><i @click="speak1('Parts of speech')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h3>

			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.1. Danh Từ </span>
				<span class="span-2">(Nouns</span>
				<span class="span-3"><i @click="speak1('Nouns')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.2. Động Từ </span>
				<span class="span-2">(Verbs</span>
				<span class="span-3"><i @click="speak1('Verbs')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.3. Tính Từ </span>
				<span class="span-2">(Adjectives</span>
				<span class="span-3"><i @click="speak1('Adjectives')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.4. Đại Từ </span>
				<span class="span-2">(Pronouns</span>
				<span class="span-3"><i @click="speak1('Pronouns')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.5. Trạng Từ </span>
				<span class="span-2">(Adverbs</span>
				<span class="span-3"><i @click="speak1('Adverbs')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.6. Lượng Từ </span>
				<span class="span-2">(Qualifiers</span>
				<span class="span-3"><i @click="speak1('Qualifiers')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.7. Giới Từ </span>
				<span class="span-2">(Prepositions</span>
				<span class="span-3"><i @click="speak1('Prepositions')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 1.8. Liên Từ </span>
				<span class="span-2">(Conjunctions</span>
				<span class="span-3"><i @click="speak1('Conjunctions')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
		</section>

		<section>
			<h3>
				<span class="span-1 beautiful-text">Chương 2. Thì </span>
				<span class="span-2">(Tense</span>
				<span class="span-3"><i @click="speak1('Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h3>

			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.1. Thì hiện tại đơn </span>
				<span class="span-2">(Present Simple Tense</span>
				<span class="span-3"><i @click="speak1('Present Simple Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.2. Thì hiện tại tiếp diễn </span>
				<span class="span-2">(Present Continuous Tense</span>
				<span class="span-3"><i @click="speak1('Present Continuous Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.3. Thì hiện tại hoàn thành </span>
				<span class="span-2">(Present Perfect Tense</span>
				<span class="span-3"><i @click="speak1('Present Perfect Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.4. Thì hiện tại hoàn thành tiếp diễn </span>
				<span class="span-2">(Present Perfect Continuous Tense</span>
				<span class="span-3"><i @click="speak1('Present Perfect Continuous Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.5. Thì quá khứ </span>
				<span class="span-2">(Past Simple Tense</span>
				<span class="span-3"><i @click="speak1('Past Simple Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.6. Thì quá khứ tiếp diễn </span>
				<span class="span-2">(Past Continuous Tense</span>
				<span class="span-3"><i @click="speak1('Past Continuous Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.7. Thì quá khứ hoàn thành </span>
				<span class="span-2">(Past Perfect Tense</span>
				<span class="span-3"><i @click="speak1('Past Perfect Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.8. Thì quá khứ hoàn thành tiếp diễn </span>
				<span class="span-2">(Past Perfect Continuous Tense</span>
				<span class="span-3"><i @click="speak1('Past Perfect Continuous Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
			<h4>
				<span class="pl-4 span-1 lesson-text">Bài 2.9. Thì tương lai đơn </span>
				<span class="span-2">(Future Simple Tense</span>
				<span class="span-3"><i @click="speak1('Future Simple Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h4>
		</section>

		<section>
			<h3>
				<span class="span-1 beautiful-text">Chương 3. Thì </span>
				<span class="span-2">(Tense</span>
				<span class="span-3"><i @click="speak1('Tense')" class="fas fa-microphone"></i><span>)</span></span>
				<span class="span-4 shadowed-text-expalain">
					<h6 v-if="!isDisabled1"> {{ englishTextResponse }} | {{ ipaResponse }}</h6>
				</span>
			</h3>
		</section>
	</main>
</template>

<script>
import { textToSpeechEn } from "../utils/en/speechText.js";
import { translateTextEn } from "../utils/en/translation.js";
import { getIpaText } from "../utils/en/getIpaText.js";

export default {
	data() {
		return {
			isDisabled1: false,
			isDisabled2: false,
			englishTextResponse: "",
			ipaResponse: ""
		};
	},
  	methods: {
		async speak1(text) {
			textToSpeechEn(text);
			this.englishTextResponse = await translateTextEn(text);
			this.isDisabled1 = false;
			this.isDisabled2 = true;
			this.ipaResponse = await getIpaText(text);
		},
		async speak2(text) {
			textToSpeechEn(text);
			this.englishTextResponse = await translateTextEn(text);
			this.isDisabled2 = false;
			this.isDisabled1 = true;
			this.ipaResponse = await getIpaText(text);
		}
  	}
};
</script>

<style scoped>
body {
    background-color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.animated-text {
    font-family: 'Press Start 2P', cursive;
    font-size: 48px;
    color: #d35b2c;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #138122, 0 0 40px #138122, 0 0 50px #138122, 0 0 60px #138122, 0 0 70px #138122;
    animation: glow 1s infinite alternate;
	padding-bottom: 50px;
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #138122, 0 0 40px #138122, 0 0 50px #138122, 0 0 60px #ff00ff, 0 0 70px #138122;
    }
    to {
        text-shadow: 0 0 20px #fff, 0 0 30px #138122, 0 0 40px #138122, 0 0 50px #138122, 0 0 60px #138122, 0 0 70px #138122, 0 0 80px #138122;
    }
}

.beautiful-text {
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  color: #bb1b51;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
  border-radius: 5px;
  background-color: #fff9;
  margin-bottom: 10px;
}

.lesson-text {
  font-family: 'Dancing Script', cursive;
  font-size: 20px;
  color: #15924e;
  padding-left: 20px;
  padding: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.span-1,.span-2,.span-3,.span-4{
  display: inline-block;
  margin-right: 10px;
}

.shadowed-text-expalain {
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  color: #0c0c01;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

i {
  color: #15924e;
  font-size: 24px;
}
</style>