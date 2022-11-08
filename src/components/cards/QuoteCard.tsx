import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Quote } from "../../types";

interface QuoteCardProps {
  quote: {
    _id: string;
    author: string;
    content: string;
    tags: [];
  };
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  const [saveQuote, setSaveQuote] = useState({ new: "this" });
  const mutation = useMutation({
    mutationFn: (newTodo: Quote) => {
      return axios.post("http://localhost:4000/api/quote", newTodo, {
        withCredentials: true,
      });
    },
  });

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-white rounded-lg shadow-lg md:flex-row md:max-w-xl">
        {/* <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        /> */}
        <div className="flex flex-col justify-start p-6">
          <p className="mb-4 text-lg italic text-gray-700 te">
            &ldquo; {quote.content} &rdquo;
          </p>
          <p className="mb-2 font-medium text-orangePrimary text-md">
            | {quote.author}
          </p>
          <div>
            <div
              // onClick={handleSaveQuote}
              onClick={() => {
                mutation.mutate(quote);
              }}
              className="flex flex-row items-center justify-end"
            >
              <a href="#" className="mx-2 font-medium text-pink-500">
                Save this Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
