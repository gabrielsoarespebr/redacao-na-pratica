import { Component } from '@angular/core';
import { EssayWritingSkill } from '../../../interfaces/essay-writing-skill';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-essay-writing-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './essay-writing-skill.component.html',
  styleUrl: './essay-writing-skill.component.css',
})
export class EssayWritingSkillComponent {
  @Input() skill!: EssayWritingSkill;
  @Input() id!: number;
}
