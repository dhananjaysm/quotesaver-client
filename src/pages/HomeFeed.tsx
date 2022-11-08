import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchQuote } from "../api/api";
import { QuoteCard } from "../components/cards/QuoteCard";
import { Quote } from "../types";

function HomeFeed() {
  const [num, setNum] = useState(1);
  const { data, error, isLoading } = useQuery({
    queryKey: ["quotes", num],
    queryFn: () => fetchQuote(num),
  });

  console.log(data);

  if (error) {
    return <span>Error</span>;
  }

  function randomNumberInRange(min: number, max: number) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 20));
  };

  const handleLogout = async () => {
    const res = await axios.get("http://localhost:4000/auth/logout", {
      withCredentials: true,
    });
    console.log(res);
  };
  return (
    <div className="min-h-screen bg-feedpage">
      <div className="flex flex-col items-center w-3/4 pt-12 mx-auto">
        <h1 className="text-4xl font-bold">Quotey-Pie</h1>
        <div className="flex flex-row items-center justify-between w-1/2">
          <button
            onClick={handleClick}
            className="p-2 mt-2 font-medium bg-orangePrimary text-feedpage "
          >
            Surprise Me!
          </button>
          <div>
            <Link to="/favourite">My Favourites</Link>
          </div>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data?.results.map((quote: Quote) => (
            <div key={quote._id} className="mb-2 ">
              <QuoteCard quote={quote} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
