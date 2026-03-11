import { Component } from '@angular/core';

@Component({
  selector: 'ds-ksu-header',
  imports: [],
  templateUrl: './ksu-header.component.html',
  styleUrl: './ksu-header.component.scss',
})
export class KsuHeaderComponent {

  expandNavBar() {
    var element = document.getElementById('top-navID');
    element.classList.toggle("expanded");
  }
}
