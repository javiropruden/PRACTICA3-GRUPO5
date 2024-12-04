import React from "react";

const History = ({ history }) => (
  <div className="history">
    <h2>Últimos libros buscados</h2>
    <ul>
      {history.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default History;
