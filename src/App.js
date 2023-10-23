import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlans from "./pages/SelectPlans";
import SelectAddons from "./pages/SelectAddons";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";

const App = () => {
    const step = useSelector((state) => state.form.step);
    return (
        <main className="relative md:flex md:max-w-4xl md:mx-auto md:m-10 md:p-2.5 h-[100dvh] md:h-fit md:bg-white md:shadow-lg md:rounded-xl">
            <Sidebar />
            <div className="md:relative md:flex-1">
                {step === 1 && <PersonalInfo />}

                {step === 2 && <SelectPlans />}
                {step === 3 && <SelectAddons />}
                {step === 4 && <Summary />}
                {step === 5 && <ThankYou />}
            </div>
        </main>
    );
};

export default App;
