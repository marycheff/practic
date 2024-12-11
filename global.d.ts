// global.d.ts
export {}

declare global {
    interface Window {
        chtlConfig?: {
            chatbotId: string
            display: string
        }
    }
}
