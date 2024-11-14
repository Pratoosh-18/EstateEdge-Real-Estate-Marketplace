import axios from "axios";

const fetchCurrentUser = async () => {
    try {
        const token = localStorage.getItem("realestatert");

        const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1/user/currentUser`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        return response.data.user

    } catch (error) {
        console.error("User is not authenticated:", error);
        return null;
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1/user/login`, { email, password });
        const userData = response.data.user;
        const accessToken = response.data.token;
        localStorage.setItem("realestatert", accessToken);

        return userData;

    } catch (err) {

        return null;
    }
}

const registerUser = async (formData) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}/api/v1/user/register`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { fetchCurrentUser, login, registerUser }