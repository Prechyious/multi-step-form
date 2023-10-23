import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import ToggleBtn from "../components/ToggleBtn";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../features/form/formSlice";
import Plans from "../components/Plans";

const SelectPlans = () => {
    const { selectedPlan } = useSelector((state) => state.form);
    const { option } = selectedPlan;
    const dispatch = useDispatch();

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
                    <Plans
                        planName="Arcade"
                        planImg={arcadeIcon}
                        planType="arcade"
                    />
                    <Plans
                        planName="Advanced"
                        planImg={advancedIcon}
                        planType="advanced"
                    />
                    <Plans planName="Pro" planImg={proIcon} planType="pro" />
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
