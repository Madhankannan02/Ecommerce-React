import { Fragment } from 'react';
import { OrderHeader } from './OrderHeader';
import { OrderDetailGrid } from './OrderDetailsGrid';

export function OrdersGrid({ orders }) {
 return (
  <div className="orders-grid">
   {orders.map((order) => {
    return (
     <div key={order.id} className="order-container">

      <OrderHeader order={order} />

      <OrderDetailGrid order={order} />
     </div>
    );
   })}
  </div>
 );
}