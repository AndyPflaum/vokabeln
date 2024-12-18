import { Component } from '@angular/core';
import { VokabelnFragenComponent } from '../vokabeln-fragen/vokabeln-fragen.component';
import { CorrectAndIncorrectComponent } from '../correct-and-incorrect/correct-and-incorrect.component';
import { VokabelnService } from '../vokabeln.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [VokabelnFragenComponent, CorrectAndIncorrectComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public vokabelnService: VokabelnService) {} // Service wird hier eingefügt

}
