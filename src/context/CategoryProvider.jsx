/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    //* State Category
    const [category, setCategory] = useState([]);

    //* Get category api
    const getCategory = async () => {
        try {
            const {
                data: { drinks },
            } = await axios(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            );

            setCategory(drinks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <CategoryContext.Provider
            value={{
                category,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryContext;
