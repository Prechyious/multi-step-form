import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import ToggleBtn from "../components/ToggleBtn";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
    nextStep,
    prevStep,
    updateSelectedPlan,
} from "../features/form/formSlice";

const planValues = [
    {
        id: 1,
        planType: "arcade",
        planImg: arcadeIcon,
    },
    {
        id: 2,
        planType: "advanced",
        planImg: advancedIcon,
    },
    {
        id: 3,
        planType: "pro",
        planImg: proIcon,
    },
];

const SelectPlans = () => {
    const { planOptions, selectedPlan, step } = useSelector(
        (state) => state.form
    );
    const { planLength, option } = selectedPlan;
    const dispatch = useDispatch();

    // const [inputPlan, setInputPlan] = useState(option);

    const handleSelectPlan = (planType) => {
        dispatch(updateSelectedPlan({ ...selectedPlan, option: planType }));
    };
    const gotoNextStep = () => {
        if (option) {
            dispatch(nextStep());
        } else {
            alert("Please select a plan");
        }
    };

    const gotoPrevStep = () => {
        dispatch(prevStep());
    };

    return (
        <>
            <section className="container">
                <div className="mb-3 md:mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                        Select your plan
                    </h1>
                    <p className="max-w-xs text-base font-medium text-coolGray md:max-w-full">
                        You have the option of monthly or yearly billing.
                    </p>
                </div>

                <form className="w-full mb-3 md:gap-4 md:grid md:grid-cols-3 md:mb-5">
                    <div
                        className={`relative flex md:flex-col items-start gap-2 md:min-h-40 md:gap-10 md:justify-between px-5 py-2 lg:py-4 mb-2 border rounded-lg cursor-pointer hover:bg-magnolia hover:border-purplishBlue duration-300 ${
                            option === "arcade"
                                ? "bg-magnolia border-purplishBlue"
                                : "border-lightGray"
                        }`}
                        onClick={() => handleSelectPlan("arcade")}
                    >
                        <img src={arcadeIcon} alt="arcade" />
                        <div>
                            <label
                                className="font-bold capitalize cursor-pointer"
                                htmlFor="arcade"
                            >
                                Arcade
                            </label>
                            <p className="text-coolGray">
                                $
                                {planLength === "monthly"
                                    ? planOptions["arcade"].monthly
                                    : planOptions["arcade"].yearly}
                                /{planLength === "monthly" ? "mo" : "yr"}
                            </p>
                            {planLength === "yearly" && (
                                <p className="text-sm font-medium">
                                    2 months free
                                </p>
                            )}
                        </div>
                        <input
                            className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                            type="radio"
                            name="plan"
                            id="arcade"
                            value="arcade"
                            checked={option === "arcade"}
                        />
                    </div>

                    <div
                        className={`relative flex md:flex-col items-start gap-2 md:min-h-40 md:gap-10 md:justify-between px-5 py-2 lg:py-4 mb-2 border rounded-lg cursor-pointer hover:bg-magnolia hover:border-purplishBlue duration-300 ${
                            option === "advanced"
                                ? "bg-magnolia border-purplishBlue"
                                : "border-lightGray"
                        }`}
                        onClick={() => handleSelectPlan("advanced")}
                    >
                        <img src={advancedIcon} alt="advanced" />
                        <div>
                            <label
                                className="font-bold capitalize cursor-pointer"
                                htmlFor="advanced"
                            >
                                Advanced
                            </label>
                            <p className="text-coolGray">
                                $
                                {planLength === "monthly"
                                    ? planOptions["advanced"].monthly
                                    : planOptions["advanced"].yearly}
                                /{planLength === "monthly" ? "mo" : "yr"}
                            </p>
                            {planLength === "yearly" && (
                                <p className="text-sm font-medium">
                                    2 months free
                                </p>
                            )}
                        </div>
                        <input
                            className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                            type="radio"
                            name="plan"
                            id="advanced"
                            value="advanced"
                            checked={option === "advanced"}
                            onChange={() => {}}
                        />
                    </div>

                    <div
                        className={`relative flex md:flex-col items-start gap-2 md:min-h-40 md:gap-10 md:justify-between px-5 py-2 lg:py-4 mb-2 border rounded-lg cursor-pointer hover-bg-magnolia hover-border-purplishBlue duration-300 ${
                            option === "pro"
                                ? "bg-magnolia border-purplishBlue"
                                : "border-lightGray"
                        }`}
                        onClick={() => handleSelectPlan("pro")}
                    >
                        <img src={proIcon} alt="pro" />
                        <div>
                            <label
                                className="font-bold capitalize cursor-pointer"
                                htmlFor="advanced"
                            >
                                Pro
                            </label>
                            <p className="text-coolGray">
                                $
                                {planLength === "monthly"
                                    ? planOptions["pro"].monthly
                                    : planOptions["pro"].yearly}
                                /{planLength === "monthly" ? "mo" : "yr"}
                            </p>
                            {planLength === "yearly" && (
                                <p className="text-sm font-medium">
                                    2 months free
                                </p>
                            )}
                        </div>
                        <input
                            className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                            type="radio"
                            name="plan"
                            id="pro"
                            value="pro"
                            checked={option === "pro"}
                            onChange={() => {}}
                        />
                    </div>
                </form>

                <ToggleBtn />
            </section>
            <div className="btn-container">
                <div className="font-medium flex items-center justify-between mx-auto w-[20rem] md:w-full">
                    <button
                        onClick={gotoPrevStep}
                        className="duration-300 text-coolGray hover:text-marineBlue"
                    >
                        Go back
                    </button>
                    <button
                        onClick={gotoNextStep}
                        className="px-5 py-2 text-sm text-white duration-300 rounded-md md:text-base md:right-0 md:bottom-5 bg-marineBlue hover:bg-marineBlue/90"
                    >
                        Next Step
                    </button>
                </div>
            </div>
        </>
    );
};

export default SelectPlans;
