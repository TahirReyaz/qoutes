import { useParams } from "react-router-dom";

const QouteDetails = () => {
  const { qouteId } = useParams();
  return <h1>All detials qoutes {qouteId}</h1>;
};

export default QouteDetails;
