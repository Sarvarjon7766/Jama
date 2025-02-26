import axios from "axios";

// Axios konfiguratsiyasini sozlash
const instance = axios.create({
    baseURL: "http://localhost:5000", // Backend server manzili
    withCredentials: true, // Cookies va session ma'lumotlarini yuborishga ruxsat berish
});

// Axios instance'ni eksport qilish
export default instance;
