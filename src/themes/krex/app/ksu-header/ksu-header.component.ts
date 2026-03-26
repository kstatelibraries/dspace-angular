import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ds-ksu-header',
  imports: [],
  templateUrl: './ksu-header.component.html',
  styleUrl: './ksu-header.component.scss',
})
export class KsuHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  expandNavBar() {
    const element = document.getElementById('top-navID');
    element.classList.toggle('expanded');
  }
}
