import { CategoryProvider } from "./context/CategoryProvider";
import Hero from "./components/Hero";

const App = () => {
    return (
        <CategoryProvider>
            <Hero />
        </CategoryProvider>
    );
};

export default App;
