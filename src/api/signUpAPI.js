import { BASE_URL } from "../config";
import axios from 'axios';


const signup = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/users/register`, userData);

        if (response.status === 200) {
            // Signup successful
            return response.data;
        } else {
            // Handle errors or validation issues
            console.error('Signup failed:', response.data);
            return null;
        }
    } catch (error) {
        console.error('An error occurred during signup:', error);
        return null;
    }
};

export default signup;
