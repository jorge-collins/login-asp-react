import { createContext, useState } from "react";

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

    const [employees] = useState([
        {id:1, name:'Hardy', email:' hardy@gmail.com', address:'unknow', phone:'1112223344'}
    ])

    return (
        <EmployeeContext.Provider value={{ employees }}>
            { props.children }
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;