// import { Navigate, Outlet } from "react-router-dom";
// import jwtDecode from 'jwt-decode'; // Use default import
// import { useState, useEffect } from "react";
// import dayjs from "dayjs";

// // Define the shape of the decoded token
// interface DecodedToken {
//   exp: number; // Token expiry time in Unix timestamp
//   [key: string]: any; // Allow for other properties
// }

// const Protected: React.FC = () => {
//   const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

//   useEffect(() => {
//     const access_token = localStorage.getItem("access_token");
//     if (access_token) {
//       try {
//         const decoded = jwtDecode(access_token);
//         const isExpired = dayjs.unix(decoded.exp).isBefore(dayjs());
//         console.log(isExpired, "expire status");
//         setDecodedToken(decoded);
//         console.log("decoded access token is==>", decoded.exp);
        
//         if (isExpired) {
//           localStorage.removeItem("access_token");
//           localStorage.removeItem("refresh_token");
//         }
//       } catch (e) {
//         console.error("Invalid token", e);
//       }
//     }
//   }, []);

//   const access_token = localStorage.getItem("access_token");

//   return access_token? <Outlet/> : <Navigate to="/"/>;
// };

// export default Protected;
