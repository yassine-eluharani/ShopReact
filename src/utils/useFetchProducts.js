import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export default fetchData;
