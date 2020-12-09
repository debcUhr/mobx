import React from "react";
import { observer } from "mobx-react";
import store from "../../stores/MainStore";
import CheckedOutItems from "./CheckedOutItems";
import TotalPrice from "./TotalPrice";

const MenuItems = observer(() => {
   const menuData = store.menuData;

   const handleAddRemoveEvent = (operation, selectedProduct) => {
      store.selectedItem = { ...selectedProduct, quantity: 1 };
      store.operation = operation;
      store.setCheckedOutItems();
   };

   const getRemoveButtonStatus = (product) => {
      const isEnabled = store.checkedOutItems.some((item) => item.product === product);

      return !isEnabled;
   };

   const renderSection = (menu) => {
      return (
         
         <div className={"menu-section-" + menu[1].category}>
            <span className="menu-section-title"> {menu[1].category} </span>
            {
               menu.map((item, index) => {
                  return (
                     <div className="menu-item-flex" key={index}>
                        <div> {item.product} </div>
                        <div> {item.price} </div>
                        <button onClick={() => handleAddRemoveEvent("add", item)}> Add </button>
                        <button disabled={getRemoveButtonStatus(item.product)} onClick={() => handleAddRemoveEvent("remove", item)}>
                           Remove
               </button>
                     </div>
                  )
               })
            }
         </div>
      )
   }

   const renderMenuItems = () => {
      const foodMenu = menuData.filter(item => item.category === "FOOD");
      const drinksMenu = menuData.filter(item => item.category === "DRINKS");
      const dessertMenu = menuData.filter(item => item.category === "DESSERT");
      const sidesMenu = menuData.filter(item => item.category === "SIDES");

      return (
         <>
            {renderSection(foodMenu)}
            {renderSection(drinksMenu)}
            {renderSection(sidesMenu)}
            {renderSection(dessertMenu)}
         </>

      );
   };

   return (
      <div  className="menu-section">
         {renderMenuItems()}
         <CheckedOutItems />
         <TotalPrice />
      </div>
   );
});

export default MenuItems;
