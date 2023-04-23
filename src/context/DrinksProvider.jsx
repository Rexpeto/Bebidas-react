/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";

const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
    //* State drink
    const [result, setResult] = useState([]);

    //* State modal
    const [modal, setModal] = useState(false);

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

    //* Show modal
    const handdlerModalShow = () => {
        document.body.style.overflow = "auto";
        setModal(!modal);
    };

    //* Data from drinks to modal
    const handdlerModal = (drinkId) => {
        document.body.style.overflow = "hidden";
        setModal(true);
    };

    return (
        <DrinksContext.Provider
            value={{
                getDrinks,
                result,
                modal,
                handdlerModalShow,
                handdlerModal,
            }}
        >
            {modal && <Modal />}
            {children}
        </DrinksContext.Provider>
    );
};

export default DrinksContext;
