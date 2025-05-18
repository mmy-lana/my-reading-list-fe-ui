import api from "../../utils/axios";

// Function to register a user
export const registerUser = async (username: string, email: string, password: string) => {
  const response = await api.post("/users", { username, email, password });
  return response.data;
};

// Function to log in a user
export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

// Function to get all users (optional, can be expanded as needed)
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};
