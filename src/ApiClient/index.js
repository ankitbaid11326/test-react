import axios from "axios";

class ApiClient {
  constructor() {
    const isDevEnv = process.env.NODE_ENV === "development";
    console.log("###", process.env.NODE_ENV);
    this.service = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: isDevEnv ? 10000 : 5000, // 5 Seconds in Production
    });
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  handleSuccess = (response) => {
    // if response needs to be modified
    return response;
  };

  handleError = (error) => {
    return Promise.reject(error);
  };
}

const apiClient = new ApiClient();
export default apiClient.service;
