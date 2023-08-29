import Sidebar from "./components/Sidebar";
import PersonInfo from "./pages/PersonInfo";

const App = () => {
    return (
        <div className="md:flex md:flex-col md:mx-auto md:m-10 md:p-5 md:justify-around w-full md:gap-20">
            <Sidebar />
            <PersonInfo />
        </div>
    );
};

export default App;
