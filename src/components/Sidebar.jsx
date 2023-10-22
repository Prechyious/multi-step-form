import { useSelector } from "react-redux";

const Sidebar = () => {
    const step = useSelector((state) => state.form.step);
    return (
        <aside className="min-w-[20rem] mx-auto min-h-[11rem] md:h-[36rem] md:rounded-lg md:min-w-[16rem] flex md:flex-col items-start gap-5 justify-center md:justify-start md:p-10 md:gap-3.5 p-5 bg-sideBarMobile md:bg-sideBar bg-cover md:bg-no-repeat z-10">
            <section className="flex flex-col items-center mt-4 text-white uppercase md:flex-row md:gap-7 md:mt-0">
                <div
                    className={`h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold border text-base md:h-10 md:w-10 md:p-5 duration-300 ${
                        step === 1
                            ? "bg-blue-200 text-black"
                            : "text-white border-white"
                    }`}
                >
                    1
                </div>
                <div className="hidden leading-tight md:block">
                    <h4 className="text-lightGray">Step 1</h4>
                    <p className="font-medium">Your Info</p>
                </div>
            </section>
            <section className="flex flex-col items-center mt-4 text-white uppercase md:flex-row md:gap-7 max-h-fit">
                <div
                    className={`h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold border text-lg md:h-10 md:w-10 md:p-5 duration-300 ${
                        step === 2
                            ? "bg-blue-200 text-black border"
                            : "text-white border-white"
                    }`}
                >
                    2
                </div>
                <div className="hidden leading-tight md:block">
                    <h4 className="text-lightGray">Step 2</h4>
                    <p className="font-medium">Select plan</p>
                </div>
            </section>
            <section className="flex flex-col items-center mt-4 text-white uppercase md:flex-row max-h-fit gap-7">
                <div
                    className={`h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold border text-lg md:h-10 md:w-10 md:p-5 duration-300 ${
                        step === 3
                            ? "bg-blue-200 text-black"
                            : "text-white border-white"
                    }`}
                >
                    3
                </div>
                <div className="hidden leading-tight md:block">
                    <h4 className="text-lightGray">Step 3</h4>
                    <p className="font-medium">Add-ons</p>
                </div>
            </section>
            <section className="flex flex-col items-center mt-4 text-white uppercase md:flex-row max-h-fit md:gap-7">
                <div
                    className={`h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold border text-lg md:h-10 md:w-10 md:p-5 duration-300 ${
                        step >= 4
                            ? "bg-blue-200 text-black"
                            : "text-white border border-white"
                    }`}
                >
                    4
                </div>
                <div className="hidden leading-tight md:block">
                    <h4 className="text-lightGray">Step 4</h4>
                    <p className="font-medium">Your Summary</p>
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
