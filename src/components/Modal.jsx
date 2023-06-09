import { RiCloseLine } from "react-icons/ri";
import useDrinks from "../hooks/useDrinks";

const Modal = () => {
    const { handdlerModalShow, instructions } = useDrinks();
    const { strDrink, strInstructionsES, strInstructions, strDrinkThumb } =
        instructions;

    return (
        <div className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] max-h-full backdrop-blur-sm">
            <div className="relative w-full max-w-2xl md:max-w max-h-full">
                <div className="relative rounded-lg shadow bg-gray-700/90 backdrop-blur-sm backdrop-brightness-90">
                    <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {strDrink}
                        </h3>
                        <button
                            onClick={handdlerModalShow}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-2xl p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white transition duration-150"
                        >
                            <RiCloseLine />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <img
                            src={strDrinkThumb}
                            alt={strDrink}
                            className="rounded-lg"
                        />
                        <h4 className="font-bold text-lg">Instrucciones:</h4>
                        <p className="text-base leading-relaxed text-gray-200">
                            {strInstructionsES
                                ? strInstructionsES
                                : strInstructions}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
