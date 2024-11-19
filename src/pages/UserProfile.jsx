import React, { useState, useEffect } from "react";
import { AccessProfileById, CreateProfile } from "../service/Profiles";

const UserProfile = ({ userId, onTabChange, onSave }) => {
  const [profileData, setProfileData] = useState({
    userFullName: "",
    userNationalId: "",
    userPhoneNumber: "",
    userEmail: "",
    userDateOfBirth: "",
    userDescriptionProfile: "",
    userJobTitle: "",
  });

  // check submit of the form :
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await AccessProfileById(userId);
        setProfileData({
          userFullName: data.userFullName || "",
          userNationalId: data.userNationalId || "",
          userPhoneNumber: data.userPhoneNumber || "",
          userEmail: data.userEmail || "",
          userDateOfBirth: data.userDateOfBirth || "",
          userDescriptionProfile: data.userDescriptionProfile || "",
          userJobTitle: data.userJobTitle || "",
        });
      } catch (error) {
        console.error("Failed to load profile data:", error);
      }
    };
    fetchProfileData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("userNationalId", profileData.userNationalId);
      console.log("UN-ID: ", profileData.userNationalId);
      const newProfile = await CreateProfile(profileData);
      console.log("Profile created:", newProfile);
      onSave();
      debugger;
      setIsSubmitted(true);
      console.log("Submit status : ", isSubmitted);
    } catch (error) {
      console.error("Failed to create profile:", error);
    }
  };

  return (
    <div dir="RTL" className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-xl font-bold mb-5">اطلاعات کاربری</h3>
      <form
        name="form"
        className="space-y-6"
        onSubmit={handleSubmit}
        disabled={isSubmitted}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="p-5 border border-2 border-red-600 rounded-xl border-dashed bg-red-50 text-gray-950 font-bold">
            <div className="group relative">
              <div className="absolute left-0">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 cursor-pointer absolute left-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm1 7a1 1 0 00-.117 1.993L10 13a1 1 0 00.117-1.993L10 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute left-0 top-5 hidden mt-2 px-2 py-1 text-white bg-red-600 rounded-md text-xs group-hover:block">
                فیلد های این بخش الزامی می باشند.
              </div>
            </div>

            <div className="pt-10">
              <label className="block text-gray-600 mb-2 text-sm">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                name="userFullName"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="نام و نام خانوادگی خود را وارد نمایید"
                value={profileData.userFullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 mt-3 text-sm">
                کد ملی
              </label>
              <input
                type="text"
                name="userNationalId"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="کد ملی خود را با دقت وارد نمایید"
                value={profileData.userNationalId}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 mt-3 text-sm">
                شماره تماس
              </label>
              <input
                type="text"
                name="userPhoneNumber"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="شماره تماس خود را با دقت وارد نمایید"
                value={profileData.userPhoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="p-5 border border-2 border-blue-600 rounded-xl border-dashed bg-blue-50 text-gray-950 font-bold">
            <div className="group relative">
              <div className="absolute left-0">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 cursor-pointer absolute left-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm1 7a1 1 0 00-.117 1.993L10 13a1 1 0 00.117-1.993L10 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Tooltip */}
              <div className="absolute left-0 top-5 hidden mt-2 px-2 py-1 text-white bg-blue-600 rounded-md text-xs group-hover:block">
                تکمیل فیلد های این بخش برای شناخت ما از شما و در ارتباط بودن به
                صورت مداوم موثر می باشند.
              </div>
            </div>
            <div className="mt-10">
              <label className="block text-gray-600 mb-2 mt-5 text-sm">
                پست الکترونیکی ( ایمیل )
              </label>
              <input
                type="email"
                name="userEmail"
                className="w-full px-3 py-2 border rounded-md mb-3"
                placeholder="پست الکترونیکی ( ایمیل ) خود را وارد نمایید"
                value={profileData.userEmail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 text-sm">
                تاریخ تولد
              </label>
              <input
                type="text"
                name="userDateOfBirth"
                className="w-full px-3 py-2 border rounded-md mb-3"
                placeholder="تاریخ تولد خود را با دقت وارد نمایید"
                value={profileData.userDateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2 mt-3 text-sm">
                شرح مختصر حساب کاربری
              </label>
              <input
                type="text"
                name="userDescriptionProfile"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="درباره خود بنویسید"
                value={profileData.userDescriptionProfile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="p-5 border border-2 border-green-600 rounded-xl border-dashed bg-green-50 text-gray-950 font-bold">
            <div>
              <label className="block text-gray-600 mb-3">عنوان شغلی</label>
              <input
                type="text"
                name="userJobTitle"
                className="w-full px-3 py-2 border rounded-md mb-5"
                placeholder="عنوان شغلی خود را وارد نمایید"
                value={profileData.userJobTitle}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="container mt-5 relative left-0">
          {!isSubmitted ? (
            <button
              type="submit"
              className="bg-slate-600 text-white px-10 py-2 rounded-xl hover:bg-gray-950 w-full sm:w-auto"
            >
              ذخیره اطلاعات کاربر
            </button>
          ) : (
            <p
              disabled={true}
              className="bg-slate-600 text-white px-10 py-2 rounded-xl hover:bg-gray-950 w-full sm:w-auto"
            >
              اطلاعات شما یکبار درج شده است
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
