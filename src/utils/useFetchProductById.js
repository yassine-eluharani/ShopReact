import axios from "axios";

const fetchDataById = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

export default fetchDataById;
