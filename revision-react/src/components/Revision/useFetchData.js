import React, { useEffect, useState } from "react";

const useFetchData = () => {
  const [usersData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await fetch("https://api.github.com/users/ruchita00");
    const json = await data.json();
    setUserData(json);
  };
  return usersData;
};

export default useFetchData;
