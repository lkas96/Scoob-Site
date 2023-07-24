import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userDetails, setUserDetails] = useState({}); // Add userDetails state to store all user details

  return (
    <UserContext.Provider
      value={{ userEmail, setUserEmail, userDetails, setUserDetails }} // Include setUserDetails in the context
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;





// UserContext.js ORIGINAL
// import React, { createContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [userEmail, setUserEmail] = useState('');

//     return (
//         <UserContext.Provider value={{ userEmail, setUserEmail }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserContext;


