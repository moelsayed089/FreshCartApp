import axios from "axios";

const instance = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
});


export default instance