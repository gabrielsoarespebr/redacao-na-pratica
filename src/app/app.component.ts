import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutComponent } from './components/about/about.component';
import { DividerComponent } from './components/shared/divider/divider.component';
import { EnemComponent } from './components/enem/enem.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { CompetitiveEdgeComponent } from './components/competitive-edge/competitive-edge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PresentationComponent,
    AboutComponent,
    DividerComponent,
    EnemComponent,
    CourseOverviewComponent,
    CompetitiveEdgeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'redacao-na-pratica';
}
