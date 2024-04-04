import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Input } from '@angular/core';
import { CompetitiveEdge } from '../../../interfaces/competitive-edge';

@Component({
  selector: 'app-competitive-edge-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './competitive-edge-card.component.html',
  styleUrl: './competitive-edge-card.component.css',
})
export class CompetitiveEdgeCardComponent {
  @Input() card!: CompetitiveEdge;
}
