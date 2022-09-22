import { ChatRoomModule } from "../../modules/ChatRoomModule";

import "./App.css";

export default function ChatApp() {
  return (
    <div className="Chat">
      <section><ChatRoomModule /></section>
    </div>
  );
}