import axios from "axios";
import AxiosInstance from "utils/AxiosInstance";

class AuthAxios {

  login() {
    AxiosInstance.interceptors.request.use((config) => {
      // header에 access token 담기
    })
  }
}

const authAxiosIns = new AuthAxios()

export default authAxiosIns