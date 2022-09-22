//Firebase Config
import { app} from "../services/firebaseConfig";
//Firebase Dependencias
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

export const ChatMessageModule = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img
      className="photo"
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
      />
      <p className=" messages ">{text}</p>
    </div>
  );
};

export default ChatMessageModule;