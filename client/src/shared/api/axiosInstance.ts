import axios from "axios";

/** TODO:
 *  1. Добавить интерцептор
 *  2. Поменять baseURL на production
 */

const token = localStorage.getItem("access_token")
export const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/api",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})