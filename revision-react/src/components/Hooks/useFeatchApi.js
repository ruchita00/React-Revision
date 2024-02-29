import React, { useEffect, useState } from "react";

const useFeatchApi = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await fetch("https://api.github.com/users/ruchita00");
    const json = await data.json();
    setUserInfo(json);
  };
  return userInfo;
};

export default useFeatchApi;
