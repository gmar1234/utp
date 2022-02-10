import HttpClient from "../httpClient";
import Endpoints from "./endPoints";

const { getProduct } = Endpoints;

class ShopDataService {
  getRecord(product) {
    return HttpClient.request(getProduct({ product }));
  }
}

export default new ShopDataService();
