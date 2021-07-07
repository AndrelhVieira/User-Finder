import { LoadingModal } from "./styles";
import BeatLoader from "react-spinners/BeatLoader";

import { COLORS } from "styles/colors";

const Loading = ({ loading }) => {
  return (
    <LoadingModal>
      <BeatLoader loading={loading} size={50} color={COLORS.white} />
    </LoadingModal>
  );
};

export default Loading;
