const baseUrl = 'https://api.jikan.moe/v3'

const jikanAPI = {
  getSeasonAnimes: `${baseUrl}/season`,
  getCurrentSeason: `${baseUrl}/season`,
  getTopAiringAnimes: `${baseUrl}/top/anime/1/airing`,
  getAnime: (id: string) => `${baseUrl}/anime/${id}`,
  getCharactersAndStaff: (id: string) => `${baseUrl}/anime/${id}/characters_staff`
}

export default jikanAPI