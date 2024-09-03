import { ComponentPropsWithoutRef, forwardRef, useImperativeHandle, useRef } from "react"
import ReactDOM from 'react-dom';


type ModalProps = ComponentPropsWithoutRef<'dialog'>

export type ModalRef = {
  open: () => void,
  close: () => void
}

const Modal = forwardRef<ModalRef, ModalProps>((props, ref) => {

  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useImperativeHandle(ref, () => ({
    open: () => { dialogRef.current?.showModal() },
    close: () => { dialogRef.current?.close() }
  }))

  const modal = <dialog className="modal" ref={dialogRef}>{props.children}</dialog>

  return ReactDOM.createPortal(modal, document.getElementById('modal-root') as HTMLElement)
})

export default Modal;
