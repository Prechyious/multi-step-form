import Sidebar from "./components/Sidebar";
import Steps from "./components/Steps";
import PersonInfo from "./pages/PersonInfo";

const App = () => {
    const steps = [
        { step1: "personalInfo" },
        { step2: "selectPlans" },
        { step3: "addOns" },
        { step4: "summary" },
    ];
    return (
        <div className="md:relative md:flex md:max-w-4xl md:mx-auto md:m-10 md:p-2.5 w-full h-[100dvh] md:h-fit md:bg-white md:shadow-lg md:rounded-xl">
            <Sidebar />
            <PersonInfo />
            <Steps steps={steps} />
        </div>
    );
};

export default App;
