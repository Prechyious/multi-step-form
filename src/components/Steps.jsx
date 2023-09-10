import { useFormContext } from "./context/FormContext";
import { useNavigate } from "react-router-dom";

const Steps = () => {
    const { currentStep, steps, gotoPrevStep, gotoNextStep } = useFormContext();
    const navigate = useNavigate();

    const handleConfirm = () => {
        const stepName = steps[currentStep];
        if (stepName === "personalInfo") {
            gotoNextStep();
            navigate("/select-plans");
        } else if (stepName === "selectPlans") {
            gotoNextStep();
            navigate("/addons");
        } else if (stepName === "addOns") {
            gotoNextStep();
            navigate("/summary");
        } else if (stepName === "summary") {
            gotoNextStep();
            navigate("/thanks");
        }
    };

    const handleGoBack = () => {
        const stepName = steps[currentStep];
        if (stepName === "summary") {
            // Render the PersonInfo component
            gotoPrevStep();
            navigate("/addons");
        } else if (stepName === "addOns") {
            // Render the SelectPlans component
            gotoPrevStep();
            navigate("/select-plans");
        } else if (stepName === "selectPlans") {
            // Render the Addons component
            gotoPrevStep();
            navigate("/");
        }
    };
    return (
        <div className="absolute bottom-0 md:left-[23.5rem] w-full md:max-w-[28.5rem] py-4 px-7 md:px-0 sm:px-10 flex items-center justify-between bg-white">
            <button
                onClick={handleGoBack}
                className={`text-coolGray ${
                    currentStep === 0 ? "opacity-0" : "opacity-100"
                }`}
            >
                Go back
            </button>
            <button
                onClick={handleConfirm}
                className="text-sm md:text-base md:right-0  md:bottom-5 text-white py-2 px-5 bg-marineBlue rounded-md"
            >
                {currentStep === steps.length - 1 ? "Confirm" : "Next Step"}
            </button>
        </div>
    );
};

export default Steps;
