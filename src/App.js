// import { View } from "react-native";

import LobbyContainer from "./lib/components/hooksComponents/LobbyContainer";
import SignupNf from "./lib/components/hooksComponents/SignupNf";
import LoginNf from "./lib/components/hooksComponents/LoginNf";
import LeaderBoardNf from "./lib/components/hooksComponents/pageComponents/LeaderBoardNf";

function App() {

  /* setStorage('test', 'ciao') */

  return (
    <>
      {/* <View style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
      {/* </View> */}
      <LobbyContainer />
      {/*   <LoginNf /> */}
    </>
  );
}

export default App;
