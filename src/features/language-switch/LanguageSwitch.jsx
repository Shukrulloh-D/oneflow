import { useState } from 'react'
import { Icon } from '@/shared/ui/Icon'
import './LanguageSwitch.css'

// switches between English and Swedish (only the lang attribute for now)
export function LanguageSwitch({ light }) {
  const [lang, setLang] = useState('en')

  function toggle() {
    const next = lang === 'en' ? 'sv' : 'en'
    setLang(next)
    document.documentElement.lang = next
  }

  return (
    <button
      className={light ? 'lang lang--light' : 'lang'}
      type="button"
      title={lang === 'en' ? 'English' : 'Svenska'}
      aria-label="Change language"
      onClick={toggle}
    >
      <Icon name="globe" size={22} />
    </button>
  )
}
