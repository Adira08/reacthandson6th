import React, { useState, createContext } from 'react'

export const StudentContext = createContext();

export const StudentAPI = props => {

    const [student, setStudent] = useState([
        {
            "ID": "1",
            "name": "Abhishek Singh",
            "age": "25",
            "course": "MCA",
            "batch": "2021",
        },
        {
            "ID": "2",
            "name": "Kunal Sengupta",
            "age": "26",
            "course": "M. Tech",
            "batch": "2019"
        }
    ])
    return (
        <div>
            <StudentContext.Provider value={[student, setStudent]}>
                {props.children}
            </StudentContext.Provider>
        </div>
    )
}
