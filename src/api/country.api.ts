import { AxiosInstance } from "axios";

class CountryAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getCountries() {
    try {
      const path = "/all";
      const response = await this.client.get(path);
      const data = response.data;
      const result = data;

      return result;
    } catch (error) {
      console.error("Country API Error => ", error);
    }
  }
}

export default CountryAPI;
