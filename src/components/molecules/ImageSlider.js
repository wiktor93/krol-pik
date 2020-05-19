import React from "react"
import styled from "styled-components"

const thumnailsHeight = "75px"
const Wraper = styled.div`
  .main-picture {
    width: 100%;
    height: max-content;
    overflow: hidden;
    img {
      height: 100%;
      max-height: calc(480px - ${thumnailsHeight});
      width: 100%;
      object-fit: scale-down;
    }
  }

  .thumbnails {
    width: 100%;
    height: ${thumnailsHeight};
    background-color: #eee;
  }
`

const ImageSlider = ({ product }) => {
  const { productName, pictureURL } = product
  return (
    <Wraper>
      <div className="main-picture">
        <img src={pictureURL} alt={productName} />
      </div>

      {/* <div className="thumbnails"></div> */}
    </Wraper>
  )
}
export default ImageSlider
