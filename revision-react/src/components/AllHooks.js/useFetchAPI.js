import React, { useEffect, useState } from "react";

const useFetchAPI = () => {
  const [usersInfo, setUsersInfo] = useState(null);

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    const data = await fetch(`https://api.github.com/users/ruchita00`);
    const json = await data.json();
    setUsersInfo(json);
  };
  return usersInfo;
};

export default useFetchAPI;
