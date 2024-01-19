

const MODAL_STYLE : any = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgound: '#fff',
    zIndex: 1000,
}

const OVERLAY_STYLES : any  = {
    position: 'fixed',
    top: 0,
    left: 0,
    right : 0,
    bottom : 0,
    backgroundColor : 'rgba(0, 0, 0, .7)',
    zIndex : 1000,
   

}
const Modal = ({ open, children, onCLose }: any) => {

    if (open == false) return null;
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLE}>
                <button onClick={onCLose}>Close</button>
                <div>{children}</div>

            </div>

        </>
    )
}
export default Modal;