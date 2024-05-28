"use client"
import { useEffect, useState } from "react"

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resizeHandler = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    }, [])
    return windowWidth
}

export default useWindowWidth