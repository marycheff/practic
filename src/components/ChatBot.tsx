"use client"

import { useEffect } from "react"

const ChatBot = () => {
    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const scriptId = "chatling-embed-script"
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script")
            script.async = true
            script.id = scriptId
            script.type = "text/javascript"
            script.src = "https://chatling.ai/js/embed.js"
            script.setAttribute("data-id", "8737578544")
            script.setAttribute("data-display", "page_inline")
            document.body.appendChild(script)
            // script.onload = () => {
            //     const interval = setInterval(() => {
            //         const chatContainer = document.getElementById("chatling-inline-bot")
            //         if (chatContainer && chatContainer.childNodes.length > 0) {
            //             setIsLoading(false)
            //             clearInterval(interval)
            //         }
            //     }, 1000)
            //     setTimeout(() => {
            //         clearInterval(interval)
            //     }, 2000)
            // }
        }
        // else {
        //     setIsLoading(false)
        // }
        window.chtlConfig = {
            chatbotId: "8737578544",
            display: "page_inline",
        }
    }, [])

    return (
        <div className="w-full max-w-4xl h-[800px] bg-white shadow-lg rounded-lg p-4 flex items-center justify-center relative">
            {/* {isLoading && <Loader />}
            <div id="chatling-inline-bot" className={`w-full h-full ${isLoading ? "hidden" : ""}`}></div> */}
            <div id="chatling-inline-bot" className={`w-full h-full`}></div>
        </div>
    )
}

export default ChatBot
