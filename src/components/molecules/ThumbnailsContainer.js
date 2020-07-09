import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import getLastMovableThumbIndex from "../../utils/getLastMovableThumbIndex"
import useCheckScreenWidth from "../../utils/useCheckScreenWidth"

const Wraper = styled.div`
  display: flex;
  align-items: center;
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
  const isSmallerThanBreakPoint = useCheckScreenWidth(768)

  return (
    <Wraper>
      {isSmallerThanBreakPoint ? (
        <span>{`${selectedImgIndex + 1} z ${images.length}`}</span>
      ) : (
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
      )}
    </Wraper>
  )
}
export default ThumbnailsContainer

ThumbnailsContainer.propTypes = {
  images: PropTypes.array,
}
