import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

import ThumbnailsContainer from "../molecules/ThumbnailsContainer"
import ModalCloseButton from "../atoms/ModalCloseButton"
import ProductPicture from "../atoms/ProductPicture"

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .thumbnails-wraper {
    display: flex;
    align-items: center;
  }
  svg {
    margin: 5px;
    cursor: pointer;
  }

  .disabled-arrow {
    fill: rgba(0, 0, 0, 0.15);
    cursor: auto;
  }

  &.isolated-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
`

const ImageSlider = ({ product }) => {
  const { productName, pictureURL } = product
  const [selectedImgIndex, setSelectedImgIndex] = useState(0)
  const images = [pictureURL, pictureURL]
  const [modalToggle, setModalToogle] = useState(false)

  function handleImageChange(action, index) {
    if (action === "forward" && selectedImgIndex < images.length - 1) {
      setSelectedImgIndex(selectedImgIndex + 1)
    }
    if (action === "backward" && selectedImgIndex > 0) {
      setSelectedImgIndex(selectedImgIndex - 1)
    }
    if (action === "pick") setSelectedImgIndex(index)
  }

  function handleModalClose() {
    setModalToogle(false)
    document.querySelector("body").classList.remove("freeze")
  }

  function handleKeyDown({ keyCode }) {
    switch (keyCode) {
      case 27:
        return handleModalClose()
      case 39:
        return handleImageChange("forward")
      case 37:
        return handleImageChange("backward")
      default:
        break
    }
  }

  useEffect(() => {
    if (modalToggle) document.querySelector("body").classList.add("freeze")

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <Wraper className={modalToggle ? "isolated-modal" : null}>
      <ProductPicture
        onClick={() => setModalToogle(true)}
        className={modalToggle ? "full-size" : null}
        image={images[selectedImgIndex]}
        alt={productName}
      />

      <div className="thumbnails-wraper">
        {images.length > 1 && (
          <NavigateBeforeIcon
            fontSize="large"
            className={selectedImgIndex ? null : "disabled-arrow"}
            onClick={() => handleImageChange("backward")}
          />
        )}

        <ThumbnailsContainer
          images={images}
          selectedImgIndex={selectedImgIndex}
          handleImageChange={handleImageChange}
        />

        {images.length > 1 && (
          <NavigateNextIcon
            fontSize="large"
            className={
              selectedImgIndex === images.length - 1 ? "disabled-arrow" : null
            }
            onClick={() => handleImageChange("forward")}
          />
        )}
      </div>
      <ModalCloseButton
        isOpen={modalToggle}
        closingFunction={handleModalClose}
      />
    </Wraper>
  )
}
export default ImageSlider
