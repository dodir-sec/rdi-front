import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();  // Gets the current year

  return (
    <footer className="border-gray-200 bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-center w-full p-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">© {currentYear} <a href="#" className="hover:underline">RDI</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
