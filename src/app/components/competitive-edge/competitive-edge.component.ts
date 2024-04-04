import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitiveEdge } from '../../interfaces/competitive-edge';
import { CompetitiveEdgeCardComponent } from '../shared/competitive-edge-card/competitive-edge-card.component';

@Component({
  selector: 'app-competitive-edge',
  standalone: true,
  imports: [CommonModule, CompetitiveEdgeCardComponent],
  templateUrl: './competitive-edge.component.html',
  styleUrl: './competitive-edge.component.css',
})
export class CompetitiveEdgeComponent {
  cardList: CompetitiveEdge[] = [
    {
      icon: 'thumb_up',
      title: 'Teste grátis',
      description: 'Relaxa... Sua primeira redação é por nossa conta!',
    },
    {
      icon: 'edit_note',
      title: '100% prático',
      description:
        'Redação é como andar de bicicleta: aprende-se fazendo e cair faz parte do processo.',
    },
    {
      icon: 'face',
      title: 'Atendimento humanizado',
      description:
        'Chega de ser atendido por robôs! Aqui você tem contato com gente de verdade!',
    },
    {
      icon: 'handshake',
      title: 'De igual pra igual',
      description:
        'Você não terá um professor, mas sim um estudante que passou por tudo que você está passando.',
    },
    {
      icon: 'savings',
      title: 'Custo-benefício',
      description:
        'Você concorda que não precisa pagar uma fortuna em cursos de redação?',
    },
    {
      icon: 'diversity_3',
      title: 'Turmas reduzidas',
      description:
        'Investimos em qualidade, não em quantidade. Por isso, nossas vagas são limitadas.',
    },
    {
      icon: 'volume_up',
      title: 'Correção em áudio',
      description:
        'Caso você prefira, também receberá comentários em áudio sobre a sua redação.',
    },
    {
      icon: 'query_stats',
      title: 'Métricas',
      description: 'Receba métricas para acompanhar sua evolução.',
    },
  ];
}
