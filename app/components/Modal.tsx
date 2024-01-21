

const Modal = ({ open, children, onClose }: any) => {

    if (open === false) return null;
    return (
        <div className="">
            <div
                onClick={onClose}
                className=""
            >
                {/* Modal style */}
                <div className="bg-white rounded-xl shodow-md p-6">
                    <button className="">

                    </button>
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Modal;