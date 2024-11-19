import React, { useEffect, useState } from "react";
import { AccessProjectById } from "../service/Projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft, FaHome, FaRulerCombined } from "react-icons/fa";

const MainPageCard = ({ onContinue }) => {
  const [project, setProject] = useState(null);
  const projectId = 15; // ID پروژه به‌روز شده
  const urlOfImages = "https://app.enjoylife.ir/filestorage";

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectData = await AccessProjectById(projectId);
        console.log("Project Data:", projectData);
        setProject(projectData.value.value);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchProjectData();
  }, [projectId]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading project information...</p>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      className="w-screen bg-white flex items-center justify-center "
      dir="RTL"
    >
      <div className="w-full max-w h-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Carousel */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          {project.projectBuildingFiles &&
          project.projectBuildingFiles.length > 0 ? (
            <Slider {...settings}>
              {project.projectBuildingFiles.map((imageUrl, index) => (
                <div key={index} className="w-full h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={`${urlOfImages}${imageUrl}`}
                    alt={`Project Image ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src="default-image.jpg"
                alt="Default Project"
              />
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div className="flex flex-wrap gap-3">
            <h2 className="uppercase tracking-wide text-indigo-500 font-semibold text-3xl mb-3 ">
              {project.projectName || "نام پروژه"}
            </h2>
            <p className="block mt-1 text-md leading-tight font-medium text-gray-500 leading-7 text-justify ">
              {project.projectDescription || "توضیحات پروژه در دسترس نیست."}
            </p>
            <div className="mt-3 p-2 w-full sm:w-full lg:w-full text-md border-2 border-slate-700 border-dashed rounded-lg relative">
              {/* Tooltips in the Top-Left Corner */}
              <div className="absolute top-10 space-x-3 sm:top-5 left-5 sm:left-0 flex flex-col sm:flex-row space-y-3 sm:space-x-5 sm:space-y-0 sm:space-x-7">
                {/* Tooltip for Terraces */}
                <div className="relative inline-block group">
                  <button className="text-orange-700 cursor-pointer p-2 bg-orange-200 rounded-full">
                    <FaHome className="font-mono" />
                  </button>
                  <div className="absolute z-10 hidden group-hover:block w-48 sm:w-64 p-4 bg-orange-100 border-2 border-orange-700 border-dashed rounded-lg mt-2 text-md shadow-lg left-1/2 transform -translate-x-1/2">
                    <h3 className="text-md font-semibold mb-2">
                      تراس‌های ساختمان
                    </h3>
                    <ul className="list-disc ml-6 mt-2">
                      {project.projectBuildingTerraces &&
                      project.projectBuildingTerraces.length > 0 ? (
                        project.projectBuildingTerraces.map(
                          (terrace, index) => (
                            <li
                              key={index}
                              className="text-gray-600 list-none px-5"
                            >
                              {terrace}
                            </li>
                          )
                        )
                      ) : (
                        <p>تراس خاصی موجود نیست.</p>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Tooltip for Building Meterages */}
                <div className="relative inline-block group">
                  <button className="text-blue-700 cursor-pointer p-2 bg-blue-200 rounded-full">
                    <FaRulerCombined />
                  </button>
                  <div className="absolute z-10 hidden group-hover:block w-48 sm:w-64 p-4 bg-blue-100 border-2 border-blue-700 border-dashed rounded-lg mt-2 text-md shadow-lg left-1/2 transform -translate-x-1/2">
                    <h3 className="text-md font-semibold mb-2">
                      متراژ ساختمان‌ها
                    </h3>
                    <ul className="list-disc ml-6 mt-2">
                      {project.projectBuildingMeterages &&
                      project.projectBuildingMeterages.length > 0 ? (
                        project.projectBuildingMeterages.map(
                          (meterage, index) => (
                            <li
                              key={index}
                              className="text-gray-600 list-none px-5"
                            >
                              {meterage}
                            </li>
                          )
                        )
                      ) : (
                        <p>متراژ مشخصی موجود نیست.</p>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-5 bg-slate-100 rounded-lg">
                <p className="mt-2 text-gray-500">
                  مکان:{" "}
                  <strong>{project.projectLocation || "مکان نامشخص"}</strong>
                </p>
                <p className="mt-2 text-gray-500">
                  نوع پروژه:{" "}
                  <strong>
                    {project.projectType || "نوع پروژه مشخص نیست"}
                  </strong>
                </p>
                <p className="mt-2 text-gray-500">
                  تعداد طبقات:{" "}
                  <strong>
                    {project.projectFloors || "تعداد طبقات نامشخص"}
                  </strong>
                </p>
                <p className="mt-2 text-gray-500">
                  تعداد سطوح:{" "}
                  <strong>
                    {project.projectLevels || "تعداد سطوح نامشخص"}
                  </strong>
                </p>
                <p className="mt-2 text-gray-500">
                  تعداد بلوک‌ها:{" "}
                  <strong>
                    {project.projectBlocks || "تعداد بلوک‌ها نامشخص"}
                  </strong>
                </p>
                <p className="mt-2 text-gray-500">
                  تاریخ ثبت پروژه:{" "}
                  <strong>
                    {project.projectDateTimeRegistration || "تاریخ ثبت نامشخص"}
                  </strong>
                </p>
                <p className="mt-2 text-gray-500">
                  تاریخ تحویل پروژه:{" "}
                  <strong>
                    {project.projectDateTimeDelivery || "تاریخ تحویل نامشخص"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="bg-slate-500 text-white px-5 py-1 rounded-xl hover:bg-slate-600 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              onClick={onContinue}
            >
              <span>ادامه</span>
              <FaArrowAltCircleLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageCard;
