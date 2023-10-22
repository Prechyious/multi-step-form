import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep, updateAddons } from "../features/form/formSlice";

const Addons = () => {
    const { selectedPlan, planOptions, addons, step } = useSelector(
        (state) => state.form
    );
    const { onlineService, largerStorage, customizableProfile } = addons;
    const dispatch = useDispatch();

    const gotoNextStep = () => {
        if (step === 4) {
            return;
        }
        dispatch(nextStep());
    };

    const gotoPrevStep = () => {
        if (step === 1) return;
        dispatch(prevStep());
    };

    const inputStyles =
        "relative w-4 h-4 bg-white border-2 rounded-sm appearance-none cursor-pointer peer shrink-0 border-lightGray checked:bg-purplishBlue checked:border-0";

    return (
        <>
            <section className="container">
                <div className="mb-3 md:mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                        Pick add-ons
                    </h1>
                    <p className="max-w-xs text-base font-medium leading-5 text-coolGray md:max-w-full">
                        Add-ons help enhance your gaming experience.
                    </p>
                </div>
                <div className="w-full">
                    {/* Online Service */}
                    <label
                        htmlFor="onlineService"
                        className={`addons-card ${
                            onlineService && "border-purplishBlue bg-magnolia"
                        }`}
                    >
                        <input
                            className={inputStyles}
                            type="checkbox"
                            name="onlineService"
                            id="onlineService"
                            checked={onlineService}
                            onChange={(e) =>
                                dispatch(
                                    updateAddons({
                                        ...addons,
                                        onlineService: e.target.checked,
                                    })
                                )
                            }
                        />
                        <svg
                            className=" absolute w-4 h-4 mt-0.5 hidden peer-checked:block pointer-events-none text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 27"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>

                        <div className="flex items-center justify-between w-full md:ml-3">
                            <div>
                                <h2 className="text-[14.5px] font-bold cursor-pointer">
                                    Online Service
                                </h2>
                                <p className="text-xs text-coolGray">
                                    Access to multiplayer games
                                </p>
                            </div>

                            <p className="text-sm font-medium text-purplishBlue">
                                {selectedPlan.planLength === "yearly"
                                    ? `+$${planOptions.onlineService.yearly}/yr`
                                    : `+$${planOptions.onlineService.monthly}/mo`}
                            </p>
                        </div>
                    </label>

                    {/* Larger storage */}
                    <label
                        htmlFor="largerStorage"
                        className={`addons-card checked:bg-magnolia ${
                            largerStorage && "border-purplishBlue bg-magnolia"
                        }`}
                    >
                        <input
                            className={inputStyles}
                            type="checkbox"
                            name="largerStorage"
                            id="largerStorage"
                            checked={largerStorage}
                            onChange={(e) =>
                                dispatch(
                                    updateAddons({
                                        ...addons,
                                        largerStorage: e.target.checked,
                                    })
                                )
                            }
                        />
                        <svg
                            className=" absolute w-4 h-4 mt-0.5 hidden peer-checked:block pointer-events-none text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 27"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>

                        <div className="flex items-center justify-between w-full md:ml-3">
                            <div>
                                <h2 className="text-[14.5px] font-bold cursor-pointer">
                                    Larger Storage
                                </h2>
                                <p className="text-xs text-coolGray">
                                    Extra 1TB of cloud save
                                </p>
                            </div>

                            <p className="text-sm font-medium text-purplishBlue">
                                {selectedPlan.planLength === "yearly"
                                    ? `+$${planOptions.largerStorage.yearly}/yr`
                                    : `+$${planOptions.largerStorage.monthly}/mo`}
                            </p>
                        </div>
                    </label>

                    {/* Customizable Profile */}
                    <label
                        htmlFor="customizableProfile"
                        className={`addons-card checked:bg-magnolia ${
                            customizableProfile &&
                            "bg-magnolia border-purplishBlue"
                        }`}
                    >
                        <input
                            className={inputStyles}
                            type="checkbox"
                            name="customizableProfile"
                            id="customizableProfile"
                            checked={customizableProfile}
                            onChange={(e) =>
                                dispatch(
                                    updateAddons({
                                        ...addons,
                                        customizableProfile: e.target.checked,
                                    })
                                )
                            }
                        />
                        <svg
                            className=" absolute w-4 h-4 mt-0.5 hidden peer-checked:block pointer-events-none text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 27"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>

                        <div className="flex items-center justify-between w-full md:ml-3">
                            <div className="">
                                <h2 className="text-[14.5px] font-bold cursor-pointer">
                                    Customizable Profile
                                </h2>
                                <p className="text-xs text-coolGray">
                                    Custom theme on your profile
                                </p>
                            </div>

                            <p className="text-sm font-medium text-purplishBlue">
                                {selectedPlan.planLength === "yearly"
                                    ? `+$${planOptions.customizableProfile.yearly}/yr`
                                    : `+$${planOptions.customizableProfile.monthly}/mo`}
                            </p>
                        </div>
                    </label>
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
                        className="px-5 py-2 text-sm text-white duration-300 rounded-md md:text-base md:right-0 md:bottom-5 bg-marineBlue hover:bg-marineBlue/90"
                    >
                        Next Step
                    </button>
                </div>
            </div>
        </>
    );
};

export default Addons;
