// Func components
import HomeNf from "./components/funcComponents/pageComponents/HomeNf";

// Hooks components ui
import BeerContainer from "./components/hooksComponents/BeerContainer/BeerContainer";
import ButtonNf from "./components/hooksComponents/ButtonNf";
import LoginNf from "./components/hooksComponents/LoginNf";
import SignupNf from "./components/hooksComponents/SignupNf";
import SwitchNf from "././components/hooksComponents/SwitchNf";
import CountDownNf from "./components/hooksComponents/CountDownNf";
import LobbyContainer from "./components/hooksComponents/LobbyContainer";
import UserContainer from "./components/hooksComponents/UserContainer";

// Hooks components pageComponents
import JoinLobbyNf from './components/hooksComponents/pageComponents/JoinLobbyNf';
import LeaderBoardNf from "./components/hooksComponents/pageComponents/LeaderBoardNf";
import CreateLobbyNf from "./components/hooksComponents/pageComponents/CreateLobbyNf";

// Storage functions
import { setStorage, getStorage, removeStorage, clearStorage } from "./utils/storage";

// utils
import { iconArrayCard, bossIconCard, assignIdToIconCard } from "./utils/iconArrayAssign";

// api
import { login, signUp, deleteUser, editUser, getUserById, getUsers, updateAuthToken } from "./services/api/userapi";

import { eventEmit, eventOn } from "./eventEmitter";

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
    LeaderBoardNf,
    CreateLobbyNf,
    setStorage,
    getStorage,
    removeStorage,
    clearStorage,
    login,
    signUp, 
    deleteUser, 
    editUser, 
    getUserById, 
    getUsers, 
    updateAuthToken,
    eventEmit, 
    eventOn
}