import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required:true}) itemImgSrc !: string;
  @Input({required: true}) itemTitle !: string;

}
