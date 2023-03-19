// import React, { useState } from "react";
// import axios from "axios";


// function LoginForm() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         axios
//             .get(
//                 https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}
//         )
//             .then((response) => {
//                 const token = response.data.request_token;

//                 axios
//                     .post(
//                         https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY},
//                         {
//                             username: username,
//                             password: password,
//                             request_token: token,
//                         }
//                     )
//                     .then((response) => {
//                         const validatedToken = response.data.request_token;

//                         axios
//                             .post(
//                                 https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY},
//                                 {
//                                     request_token: validatedToken,
//                                 }
//                             )
//                             .then((response) => {
//                                 const sessionId = response.data.session_id;
//                                 localStorage.setItem("sessionId", sessionId);
//                                 window.location.reload();
//                             })
//                             .catch((error) => {
//                                 setError("Invalid username or password");
//                                 console.log(error);
//                             });
//                     })
//                     .catch((error) => {
//                         setError("Invalid username or password");
//                         console.log(error);
//                     });
//             })
//             .catch((error) => console.log(error));
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(event) => setUsername(event.target.value)}
//                     />
//                 </label>
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                     />
//                 </label>
//                 <button type="submit">Login</button>
//                 {error && <div>{error}</div>}
//             </form>
//         </div>
//     );
// }

// export default LoginForm;