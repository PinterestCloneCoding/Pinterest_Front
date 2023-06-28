import React, { useEffect, useState, useRef } from "react";
import { storage, db, app, authService } from "../../firebase";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button/Button";

const HandleImageUpload = () => {
  const navigate = useNavigate();
  const fileInput = useRef(null);

  const [imageUpload, setImageUpload] = useState(null);
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState([]);
  const [uploadStep, setUploadStep] = useState(1);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [nickname, setNickname] = useState("");

  const [change, setChange] = useState(0);

  // div를 클릭해도 input이 실행될 수 있게
  const onClickUpload = () => {
    fileInput.current?.click();
  };

  const selectFile = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    setUploadStep(2);
    setChange(1);
  };

  // 파일이 업로드 되면 스토리지에 업로드하고 다운로드 URL을 가져와 이미지를 보여주는 함수
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
      title: title,
      description: description,
      link: link,
      imgUrl: image,
      profileImage: profileImage,
      nickname: nickname,
      timestamp: new Date(),
    });

    setTitle("");
    setDescription("");
    setLink("");
    setProfileImage("");
    setNickname("");
    fetchImages();
    setImageUpload(null);
    setImage("");
    setUploadStep(1);

    navigate(`/`);
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

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      console.log(user);
      setNickname(user.displayName);
      setProfileImage(user.photoURL);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {change ? (
        <ModalBox>
          <ShowImageArea
            style={{ backgroundImage: `url(${image})` }}
          ></ShowImageArea>

          <InputFieldArea>
            <InputText>
              제목
            </InputText>
            <StyledInput
              type="text"
              placeholder="제목 추가"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <InputText>
              설명
            </InputText>
            <StyledInput
              type="text"
              placeholder="여기에 핀에 대한 상세 설명을 작성하거나 아래에 특정 목록을 추가하세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <InputText>
              링크
            </InputText>
            <StyledInput
              type="text"
              placeholder="링크 추가"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Button name="게시" onClick={uploadImgUrl} primary style={{ width: "50px" }} />
          </InputFieldArea>
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
                  onChange={selectFile}
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

const PostingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  object-fit: cover;
  margin: 10px;

  background-size: "cover";
  background-repeat: no-repeat;
  background-position: "center";

  width: 100%;
  height: 100%;
`;

const StyledInput = styled.input`
  border-radius: 15px;
  border: 2px solid lightgray;
  padding: 4px 6px;
  width: 600px;
  height: 40px;

  &:hover {
    border-color: gray;
  }
`;

const InputFieldArea = styled.div`

`;

const InputText = styled.p`
  font-size: 16px;
`;