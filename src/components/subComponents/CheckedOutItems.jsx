import React from "react";
import { observer } from "mobx-react";
import store from "../../stores/MainStore";

const CheckedOutItems = observer(() => {
   const renderCheckedOutItems = () => {
      return (
         <div className="menu-section-checkout">
            <span> CHECKED OUT ITEMS </span>
            {store.checkedOutItems.map((item, index) => {
               return (
                  <div className="checked-out-items" key={index}>
                     <div> {item.product} </div>
                     <div> {item.quantity} </div>
                     <div> {item.price} </div>
                  </div>
               );
            })}
         </div>
      );
   };

   return (
      <>
         {renderCheckedOutItems()}
      </>
   );
});

export default CheckedOutItems;
