'use client'
import cart from '../../../assets/icons/cart_fill.svg';
import user from '../../../assets/icons/user_fill.svg';
import logo from '../../../assets/icons/logo.svg';
import fav from '../../../assets/icons/fav_fill.svg';
import search from '../../../assets/icons/search.svg';
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Drawer from "@/app/components/Drawer";
import AlertDialog from "@/app/components/AlertDialog";
import BottomSheet from "@/app/components/BottomSheet";

interface IHeaderItem {
    icon: string;
    title: string;
    onClick: () => void;
}

interface IIcon {
    icon: string
}
const MainHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const openSheet = () => setIsSheetOpen(true);
    const closeSheet = () => setIsSheetOpen(false);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className={'w-full pt-3 lg:pt-7 pb-4 px-5'}>
            <div className={'flex flex-col gap-1 lg:gap-0 lg:flex-row lg:justify-between items-start lg:items-center'}>
                <div className="">
                    <button
                        onClick={openDialog}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Show Alert Dialog
                    </button>

                    <AlertDialog
                        isOpen={isDialogOpen}
                        onClose={closeDialog}
                        title="Alert Title"
                        message="This is an alert message. Are you sure you want to proceed?"
                    >
                         <label>dialog hastesh</label>
                        <div className={'flex flex-row justify-evenly mt-8'}>
                            <button className={'rounded-lg bg-blue-200 p-4 text-black'}>
                                Test Button 1
                            </button>
                            <button className={'rounded-lg bg-blue-900 p-4 text-white'}>
                                Test Button 2
                            </button>
                        </div>
                    </AlertDialog>
                </div>

                <div className="text-center">
                    <button
                        onClick={openSheet}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Show Bottom Sheet
                    </button>
                    <BottomSheet
                        isOpen={isSheetOpen}
                        onClose={closeSheet}
                        title="Bottom Drawer">
                        <div className={'w-full flex flex-col items-center'}>
                            <label>Hello bottom sheet</label>
                            <p className={'text-start'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </BottomSheet>
                </div>
                <HeaderItem onClick={toggleDrawer} icon={logo as string} title={'Elma'}/>
                <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}/>
                <Link className={'hidden lg:block'} href={'login'}>Login</Link>
                <Link className={'hidden lg:block'} href={'notifications'}>Notifications</Link>
                <div className={'flex flex-col lg:flex-row w-full lg:w-[60%] lg:justify-between items-end'}>
                    <div
                        className={'flex flex-row bg-gray-100 rounded-md w-full lg:w-1/2 justify-between items-center'}>
                        <input
                            className={'bg-gray-100 w-[50%] lg:w-[30%] p-2 border-none text-gray-900 text-sm rounded-lg focus:border-none block outline-none placeholder:text-gray-400'}
                            placeholder={'Search anything'}/>
                        <div className={'flex flex-row items-center'}>
                            <label className={'text-sm text-gray-400 mr-3'}>All Categories</label>
                            <div className={'rounded-md bg-black p-2'}>
                                <Image src={search as string} alt={'search'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-row mt-6'}>
                        <CircleItem icon={cart as string}/>
                        <CircleItem icon={fav as string}/>
                        <CircleItem icon={user as string}/>

                    </div>
                </div>

            </div>

        </header>
    )
}

const HeaderItem = (itemHeader: IHeaderItem) => (
    <div onClick={itemHeader.onClick} className={'flex flex-row justify-center items-center cursor-pointer'}>
        <Image src={itemHeader.icon as string} alt={'cart'} className={'mr-2'} width={24} height={24}/>
        <label className={'pt-1 pr-2 cursor-pointer text-black text-xl font-semibold'}>{itemHeader.title}</label>
    </div>
);

const CircleItem = (icon: IIcon) => (
    <div className={'justify-center items-center cursor-pointer rounded-full p-2 border border-1 border-gray-300 mx-2'}>
        <Image src={icon.icon} alt={'cart'} width={22} height={22}/>
    </div>
);

export default MainHeader;