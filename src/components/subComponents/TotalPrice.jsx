import React from "react";
import { observer } from "mobx-react";
import store from "../../stores/MainStore";

const TotalPrice = observer(() => {

   const renderTotal = () => {
      return <div className="total-price"> TOTAL: PHP {store.totalPrice} </div>;
   };

   return (
      <div>
         {renderTotal()}
      </div>
   );
});

export default TotalPrice;
