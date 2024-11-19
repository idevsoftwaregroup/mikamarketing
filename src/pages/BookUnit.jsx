import React, { useEffect, useState } from "react";
import { CreateBooking } from "../service/Bookings";

const BookUnits = () => {
  const [unitsData, setUnitsData] = useState({
    id: null,
    projectName: null,
    projectDescription: null,
    projectType: null,
    projectLocation: null,
    projectFloors: null,
    projectLevels: null,
    projectBlocks: null,
    projectDateTimeRegistration: null,
    projectDateTimeDelivery: null,
    projectBasePrice: null,
    projectMultiplyProjectPerBlock: null,
    projectUnits: [],
    projectUnitFiles: null,
    projectBuildingTerraces: null,
    projectBuildingMeterages: null,
    projectBuildingFiles: null,
  });

  // UseEffect to get the national ID from localStorage
  useEffect(() => {
    const nationalId = localStorage.getItem("userNationalId");
    console.log("User National ID:", nationalId);
  }, []);

  // Simulate fetching project details (Replace with actual API call)
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const data = {
          id: 15, // Sample project ID
          projectName: "Green Hill Residences",
          projectDescription: "Description of the project...",
          projectType: "Residential",
          projectLocation: "وردآورد",
          projectFloors: "4",
          projectLevels: "ah-1p",
          projectBlocks: "بلوک شرقی",
          projectDateTimeRegistration: "1403/08/26",
          projectDateTimeDelivery: "1404/09/09",
          projectBasePrice: 6500000000.0,
          projectMultiplyProjectPerBlock: 1.05,
          projectUnits: [
            {
              name: "واحد A1-TIP",
              code: "U101",
              size: 80,
              price: "1,500,000",
              floor: "1",
              block: "بلوک شرقی",
              level: "ah-1p",
              perPriceMultiply: "3",
            },
            {
              name: "واحد A2-TIP",
              code: "U102",
              size: 75,
              price: "1,200,000",
              floor: "2",
              block: "بلوک شرقی",
              level: "ah-1p",
              perPriceMultiply: "3",
            },
            {
              name: "واحد A3-TIP",
              code: "U103",
              size: 85,
              price: "1,700,000",
              floor: "3",
              block: "بلوک شرقی",
              level: "ah-1p",
              perPriceMultiply: "3",
            },
            {
              name: "واحد A4-TIP",
              code: "U103",
              size: 85,
              price: "1,700,000",
              floor: "3",
              block: "بلوک شرقی",
              level: "ah-1p",
              perPriceMultiply: "3",
            },
          ],
          projectUnitFiles: ["unit1A_plan.pdf", "unit2B_plan.pdf"],
          projectBuildingTerraces: ["Rooftop Terrace", "Garden Terrace"],
          projectBuildingMeterages: ["1106.12 متر مربع"],
          projectBuildingFiles: ["building_plan_1.pdf", "building_plan_2.pdf"],
        };
        setUnitsData(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, []);

  // Function to handle booking a unit
  const handleBookUnit = async (unit) => {
    try {
      const nationalId = localStorage.getItem("userNationalId"); // Fetch national ID again if needed
      const projectId = unitsData.id; // Use the project ID from the project details
      console.log("P-ID: ", projectId);
      const currentDate = new Date().toISOString(); // Get current date and time
      console.log("P-ID: ", projectId);

      // Prepare data to send for booking
      const bookingData = {
        userNationalId: nationalId,
        projectId: projectId,
        dateTimeNow: currentDate,
        unit: unit, // Passing unit details
      };

      // Call the CreateBooking function to send the data to the backend
      const result = await CreateBooking(bookingData);
      alert(`یونیت ${unit.name} با موفقیت بوک شد.`);
      console.log("Booking Result: ", result.data);
    } catch (e) {
      console.error("Error booking unit:", e.message);
    }
  };

  return (
    <div className="sm:p-0 md:p-8">
      <h2 className="text-2xl font-bold mb-6">لیست یونیت‌ها</h2>
      <div className="flex flex-wrap -mx-2 ">
        {unitsData.projectUnits.length > 0 ? (
          unitsData.projectUnits.map((unit, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">یونیت: {unit.name}</h3>
                <div className="p-5 px-7 text-sm">
                  <p className="text-gray-600 mb-2">کد یونیت: {unit.code}</p>
                  <p className="text-gray-600 mb-2">
                    متراژ یونیت: {unit.size} متر مربع
                  </p>
                  <p className="text-gray-600 mb-4">
                    قیمت پایه: {unit.price} تومان
                  </p>
                  <p className="text-gray-600 mb-4 ">طبقه: {unit.floor}</p>
                  <p className="text-gray-600 mb-4 ">بلوک: {unit.block}</p>
                  <p className="text-gray-600 mb-4 ">تراز: {unit.level}</p>
                  <p className="text-gray-600 mb-4 ">
                    ضریب طبقه: {unit.perPriceMultiply}
                  </p>
                  {unitsData.projectDateTimeDelivery ? (
                    <p className="text-gray-600 mb-4 flex flex-nowrap">
                      تاریخ تحویل:{" "}
                      <span className="text-red-500 px-1">
                        {unitsData.projectDateTimeDelivery}
                      </span>
                    </p>
                  ) : (
                    <p>تاریخ تحویل درج نشده است</p>
                  )}
                </div>
                <button
                  onClick={() => handleBookUnit(unit)}
                  className="bg-gray-900 text-white px-4 py-2 rounded-xl hover:bg-green-600 w-full transition-colors text-sm"
                >
                  بوک کردن یونیت {unit.name}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>یونیت‌ها بارگذاری نشده‌اند.</p>
        )}
      </div>
    </div>
  );
};

export default BookUnits;
