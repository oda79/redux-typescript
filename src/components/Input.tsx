import { ComponentPropsWithoutRef, forwardRef } from "react"

type InputProps = {
  id: string,
  label: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, ...restProps } = props
  return (<div className="control">
    <label htmlFor={id}>{label}</label>
    <input id={id} name={id} ref={ref} {...restProps} />
  </div>)
})