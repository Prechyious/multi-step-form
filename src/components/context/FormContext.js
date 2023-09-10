import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        level: "",
        subscriptionType: "",
        addons: [],
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [plan, setPlan] = useState(false);

    const steps = ["personalInfo", "selectPlans", "addOns", "summary"];

    const gotoPrevStep = () => {
        if (currentStep === 0) return;
        setCurrentStep((prev) => prev - 1);
    };

    const gotoNextStep = () => {
        if (currentStep === steps.length - 1) return;
        setCurrentStep((prev) => prev + 1);
    };

    const handleFormData = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
    };

    return (
        <FormContext.Provider
            value={{
                formData,
                plan,
                currentStep,
                setCurrentStep,
                steps,
                setPlan,
                gotoPrevStep,
                gotoNextStep,
                handleFormData,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};
