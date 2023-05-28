import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI4NzMxMjMzNDhkNWM2M2E4YjE1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTYzMTIyMSwiZXhwIjoxNjgxODkwNDIxfQ.OS7BdzVlwr0Vpzo_9pWka4RvahPw2vhzUBzotnnTm2Q";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});