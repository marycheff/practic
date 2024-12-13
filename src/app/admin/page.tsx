"use client"

import ChatBot from "../../components/ChatBot"

const AdminPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center mb-6">
                <h1>Панель администратора</h1>
            </div>
            <ChatBot />
        </div>
    )
}

export default AdminPage
