import React from "react";
import FaceExpression from "../../expression/component/FaceExpression";
import Player from "../component/Player";
import { useSong } from "../hooks/useSong";
import Login from "../../auth/pages/Login";

const Home = () => {
  const { handleGetSong } = useSong();

  return (
    <>
    <Login/>
    </>
  );
};

export default Home;
