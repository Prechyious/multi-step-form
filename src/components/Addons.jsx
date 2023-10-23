import { useSelector } from "react-redux";
import checkmark from "../assets/images/icon-checkmark.svg";
const Addons = ({ title, description, price, checked, onchange }) => {
    const { selectedPlan } = useSelector((state) => state.form);
    const { planLength } = selectedPlan;
    const inputStyles =
        "relative w-4 h-4 bg-white border-2 rounded-sm appearance-none cursor-pointer peer shrink-0 border-lightGray checked:bg-purplishBlue checked:border-0";
    return (
        <label
            className={`addons-card ${
                checked && "border-purplishBlue bg-magnolia"
            }`}
        >
            <input
                className={inputStyles}
                type="checkbox"
                checked={checked}
                onChange={onchange}
            />
            <img
                className=" absolute w-4 p-0.5 hidden peer-checked:block pointer-events-none"
                src={checkmark}
                alt="checkbox"
            />

            <div className="flex items-center justify-between w-full md:ml-3">
                <div>
                    <h2 className="text-[14.5px] font-bold cursor-pointer">
                        {title}
                    </h2>
                    <p className="text-xs text-coolGray">{description}</p>
                </div>
                <p className="text-sm font-medium text-purplishBlue">
                    +${price}/{planLength === "yearly" ? "yr" : "mo"}
                </p>
            </div>
        </label>
    );
};

export default Addons;
