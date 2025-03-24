
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send, Search, MoreVertical, Phone, Video, Info, Paperclip, Smile, Mic } from "lucide-react";

interface Message {
  id: number;
  content: string;
  sender: "me" | "other";
  timestamp: string;
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState<number>(1);
  const [newMessage, setNewMessage] = useState<string>("");

  const conversations: Conversation[] = [
    {
      id: 1,
      name: "Sophie Martin",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      lastMessage: "Bonjour, comment vas-tu aujourd'hui?",
      timestamp: "10:30",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Marc Dubois",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      lastMessage: "J'ai terminé le rapport. Je te l'envoie bientôt.",
      timestamp: "Hier",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Élodie Bernard",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      lastMessage: "Merci pour ton aide!",
      timestamp: "Mer",
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: "Lucas Petit",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      lastMessage: "Est-ce qu'on se voit demain pour le projet?",
      timestamp: "Lun",
      unread: 3,
      online: false
    },
    {
      id: 5,
      name: "Emma Rousseau",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      lastMessage: "J'ai envoyé le design par email.",
      timestamp: "Ven",
      unread: 0,
      online: true
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      content: "Bonjour, comment vas-tu aujourd'hui?",
      sender: "other",
      timestamp: "10:30"
    },
    {
      id: 2,
      content: "Salut! Ça va bien, merci. Et toi?",
      sender: "me",
      timestamp: "10:32"
    },
    {
      id: 3,
      content: "Très bien! Je travaille sur le nouveau projet.",
      sender: "other",
      timestamp: "10:34"
    },
    {
      id: 4,
      content: "Super! Comment ça se passe? Tu as besoin d'aide?",
      sender: "me",
      timestamp: "10:36"
    },
    {
      id: 5,
      content: "Pour l'instant ça va, mais je pourrais avoir besoin de ton expertise sur certains aspects du design.",
      sender: "other",
      timestamp: "10:38"
    },
    {
      id: 6,
      content: "Pas de problème, n'hésite pas à me contacter si tu as besoin!",
      sender: "me",
      timestamp: "10:39"
    }
  ];

  const getActiveConversation = () => {
    return conversations.find(conv => conv.id === activeConversation);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Dans une application réelle, on enverrait le message au backend
      // et on mettrait à jour l'état avec la réponse
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex overflow-hidden font-poppins">
      {/* Liste des conversations */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-1/3 border-r border-white/5 overflow-y-auto hidden md:block"
      >
        <div className="p-4 sticky top-0 bg-background z-10">
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher une conversation..." 
              className="pl-10 bg-card/50"
            />
          </div>
        </div>

        <div className="space-y-1 p-2">
          {conversations.map(conv => (
            <div 
              key={conv.id}
              onClick={() => setActiveConversation(conv.id)}
              className={`p-3 rounded-lg transition-colors cursor-pointer flex items-center ${
                activeConversation === conv.id ? 'bg-card-hover' : 'hover:bg-card'
              }`}
            >
              <div className="relative">
                <Avatar className="h-12 w-12 mr-3">
                  <img src={conv.avatar} alt={conv.name} />
                </Avatar>
                {conv.online && (
                  <span className="absolute bottom-0 right-3 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium truncate">{conv.name}</h3>
                  <span className="text-xs text-gray-400">{conv.timestamp}</span>
                </div>
                <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
              </div>
              {conv.unread > 0 && (
                <span className="ml-2 h-5 min-w-5 px-1.5 flex items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                  {conv.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Conversation active */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1 flex flex-col"
      >
        {/* En-tête de la conversation */}
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-card/30 backdrop-blur-sm">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <img src={getActiveConversation()?.avatar} alt={getActiveConversation()?.name} />
            </Avatar>
            <div>
              <h2 className="font-medium">{getActiveConversation()?.name}</h2>
              <p className="text-xs text-gray-400">{getActiveConversation()?.online ? 'En ligne' : 'Hors ligne'}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Phone size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Video size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Info size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreVertical size={18} />
            </Button>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div 
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'other' && (
                <Avatar className="h-8 w-8 mr-2 mt-1">
                  <img src={getActiveConversation()?.avatar} alt={getActiveConversation()?.name} />
                </Avatar>
              )}
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'me' 
                    ? 'bg-blue-500 text-white rounded-tr-none' 
                    : 'bg-card rounded-tl-none'
                }`}
              >
                <p>{message.content}</p>
                <span className="text-xs opacity-70 block text-right mt-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Saisie de message */}
        <div className="p-4 border-t border-white/5 bg-card/30 backdrop-blur-sm">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Paperclip size={20} />
            </Button>
            <div className="flex-1 mx-2">
              <Input 
                placeholder="Écrivez votre message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="bg-card border-white/10"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Smile size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Mic size={20} />
            </Button>
            <Button 
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center p-0"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Messages;
