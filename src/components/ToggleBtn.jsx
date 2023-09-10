const ToggleBtn = ({ plan, setPlan }) => {
    const toggleAction = () => {
        setPlan(!plan);
        console.log(plan);
    };

    return (
        <div className="bg-magnolia flex items-center justify-center gap-2 p-2 rounded-md">
            <p>Monthly</p>
            <div
                className="bg-marineBlue relative h-4 w-8 rounded-lg cursor-pointer"
                onClick={toggleAction}
            >
                <div
                    className={`bg-white h-3 w-3 rounded-full relative top-0.5 ${
                        plan ? "left-[1.1rem]" : "left-0.5"
                    } transition-all duration-300 ease-in-out`}
                ></div>
            </div>
            <p>Yearly</p>
        </div>
    );
};

export default ToggleBtn;
