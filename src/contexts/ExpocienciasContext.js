import { createContext } from "react";
import * as QueryServices from "../services/QueryServices";

export const ExpocienciasContext = createContext();

const ExpocienciasContextProvider = (props) => {
    const agregarParticipante = async (props) => {
        const { nombreEst1, correoEst1, telefonoEst1, comentarios } = props;

        const { data } = await QueryServices.postRegister(
            `/registro/WSapiRegistros/api/Expociencias`,
            { nombreEst1, correoEst1, telefonoEst1, comentarios }
        );
        console.log(data);
    };

    const eliminarParticipante = async (id) => {
        await QueryServices.deleteRegister(
            `/registro/WSapiRegistros/api/Expociencias/`,
            id
        );
        /*         const { result } = await QueryServices.deleteRegister(
            `/registro/WSapiRegistros/api/Expociencias/`,
            id
        );
        console.log(result); */
    };

    const actualizarParticipante = async (item) => {
        await QueryServices.updateRegister(
            `/registro/WSapiRegistros/api/Expociencias`,
            item
        );
        /*         const { result } = await QueryServices.updateRegister(
            `/registro/WSapiRegistros/api/Expociencias`,
            item
        );
        console.log(result); */
    };

    const obtenerParticipantes = async () => {
        await QueryServices.getRegisters(
            `/registro/WSapiRegistros/api/Expociencias`
        );
    }

    return (
        <ExpocienciasContext.Provider
            value={{
                agregarParticipante,
                eliminarParticipante,
                actualizarParticipante,
                obtenerParticipantes,
            }}
        >
            {props.children}
        </ExpocienciasContext.Provider>
    );
};

export default ExpocienciasContextProvider;
