import { useEffect, useState } from "react";;
import { ButtonNf, HomeNf, JoinLobbyNf, LobbyContainer, Login, Signup, SwitchNf } from "./components";
import { View } from "react-native";
import { ButtonNf, HomeNf, JoinLobbyNf, LeaderBoard, Login, Signup, SwitchNf } from "./components";
import CreateLobby from "./components/hooksComponents/pageComponents/CreateLobby";
import { closeConnection, openConnection, sendDataToWs, wsMessage } from "./services/genericWebSocket";
import UserInfoContainer from "./components/hooksComponents/UserInfoContainer";
function App() {
  const [first, setfirst] = useState(false)

  // useEffect(()=> {
  //   openConnection()
  //   closeConnection()
  //   wsMessage();
  //   sendDataToWs('ciao');
  // }, [])
  const onValueChange = () => {
    setfirst(!first)
  }

  return (
    <>
      <View style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* <ButtonNf title='prova' onPress={()=> console.log('premuto')}/> */}
        {/* <SwitchNf isOn={first} onValueChange={()=> setfirst(!first)} /> */}
        {/* <JoinLobbyNf /> */}
        <LeaderBoard />
      </View>
    </>
  );
}

export default App;
