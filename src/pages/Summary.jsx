import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../features/form/formSlice";

const Summary = () => {
    const { selectedPlan, addons, planOptions } = useSelector(
        (state) => state.form
    );
    const { planLength, option } = selectedPlan;
    const { onlineService, largerStorage, customizableProfile } = addons;
    const dispatch = useDispatch();

    // Calculate the total price of addons based on selected plan length
    const totalAddonsPrice = () => {
        let total = 0;
        if (onlineService) {
            total +=
                planLength === "monthly"
                    ? planOptions.onlineService.monthly
                    : planOptions.onlineService.yearly;
        }
        if (largerStorage) {
            total +=
                planLength === "monthly"
                    ? planOptions.largerStorage.monthly
                    : planOptions.largerStorage.yearly;
        }
        if (customizableProfile) {
            total +=
                planLength === "monthly"
                    ? planOptions.customizableProfile.monthly
                    : planOptions.customizableProfile.yearly;
        }
        return total;
    };

    const totalPlanPrice =
        planLength === "monthly"
            ? planOptions[option].monthly
            : planOptions[option].yearly;

    const totalPrice = totalPlanPrice + totalAddonsPrice();

    const gotoNextStep = () => {
        dispatch(nextStep());
    };

    const gotoPrevStep = () => {
        dispatch(prevStep());
    };

    return (
        <>
            <section className="container text-[14.5px]">
                <div className="mb-3 md:mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                        Finishing up
                    </h1>
                    <p className="max-w-xs text-base font-medium text-coolGray md:max-w-full">
                        Double-check everything looks OK before confirming.
                    </p>
                </div>
                <div className="w-full px-2 pt-2 font-bold rounded-t-lg md:px-4 md:pt-4 bg-magnolia">
                    <div className="flex items-center justify-between pb-5 border-b">
                        <div>
                            <h2 className="capitalize">
                                {option} <span>({planLength})</span>
                            </h2>
                            <button
                                onClick={() => dispatch(prevStep(2))}
                                className="text-sm font-medium underline text-coolGray hover:text-purplishBlue"
                            >
                                Change
                            </button>
                        </div>
                        <div>
                            {planLength === "monthly" ? (
                                <p>${planOptions[option].monthly} /mo</p>
                            ) : (
                                <p>${planOptions[option].yearly} /yr</p>
                            )}
                        </div>
                    </div>
                    <hr />
                </div>
                {/* Display the selected addons and their prices */}
                <div className="flex flex-col w-full font-medium gap-2 px-2 pt-4 pb-2.5 md:gap-4 md:pt-4 md:pb-5 md:px-4 text-coolGray bg-magnolia rounded-b-lg">
                    {onlineService && (
                        <div className="flex items-center justify-between">
                            <h3>Online Service</h3>
                            <p className="text-marineBlue/60">
                                +$
                                {planLength === "monthly"
                                    ? `${planOptions.onlineService.monthly}/mo`
                                    : `${planOptions.onlineService.yearly}/yr`}
                            </p>
                        </div>
                    )}
                    {largerStorage && (
                        <div className="flex items-center justify-between">
                            <h3>Larger Storage</h3>
                            <p className="text-marineBlue/60">
                                +$
                                {planLength === "monthly"
                                    ? `${planOptions.largerStorage.monthly}/mo`
                                    : `${planOptions.largerStorage.yearly}/yr`}
                            </p>
                        </div>
                    )}
                    {customizableProfile && (
                        <div className="flex items-center justify-between">
                            <h3>Customizable Profile</h3>
                            <p className="text-marineBlue/60">
                                +$
                                {planLength === "monthly"
                                    ? `${planOptions.customizableProfile.monthly}/mo`
                                    : `${planOptions.customizableProfile.yearly}/yr`}
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between w-full px-2 my-2.5 mt-5 md:px-4 md:my-5 text-coolGray">
                    <h3>
                        Total (
                        {`per ${planLength === "monthly" ? "month" : "year"}`})
                    </h3>

                    <p className="text-lg text-purplishBlue">
                        +${totalPrice}{" "}
                        {planLength === "monthly" ? "/mo" : "/yr"}
                    </p>
                </div>
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
                        className="float-right px-5 py-2 text-sm text-white duration-300 rounded-md md:text-base md:right-0 md:bottom-5 bg-purplishBlue hover:bg-purplishBlue/80"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </>
    );
};

export default Summary;
