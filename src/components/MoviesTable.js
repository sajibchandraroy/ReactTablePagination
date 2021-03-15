import React, { useState } from "react";
import { Table } from "reactstrap";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { data } from "../services/fakeMovieService";

function MoviesTable({ currentMovie, movies, setMovies, handleSort }) {
  const [isSorted, setIsSorted] = useState(false);
  const [toggleId, setToggleId] = useState(false);
  const [value, setValue] = useState();
  //const [toggleTitle, setToggleTitle] = useState(false);

  const filterItems = (e) => {  
    if(e == []) {
      setMovies(data)
    }
    else{
      let data1 = data.filter((items) => {      
        return items.id == e;
      });
      setMovies(data1);
    }
    
    

    // console.log(data)
    // let data1 = data.filter((items) => {      
    //   return items.id == e;
    // });
    // return setMovies(data1);
  };

  return (
    <>
      <div>
        <label htmlFor="title"> ID</label>
        <input
          type="checkbox"
          name="id"
          onClick={() => setToggleId(!toggleId)}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th style={{ display: toggleId ? "none" : "block" }}>
              {!isSorted ? (
                <BsArrowDown
                  onClick={() => {
                    handleSort("id", "desc");
                    setIsSorted(!isSorted);
                  }}
                  className="arrow"
                />
              ) : (
                <BsArrowUp
                  onClick={() => {
                    handleSort("id");
                    setIsSorted(!isSorted);
                  }}
                  className="arrow"
                />
              )}
              <input
                id="th-id"
                type="text"
                value={value}
                onChange={(e) => filterItems(e.target.value)}
              />
              ID
            </th>
            <th>
              {!isSorted ? (
                <BsArrowDown
                  onClick={() => {
                    handleSort("title", "desc");
                    setIsSorted(!isSorted);
                  }}
                  className="arrow"
                />
              ) : (
                <BsArrowUp
                  onClick={() => {
                    handleSort("title");
                    setIsSorted(!isSorted);
                  }}
                  className="arrow"
                />
              )}
              Title
            </th>
            <th>Genere</th>
            <th>Number In Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {currentMovie.map((movie) => {
            const { id, title, genre, numberInStock, dailyRentalRate } = movie;
            return (
              <tr key={id}>
                <td style={{ display: toggleId ? "none" : "block" }}>{id}</td>
                <td>{title}</td>
                <td>{genre}</td>
                <td>{numberInStock}</td>
                <td>{dailyRentalRate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default MoviesTable;
