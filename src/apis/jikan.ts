const baseUrl = 'https://api.jikan.moe/v3'

const jikanAPI = {
  getSeasonAnimes: `${baseUrl}/season`,
  getCurrentSeason: `${baseUrl}/season`,
  getTopAiringAnimes: `${baseUrl}/top/anime/1/airing`
}

export default jikanAPI