import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Message.scss";
import { Timestamp } from "firebase/firestore";

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
};

function Message(props: Props) {
  const { message, timestamp, user } = props;

  return (
    <div className="message">
      {user?.photo ? (
        <img src={user.photo} alt="user" className="message__photo" />
      ) : (
        <AccountCircleIcon />
      )}
      <div className="message__info">
        <h4>
          {user?.displayName}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
