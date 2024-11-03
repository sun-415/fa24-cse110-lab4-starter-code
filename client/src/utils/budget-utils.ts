import { API_BASE_URL } from "../constants/constants";

// Function to get budget from the backend. Method: GET
export const fetchBudget = async (): Promise<number> => {
    const response = await fetch(`${API_BASE_URL}/budget`, {
        method: "GET",
    });

    if (!response.ok) {
    	throw new Error("Failed to fetch budget");
	}

    const data = await response.json();
    return data.data; // Assuming the backend response is { "data": budget }
};


export const updateBudget = async (budget: number): Promise<number> => {
};
