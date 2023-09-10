import { useFormContext } from "../components/context/FormContext";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import ToggleBtn from "../components/ToggleBtn";

const SelectPlans = () => {
    const { plan, setPlan } = useFormContext();
    return (
        <>
            {!plan ? (
                <section className="-mt-[4.7rem] rounded-md py-5 px-6 md:p-0 md:h-3/4 flex flex-col justify-center max-w-xs md:max-w-full md:shadow-none md:bg-none mx-auto md:mt-10 md:mr-14 font-medium text-marineBlue bg-white shadow-lg">
                    <div className="mb-5 md:mb-10">
                        <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                            Select your plan
                        </h1>
                        <p className="text-base font-medium text-coolGray max-w-xs md:max-w-full">
                            You have the option of monthly or yearly billing.
                        </p>
                    </div>

                    <form>
                        <div className="flex gap-2 border border-purplishBlue py-3 px-5 rounded-md cursor-pointer mb-3 bg-magnolia">
                            <img src={arcadeIcon} alt="arcade" />
                            <div className="">
                                <label
                                    className="cursor-pointer font-bold"
                                    htmlFor="arcade"
                                >
                                    Arcade
                                </label>
                                <p className="text-coolGray">$9/mo</p>
                            </div>
                            <input
                                hidden
                                type="radio"
                                name="arcade"
                                id="arcade"
                                checked={plan}
                                onChange={() => setPlan(!plan)}
                            />
                        </div>
                        <div className="flex gap-2 border border-purplishBlue py-3 px-5 rounded-md cursor-pointer mb-3">
                            <img src={advancedIcon} alt="advanced" />
                            <div className="">
                                <label
                                    className="cursor-pointer font-bold"
                                    htmlFor="advanced"
                                >
                                    Advanced
                                </label>
                                <p className="text-coolGray">$12/mo</p>
                            </div>
                            <input
                                hidden
                                type="radio"
                                name="advanced"
                                id="advanced"
                                checked={plan}
                                onChange={() => setPlan(!plan)}
                            />
                        </div>
                        <div className="flex gap-2 border border-purplishBlue py-3 px-5 rounded-md cursor-pointer mb-5">
                            <img src={proIcon} alt="pro" />
                            <div className="">
                                <label
                                    className="cursor-pointer font-bold"
                                    htmlFor="pro"
                                >
                                    Pro
                                </label>
                                <p className="text-coolGray">$15/mo</p>
                            </div>
                            <input
                                hidden
                                type="radio"
                                name="pro"
                                id="pro"
                                checked={plan}
                                onChange={() => setPlan(!plan)}
                            />
                        </div>
                    </form>
                    <ToggleBtn plan={plan} setPlan={setPlan} />
                </section>
            ) : (
                <section className="-mt-[4.7rem] rounded-md py-5 px-6 md:p-0 md:h-3/4 flex flex-col justify-center max-w-xs md:max-w-full md:shadow-none md:bg-none mx-auto md:mt-10 md:mr-14 font-medium text-marineBlue bg-white shadow-lg">
                    <div className="mb-5 md:mb-10">
                        <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                            Select your plan
                        </h1>
                        <p className="text-base font-medium text-coolGray max-w-xs md:max-w-full">
                            You have the option of monthly or yearly billing.
                        </p>
                    </div>

                    <form>
                        <div className="flex gap-2 border border-purplishBlue py-3 px-5 rounded-md cursor-pointer mb-3 bg-magnolia">
                            <img src={arcadeIcon} alt="arcade" />
                            <div>
                                <label
                                    className="cursor-pointer font-bold"
                                    htmlFor="arcade"
                                >
                                    Arcade
                                </label>
                                <p className="text-coolGray">$90/yr</p>
                                <p className="font-semibold text-sm">
                                    2 months free
                                </p>
                            </div>
                            <input
                                hidden
                                type="radio"
                                name="arcade"
                                id="arcade"
                                checked={plan}
                                onChange={() => setPlan(!plan)}
                            />
                        </div>
                        <div className="flex gap-2 border border-purplishBlue py-3 px-5 rounded-md cursor-pointer mb-3">
                            <img src={advancedIcon} alt="advanced" />
                            <div className="">
                                <label
                                    className="cursor-pointer font-bold"
                                    htmlFor="advanced"
                                >
                                    Advanced
                                </label>
                                <p className="text-coolGray">$120/yr</p>
                                <p className="font-semibold text-sm">
                                    2 months free
                                </p>
                            </div>
                            <input
                                hidden
                                type="radio"
                                name="advanced"
                                id="advanced"
                                checked={plan}
                                onChange={() => setPlan(!plan)}
                            />
                        </div>
                        <div className="flex gap-2 border border-purplishBlue py-3 px-5 rounded-md cursor-pointer mb-5">
                            <img src={proIcon} alt="pro" />
                            <div className="">
                                <label
                                    className="cursor-pointer font-bold"
                                    htmlFor="pro"
                                >
                                    Pro
                                </label>
                                <p className="text-coolGray">$150/yr</p>
                                <p className="font-semibold text-sm">
                                    2 months free
                                </p>
                            </div>
                            <input
                                hidden
                                type="radio"
                                name="pro"
                                id="pro"
                                checked={plan}
                                onChange={() => setPlan(!plan)}
                            />
                        </div>
                    </form>
                    <ToggleBtn plan={plan} setPlan={setPlan} />
                </section>
            )}
        </>
    );
};

export default SelectPlans;
