// Func components
import { HomeNf } from "./components";
// Hooks components ui
import BeerContainer from "./components";
import ButtonNf from "./components";
import LoginNf from "./components";
import SignupNf from "./components";
import SwitchNf from "././components";
import CountDownNf from "./components";
import LobbyContainer from "./components";
import UserContainer from "./components";

// Hooks components pageComponents
import JoinLobbyNf from "./components";
import LeaderBoard from "./components";
import CreateLobby from "./components";

// Storage functions
import { setStorage, getStorage, removeStorage, clearStorage } from "./utils/storage";


// utils
import { iconArrayCard, bossIconCard, assignIdToIconCard } from "./utils/iconArrayAssign";

export {
    LoginNf,
    SignupNf,
    ButtonNf,
    SwitchNf,
    BeerContainer,
    iconArrayCard, bossIconCard, assignIdToIconCard,
    HomeNf,
    JoinLobbyNf,
    CountDownNf,
    UserContainer,
    LobbyContainer,
    LeaderBoard,
    CreateLobby,
    setStorage,
    getStorage, 
    removeStorage, 
    clearStorage
}