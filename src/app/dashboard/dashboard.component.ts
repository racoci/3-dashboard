import {Component} from '@angular/core';
import {ServerStatusComponent} from "./item/server-status/server-status.component";
import {TrafficComponent} from "./item/traffic/traffic.component";
import {DashboardItemComponent} from "./item/dashboard-item.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        ServerStatusComponent,
        TrafficComponent,
        DashboardItemComponent

    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
