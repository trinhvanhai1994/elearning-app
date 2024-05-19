import axios from 'axios';

const API_KEY = 'AIzaSyAOg73FiIcZxRLnOplr2YhWeWJKycNs6qk';

export async function translateText(text) {
  try {
    const response = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
      q: text,
      source: 'en',
      target: 'vi'
    });
    return response.data.data.translations[0].translatedText;
    console.log('translate response =' + response.data.data.translations[0].translatedText)
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}