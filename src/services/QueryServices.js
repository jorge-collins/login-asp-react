import axios from "axios";

// GET
export const getRegisters = async (url) => {
    return await axios(url);
};

// POST (insert)
export const postRegister = async (url, item) => {
    return await axios.post(url, item);
}

// DELETE
export const deleteRegister = async (url, id) => {
    return await axios.delete(`${url}/${id}`);
}

// PUT (update)
export const updateRegister = async (url, item) => {
    return await axios.put(url, item);
}