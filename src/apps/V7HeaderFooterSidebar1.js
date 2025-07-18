import React from 'react';

import {HeaderV7,FooterV7,SidebarV7} from './V7HeaderFooterSidebar';

function V7HeaderFooterSidebar1() {
    return (
        <>
            <header><h1>this is header</h1></header>
            <div><h1>this is sidebar</h1></div>
            <footer><h1>this is footer</h1></footer>
            

            <HeaderV7/>
            <FooterV7/>
            <SidebarV7/>
            <HeaderV7/>
            <FooterV7/>
            <SidebarV7/>

        </>



    );
}

export default V7HeaderFooterSidebar1;