import React, { useState, createContext } from "react";

export const StuContext = createContext();

export const ContextApiProvider = (props) => {
  const [stuData, setStuData] = useState([
    {
      id: "1",
      name: "Aditya",
      age: 26,
      course: "MERN",
      batch: "May",
    },
    {
      id: "2",
      name: "Raj",
      age: 25,
      course: "MERN",
      batch: "june",
    },
    {
      id: "3",
      name: "Sneha",
      age: 25,
      course: "MERN",
      batch: "September",
    },
    {
      id: "4",
      name: "Pawan",
      age: 26,
      course: "MERN",
      batch: "July",
    },
  ]);
  return (
    <StuContext.Provider value={[stuData, setStuData]}>
      {props.children}
    </StuContext.Provider>
  );
};
