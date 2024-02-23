import { DocumentData } from "@firebase/firestore";
import { useAppDispatch } from "../../app/hooks";

import "./Channel.scss";
import { setChannelInfo } from "../../features/channelSlice";

type Props = {
  id: string;
  channel: DocumentData;
};

function Channel(props: Props) {
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  return (
    <div
      className="channel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="channel__hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default Channel;
