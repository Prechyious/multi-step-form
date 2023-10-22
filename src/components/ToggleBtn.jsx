import { useDispatch, useSelector } from "react-redux";
import { updateSelectedPlan } from "../features/form/formSlice";
import { useState } from "react";

const ToggleBtn = ({ inputPlan }) => {
    const selectedPlan = useSelector((state) => state.form.selectedPlan);
    const { planLength } = selectedPlan;
    const [monthly, setMonthly] = useState(true);
    const dispatch = useDispatch();

    const toggleAction = () => {
        if (monthly && planLength === "monthly") {
            setMonthly(false);
            dispatch(
                updateSelectedPlan({ planLength: "yearly", option: inputPlan })
            );
        } else {
            dispatch(
                updateSelectedPlan({ planLength: "monthly", option: inputPlan })
            );
            setMonthly(true);
        }
    };
    // console.log(inputPlan);

    return (
        <div className="flex items-center justify-center w-full gap-2 p-2 mx-auto rounded-md bg-magnolia">
            <p>Monthly</p>
            <div
                className="relative w-8 h-4 rounded-lg cursor-pointer bg-marineBlue"
                onClick={toggleAction}
            >
                <div
                    className={`bg-white h-3 w-3 rounded-full relative top-0.5 ${
                        monthly && planLength === "monthly"
                            ? "left-0.5"
                            : "left-[1.1rem]"
                    } transition-all duration-300 ease-in-out`}
                ></div>
            </div>
            <p>Yearly</p>
        </div>
    );
};

export default ToggleBtn;
