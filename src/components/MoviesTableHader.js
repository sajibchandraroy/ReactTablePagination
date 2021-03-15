import React, { useState } from "react";
import { Header } from "./TableHeaderData";

const MoviesTableHader = () => {
  const [header] = useState(Header);
  return (
    <thead>
      {header.map((head) => {
        const { id, title, genre, numberInStock, rate } = head;
        return (
          <tr>
            <th>{id}</th>
            <th>{title}</th>
            <th>{genre}</th>
            <th>{numberInStock}</th>
            <th>{rate}</th>
          </tr>
        );
      })}
    </thead>
  );
};

export default MoviesTableHader;
