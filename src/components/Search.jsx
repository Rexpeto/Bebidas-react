import { RiArrowDownSLine, RiSearchLine } from "react-icons/ri";

const Search = () => {
    return (
        <form>
            <div className="relative w-[30rem]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-[2]">
                    <RiSearchLine  className="text-white"/>
                </div>
                <input
                    type="text"
                    className="block w-full p-4 pl-10 text-sm bg-gray-800/50 backdrop-blur-xl border-gray-800 border rounded-lg focus:border-blue-500 placeholder-gray-400 text-white outline-none transition duration-150"
                    placeholder="Buscar Bebida"
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
};

export default Search;
