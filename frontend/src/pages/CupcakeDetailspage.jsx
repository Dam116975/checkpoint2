import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CupcakeDetailspage() {
  const { id } = useParams();

  const [cupcake, setCupcake] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/cupcakes/${id}`)
      .then((datas) => setCupcake(datas.data));
  }, []);
  return (
    <div>
      {cupcake && (
        <div key={cupcake.id} className="cupcake-container">
          <div className="cupcake">
            <img src={cupcake.url} alt={cupcake.name} />
            <div className="cream">
              <div
                className="cream-1"
                style={{ backgroundColor: cupcake.color1 }}
              />
              <div
                className="cream-2"
                style={{ backgroundColor: cupcake.color2 }}
              />
              <div
                className="cream-3"
                style={{
                  backgroundColor: cupcake.color3,
                }}
              />
            </div>
            <div className="bottom">
              <div className="bottom-in">
                <div className="face">
                  <div className="eyes">
                    <div className="left-eye" />
                    <div className="right-eye" />
                  </div>
                  <div className="mouth" />
                </div>
              </div>
            </div>
          </div>
          <div className="cupcake-name">{cupcake.name}</div>
        </div>
      )}
    </div>
  );
}

export default CupcakeDetailspage;
