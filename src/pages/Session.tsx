import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import Modal, { ModalRef } from '../components/Modal.tsx';
import { useRef } from 'react';
import Button from '../components/Button.tsx';
import BookForm from '../components/BookSession.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const dialogRef = useRef<ModalRef>(null)

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }
  function handleOpenBookSessionDialog() {
    dialogRef.current?.open()
  }

  return (
    <main id="session-page">
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={handleOpenBookSessionDialog}>Book Session</Button>
              <Modal ref={dialogRef}><BookForm/></Modal>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
