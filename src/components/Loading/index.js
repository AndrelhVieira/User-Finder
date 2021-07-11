import { LoadingModal } from "./styles";
import BeatLoader from "react-spinners/BeatLoader";

import { COLORS } from "styles/globalStyle";

const Loading = ({ loading }) => {
  return (
    <LoadingModal>
      <BeatLoader loading={loading} size={50} color={COLORS.light} />
    </LoadingModal>
  );
};

export default Loading;
