import axios from "axios";
const instance = axios.create({
    baseURL:"http://localhost/frizerski/php_rest/api"
})
export default instance;