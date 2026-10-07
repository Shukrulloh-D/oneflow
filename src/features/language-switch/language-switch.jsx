import './language-switch.css'

// выпадающий список языков. Пока без логики, позже можно добавить смену языка
export function LanguageSwitch() {
  return (
    <details className="lang">
      <summary>
        <img src="/images/globe.svg" alt="Language" />
      </summary>
      <ul className="lang__menu">
        <li>English</li>
        <li>Svenska</li>
      </ul>
    </details>
  )
}
