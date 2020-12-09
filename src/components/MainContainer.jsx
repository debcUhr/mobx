import React from "react";
import "../styles/styles.scss";
import { observer } from "mobx-react";
import MenuItems from "./subComponents/MenuItems";
import MenuHeader from "./subComponents/MenuHeader";

const MainContainer = observer(() => {
   return (
      <div className="App">
         <MenuHeader />
         <MenuItems />
        
      </div>
   );
});

export default MainContainer;
