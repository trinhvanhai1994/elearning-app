export function textToSpeechVi(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    synth.speak(utterance);
}