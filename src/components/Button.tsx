import { ComponentPropsWithoutRef, ReactNode } from "react";

type BaseProps = {
  children: ReactNode,
  textOnly?: boolean
}

type ButtonButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & { to?: never }

type ButtonLinkProps = ComponentPropsWithoutRef<'link'> & BaseProps & { to?: string }

function isLinkType(props: ButtonButtonProps | ButtonLinkProps): props is ButtonLinkProps {
  return 'to' in props
}

export default function Buttom(props: ButtonButtonProps | ButtonLinkProps) {
  const className = props.textOnly === true ? 'button button--text-only' : 'button'
  if (isLinkType(props))
    return (<link {...props} className={className}>{props.children}</link>)
  else
    return (<button {...props} className={className}>{props.children}</button>)
}