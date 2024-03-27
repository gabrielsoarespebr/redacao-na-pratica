import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-approval-card',
  standalone: true,
  imports: [],
  templateUrl: './approval-card.component.html',
  styleUrl: './approval-card.component.css'
})
export class ApprovalCardComponent {
  @Input() approvalTitle!: string;
  @Input() approvalDescription!: string;
  @Input() approvalImgUrl!: string;

}
