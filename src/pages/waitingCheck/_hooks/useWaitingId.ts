import { useParams } from "react-router-dom";

const useWaitingId = () => {
  const { waitingID } = useParams<{ waitingID: string }>();
  // console.log("웨이팅아이디", waitingID);
  return waitingID;
};

export default useWaitingId;
