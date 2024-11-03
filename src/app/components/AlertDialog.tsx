import { ReactNode } from 'react';
interface AlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    children?: ReactNode;
}

const AlertDialog = (props: AlertDialogProps) => {
    if (!props.isOpen) return null;
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={props.onClose}
            />

            <div className="fixed inset-0 flex items-center justify-center z-40">
                <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative dark:bg-gray-800">
                    <button
                        type="button"
                        onClick={props.onClose}
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default AlertDialog;
