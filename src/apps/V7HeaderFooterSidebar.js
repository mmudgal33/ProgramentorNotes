import React from 'react';

// import {HeaderV7,FooterV7,SidebarV7} from './V7HeaderFooterSidebar';

export function HeaderV7() {
    return (
      <><header><h1>this is component header</h1></header></>
    );
  }
  
  export function SidebarV7() {
      return (
          <><div><h1>this is component sidebar</h1></div></>
      );
  }
  
  export function FooterV7() {
      return (
          <><footer><h1>this is component footer</h1></footer></>
      );
  }


  export function V7HeaderFooterSidebar() {
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

// export default V7HeaderFooterSidebar1;