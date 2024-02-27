import React, { useEffect, useState } from "react";

const useFetchData = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const data = await fetch("https://api.github.com/users/ruchita00");
    const json = await data.json();
    setUserInfo(json);
  };
  return userInfo;
};

export default useFetchData;
