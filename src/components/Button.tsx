import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type BaseProps = {
  children: ReactNode,
  textOnly?: boolean
}

type ButtonButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & { to?: never }

type ButtonLinkProps = Omit<LinkProps, 'to'> & BaseProps & { to: string }

function isLinkType(props: ButtonButtonProps | ButtonLinkProps): props is ButtonLinkProps {
  return typeof props.to === 'string'
}

export default function Button(props: ButtonButtonProps | ButtonLinkProps) {
  const className = props.textOnly === true ? 'button button--text-only' : 'button'
  if (isLinkType(props))
    return (<Link {...props} className={className}>{props.children}</Link>)
  else
    return (<button {...props} className={className}>{props.children}</button>)
}