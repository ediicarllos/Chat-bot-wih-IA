import { MessageSquare, Sparkles } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-br from-[hsl(220_30%_10%)] to-[hsl(220_30%_20%)] text-white p-6 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <MessageSquare className="w-8 h-8" />
            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-accent animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold">Chat BOT</h1>
        </div>
        <p className="text-white/80 text-sm">
          Fala comigo :) Sou sua IA! Pronta para te ajudar no que precisar.
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;