import { useDispatch, useSelector } from "react-redux";
import {
    nextStep,
    prevStep,
    updateAddons,
    updateSelectedPlan,
} from "../features/form/formSlice";
import Addons from "../components/Addons";

const SelectAddons = () => {
    const { selectedPlan, planOptions, addons, step } = useSelector(
        (state) => state.form
    );
    const { onlineService, largerStorage, customizableProfile } = addons;
    const { planLength } = selectedPlan;
    const dispatch = useDispatch();

    const gotoNextStep = () => {
        if (step === 4) {
            return;
        }
        dispatch(nextStep());
    };

    const gotoPrevStep = () => {
        dispatch(
            updateSelectedPlan({
                ...selectedPlan,
            })
        );
        dispatch(prevStep(1));
    };

    const handleAddonChange = (addon, isChecked) => {
        dispatch(
            updateAddons({
                ...addons,
                [addon]: isChecked,
            })
        );
    };

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
                    <Addons
                        title="Online Service"
                        description="Access to multiplayer games"
                        price={
                            planLength === "yearly"
                                ? planOptions.onlineService.yearly
                                : planOptions.onlineService.monthly
                        }
                        checked={onlineService}
                        onchange={(e) =>
                            handleAddonChange("onlineService", e.target.checked)
                        }
                    />

                    {/* Larger storage */}
                    <Addons
                        title="Larger Storage"
                        description="Extra 1TB of cloud save"
                        price={
                            planLength === "yearly"
                                ? planOptions.largerStorage.yearly
                                : planOptions.largerStorage.monthly
                        }
                        checked={largerStorage}
                        onchange={(e) =>
                            handleAddonChange("largerStorage", e.target.checked)
                        }
                    />

                    {/* Customizable Profile */}
                    <Addons
                        title="Customizable Profile"
                        description="Custom theme on your profile"
                        price={
                            planLength === "yearly"
                                ? planOptions.customizableProfile.yearly
                                : planOptions.customizableProfile.monthly
                        }
                        checked={customizableProfile}
                        onchange={(e) =>
                            dispatch(
                                updateAddons({
                                    ...addons,
                                    customizableProfile: e.target.checked,
                                })
                            )
                        }
                    />
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

export default SelectAddons;
