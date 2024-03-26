import AxiosInstance from "utils/AxiosInstance"

class OAuthApi{
  async getRedirectUrl(provider) {
    const result = await AxiosInstance.get(`/oauth2/login/${provider}`)
  
    return await result.data;
  }

  async login(provider, code) {
    const result = await AxiosInstance.get(`/oauth2/callback/${provider}?code=${code}`)
    return await result.data
  }
}

const oAuthApi = new OAuthApi()

export default oAuthApi