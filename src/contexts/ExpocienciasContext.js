import { createContext } from "react";
import * as QueryServices from "../services/QueryServices";

export const ExpocienciasContext = createContext()

const ExpocienciasContextProvider = (props) => {


/*     const [participantes] = useState([
        {id:1, nombreEst1:'Hardy', correoEst1:' hardy@gmail.com', comentarios:'unknow', telefonoEst1:'1112223344'}
    ]) */

    const agregarParticipante = async( props ) => {
        const { nombreEst1, correoEst1, telefonoEst1, comentarios } = props;
        
        const { data } = await QueryServices.postRegister(
            `/registro/WSapiRegistros/api/Expociencias`, { nombreEst1, correoEst1, telefonoEst1, comentarios }
        );
        console.log(data);
    };

    const eliminarParticipante = async(id) => {
        // console.log("eliminar", id);
        const {result} = await QueryServices.deleteRegister(`/registro/WSapiRegistros/api/Expociencias/`, id);
        console.log(result);
    }

    const actualizarParticipante = async(props) => {
        
    }


    return (
        <ExpocienciasContext.Provider value={{ agregarParticipante, eliminarParticipante }}>
            {props.children}
        </ExpocienciasContext.Provider>
    )
}

export default ExpocienciasContextProvider;
