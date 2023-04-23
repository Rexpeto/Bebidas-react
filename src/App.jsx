import { CategoryProvider } from "./context/CategoryProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import ListDrinks from "./components/ListDrinks";

const App = () => {
    return (
        <CategoryProvider>
            <DrinksProvider>
                <ToastContainer theme="dark" />
                <Hero />
                <ListDrinks />
            </DrinksProvider>
        </CategoryProvider>
    );
};

export default App;
