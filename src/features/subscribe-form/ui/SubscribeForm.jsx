import { Button } from '@/shared/ui'
import { useSubscribe } from '../model/useSubscribe'
import './SubscribeForm.css'

export function SubscribeForm({ buttonLabel = 'Get Oneflow free' }) {
  const { email, status, error, onChange, onSubmit } = useSubscribe()
  const hasError = status === 'error'

  return (
    <form className="subscribe" onSubmit={onSubmit} noValidate>
      <div className="subscribe__row">
        <label className="subscribe__label" htmlFor="subscribe-email">
          Email address
        </label>
        <input
          id="subscribe-email"
          className="subscribe__input"
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={onChange}
          aria-invalid={hasError}
          aria-describedby="subscribe-message"
        />
        <Button type="submit" size="sm" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : buttonLabel}
        </Button>
      </div>
      <p
        id="subscribe-message"
        className={`subscribe__message ${hasError ? 'is-error' : ''}`}
        role="status"
      >
        {hasError && error}
        {status === 'success' && 'Thanks! Check your inbox to get started.'}
      </p>
    </form>
  )
}
