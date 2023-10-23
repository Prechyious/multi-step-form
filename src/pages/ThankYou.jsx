import checkmark from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
    return (
        <section className="-mt-[4.8rem] rounded-lg py-5 px-6 md:p-0 md:h-full flex flex-col items-center justify-center max-w-xs md:max-w-md md:shadow-none mx-auto md:bg-none md:mt-0 my-auto font-medium text-marineBlue bg-white shadow-lg">
            <div className="p-3 mb-2 bg-white rounded-full md:mb-3">
                <img className="h-12 md:h-16" src={checkmark} alt="checkmark" />
            </div>

            <div className="mb-5 text-center md:mb-10">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-2.5">
                    Thank You!
                </h1>
                <p className="max-w-sm text-[14px] font-medium md:text-base text-coolGray md:max-w-full">
                    Thanks for confirming your subscription! We hope you have
                    fun using our <br className="sm:hidden" /> platform. If you
                    ever need support, <br className="sm:hidden" />
                    please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </section>
    );
};

export default ThankYou;
