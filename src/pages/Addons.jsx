import { useFormContext } from "../components/context/FormContext";

const Addons = () => {
    const { plan } = useFormContext();

    const options = [
        {
            title: "Online service",
            desc: "Access to multiplayer games",
            price: 1,
            yearlyPrice: 10,
        },
        {
            title: "Larger storage",
            desc: "Extra 1TB of cloud save",
            price: 2,
            yearlyPrice: 20,
        },
        {
            title: "Customizable profile",
            desc: "Custom theme on your profile",
            price: 2,
            yearlyPrice: 2,
        },
    ];
    return (
        <section className="-mt-[4.7rem] rounded-md py-5 px-6 md:p-0 md:h-3/4 flex flex-col justify-center max-w-xs md:max-w-full md:shadow-none md:bg-none mx-auto md:mt-10 md:mr-14 font-medium text-marineBlue bg-white shadow-lg">
            <div className="mb-5 md:mb-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                    Pick add-ons
                </h1>
                <p className="text-base font-medium text-coolGray max-w-xs md:max-w-full">
                    Add-ons help enhance your gaming experience.
                </p>
            </div>

            {options.map(({ title, desc, price, yearlyPrice }) => {
                return (
                    <div
                        className="flex items-center gap-2 border border-purplishBlue bg-magnolia p-2 rounded-md w-full mb-4"
                        key={title}
                    >
                        <input
                            className="relative peer shrink-0 cursor-pointer appearance-none w-4 h-4 border-2 border-lightGray rounded-sm bg-white checked:bg-purplishBlue checked:border-0"
                            type="checkbox"
                            name="online-service"
                            id="online-service"
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
                        <div className="flex items-center justify-between w-full">
                            <div className="">
                                <label
                                    className="font-bold text-base"
                                    htmlFor="online-service"
                                >
                                    {title}
                                </label>
                                <p className="text-xs text-coolGray">{desc}</p>
                            </div>

                            <p className="text-purplishBlue text-sm font-medium">
                                {plan ? `+$${yearlyPrice}/yr` : `+$${price}/mo`}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Addons;
