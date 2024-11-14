import axios from "axios";

const shuffleArray = (array) => {
    let currentIndex = array.length;

    while (currentIndex) {
        const randomIndex = Math.floor(Math.random() * currentIndex--);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

const fetchListingsData = async (url) => {
    try {
        const response = await axios.get(url);
        return Array.isArray(response.data.listings) ? response.data.listings : [];
    } catch (error) {
        console.error("Error fetching listings:", error);
        return [];
    }
};

const fetchListings = async () => {
    const listings = await fetchListingsData(`${process.env.REACT_APP_BACKEND_API}/api/v1/listing/getListings`);
    const shuffledList = shuffleArray(listings);
    const midpoint = Math.ceil(shuffledList.length / 2);

    return {
        list1: shuffledList.slice(0, midpoint),
        list2: shuffledList.slice(midpoint),
    };
};

const getAllListings = async () => {
    const listings = await fetchListingsData(`${process.env.REACT_APP_BACKEND_API}/api/v1/listing/getListings`);
    return listings.reverse();
};

const fetchListingDetails = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/listing/getListing/${id}`);

        return response.data.listing;
    } catch (error) {
        return null;
    }
};

const createListing = async (formDataToSend) => {
    const response = await axios.post("http://localhost:8000/api/v1/listing/create",
        formDataToSend,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    return response.data
}

export { fetchListings, getAllListings,fetchListingDetails,createListing }