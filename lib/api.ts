import axios from "axios";

export const mockClient = axios.create({ baseURL: "http://localhost:4000" });
