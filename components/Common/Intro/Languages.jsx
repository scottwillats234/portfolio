import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [urdu, setUrdu] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (urdu < 95) {
                setUrdu(prevCount => prevCount + 1);
            }
            if (english < 25) {
                setEnglish(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [urdu, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
               
            </div>

        </div>
    )
}

export default Languages
