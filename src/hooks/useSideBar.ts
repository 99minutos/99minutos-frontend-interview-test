import { useState } from 'react';



export const useSideBar = (initialState:boolean) => {

    const [isActiveSideBarMobile, setisActiveSideBarMobile] = useState<boolean>(initialState)
    


    const toggleSideBar = ():void =>{
        setisActiveSideBarMobile(!isActiveSideBarMobile)
    } 
    const showSideBar = ():void =>{
        setisActiveSideBarMobile(true)
    } 
    const hiddeSideBar = ():void =>{
        setisActiveSideBarMobile(false)
    } 

    return {
        sideBarState:isActiveSideBarMobile,
        toggleSideBar,
        showSideBar,
        hiddeSideBar
    }
}
