import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isSidebarOpen = true;
  @Output() sideBarStatus = new EventEmitter<any>();
  isDarkMode = "";
  currentTheme = "Blue";
  @Output() themeMode = new EventEmitter<any>();
  isSettingOpen = false;
  @Output() settingStatus = new EventEmitter<any>();
  @Input() title: any;
  public heading: string = '';
  public subHeading: string = '';


  constructor(private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        let activatedRouteTitle = this.getFirstChildRoute(this.route);
        activatedRouteTitle.data.subscribe((data: any) => {
          if (history.state.parentGroupData != undefined && data.title.includes('Details')) {
            this.heading = data.title + " - " + history.state.parentGroupData.displayName + " (" + history.state.parentGroupData.internalName + ") - "
              + "Version 2";
          } else {
            this.heading = data.title;
          }
          console.log(data);

        });
      });
  }

  getFirstChildRoute(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getFirstChildRoute(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // this.isSidebarOpen = !this.sharedService.getSidebarStatus();
    this.sideBarStatus.emit(this.isSidebarOpen);
  }

  toggleTheme(themeMode: string) {
    var element = document.body;
    element.className = "";
    themeMode = themeMode.trim();
    switch (themeMode) {
      case "i2i-blue":
        element.classList.add("i2i-blue");
        this.themeMode.emit("i2i-blue");
        this.currentTheme = "i2i-blue";
        break;
      case "green":
        element.classList.add("green");
        this.themeMode.emit("green");
        this.currentTheme = "green";
        break;
      case "dark-mode":
        element.classList.add("dark-mode");
        this.themeMode.emit("dark-mode");
        this.currentTheme = "dark-navbar";
        break;
      case "Blue":
        element.classList.add("blue");
        this.themeMode.emit("blue");
        this.currentTheme = "blue";
        break;
      default:
        this.themeMode.emit("")
        this.currentTheme = "navbar-classic";
        break;
    }

    // this.isDarkMode = !this.isDarkMode;
    //this.themeMode.emit(this.isDarkMode);
  }

}
