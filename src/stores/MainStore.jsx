import { makeAutoObservable } from "mobx";
import MenuDataMock from "../data/MenuDataMock.json"

class MainStore {
   _menuData = [];
   totalPrice = 0;
   checkedOutItems = [];
   operation = "";
   selectedItem = {};

   constructor() {
      makeAutoObservable(this)
   }

   get menuData() {
      if (this._menuData.length === 0) {
         this.getMenuData()
      }

      return this._menuData;
   }

   getMenuData() {
      this._menuData = MenuDataMock
   }

   setCheckedOutItems() {
      var isItemExisting = this.checkedOutItems.some(item => item.product === this.selectedItem.product);

      if (isItemExisting) {
         for (var i in this.checkedOutItems) {
            if (this.checkedOutItems[i].product === this.selectedItem.product) {
               this.checkedOutItems[i].price = this.operation === "add" ? this.checkedOutItems[i].price + this.selectedItem.price : this.checkedOutItems[i].price - this.selectedItem.price
               this.checkedOutItems[i].quantity = this.operation === "add" ? this.checkedOutItems[i].quantity + 1 : this.checkedOutItems[i].quantity - 1

               if (this.checkedOutItems[i].quantity === 0) {
                  this.checkedOutItems.splice(i, 1)
               }
            }
         }
      }
      else {
         this.checkedOutItems.push(this.selectedItem)
      }

      const totalPriceTemp = this.operation === "add" ? this.totalPrice + this.selectedItem.price : this.totalPrice - this.selectedItem.price;
      this.totalPrice = totalPriceTemp < 0 ? 0 : totalPriceTemp;
   }
}

export default new MainStore();
