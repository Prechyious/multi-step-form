import Sidebar from "./components/Sidebar";
import Steps from "./components/Steps";
import PersonInfo from "./pages/PersonInfo";

const App = () => {
    return (
        <div className="md:relative md:flex md:max-w-4xl md:mx-auto md:m-10 md:p-2.5 w-full h-[100dvh] md:h-fit md:bg-white md:shadow-lg md:rounded-xl">
            <Sidebar />
            <PersonInfo />
            <Steps />
        </div>
    );
};

export default App;
