const CardDrink = ({ drink }) => {
    const { strDrink, strDrinkThumb } = drink;
    return (
        <div class="max-w-sm border bg-gray-800/50 backdrop-blur-xl rounded-lg shadow border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={strDrinkThumb} alt={strDrink} />
            </a>
            <div class="p-5">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-white">
                    {strDrink}
                </h5>
                <a
                    href="#"
                    class="block items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg outline-none bg-blue-600 hover:bg-blue-700 transition duration-150"
                >
                    Saber más
                </a>
            </div>
        </div>
    );
};

export default CardDrink;
