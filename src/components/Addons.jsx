import { useSelector } from "react-redux";

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
