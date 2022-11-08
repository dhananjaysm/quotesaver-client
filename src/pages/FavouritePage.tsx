import { useQuery } from "@tanstack/react-query";
import { fetchFavQuote } from "../api/api";
import { QuoteCard } from "../components/cards/QuoteCard";
import { Quote } from "../types";

const FavouritePage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["quotes"],
    queryFn: () => fetchFavQuote(),
  });
  console.log(data);
  return (
    <div className="min-h-screen bg-feedpage">
      <div className="flex flex-col items-center w-3/4 pt-12 mx-auto">
        <h1 className="text-4xl font-bold">Quotey-Pie</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data?.map((quote: Quote) => (
            <div key={quote._id} className="mb-2 ">
              <QuoteCard quote={quote} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
