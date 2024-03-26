const { default: AxiosInstance } = require("utils/AxiosInstance");

class AuthApi {
  async signup(data, role) {
    try {
      const result = await AxiosInstance.post(
        `/auth/signup?role=${role}`,
        data
      );

      return await result.data;
    } catch (e) {
      Promise.reject(e);
    }
  }

  async check(data) {
    const result = await AxiosInstance.post("/auth/check", data);

    return await result.data;
  }

  async login(data) {
    const result = await AxiosInstance.post("/auth/login", data);

    return await result.data;
  }
}

const authApi = new AuthApi();

export default authApi;
