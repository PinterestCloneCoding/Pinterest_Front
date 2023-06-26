import MediaPin from "../../components/common/MediaPin/MediaPin";
import PinData from "../../mocks/dummy";

const Main = () => {
  return (
    PinData &&
    PinData.map((item) => (
      <MediaPin
        title={item.title}
        pinImg={item.pinImg}
        profileImg={item.profileImg}
        userName={item.userName}
      />
    ))
  );
};

export default Main;
