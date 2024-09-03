import Button from "./Button";

export type Session = {
  id: string,
  title: string,
  summary: string,
  description: string,
  duration: number,
  date: string,
  image: string,
}

export type SessionItemProps = Omit<Session, 'description' | 'duration' | 'date'>

export default function SessionItem(props: Readonly<SessionItemProps>) {

  return (<div className="session-item">
    <img src={props.image} alt="" />
    <div className='session-data'>
      <h3>{props.title}</h3>
      <p>{props.summary}</p>
      <div className="actions"><Button to={`/sessions/${props.id}`} >Learn More</Button></div>
    </div>
  </div>)
}