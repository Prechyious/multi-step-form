const PersonInfo = () => {
    return (
        <section className="-mt-[4.7rem] rounded-md py-5 px-6 flex flex-col items-center justify-center max-w-xs mx-auto md:mt-10 md:mr-14 font-medium text-marineBlue bg-white shadow-lg">
            <div className="mb-5 md:mb-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                    Personal info
                </h1>
                <p className="text-base font-medium text-coolGray max-w-xs md:max-w-full">
                    Please provide your name, email address. and phone number.
                </p>
            </div>
            <form className="relative h-full w-full">
                <div className="mb-3">
                    <div className="flex justify-between">
                        <label className="mb-2" htmlFor="name">
                            Name
                        </label>
                        {/* <p className=" text-strawberryRed">
                            This field is required
                        </p> */}
                    </div>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="text"
                        id="name"
                        placeholder="e.g. Stephen King"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="text"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>

                {/* <button className="md:absolute md:right-0  md:bottom-5 text-white py-2 px-5 bg-marineBlue rounded-md">
                    Next Step
                </button> */}
            </form>
        </section>
    );
};

export default PersonInfo;
