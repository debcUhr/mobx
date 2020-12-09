import React from "react";

const MenuHeader = () => {
   const renderMenuHeader = () => {
      return (
         <div className="menu-header">
            MENU
         </div>
      );
   };

   return (
      <div>
         {renderMenuHeader()}
      </div>
   );
};

export default MenuHeader;
