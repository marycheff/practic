import ChatBot from "../components/ChatBot"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Добро пожаловать!</h1>
                <p className="text-lg text-gray-600 mt-2">Общайтесь с нашим ботом прямо здесь, на этой странице.</p>
            </div>
            <ChatBot />
        </div>
    )
}

export default Home
