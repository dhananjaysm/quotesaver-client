import React from "react";
import { Quote } from "../../types";
import { QuoteCard } from "../cards/QuoteCard";

interface FeedComponentProps {
  data: Array<Quote>;
}

export const FeedComponent: React.FC<FeedComponentProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {data.map((quote: Quote) => (
        <div key={quote._id} className="mb-2 ">
          <QuoteCard quote={quote} />
        </div>
      ))}
    </div>
  );
};
