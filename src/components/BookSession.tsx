import { FormEvent } from "react"
import Button from "./Button"
import { Input } from "./Input"

export default function BookForm() {

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(event)
  }

  function handleOnCancel(event: any) {
    event.preventDefault()
    console.log(event)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Book Session</h2>
      <Input id="name" label="Name" />
      <Input id="email" label="Email" />
      <p className="actions">
        <Button textOnly={true}>Cancel</Button>
        <Button>Book Session</Button>
      </p>
    </form>
  )
}