import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Steps from "./components/Steps";
import PersonInfo from "./pages/PersonInfo";
import SelectPlans from "./pages/SelectPlans";
import Addons from "./pages/Addons";
import Summary from "./pages/Summary";

const App = () => {
    return (
        <div className="md:relative md:flex md:max-w-4xl md:mx-auto md:m-10 md:p-2.5 w-full h-[100dvh] md:h-fit md:bg-white md:shadow-lg md:rounded-xl">
            <Sidebar />
            <Routes>
                <Route path="/" element={<PersonInfo />} />
                <Route path="/select-plans" element={<SelectPlans />} />
                <Route path="/addons" element={<Addons />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
            <Steps />
        </div>
    );
};

export default App;
