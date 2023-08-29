const PersonInfo = () => {
    return (
        <div className="flex flex-col items-start mt-10 mr-14 font-medium text-marineBlue">
            <div className=" mb-10">
                <h1 className="text-4xl font-bold mb-2.5">Personal info</h1>
                <p className=" font-medium text-coolGray">
                    Please provide your name, email address. and phone number.
                </p>
            </div>
            <form className="relative h-full w-full">
                <div className="mb-5">
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
                <div className="mb-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="text"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>

                <button className="absolute right-0  bottom-5 text-white py-2 px-5 bg-marineBlue rounded-md">
                    Next Step
                </button>
            </form>
        </div>
    );
};

export default PersonInfo;
