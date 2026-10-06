import { useState } from 'react'
import { isValidEmail } from '@/shared/lib'
import { subscribeToNewsletter } from '../api/subscribe'

// status: idle | loading | success | error
export function useSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = (e) => {
    setEmail(e.target.value)
    if (status !== 'idle') setStatus('idle')
    if (error) setError('')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Enter a valid email address, for example name@company.com')
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await subscribeToNewsletter(email.trim())
      setStatus('success')
      setEmail('')
    } catch {
      setError('Something went wrong. Try again in a moment.')
      setStatus('error')
    }
  }

  return { email, status, error, onChange, onSubmit }
}
