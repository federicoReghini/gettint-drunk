import React, { useEffect } from 'react';
import { connectWS, eventEmit, eventOn, getStorage, JoinLobbyNf } from './lib';
import { getMessage } from './lib/services/genericWebSocket';

import LobbyContainer from "./lib/components/hooksComponents/LobbyContainer";
import SignupNf from "./lib/components/hooksComponents/SignupNf";
import LoginNf from "./lib/components/hooksComponents/LoginNf";
import LeaderBoardNf from "./lib/components/hooksComponents/pageComponents/LeaderBoardNf";
import CreateLobbyNf from "./lib/components/hooksComponents/pageComponents/CreateLobbyNf";
import JoinLobbyNf from "./lib/components/hooksComponents/pageComponents/JoinLobbyNf";


function App() {

  return (
    <>
      <JoinLobbyNf />
      {/* <LeaderBoardNf /> */}
      {/*   <CreateLobbyNf /> */}
      {/* <SignupNf /> */}
    </>
  );
}

export default App