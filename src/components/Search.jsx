import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import useCategory from "../hooks/useCategory";
import useDrinks from "../hooks/useDrinks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
    //* State search
    const [search, setSearch] = useState({
        name: "",
        category: "",
    });

    //* State category
    const { category } = useCategory();

    //* function getDrinks
    const { getDrinks } = useDrinks();

    //* After submit
    const handdlerSubmit = (e) => {
        e.preventDefault();

        if (Object.values(search).includes("")) {
            toast.warn("Todos los campos son obligatorios");
            return;
        }

        getDrinks(search);
    };

    return (
        <form
            className="flex flex-col-reverse md:flex-row gap-4 md:gap-2 w-full justify-center"
            onSubmit={handdlerSubmit}
        >
            <select
                className="border text-sm rounded-lg block p-3 md:px-2 bg-gray-800/50 backdrop-blur-xl border-gray-600 placeholder-gray-400 text-white focus:border-blue-500 outline-none transition duration-150"
                name="category"
                onChange={(e) =>
                    setSearch({
                        ...search,
                        [e.target.name]: e.target.value,
                    })
                }
            >
                <option value="">Categorías</option>
                {category.map((item) => (
                    <option value={item?.strCategory} key={item?.strCategory}>
                        {item?.strCategory}
                    </option>
                ))}
            </select>
            <div className="relative w-full md:w-[30rem]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-[2]">
                    <RiSearchLine className="text-white" htmlFor="search" />
                </div>
                <input
                    id="search"
                    type="text"
                    className="block w-full p-4 pl-10 text-sm bg-gray-800/50 backdrop-blur-xl border-gray-800 border rounded-lg focus:border-blue-500 placeholder-gray-400 text-white outline-none transition duration-150"
                    placeholder="Buscar Bebida"
                    name="name"
                    autocomplete="off"
                    onChange={(e) =>
                        setSearch({
                            ...search,
                            [e.target.name]: e.target.value,
                        })
                    }
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
