import { useEffect } from "react"

const useScreenResize = (toogle, setToogle) => {
  useEffect(() => {
    const handleResize = () => {
      setToogle(false)
      //remove listener when toogle is OFF
      window.removeEventListener("resize", handleResize)
    }
    //add evenet listener when toogle is ON
    if (toogle) window.addEventListener("resize", handleResize)

    //cleanup when component will unmount
    return () => window.removeEventListener("resize", handleResize)
  })
}

export default useScreenResize
