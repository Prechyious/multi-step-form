import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo, nextStep } from "../features/form/formSlice";
import { useEffect, useState } from "react";

const PersonalInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const personalInfo = useSelector((state) => state.form.personalInfo);
    const dispatch = useDispatch();

    const validatePhoneNumber = (num) => {
        return num.replace(/\D/g, "").length >= 10;
    };

    useEffect(() => {
        const errors = [];
        if (!name.length) {
            errors.push("name error");
        }

        if (!email.length) {
            errors.push("email error");
        }
        const validMail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

        if (!validMail.test(email)) errors.push("valid email error");

        if (!phone.length) {
            errors.push("phone error");
        }

        if (!validatePhoneNumber(phone)) errors.push("valid phone error");

        setValidationErrors(errors);
    }, [name, email, phone]);

    const submitInfo = (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        if (!validationErrors.length) {
            // Dispatch action to update personal info
            dispatch(
                updatePersonalInfo({
                    ...personalInfo,
                    name,
                    email,
                    phone,
                })
            );

            dispatch(nextStep());
        }
        if (personalInfo.name && personalInfo.email && personalInfo.phone) {
            dispatch(nextStep());
        }
    };

    return (
        <>
            <section className="container">
                <div className="mb-5 md:mb-0">
                    <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2.5">
                        Personal info
                    </h1>
                    <p className="max-w-xs text-base font-medium text-coolGray md:max-w-full">
                        Please provide your name, email address. and phone
                        number.
                    </p>
                </div>
                <form
                    onSubmit={submitInfo}
                    className="relative flex flex-col justify-center w-full h-full gap-3 mb-3 md:mb-0 md:gap-7"
                >
                    <div>
                        <label
                            className="flex items-center justify-between text-base mb-0.5"
                            htmlFor="name"
                        >
                            Name
                            {hasSubmitted &&
                                validationErrors.includes("name error") && (
                                    <p className="text-xs font-bold text-strawberryRed md:text-sm">
                                        This field is required
                                    </p>
                                )}
                        </label>

                        <input
                            className={`w-full px-3 py-2 border rounded-lg outline-none duration-300 ease-in-out hover:border-purplishBlue focus:border-purplishBlue ${
                                hasSubmitted &&
                                validationErrors.includes("name error") &&
                                "border-strawberryRed"
                            }`}
                            required
                            type="text"
                            id="name"
                            placeholder="e.g. Stephen King"
                            value={
                                !personalInfo.name ? name : personalInfo.name
                            }
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="flex items-center justify-between mb-0.5"
                        >
                            Email Address
                            {hasSubmitted &&
                                validationErrors.includes("email error") && (
                                    <p className="text-xs font-bold text-strawberryRed md:text-sm">
                                        This field is required
                                    </p>
                                )}
                            {hasSubmitted &&
                                validationErrors.includes(
                                    "valid email error"
                                ) &&
                                !validationErrors.includes("email error") && (
                                    <p className="text-xs font-bold text-strawberryRed md:text-sm">
                                        Enter a valid email
                                    </p>
                                )}
                        </label>
                        <input
                            className={`w-full px-3 py-2 border rounded-lg outline-none duration-300 ease-in-out hover:border-purplishBlue focus:border-purplishBlue ${
                                hasSubmitted &&
                                validationErrors.includes("email error") &&
                                "border-strawberryRed"
                            }
                            ${
                                hasSubmitted &&
                                validationErrors.includes(
                                    "valid email error"
                                ) &&
                                "border-strawberryRed"
                            }`}
                            required
                            type="email"
                            id="email"
                            placeholder="e.g. stephenking@lorem.com"
                            value={
                                !personalInfo.email ? email : personalInfo.email
                            }
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            className="flex items-center justify-between mb-0.5"
                            htmlFor="phone"
                        >
                            Phone Number
                            {hasSubmitted &&
                                validationErrors.includes("phone error") && (
                                    <p className="text-xs font-bold text-strawberryRed md:text-sm">
                                        This field is required
                                    </p>
                                )}
                            {hasSubmitted &&
                                validationErrors.includes(
                                    "valid phone error"
                                ) &&
                                !validationErrors.includes("phone error") && (
                                    <p className="text-xs font-bold text-strawberryRed md:text-sm">
                                        Invalid phone number
                                    </p>
                                )}
                        </label>
                        <input
                            className={`w-full px-3 py-2 border rounded-lg outline-none duration-300 ease-in-out hover:border-purplishBlue focus:border-purplishBlue ${
                                hasSubmitted &&
                                validationErrors.includes("phone error") &&
                                "border-strawberryRed"
                            } ${
                                hasSubmitted &&
                                validationErrors.includes(
                                    "valid phone error"
                                ) &&
                                "border-strawberryRed"
                            }`}
                            required
                            type="text"
                            id="phone"
                            placeholder="e.g. +1 234 567 890"
                            value={
                                !personalInfo.phone ? phone : personalInfo.phone
                            }
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button className="hidden">submit</button>
                </form>
            </section>
            <div className="btn-container">
                <div className="font-medium flex items-center justify-end mx-auto w-[20rem] md:w-full">
                    <button
                        onClick={submitInfo}
                        className="float-right px-5 py-2 text-sm text-white rounded-md md:text-base md:right-0 md:bottom-5 bg-marineBlue"
                    >
                        Next Step
                    </button>
                </div>
            </div>
        </>
    );
};

export default PersonalInfo;
