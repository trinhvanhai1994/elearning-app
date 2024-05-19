<template>
	<main id="about-page">
		<h1>Chương 1. Từ loại</h1>

		<div>
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">1. Danh Từ<br>Nouns</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">2. Động Từ<br>Verbs</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">3. Tính Từ<br>Adjectives</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">4. Đại Từ<br>Pronouns</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">5. Trạng Từ<br>Adverbs</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">6. Lượng Từ<br>Qualifiers</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">7. Giới Từ<br>Prepositions</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">8. Liên Từ<br>Conjunctions</button>
				</li>
				</ul>
				<div class="tab-content" id="myTabContent">
				<div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
					<p class="mt-2">Danh từ(Nouns, được kí hiệu là n hoặc N)</p>
					<p>Là loại từ dùng để chỉ người, động vật, sự vật, ý tưởng, hoặc hiện tượng</p>
				</div>
				<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
					<p class="mt-2">Động từ(Verbs, được kí hiệu là v hoặc V)</p>
					<p>Là biểu thị hành động, trạng thái, quá khứ, hiện tại, tương lai, và nhiều khía cạnh khác của sự kiện</p>
				</div>
				<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
				<div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
				<div class="tab-pane fade" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
				<div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
				<div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
				<div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
			</div>
		</div>

	</main>
</template>

<script>

import { textToSpeechEn } from "../utils/en/speechText.js";

export default {
	data() {
		return {
		textToSpeak: ''
		};
	},
  	methods: {
		speak() {
			textToSpeechEn(this.textToSpeak);
		}
  }
};
</script>

