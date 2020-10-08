import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrderToShipComponent} from './shipping/order-to-ship.component';
import {ReceiveProductComponent} from './receiving/receive-product.component';
import {InventoryComponent} from './inventory/inventory.component';
import {ShipOrderComponent} from './shipping/ship-order.component';
import {RouterModule} from '@angular/router';


const routes = [
    {path: "ship", component: OrderToShipComponent},
    {path: "ship/:orderID", component: ShipOrderComponent},
    {path: "receive", component: ReceiveProductComponent},
    {path: "inventory", component: InventoryComponent},
    {path: "", component: DashboardComponent},
  ];
  
  export const routing = RouterModule.forRoot(routes);

/*
Not working need to check
const routes = [
    {path:"/", component: DashboardComponent},
    {path:"/ship", component: OrderToShipComponent},
    {path:"/receive", component: ReceiveProductComponent},
    {path:"/ship/<orderId>", component: OrderToShipComponent},
    {path:"/inventory", component: InventoryComponent}
];

const routing = RouterModule.forRoot(routes);

export {routing};
*/