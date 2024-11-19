import React, { useState } from "react";
import UserProfile from "../pages/UserProfile";
import Catalogue from "../pages/Catalogue";
import BookUnit from "../pages/BookUnit";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [isCatalogueSaved, setIsCatalogueSaved] = useState(false);
  const [isBookingSaved, setIsBookingSaved] = useState(false);

  const handleSaveUserProfile = () => {
    setIsProfileSaved(true);
    setActiveTab(2);
  };

  const handleSaveCatalogue = () => {
    setIsCatalogueSaved(true);
    setActiveTab(3);
  };

  const handleSaveBooking = () => {
    setIsBookingSaved(true);
  };

  const handleTabChange = (tab) => {
    if (
      (tab === 2 && isProfileSaved) ||
      (tab === 3 && isCatalogueSaved) ||
      tab === 1
    ) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="w-full max-w" dir="RTL">
      <div className="flex border-b">
        <button
          className={`lg:text-lg md:text-base sm:text-sm text-xs flex-1 p-3 ${
            activeTab === 1 ? "bg-blue-100" : "bg-white"
          }`}
          onClick={() => handleTabChange(1)}
        >
          اطلاعات کاربری
        </button>
        <button
          className={`lg:text-lg md:text-base sm:text-sm text-xs flex-1 p-3 ${
            activeTab === 2 ? "bg-blue-100" : "bg-white"
          }`}
          onClick={() => handleTabChange(2)}
          disabled={!isProfileSaved}
        >
          کاتالوگ ها
        </button>
        <button
          className={`lg:text-lg md:text-base sm:text-sm text-xs flex-1 p-3 ${
            activeTab === 3 ? "bg-blue-100" : "bg-white"
          }`}
          onClick={() => handleTabChange(3)}
          disabled={!isCatalogueSaved}
        >
          بوکینگ
        </button>
      </div>
      <div className="p-10 bg-white border rounded-b-3xl border border-2 border-slate-500 border-dashed ">
        {activeTab === 1 && (
          <UserProfile
            userId={1}
            onTabChange={handleTabChange}
            onSave={handleSaveUserProfile}
          />
        )}
        {activeTab === 2 && <Catalogue onSave={handleSaveCatalogue} />}
        {activeTab === 3 && <BookUnit onSave={handleSaveBooking} />}
      </div>
    </div>
  );
};

export default Tabs;
