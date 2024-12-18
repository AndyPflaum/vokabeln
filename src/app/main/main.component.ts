import { Component } from '@angular/core';
import { VokabelnFragenComponent } from '../vokabeln-fragen/vokabeln-fragen.component';
import { CorrectAndIncorrectComponent } from '../correct-and-incorrect/correct-and-incorrect.component';
import { VokabelnService } from '../vokabeln.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [VokabelnFragenComponent, CorrectAndIncorrectComponent, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public vokabelnService: VokabelnService) {} // Service wird hier eingefügt

}
