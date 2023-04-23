import { CategoryProvider } from "./context/CategoryProvider";
import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";

const App = () => {
    return (
        <CategoryProvider>
            <ToastContainer theme="dark" />
            <Hero />
        </CategoryProvider>
    );
};

export default App;
