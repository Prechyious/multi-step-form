const Sidebar = () => {
    return (
        <aside className="min-w-[375px] h-[172px] md:h-[568px] md:min-w-[264px] flex md:flex-col items-start gap-5 justify-center md:justify-start md:p-10 md:gap-10 p-5 bg-sideBarMobile md:bg-sideBar bg-cover md:bg-no-repeat">
            <section className="flex flex-col md:flex-row items-center md:gap-7 uppercase text-white mt-4 md:mt-0">
                <div className="text-black bg-blue-200 h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-base md:h-10 md:w-10 md:p-5">
                    1
                </div>
                <div className="leading-tight hidden md:block">
                    <h4 className="text-lightGray">Step 1</h4>
                    <p className="font-medium">Your Info</p>
                </div>
            </section>
            <section className="flex flex-col md:flex-row md:gap-7 items-center max-h-fit uppercase text-white mt-4">
                <div className="text-white border border-white h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-lg md:h-10 md:w-10 md:p-5">
                    2
                </div>
                <div className="leading-tight hidden md:block">
                    <h4 className="text-lightGray">Step 2</h4>
                    <p className="font-medium">Select plan</p>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center max-h-fit gap-7 uppercase text-white mt-4">
                <div className="text-white border border-white h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-lg md:h-10 md:w-10 md:p-5">
                    3
                </div>
                <div className="leading-tight hidden md:block">
                    <h4 className="text-lightGray">Step 3</h4>
                    <p className="font-medium">Add-ons</p>
                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center max-h-fit md:gap-7 uppercase text-white mt-4">
                <div className="text-white border border-white h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-lg md:h-10 md:w-10 md:p-5">
                    4
                </div>
                <div className="leading-tight hidden md:block">
                    <h4 className="text-lightGray">Step 4</h4>
                    <p className="font-medium">Your Summary</p>
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
