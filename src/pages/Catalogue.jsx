import React from "react";

const Catalogue = ({ onTabChange, onSave }) => {
  // handle Submit to Booking Page
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onSave(); // Save the data (could be any form of action or processing)
      onTabChange(3); // Switch to the next tab (Booking) after saving data
    } catch (e) {
      console.error("Error during submit:", e.message);
    }
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-xl font-bold mb-4">کاتالوگ یونیت ها</h3>
      <ul className="space-y-3">
        <li className="p-4 bg-slate-100 rounded-md shadow">
          Unit 101 - 2 Bedroom, 1 Bath
        </li>
        <li className="p-4 bg-slate-100 rounded-md shadow">
          Unit 102 - 3 Bedroom, 2 Bath
        </li>
        {/* Add more units as needed */}
      </ul>
      <div className="container mt-10 relative left-0">
        <button
          onClick={handleSubmit} // Ensure handleSubmit is called on button click
          className="bg-slate-600 text-white px-10 py-2 rounded-xl hover:bg-gray-950 w-full sm:w-auto"
        >
          بوکینگ یونیت ها
        </button>
      </div>
    </div>
  );
};

export default Catalogue;
