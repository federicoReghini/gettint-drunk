import { useEffect } from "react";
import { View } from "react-native-web";
import { ButtonNf, Login, Signup } from "./components";
import { closeConnection, openConnection, sendDataToWs, wsMessage } from "./services/genericWebSocket";

function App() {

  // useEffect(()=> {
  //   openConnection()
  //   closeConnection()
  //   wsMessage();
  //   sendDataToWs('ciao');
  // }, [])
  return (
    <>
      <View style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ButtonNf title='prova' onPress={()=> console.log('premuto')} />
      </View>
    </>
  );
}

export default App;
