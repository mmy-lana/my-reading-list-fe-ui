import React, { forwardRef } from "react";
import StarRating from "../../shared/StarRating";

interface CardProps {
  index: number;
  img: string;
  title: string;
  chapter: number;
  score: number;
  status: string;
  onClick(): void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ img, title, chapter, score, status, onClick, index }, ref) => {
    // Determine the border and shadow color based on the index
    const getRankColor = (index: number) => {
      switch (index) {
        case 0:
          return {
            border:
              "hover:border-[#FFD700] border-t-[2px] border-l-[2px] border-b-[2px]",
          }; // Gold
        case 1:
          return {
            border:
              "hover:border-red-500 border-t-[2px] border-l-[2px] border-b-[2px]",
          }; // Silver
        case 2:
          return {
            border:
              "hover:border-[#CD7F32] border-t-[2px] border-l-[2px] border-b-[2px]",
          }; // Bronze
        default:
          return {
            border:
              "hover:border-gray-300 border-t-[2px] border-l-[2px] border-b-[2px]",
          }; // Grey
      }
    };

    const { border } = getRankColor(index);

    return (
      <div ref={ref} className="relative w-[22rem] flex-shrink-0">
        {/* Added flex-shrink-0 to prevent stretching */}
        <div
          className={`relative mt-10 flex w-full items-center rounded-2xl border-t border-l border-b bg-white shadow-lg cursor-pointer z-10 transition-all duration-300 ${border}`}
          onClick={onClick}
        >
          <div className="absolute right-[-0.1rem] top-[-1.96rem] rounded-md z-10 h-44 w-28 overflow-hidden">
            <img
              className="h-full w-full rounded-md object-cover relative shadow-xl transition-all duration-300 hover:scale-110"
              src={img}
              alt="Card"
            />
          </div>

          <div className="flex h-36 flex-col justify-between p-4 text-left text-black transition-all duration-300 hover:scale-110">
            <div className="flex-col justify-between items-start">
              <div className="text-lg font-bold">{title}</div>
              {/* Displaying the title */}
              <div className="text-sm">Status: {status}</div>
              <div className="text-sm">Chapter: {chapter}</div>
            </div>
            {/* Use the StarRating component */}
            <StarRating score={score} />
            {/* <div className="text-sm">Score: {score}</div> */}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
