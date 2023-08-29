import React from "react";

const Steps = () => {
    return (
        <div className="absolute bottom-0 md:left-[23.5rem] w-full md:max-w-[28.5rem] py-4 px-7 md:px-0 sm:px-10 flex justify-between bg-white">
            <button className=" text-coolGray">Go back</button>
            <button className="text-sm md:text-base md:right-0  md:bottom-5 text-white py-2 px-5 bg-marineBlue rounded-md">
                Next Step
            </button>
        </div>
    );
};

export default Steps;
