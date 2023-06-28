import { styled } from "styled-components";
import {
  ref,
  getStorage,
  listAll,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { useEffect } from "react";
import { useState } from "react";
import { storage, db, app } from "../../firebase";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import Button from "../common/Button/Button";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HandleImageUpload = () => {
  const fileInput = useRef(null);

  const [imageUpload, setImageUpload] = useState(null);
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);
  const [uploadStep, setUploadStep] = useState(1);

  // div를 클릭해도 input이 실행될 수 있게
  const onClickUpload = () => {
    fileInput.current?.click();
  };

  const selectFile = (file) => {
    setImageUpload(file);
    setUploadStep(2);
  };

  // 파일이 업로드 되면 스토리지에 업로드하고 다운하는 즉시 이미지 보여주는 함수
  useEffect(() => {
    if (imageUpload) {
      const storageRef = ref(storage, `photo/${imageUpload.name}`);
      uploadBytes(storageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImage(url);
        });
      });
    }
  }, [imageUpload]);

  // 파이어베이스에 이미지 저장
  const uploadImgUrl = async () => {
    await addDoc(collection(db, "photo"), {
      imgUrl: image,
      timestamp: new Date(),
    });
    fetchImages();
    setImageUpload(null);
    setImage("");
    setUploadStep(1);
  };

  async function fetchImages() {
    const photoCollection = collection(getFirestore(app), "photo");
    const querySnapshot = await getDocs(
      query(photoCollection, orderBy("timestamp", "desc"))
    );
    const images = querySnapshot.docs.map((doc) => doc.data().imgUrl);
    setImageList(images);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      {image ? (
        <ModalBox>
          <ShowImageArea style={{ backgroundImage: `url(${image})` }}>
            제발업로드돼랃제발요
          </ShowImageArea>
        </ModalBox>
      ) : (
        <ModalBox>
          <ModalTopBox>
            <Link to={`/`}>
              <Button imgName="cancel" imgSize={20} Icon />
            </Link>
            <h3>자산을 업로드하고 핀을 만드세요</h3>
            <Button imgName="question" imgSize={20} Icon />
          </ModalTopBox>
          <ImgUploadArea>
            <UploadBox>
              <UploadArea onClick={onClickUpload}>
                <input
                  type="file"
                  onChange={(event) => {
                    selectFile(event.target.files[0]);
                  }}
                  ref={fileInput}
                  style={{ display: "none" }}
                />
                <Button imgName="arrow-circle-up" Icon>
                  업로드
                </Button>
                <Desc>
                  끌어다 놓거나 클릭하여 이미
                  <br />지 또는 동영상을 추가하세요
                </Desc>
                <Tip>
                  Pinterest는 20MB 미만의 고화질 .jpg 파일 또는 100MB 미만의
                  .mp4 파일 사용을 권장합니다.
                </Tip>
                {/* <ImageList>
                {imageList.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index}`} />
                ))}
            </ImageList> */}
              </UploadArea>
            </UploadBox>
          </ImgUploadArea>

          <ModalBottomBox>
            <p>대신 웹 사이트 링크에서 핀을 만드시겠어요?</p>
            <UrlButton>URL에서 핀 만들기</UrlButton>
          </ModalBottomBox>
        </ModalBox>
      )}
    </>
  );
};

export default HandleImageUpload;

const ModalBox = styled.div`
  position: fixed;
  width: 850px;
  height: 550px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
`;

const ModalTopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ImgUploadArea = styled.div`
  width: 80%;
  height: 60%;
  border-radius: 15px;
  border: 2px dashed gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBottomBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 50px;
  padding: 8px 12px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const UrlButton = styled.div`
  width: 150px;
  height: 35px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  border-radius: 14px;
  background-color: rgba(0, 0, 0, 0.01);

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const UploadBox = styled.div``;

const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Desc = styled.p``;

const Tip = styled.p`
  font-size: 14px;
  color: gray;
`;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 10px;
  }
`;

const ShowImageArea = styled.div`
  background-size: "cover";
  background-repeat: no-repeat;
  background-position: "center";

  width: 100%;
  height: 100%;
`;
