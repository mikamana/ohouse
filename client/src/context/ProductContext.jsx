import { Children, useState } from "react";
import { React, createContext } from "react";
export let prdContext = createContext();

export function ProductContext({ children }) {

    const [revOst, setRevOst] = useState(0);
    const [revOsh, setRevOsh] = useState(0);

    const getOffset = (e) => {

        setRevOst(e.ost)

    }


    return (

        <prdContext.Provider value={{ revOsh, revOst, getOffset }}>
            {children}
        </prdContext.Provider>

    );

}
