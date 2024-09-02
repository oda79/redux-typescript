import { ComponentPropsWithoutRef, forwardRef } from "react"

type InputProps = {
  id: string,
  label: string
} & ComponentPropsWithoutRef<'input'>

export const Button = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, ...restProps } = props
  return (<div>
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} ref={ref} {...restProps} />
  </div>)
})