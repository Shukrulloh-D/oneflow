import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { isValidEmail } from '@/shared/lib/isValidEmail'
import './SubscribeForm.css'

export function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e) {
    setEmail(e.target.value)
    setMessage('')
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email, for example name@company.com')
      return
    }

    // later: send the email to the server here
    setMessage('Thanks! Check your inbox.')
    setEmail('')
  }

  return (
    <form className="subscribe" onSubmit={handleSubmit} noValidate>
      <div className="subscribe__row">
        <input
          className="subscribe__input"
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={handleChange}
        />
        <Button type="submit" size="sm">
          Get Oneflow free
        </Button>
      </div>
      <p className="subscribe__message">{message}</p>
    </form>
  )
}
