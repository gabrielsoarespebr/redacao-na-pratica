import { Component } from '@angular/core';
import { ApprovalCardComponent } from '../shared/approval-card/approval-card.component';
import { Approval } from '../../interfaces/approval';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ApprovalCardComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  approvalList: Approval[] = [
    {
      title: 'Exatas',
      description:
        'Em 2017.1, fui aprovado no curso de Engenharia de Controle e Automação na UPE-POLI, conseguindo a 6ª colocação em ampla concorrência no SiSU. No entanto, optei por não continuar essa graduação.',
      imgUrl: 'assets/approvalEngineering.jpg',
    },
    {
      title: 'Humanas',
      description:
        'Em 2017.2, fui aprovado no curso de Direito na UNICAP pelo ProUni. Graduação concluída com ótimo coeficiente de rendimento, experiência em estágios e nota máxima no Trabalho de Conclusão de Curso (TCC).',
      imgUrl: 'assets/approvalLaw.jpg',
    },
    {
      title: 'Tecnologia',
      description:
        'Em 2022.1, fui aprovado no curso de Análise e Desenvolvimento de Sistemas no IFPE em ampla concorrência pelo processo seletivo interno, utilizando a nota do Enem. Desde então, sigo me aprofundando nessa área.',
      imgUrl: 'assets/approvalTechnology.jpg',
    },
  ];
}
