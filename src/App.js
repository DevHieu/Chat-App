import "./App.css";
import Login from "./components/Login/login";
import ChatBox from "./components/Chat-Box/ChatBox";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <ChatBox /> : <Login />}</>;
}

export default App;
