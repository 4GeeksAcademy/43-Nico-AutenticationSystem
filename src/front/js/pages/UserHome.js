import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/UserHome.css"

export const UserHome = () => {
    const { actions, store } = useContext(Context)
    const navigate = useNavigate()
    const { token } = useContext(Context);
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        const options = {
            headers: {
                "Authorization": "Bearer " + store.token,
            },
        }
        try {
            const response = await axios.get(
                process.env.BACKEND_URL + "/api/protected",
                options
            );
            setUserData(response.data);

        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    useEffect(() => {

        fetchUserData();
    }, []);

    useEffect (() => {
        actions.checkLogin(navigate)
      },[])

    return (
        <div className="container-fluid contarinerGeneralUserHomejs">
                <div className="presentationUserHome">
                    {userData ? (
                        <div className="welcomeMessage">
                        <h1 className="welcomeText">Bienvenido, {userData.user_name}</h1>
                        </div>
                    ) : (
                        <p className="loadingMessage">Cargando...</p>
                    )}
                </div>
        </div>
    );
};
