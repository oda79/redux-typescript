import SessionItem, { Session } from "./SessionItem";

type SessionItemsListProps = {
  items: Session[]
}

export default function SessionItemsList(props: Readonly<SessionItemsListProps>) {
  return <div id="sessions-list">{props.items.map((el) => (<SessionItem {...el} />))}</div>
}