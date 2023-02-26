import axios from 'axios';

// Запит на бекенд
export async function fetchSearchImage(page, searchQuery) {
  const API_URL = 'https://pixabay.com/api/';
  const KEY = '?key=33957392-15c8dcee5be6fcb8a0c7e759b';

  const responses = await axios.get(
    `${API_URL}${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );

  return await responses.data;
}
