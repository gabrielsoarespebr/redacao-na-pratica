import { Component, Input } from '@angular/core';
import { Plan } from '../../../interfaces/plan';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-card',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css',
})
export class PlanCardComponent {
  @Input() plan!: Plan;
}
