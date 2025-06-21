'use client';

import { X } from 'lucide-react';

type Props = {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
};

export default function MessageBox({ message, type = 'success', onClose }: Props) {
  const isSuccess = type === 'success';

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-lg px-6 py-5 shadow-lg w-[90%] max-w-md
        ${isSuccess ? 'bg-green-600 text-white' : 'bg-red-700 text-white'}
      `}
    >
      {/* Top right X button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-white hover:text-zinc-200 cursor-pointer  transition"
        aria-label="Close message"
      >
        <X size={18} />
      </button>

      {/* Heading */}
      <h3 className="text-lg font-bold mb-2">
        {isSuccess ? 'Success' : 'Error'}
      </h3>

      {/* Body */}
      <p className="text-sm mb-4">
        {message}
      </p>

      {/* Bottom Close Button */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className={`mt-2 px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer transition 
            ${isSuccess ? 'bg-white text-green-700 hover:bg-green-100' : 'bg-white text-red-700 hover:bg-red-100'}
          `}
        >
          Close
        </button>
      </div>
    </div>
  );
}
