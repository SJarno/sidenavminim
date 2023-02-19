import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  displayMenu: boolean = false;
  isInit: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isInit = true;
      /* this.displayMenu = true; */
    }, 500);
  }

  

  toggleDisplay(event: any) {
    const menu = event.currentTarget;
    menu.classList.toggle('changeMenuBtn');
    this.displayMenu = !this.displayMenu;

  }

}
