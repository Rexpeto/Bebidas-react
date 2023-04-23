import useDrinks from "../hooks/useDrinks";
import CardDrink from "./CardDrink";

const ListDrinks = () => {
    const { result } = useDrinks();

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 px-12 my-5 gap-6 md:gap-4">
            {result.map((drink) => (
                <CardDrink key={drink?.idDrink} drink={drink} />
            ))}
        </div>
    );
};

export default ListDrinks;
