import { Component, HostListener, ViewChild } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QBR - Tool';
  isSidebarOpen: boolean = true;
  isDarkModeTheme: String = 'blue';

  isSettingOpen = false;

  public screenWidth: any;
  public screenHeight: any;

  constructor(private sharedService: SharedService, private keycloak: KeycloakService ){
  }

  ngOnInit() {
    // console.log("this.keycloak.login();");
    // this.keycloak.login();
  }

  @ViewChild('containerDiv', { static: true }) containerDiv: any;

  @HostListener('window:resize')
  onResize() {
    if (this.containerDiv != undefined) {
      if (this.containerDiv.nativeElement.className == 'normalWidth') {
        this.isSidebarOpen = false;
      } else {
        this.isSidebarOpen = true;
      }
    }

    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 820) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.sharedService.isSideBarOpen = !this.isSidebarOpen;
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  sideBarStatus(event: any) {
    if (this.containerDiv.nativeElement.className == 'normalWidth') {
      this.isSidebarOpen = true; //this.sharedService.getSidebarStatus();
      this.sharedService.isSideBarOpen = false;
    } else {
      this.isSidebarOpen = false;
    }
  }

  themeMode(event: any) {
    this.isDarkModeTheme = event;
    this.sharedService.isDarkTheme(event);
  }

}
