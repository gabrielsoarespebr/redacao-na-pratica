import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EssayWritingSkill } from '../../interfaces/essay-writing-skill';
import { EssayWritingSkillComponent } from '../shared/essay-writing-skill/essay-writing-skill.component';

@Component({
  selector: 'app-enem',
  standalone: true,
  imports: [CommonModule, EssayWritingSkillComponent],
  templateUrl: './enem.component.html',
  styleUrl: './enem.component.css',
})
export class EnemComponent {
  // note: Inside EssayWritingSkill, description has text and HTML tags, because it is used in innerHTML attribute.
  skillList: EssayWritingSkill[] = [
    {
      title: 'Domínio da escrita formal',
      description:
        'Basicamente, o corretor avalia se você conhece e utiliza as <span class="text-decoration-underline">regras do português escrito</span>.',
      list: [],
      mistakes:
        'letra ilegível, texto sem vírgulas, acentuação incorreta, falta de diferenciação entre letras maiúsculas e minúsculas, erros de concordância verbal e nominal.',
    },
    {
      title: 'Compreensão do tema + Estrutura',
      description:
        'O corretor avalia se você aborda o tema em uma <span class="text-decoration-underline">estrutura dissetativo-argumentativa</span>:',
      list: [
        'a parte dissertativa exige que você <span class="text-decoration-underline">exponha seu ponto de vista</span>',
        'a parte argumentativa exige que você <span class="text-decoration-underline">justifique por que pensa dessa forma</span>',
      ],
      mistakes:
        'fugir do tema (em caso de fuga total, sua redação é anulada); desrespeitar as margens da folha de redação; uso da primeira pessoa do singular; esquecer da tese, dos argumentos e/ou da proposta de intervenção.',
    },
    {
      title: 'Conteúdo + Organização das ideias',
      description:
        'O corretor avalia se você tem <span class="text-decoration-underline">repertório sociocultural</span> para fundamentar seu ponto de vista, como:',
      list: [
        'estatística: dados estatísticos',
        'ciência: pesquisas científicas',
        'filosofia e sociologia: citações',
        'arte: filmes, músicas e pinturas',
        'literatura: livros',
      ],
      mistakes:
        'citar personalidades desconhecidas ou sem credibilidade (exemplo: Naldo Benny).',
    },
    {
      title: 'Coesão + Coerência',
      description:
        'O corretor avalia se você utiliza os <span class="text-decoration-underline">conectivos certos</span> para dar mais fluidez à leitura da sua redação. São exemplos de conectivos:',
      list: [
        'primeiramente',
        'inclusive',
        'além disso',
        'nessa perspectiva',
        'portanto',
      ],
      mistakes: 'repetir o mesmo conectivo várias vezes.',
    },
    {
      title: 'Proposta de intervenção',
      description:
        'O corretor avalia se você apresenta uma solução ao problema, <span class="text-decoration-underline">respeitando os direitos humanos</span> e <span class="text-decoration-underline">seguindo a estrutura</span>:',
      list: [
        'agente: quem vai fazer?',
        'ação: o que será feito?',
        'meio: como será feito?',
        'finalidade: para que será feito?',
      ],
      mistakes: 'propostas impossíveis, genéricas ou que responsabilizem o governo por tudo.',
    },
  ];
}
