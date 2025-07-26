import axios from "axios";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=`;

const customAxios = axios.create({
    baseURL: url
})

export default customAxios