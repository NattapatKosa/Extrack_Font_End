import './Setting.css'
import SettingForm from '../../components/SettingForm/SettingForm'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../configs/axios";
const Setting = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    const response = await axiosInstance.get("user/me");
    setUser(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const signOut = () => {
    const text = "Are you sure you want to sign out?";
    if (confirm(text) == true) {
      axiosInstance.post("auth/signout").then(() => {
        alert("Have a Good Day!");
        navigate("/");
      });
    }
  };
  
  return (
    <div>
      <h1>Setting</h1>
    <div className="container">
      {user && (
        <>
          <SettingForm user={user} />
        </>
      )}
    </div>
    <a onClick={signOut}>Sign out</a>
  </div>
  )
}

export default Setting