import { AxiosInstance } from "axios";
import { TCountry } from "../types/country.type";

class CountryAPI {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getCountries() {
    try {
      const path = "/all";
      const response = await this.client.get<TCountry[]>(path);
      const result = response.data;

      return result;
    } catch (error) {
      console.error("Country API Error => ", error);
    }
  }
}

export default CountryAPI;
