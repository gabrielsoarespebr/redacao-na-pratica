import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Plan } from '../../interfaces/plan';
import { PlanCardComponent } from '../shared/plan-card/plan-card.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, PlanCardComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
})
export class PlansComponent {
  planList: Plan[] = [
    {
      targetAudience: [
        'Estudante de escola pública',
        'Bolsista na rede particular',
      ],
      benefitList: [
        'Proposta de redação semanal',
        'Correção de redação semanal, detalhada em texto e áudio, com nota final e notas por competência',
        'Brainstorm e dicas de repertório sociocultural (filmes, livros, músicas, citações, dados estatísticos etc)',
        'Métricas de evolução para você acompanhar seu desenvolvimento',
      ],
      mcDonaldsAmount: 3,
      priceBefore: 120,
      priceDiscount: 40,
      price: 80,
    },
    {
      targetAudience: ['Estudante de escola particular'],
      benefitList: [
        'Proposta de redação semanal',
        'Correção de redação semanal, detalhada em texto e áudio, com nota final e notas por competência',
        'Brainstorm e dicas de repertório sociocultural (filmes, livros, músicas, citações, dados estatísticos etc)',
        'Métricas de evolução para você acompanhar seu desenvolvimento',
      ],
      mcDonaldsAmount: 6,
      priceBefore: 220,
      priceDiscount: 60,
      price: 160,
    },
  ];
}
