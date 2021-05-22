const baseUrl = 'https://api.jikan.moe/v3'

const jikanAPI = {
  getSeasonAnimes: `${baseUrl}/season`,
  getCurrentSeason: `${baseUrl}/season`,
  getTopAiringAnimes: `${baseUrl}/top/anime/1/airing`,
  getAnime: (id: string) => `${baseUrl}/anime/${id}`,
  getAnimes: (query: string) => `${baseUrl}/search/anime?${query}`,
  getCharactersAndStaff: (id: string) => `${baseUrl}/anime/${id}/characters_staff`,
  getReviews: (id: string) => `${baseUrl}/anime/${id}/reviews`,
  getArticles: (id: string) => `${baseUrl}/anime/${id}/news`,
  getTopics: (id: string) => `${baseUrl}/anime/${id}/forum`,
  getRecommendations: (id: string) => `${baseUrl}/anime/${id}/recommendations`
}

export default jikanAPI