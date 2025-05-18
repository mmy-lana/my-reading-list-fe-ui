import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  img: string;
  title: string;
  chapter: number;
  score: number;
  status: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  img,
  title,
  chapter,
  score,
  status,
}) => {
  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-3/4 h-3/4 p-6 rounded-lg shadow-lg overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={img}
            alt={title}
            className="w-64 h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-lg">Status: {status}</p>
            <p className="text-lg">Chapter: {chapter}</p>
            <p className="text-lg">Score: {score}/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
