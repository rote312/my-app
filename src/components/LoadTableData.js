import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoadTableData.css";

function LoadTableData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/loadtable");
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Load Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.time}>
              <td>{row.day}</td>
              <td>{row.time}</td>
              <td>{row.load_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoadTableData;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function LoadTableData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get("/loadtable");
//       setData(result.data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Day</th>
//           <th>Time</th>
//           <th>Load Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr key={row.time}>
//             <td>{row.day}</td>
//             <td>{row.time}</td>
//             <td>{row.load_status}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default LoadTableData;
