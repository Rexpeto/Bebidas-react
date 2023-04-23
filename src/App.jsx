import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";

const App = () => {
    return (
        <CategoryProvider>
            <DrinksProvider>
                <ToastContainer theme="dark" />
                <Hero />
            </DrinksProvider>
        </CategoryProvider>
    );
};

export default App;
