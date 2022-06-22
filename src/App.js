import { useEffect, useState } from "react";
import { View } from "react-native";
import { ButtonNf, HomeNf, JoinLobbyNf, LeaderBoard, Login, Signup, SwitchNf } from "./components";
import CreateLobby from "./components/hooksComponents/pageComponents/CreateLobby";
import { closeConnection, openConnection, sendDataToWs, wsMessage } from "./services/genericWebSocket";
function App() {

  return (
    <>
      {/* <View style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
      <HomeNf />
      {/* </View> */}
    </>
  );
}

export default App;
