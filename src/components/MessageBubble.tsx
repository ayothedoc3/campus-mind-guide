
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      <div className={`flex max-w-[80%] ${isAI ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 ${isAI ? 'mr-3' : 'ml-3'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isAI 
              ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
              : 'bg-gray-200 text-gray-600'
          }`}>
            {isAI ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
          </div>
        </div>

        {/* Message Content */}
        <div className={`px-4 py-3 rounded-2xl ${
          isAI 
            ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-md' 
            : 'bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-tr-md'
        } shadow-sm`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
          <p className={`text-xs mt-2 ${
            isAI ? 'text-gray-400' : 'text-blue-100'
          }`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
