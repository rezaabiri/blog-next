import { ReactNode } from 'react';

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}


const BottomSheet = (props: BottomSheetProps) => {
    return(
        <>
            {props.isOpen && (
                <div className="fixed inset-0 z-30 bg-black bg-opacity-50" onClick={props.onClose} />
            )}
            <div
                id="drawer-bottom"
                className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-40 w-full lg:w-6/12 p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 rounded-t-lg ${
                    props.isOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
                tabIndex={-1}
            >
                <div className={'w-full flex flex-row justify-center items-center pt-1'}>
                    <div className={'w-12 h-1.5 rounded-full bg-gray-300 mb-5'}></div>
                </div>

                {props.children}

            </div>
        </>
    )
};

export default BottomSheet;
