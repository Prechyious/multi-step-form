const Sidebar = () => {
    return (
        <aside className="h-[568px] w-[264px] flex flex-col items-start gap-10 p-5 bg-sideBar">
            <section className="flex items-center w-full max-h-fit gap-7 uppercase text-white">
                <div className="text-black ml-5 bg-blue-200 h-10 w-10 p-3 rounded-full flex items-center justify-center font-bold text-lg">
                    1
                </div>
                <div className="leading-tight">
                    <h4>Step 1</h4>
                    <p>Your Info</p>
                </div>
            </section>
            <section className="flex items-center w-full max-h-fit gap-7 uppercase text-white">
                <div className="text-black ml-5 bg-blue-200 h-10 w-10 p-3 rounded-full flex items-center justify-center font-bold text-lg">
                    2
                </div>
                <div className="leading-tight">
                    <h4>Step 2</h4>
                    <p>Select plan</p>
                </div>
            </section>
            <section className="flex items-center w-full max-h-fit gap-7 uppercase text-white">
                <div className="text-black ml-5 bg-blue-200 h-10 w-10 p-3 rounded-full flex items-center justify-center font-bold text-lg">
                    3
                </div>
                <div className="texts">
                    <h4>Step 3</h4>
                    <p>Add-ons</p>
                </div>
            </section>
            <section className="flex items-center w-full max-h-fit gap-7 uppercase text-white">
                <div className="text-black ml-5 bg-blue-200 h-10 w-10 p-3 rounded-full flex items-center justify-center font-bold text-lg">
                    4
                </div>
                <div className="texts">
                    <h4>Step 4</h4>
                    <p>Your Summary</p>
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
