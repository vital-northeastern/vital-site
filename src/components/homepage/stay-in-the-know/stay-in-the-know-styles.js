import styled from "styled-components"

const colors = {
  primary: "#001049", // dark blue
  secondary: "#607AE6", // light blue
}

const KnowContainer = styled.div`
  display: flex;
  padding: 100px 0 0 0;
`

const KnowInfo = styled.div`
  width: 50%;
  padding-right: 6%;
  // 40px for overlap from image
  padding-left: calc(6% + 40px);
`

const KnowHeader = styled.h3`
  letter-spacing: 2px;
`

const KnowButton = styled.button`
  padding: 10px 20px;
  border-radius: 35px;
  background-color: ${colors.primary};
  border: none;
  color: white;
`

const KnowImageSection = styled.div`
  width: 50%;
  background: linear-gradient(
      209.62deg,
      #99c0fa 20.22%,
      rgba(255, 255, 255, 0) 85.09%
    ),
    linear-gradient(147.64deg, #c8dcee 19.39%, #546bdf 94.2%);
  position: relative;
  height: 450px;
`

const KnowImageHolder = styled.div`
  width: 80%;
  height: 360px;
  position: absolute;
  top: -40px;
  right: -40px;
  // background-color: red;

  background-image: url(${props => "https://" + props.photoUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const KnowImageHeader = styled.h3`
  letter-spacing: 2px;
  transform: rotate(-90deg);
  position: absolute;
  top: -20px;
  left: -40px;
`

export {
  KnowContainer,
  KnowInfo,
  KnowImageSection,
  KnowHeader,
  KnowButton,
  KnowImageHolder,
  KnowImageHeader,
}
