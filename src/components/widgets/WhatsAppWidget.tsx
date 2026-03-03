'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_NUMBER = '8801732134482'

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SmallWhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const buttonVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 20,
      delay: 1.5,
    },
  },
}

const popupVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 16,
    transition: { duration: 0.18, ease: 'easeIn' as const },
  },
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleSend = () => {
    const trimmed = message.trim()
    const url = trimmed
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(trimmed)}`
      : `https://wa.me/${WHATSAPP_NUMBER}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setIsOpen(false)
    setMessage('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end gap-3"
      style={{ zIndex: 9990 }}
    >
      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="whatsapp-popup"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              background: 'rgba(12, 12, 12, 0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(37, 211, 102, 0.2)',
              borderRadius: '20px',
              width: '320px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(37,211,102,0.08)',
              transformOrigin: 'bottom right',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 rounded-t-[19px]"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.12), rgba(37,211,102,0.04))',
                borderBottom: '1px solid rgba(37,211,102,0.12)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 0 12px rgba(37,211,102,0.35)',
                  }}
                >
                  <SmallWhatsAppIcon />
                </div>
                <div>
                  <p className="text-[#f0f0f0] text-sm font-semibold leading-tight">Alex Morrison</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#25D366' }} />
                    <span className="text-[10px]" style={{ color: '#25D366' }}>Usually replies instantly</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 text-[#555] hover:text-[#f0f0f0]"
                data-cursor="hover"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Greeting bubble */}
            <div className="px-4 py-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="flex items-start gap-2"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <SmallWhatsAppIcon />
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]"
                  style={{
                    background: 'rgba(37,211,102,0.08)',
                    border: '1px solid rgba(37,211,102,0.15)',
                  }}
                >
                  <p className="text-[#e0e0e0] text-sm leading-relaxed">
                    Hi! 👋 How can I help you?
                  </p>
                  <p className="text-[#555] text-[10px] mt-1 text-right">now</p>
                </div>
              </motion.div>
            </div>

            {/* Input area */}
            <div
              className="px-4 pb-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="pt-3 flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  rows={1}
                  className="flex-1 resize-none px-4 py-2.5 rounded-xl text-sm text-[#f0f0f0] placeholder-[#444] outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    maxHeight: '100px',
                    lineHeight: '1.5',
                    cursor: 'text',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(37,211,102,0.4)'
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(37,211,102,0.08)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                <motion.button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 0 16px rgba(37,211,102,0.3)',
                  }}
                  whileHover={{ scale: 1.08, boxShadow: '0 0 24px rgba(37,211,102,0.5)' }}
                  whileTap={{ scale: 0.94 }}
                  data-cursor="hover"
                  aria-label="Send message on WhatsApp"
                >
                  <SendIcon />
                </motion.button>
              </div>
              <p className="text-[#444] text-[10px] text-center mt-2">
                Press Enter to send · Opens WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative flex items-center justify-end">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, x: 8, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute right-16 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium text-white"
              style={{
                background: 'rgba(20,20,20,0.95)',
                border: '1px solid rgba(37,211,102,0.25)',
                pointerEvents: 'none',
              }}
            >
              Chat on WhatsApp
              <span
                className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: '5px solid transparent',
                  borderBottom: '5px solid transparent',
                  borderLeft: '6px solid rgba(20,20,20,0.95)',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full whatsapp-pulse-ring pointer-events-none"
            style={{ background: 'rgba(37, 211, 102, 0.35)' }}
            aria-hidden="true"
          />
        )}

        {/* Button */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={() => setIsOpen((prev) => !prev)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #1a1a1a, #111)'
              : 'linear-gradient(135deg, #25D366, #128C7E)',
            border: isOpen ? '1px solid rgba(37,211,102,0.3)' : 'none',
            color: isOpen ? '#25D366' : 'white',
            boxShadow: isOpen
              ? '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,211,102,0.15)'
              : '0 4px 24px rgba(37,211,102,0.35)',
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: isOpen
              ? '0 4px 24px rgba(0,0,0,0.5)'
              : '0 4px 32px rgba(37,211,102,0.55)',
          }}
          whileTap={{ scale: 0.93 }}
          data-cursor="hover"
          aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
          aria-expanded={isOpen}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0.85 : 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {isOpen ? <CloseIcon /> : <WhatsAppIcon />}
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}
