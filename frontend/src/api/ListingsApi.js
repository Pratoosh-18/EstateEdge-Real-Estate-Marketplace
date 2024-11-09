import axios from "axios";

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const fetchListings = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/v1/listing/getListings`);

    if (Array.isArray(response.data.listings)) {
      const listings = response.data.listings;
      const shuffledList = shuffleArray(listings);
      const midpoint = Math.ceil(shuffledList.length / 2);

      return {
        list1: shuffledList.slice(0, midpoint),
        list2: shuffledList.slice(midpoint),
      };
    } else {
      console.error("Expected an array of listings but got:", response.data);
      return { list1: [], list2: [] };
    }
  } catch (error) {
    console.error("Error fetching listings:", error);
    return { list1: [], list2: [] };
  }
};
