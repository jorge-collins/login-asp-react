import axios from "axios";

// GET
export const getRegisters = async (url) => {
    return await axios(url);
};
