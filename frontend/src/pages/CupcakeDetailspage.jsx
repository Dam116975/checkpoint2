// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CupcakeDetailspage() {
//   const { id } = useParams();

//   const [cupcake, setCupcake] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/cupcakes/${id}`)
//       .then((datas) => setCupcake(datas.data));
//   }, []);
//   return (
// <>
//       {
//          cupcake &&
//         <div>
//           <img src={cupcake.url} alt="accessory" />
//           <h1>{cupcake.name}</h1>
//         </div>
//       }
//       </>
//   );
// }

// export default CupcakeDetailspage;
