// import { View } from "react-native";

import LeaderBoard from "./lib/components/hooksComponents/pageComponents/LeaderBoard";
import LobbyContainer from "./lib/components/hooksComponents/LobbyContainer";
import SignupNf from "./lib/components/hooksComponents/SignupNf";
import LoginNf from "./lib/components/hooksComponents/LoginNf";

import { setStorage } from "./lib/utils/storage";
function App() {

  setStorage('test', 'ciao')

  return (
    <>
      {/* <View style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
      {/* </View> */}
      {/* <LobbyContainer /> */}
      <LoginNf />
    </>
  );
}

export default App;
