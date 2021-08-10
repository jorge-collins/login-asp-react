import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";

import '../../css/Register.css'

export default function Extremofilos() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(
                process.env.REACT_APP_EXTREMOFILOS_URL
            );
            setAPIData(data);
            console.log(data.data);
        };
        fetchData();
    }, [setAPIData]);

    return (
        <div className='containerTable'>            
            <ReactBootstrap.Table striped bordered hover>                
                <thead>
                    <tr>
                        <th colSpan="4"><h3>Extremofilos</h3></th>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        APIData.data && APIData.data.map((item) => (

                            <tr key={ item.id }>
                                <td>{ item.nombres }</td>
                                <td>{ item.apellido_Paterno }</td>
                                <td>{ item.claveRegistro }</td>
                            </tr>
                        ))
                    }

                </tbody>
            </ReactBootstrap.Table>
        </div>
    );
}
