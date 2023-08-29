import Sidebar from "./components/Sidebar";
import PersonInfo from "./pages/PersonInfo";

const App = () => {
    return (
        <div className="flex mx-auto m-10 p-5 justify-around w-fit gap-20 bg-white">
            <Sidebar />
            <PersonInfo />
        </div>
    );
};

export default App;
