import { useFormContext } from "../components/context/FormContext";
import { useNavigate } from "react-router-dom";

const PersonInfo = () => {
    const { formData, handleFormData } = useFormContext();
    const navigate = useNavigate();

    const submitInfo = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill out all fields.");
            return;
        }

        navigate("/select-plans");
    };

    return (
        <section className="-mt-[4.7rem] rounded-md py-5 px-6 md:p-0 md:h-3/4 flex flex-col items-center justify-center max-w-xs md:max-w-full md:shadow-none md:bg-none mx-auto md:mt-10 md:mr-14 font-medium text-marineBlue bg-white shadow-lg">
            <div className="mb-5 md:mb-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                    Personal info
                </h1>
                <p className="text-base font-medium text-coolGray max-w-xs md:max-w-full">
                    Please provide your name, email address. and phone number.
                </p>
            </div>
            <form onSubmit={submitInfo} className="relative h-full w-full">
                <div className="mb-3">
                    <div className="flex justify-between">
                        <label htmlFor="name">Name</label>
                        {/* {hasSubmitted && !name.length && (
                            <p className=" text-strawberryRed">
                                This field is required
                            </p>
                        )} */}
                    </div>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="text"
                        id="name"
                        placeholder="e.g. Stephen King"
                        value={formData.name}
                        onChange={(e) =>
                            handleFormData({ name: e.target.value })
                        }
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={formData.email}
                        onChange={(e) =>
                            handleFormData({ email: e.target.value })
                        }
                    />
                </div>
                <div className="mb-3">
                    <label className="md:mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        className="outline-none border py-2 px-3 rounded-lg w-full focus:border-purplishBlue"
                        type="text"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={formData.phone}
                        onChange={(e) =>
                            handleFormData({ phone: e.target.value })
                        }
                    />
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
        </section>
    );
};

export default PersonInfo;
