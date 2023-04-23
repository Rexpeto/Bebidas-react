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

    //* State instructions
    const [instructions, setInstructions] = useState({});

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
        setInstructions({});
        setModal(!modal);
    };

    //* Data from drinks to modal
    const handdlerModal = async (drinkId) => {
        try {
            document.body.style.overflow = "hidden";

            const {
                data: { drinks },
            } = await axios(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
            );

            setInstructions(drinks[0]);

            setModal(true);
        } catch (error) {
            document.body.style.overflow = "auto";
            console.log(error);
        }
    };

    return (
        <DrinksContext.Provider
            value={{
                getDrinks,
                result,
                modal,
                handdlerModalShow,
                handdlerModal,
                instructions,
            }}
        >
            {modal && <Modal />}
            {children}
        </DrinksContext.Provider>
    );
};

export default DrinksContext;
