import axios from "axios";

export const fetchQuote = async (num: number) => {
  const data = await axios
    .get(`https://quotable.io/quotes?page=${num}}`)
    .then((res) => res.data);
  return data;
};
export const fetchFavQuote = async () => {
  const data = await axios
    .get("http://localhost:4000/auth/quote", { withCredentials: true })
    .then((res) => res.data);
  return data;
};
