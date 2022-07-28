import React, { useEffect, useState } from "react";
import Cupcake from "@components/Cupcake";

export default function CupcakeList() {
  // Step 1: get all cupcakes
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/cupcakes")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);
  // console.log(datas);

  // Step 3: get all accessories

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/accessories")
      .then((response) => response.json())
      .then((json) => setAccessories(json));
  }, []);
  // console.log(accessories)
  // step 5
  const [nameFilter, setNameFilter] = useState("");
  const handleNameFilter = (e) => {
    setNameFilter(e.target.value);
  };
  // console.log(nameFilter);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select onChange={handleNameFilter} id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories &&
              accessories.map((accessorie) => {
                return (
                  <option key={accessorie.id} value={accessorie.id}>
                    {accessorie.name}
                  </option>
                );
              })}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {datas &&
          datas
            .filter(
              (cupcake) => !nameFilter || cupcake.accessory_id === nameFilter
            )
            .map((cupcake) => {
              return (
                <li className="cupcake-item" key={cupcake.id}>
                  <Cupcake cupcake={cupcake} />
                </li>
              );
            })}
        ;{/* end of block */}
      </ul>
    </>
  );
}
