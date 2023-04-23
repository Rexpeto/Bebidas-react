import useDrinks from "../hooks/useDrinks";

const CardDrink = ({ drink }) => {
    const { handdlerModal } = useDrinks();
    const { strDrink, strDrinkThumb, idDrink } = drink;
    return (
        <div className="max-w-sm border bg-gray-800/50 backdrop-blur-xl rounded-lg shadow border-gray-700">
            <button onClick={() => handdlerModal(idDrink)}>
                <img
                    className="rounded-t-lg"
                    src={strDrinkThumb}
                    alt={strDrink}
                />
            </button>
            <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">
                    {strDrink}
                </h5>
                <button
                    onClick={() => handdlerModal(idDrink)}
                    className="block w-full items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg outline-none bg-blue-600 hover:bg-blue-700 transition duration-150"
                >
                    Saber más
                </button>
            </div>
        </div>
    );
};

export default CardDrink;
