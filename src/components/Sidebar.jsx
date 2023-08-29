const Sidebar = () => {
    return (
        <aside className="min-w-[375px] h-[172px] md:h-[568px] md:w-[264px] flex md:flex-col items-start gap-5 justify-center md:gap-10 p-5 bg-sideBarMobile md:bg-sideBar bg-cover">
            <section className="flex flex-col items-center md:max-h-fit md:gap-7 uppercase text-white mt-4">
                <div className="text-black bg-blue-200 h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-base">
                    1
                </div>
                <div className="leading-tight hidden md:block">
                    <h4>Step 1</h4>
                    <p>Your Info</p>
                </div>
            </section>
            <section className="flex flex-col items-center max-h-fit uppercase text-white mt-4">
                <div className="text-black bg-blue-200 h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-lg">
                    2
                </div>
                <div className="leading-tight hidden md:block">
                    <h4>Step 2</h4>
                    <p>Select plan</p>
                </div>
            </section>
            <section className="flex flex-col items-center max-h-fit gap-7 uppercase text-white mt-4">
                <div className="text-black bg-blue-200 h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-lg">
                    3
                </div>
                <div className="hidden md:block">
                    <h4>Step 3</h4>
                    <p>Add-ons</p>
                </div>
            </section>
            <section className="flex flex-col items-center max-h-fit gap-7 uppercase text-white mt-4">
                <div className="text-black bg-blue-200 h-6 w-6 p-4 rounded-full flex items-center justify-center font-bold text-lg">
                    4
                </div>
                <div className="hidden md:block">
                    <h4>Step 4</h4>
                    <p>Your Summary</p>
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
