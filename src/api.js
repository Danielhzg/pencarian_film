import axios from "axios";

const apiKey = process.env.REACT_APP_KEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovielist = async () => {
    try {
        const response = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
}

export const searchMovie = async (query) => {
    try {
        const response = await axios.get(`${baseURL}/search/movie?api_key=${apiKey}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
}