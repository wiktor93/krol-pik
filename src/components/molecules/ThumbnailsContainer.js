import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import getLastMovableThumbIndex from "../../utils/getLastMovableThumbIndex"

const Wraper = styled.div`
  height: 80px;
  max-width: 400px;
  overflow: hidden;
`

const Slider = styled.div`
  display: flex;
  height: 100%;
  transform: ${({ thumbnailsToMove }) =>
    `translateX(-${thumbnailsToMove * 80}px)`};
  transition: 0.3s ease;
`

const Thumbnail = styled.picture`
  cursor: pointer;
  position: relative;

  &::before {
    opacity: 0;
    content: "";
    position: absolute;
    left: 1px;
    right: 1px;
    bottom: 0;
    height: 2px;
    background-color: black;
    transition: 0.3s;
  }
  &.active::before {
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    padding: 0 1px;
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`

function ThumbnailsContainer(props) {
  const { images, selectedImgIndex, handleImageChange } = props
  const thumbnailsToMove = getLastMovableThumbIndex(images, selectedImgIndex)
  return (
    <Wraper>
      <Slider thumbnailsToMove={thumbnailsToMove}>
        {images.map((image, i) => (
          <Thumbnail
            key={i}
            className={selectedImgIndex === i ? "active" : null}
            onClick={() => handleImageChange("pick", i)}
          >
            <img src={image} alt={`Zdjęcie nr ${i} `} />
          </Thumbnail>
        ))}
      </Slider>
    </Wraper>
  )
}
export default ThumbnailsContainer

ThumbnailsContainer.propTypes = {
  images: PropTypes.array,
}
