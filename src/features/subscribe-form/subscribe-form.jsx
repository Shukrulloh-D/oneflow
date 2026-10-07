import { Button } from '@/shared/ui/button'
import './subscribe-form.css'

// type="email" + required: браузер сам проверяет email
// позже: добавить action с адресом сервера
export function SubscribeForm() {
  return (
    <form className="subscribe">
      <input
        className="subscribe__input"
        type="email"
        name="email"
        placeholder="Your work email"
        required
      />
      <Button size="sm">Get Oneflow free</Button>
    </form>
  )
}
