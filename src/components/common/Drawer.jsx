import React from 'react'
import LinkList from '../list/LinkList'

export default function Drawer({ state, data, drawerRef }) {
    return (
        <div
            ref={drawerRef}
            role='dialog'
            aria-hidden={!state}
            className={`
                lg:hidden absolute top-0 w-1/2 h-screen z-50 bg-main shadow-drawer flex flex-col py-8 px-4 gap-6 
                ease-linear duration-500 ${state ? 'left-0' : ' -left-full '} 
            `}
        >
            <LinkList
                data={data}
                isDrawer={true}
            />
        </div>
    )
}
