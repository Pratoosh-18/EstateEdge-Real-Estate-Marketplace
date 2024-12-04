import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const shuffleArray = (array) => {
    let currentIndex = array.length;
    while (currentIndex) {
        const randomIndex = Math.floor(Math.random() * currentIndex--);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
};

const fetchListings = async () => {
    try {
        const { listings } = await fetchData("/api/v1/listing/getListings");
        const shuffledList = shuffleArray(listings || []);
        const midpoint = Math.ceil(shuffledList.length / 2);

        return {
            list1: shuffledList.slice(0, midpoint),
            list2: shuffledList.slice(midpoint),
        };
    } catch (error) {
        return { list1: [], list2: [] };
    }
};

const getAllListings = async () => {
    try {
        const { listings } = await fetchData("/api/v1/listing/getListings");
        return listings.reverse();
    } catch (error) {
        return [];
    }
};

const fetchListingDetails = async (id) => {
    try {
        const { listing } = await fetchData(`/api/v1/listing/getListing/${id}`);
        return listing;
    } catch (error) {
        console.error(`Error fetching listing details for ID: ${id}`, error);
        return null;
    }
};

const createListing = async (formDataToSend) => {
    try {
        const response = await apiClient.post("/api/v1/listing/create", formDataToSend, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating listing:", error);
        throw error;
    }
};

export { fetchListings, getAllListings, fetchListingDetails, createListing };