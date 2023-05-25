import * as S from "./Details.style";
import backArrow from "./../../assets/directional-arrow-left.svg";

// const Details = () => {
//   return (
//     <>
//       <S.Section>
//         <S.BackIcon>
//           <S.Svg src={backArrow} alt="back arrow" />
//         </S.BackIcon>

//         <S.Pin>
//           <div
//             style={{ width: "700px", height: "700px", backgroundColor: "gray" }}
//           ></div>
//         </S.Pin>
//       </S.Section>
//     </>
//   );
// };

// export default Details;
const Details = () => {
  return (
    <>
      <S.Section>
        <S.BackIcon>
          <S.Svg src={backArrow} alt="back arrow" />
        </S.BackIcon>

        <S.Pin>
          <S.PinImg alt="허허" />
          <div
            style={{
              width: "700px",
              height: "700px",
              borderRadius: "0px 100px 100px 0px",
            }}
          ></div>
        </S.Pin>
      </S.Section>
    </>
  );
};

export default Details;
