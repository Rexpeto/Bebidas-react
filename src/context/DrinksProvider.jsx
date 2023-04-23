/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
    //* State drink
    const [result, setResult] = useState([]);

    //* Get drinks Api
    const getDrinks = async (obj) => {
        try {
            const {
                data: { drinks },
            } = await axios(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${obj?.name}&c=${obj?.category}`
            );

            setResult(drinks);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DrinksContext.Provider
            value={{
                getDrinks,
                result,
            }}
        >
            {children}
        </DrinksContext.Provider>
    );
};

export default DrinksContext;
