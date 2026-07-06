'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, SendHorizontal, BotMessageSquare } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello there! 👋 I'm Kuldeep's personal AI agent. Ask me about his MLOps experience, projects, or technical skills.",
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setMessages(initialMessages);
        setInput('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) return;

      const assistantMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: assistantMessageId, role: 'assistant', content: '' }]);

      let done = false;
      let isFirstChunk = true;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;

        if (isFirstChunk) {
          setIsLoading(false);
          isFirstChunk = false;
        }

        const chunkValue = decoder.decode(value);
        if (chunkValue) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId ? { ...msg, content: msg.content + chunkValue } : msg
            )
          );
        }
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: 'assistant', content: "I'm having trouble connecting to my neural network right now. Try again later!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-0 right-0 sm:bottom-4 sm:right-4 z-[110] w-full sm:w-[420px] h-[100dvh] sm:h-[700px] max-h-[100dvh] sm:max-h-[85vh] bg-white/90 backdrop-blur-3xl border-l sm:border border-white/50 shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-none sm:rounded-[2rem] flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="relative px-5 py-3 flex items-center justify-between border-b border-black/5 shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 opacity-80" />
              <div className="relative flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md">
                  <BotMessageSquare className="w-5 h-5 text-white" />
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-gray-900 tracking-tight text-sm">KSBisht AI</h3>
                    <span className="text-[9px] font-bold tracking-wider text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-1.5 py-0.5 rounded-[4px] uppercase">Beta</span>
                  </div>
                  <p className="text-[11px] font-medium text-gray-500 tracking-wide uppercase">Online & Ready</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="relative p-2 rounded-full hover:bg-black/5 transition-all text-gray-400 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 scrollbar-hide">
              <div className="flex justify-center mb-2">
                <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase bg-black/5 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>

              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex items-end gap-2 max-w-[88%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                    }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-gray-800 text-white hidden' : 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white'
                      }`}
                  >
                    {msg.role !== 'user' && <Sparkles className="w-3 h-3" />}
                  </div>
                  <div
                    className={`px-4 py-3 text-[14px] leading-relaxed shadow-sm ${msg.role === 'user'
                      ? 'bg-gray-900 text-white rounded-[1.25rem] rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-[1.25rem] rounded-bl-sm border border-gray-100'
                      }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-end gap-2 max-w-[85%] self-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div className="px-4 py-3.5 bg-white text-gray-800 rounded-[1.25rem] rounded-bl-sm border border-gray-100 shadow-sm flex gap-1.5 items-center h-11">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/50 backdrop-blur-xl border-t border-white/50">
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-[1.5rem] pl-4 pr-1.5 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] focus-within:ring-2 focus-within:ring-indigo-500/30 focus-within:border-indigo-500/50 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message KSBisht AI..."
                  className="flex-1 bg-transparent border-none outline-none no-global-focus text-[14px] text-gray-800 placeholder:text-gray-400 py-2"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 bg-gray-900 text-white rounded-full disabled:opacity-30 hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all flex items-center justify-center shrink-0"
                >
                  <SendHorizontal className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Tab Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-0 bottom-[30%] z-[100] flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white shadow-[-5px_0_20px_rgba(0,0,0,0.15)] transition-colors duration-300"
            style={{
              writingMode: 'vertical-rl',
              padding: '24px 10px',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
            }}
            aria-label="Open chat"
          >
            <div className="flex items-center gap-2 transform rotate-180">
              <Sparkles className="w-4 h-4 text-indigo-300" />
              <span className="text-xs font-semibold tracking-widest uppercase">How may I help you?</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
