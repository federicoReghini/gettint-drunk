import { useEffect, useState } from "react";
import { View } from "react-native-web";
import { ButtonNf, HomeNf, JoinLobbyNf, Login, Signup, SwitchNf } from "./components";
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
        <UserInfoContainer></UserInfoContainer>
        {/* <ButtonNf title='prova' onPress={()=> console.log('premuto')} /> */}
        <SwitchNf isOn={first} onValueChange={() => setfirst(!first)} />
      </View>
    </>
  );
}

export default App;
