import { useDispatch, useSelector } from "react-redux";
import { updateSelectedPlan } from "../features/form/formSlice";

const Plans = ({ planType, planImg, planName }) => {
    const { selectedPlan, planOptions } = useSelector((state) => state.form);
    const { planLength, option } = selectedPlan;
    const dispatch = useDispatch();

    const handleSelectPlan = () => {
        dispatch(updateSelectedPlan({ ...selectedPlan, option: planType }));
    };

    return (
        <div
            className={`relative flex md:flex-col items-start gap-2 md:min-h-40 md:gap-10 md:justify-between px-5 py-2 lg:py-4 mb-2 border rounded-lg cursor-pointer hover:bg-magnolia hover:border-purplishBlue duration-300 ${
                option === planType
                    ? "bg-magnolia border-purplishBlue"
                    : "border-lightGray"
            }`}
            onClick={handleSelectPlan}
        >
            <img src={planImg} alt={planType} />
            <div>
                <label
                    className="font-bold capitalize cursor-pointer"
                    htmlFor={planType}
                >
                    {planName}
                </label>
                <p className="text-coolGray">
                    $
                    {planLength === "monthly"
                        ? planOptions[planType].monthly
                        : planOptions[planType].yearly}
                    /{planLength === "monthly" ? "mo" : "yr"}
                </p>
                {planLength === "yearly" && (
                    <p className="text-sm font-medium">2 months free</p>
                )}
            </div>
            <input
                className="absolute inset-0 z-10 opacity-0 cursor-pointer"
                type="radio"
                name="plan"
                id={planType}
                value={planType}
                checked={option === planType}
            />
        </div>
    );
};

export default Plans;
