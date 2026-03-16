import FaceExpression from "../../expression/component/FaceExpression";
import Player from "../../home/component/Player";
import { useSong } from "../../home/hooks/useSong";

const Dashboard = () => {
  const { handleGetSong } = useSong();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <FaceExpression
        onClick={(expression) => {
          handleGetSong({ mood: expression });
        }}
      />

      <Player />
    </div>
  );
};

export default Dashboard;
