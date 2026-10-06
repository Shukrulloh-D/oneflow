import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { LANGUAGES } from '../model/languages'
import { saveLanguage } from '../api/saveLanguage'
import './LanguageSwitcher.css'

// placement: 'down' (header) | 'up' (footer)
export function LanguageSwitcher({ placement = 'down', tone = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState('en')
  const rootRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [isOpen])

  const select = (code) => {
    setCurrent(code)
    saveLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className={cn('lang', `lang--${tone}`, `lang--${placement}`)} ref={rootRef}>
      <button
        className="lang__button"
        type="button"
        aria-label="Change language"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <Icon name="globe" size={22} />
      </button>
      {isOpen && (
        <ul className="lang__menu">
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                className={cn('lang__item', lang.code === current && 'is-active')}
                onClick={() => select(lang.code)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
