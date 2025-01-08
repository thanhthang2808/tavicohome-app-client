import React, { useState, useEffect, useRef } from "react";
import chatBotImg from "@/assets/chat-bot.gif";
import axiosInstance from "@/lib/axiosInstance";
import { BotMessageSquare, X } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State để kiểm tra trạng thái loading
  const messagesEndRef = useRef(null); // ref để tham chiếu đến phần cuối của tin nhắn

  const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`; // Đảm bảo có 2 chữ số cho phút
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const currentTime = getCurrentTime(); // Lấy giờ và phút

    // Hiển thị tin nhắn của người dùng
    setMessages([
      ...messages,
      { text: userInput, sender: "user", time: currentTime },
    ]);
    setUserInput("");

    setIsLoading(true); // Bật hiệu ứng loading khi gửi yêu cầu tới bot

    try {
      const response = await axiosInstance.post("/api/chat-bot/ask", {
        question: userInput,
      });

      // Thêm câu trả lời của chatbot vào mảng messages
      setMessages([
        ...messages,
        { text: userInput, sender: "user", time: currentTime },
        {
          text: response.data.answer,
          sender: "bot",
          time: getCurrentTime(),
        },
      ]);
    } catch (error) {
      console.error("Error fetching chatbot response", error);
    } finally {
      setIsLoading(false); // Tắt hiệu ứng loading sau khi nhận được phản hồi
    }
  };

  // Xử lý khi người dùng nhấn Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Đảm bảo cuộn xuống cuối mỗi khi tin nhắn mới được thêm vào
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Chạy khi messages thay đổi

  return (
    <div>
      {/* Biểu tượng chat nhỏ ở góc dưới phải */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 md:p-4 md:bottom-6 md:right-6"
      >
        <BotMessageSquare size={26} />
      </button>

      {/* Modal chat */}
      {isModalOpen && (
        <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out px-4 pb-2 max-h-96 overflow-y-auto z-50">
          {/* Header Modal */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <img src={chatBotImg} alt="Chatbot" className="w-20 h-auto" />
              <h3 className="text-xl font-semibold text-blue-600">Chat với AI Tavico</h3>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Hiển thị tin nhắn */}
          <div className="h-60 overflow-auto bg-gray-50 p-2 rounded-lg mb-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`px-4 py-2 max-w-xs rounded-lg text-sm ${
                    message.sender === "bot"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  <p>{message.text}</p>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 max-w-xs rounded-lg text-sm bg-gray-200 text-black">
                  <span className="text-xs">Bot đang trả lời...</span>
                </div>
              </div>
            )}
            {/* Đoạn này sẽ cuộn xuống cuối */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input gửi tin nhắn */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown} // Thêm sự kiện nhấn Enter
              placeholder="Nhập câu hỏi của bạn..."
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
