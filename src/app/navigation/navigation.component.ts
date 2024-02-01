import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { filter } from 'rxjs';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public routerUrl: any;
  @Input() isDarkModeTheme: any;
  @Input() sideBarStatus: any;
  @Output() themeMode = new EventEmitter<any>();
  isHidden = false;
  subheader1 = false;
  subheader2 = false;
  subheader3 = false;
  @Output() expandSideBar = new EventEmitter<any>();
  selectedNavItem: string = '';
  hasKeycloakAdminPermission: boolean;



  constructor(private keycloakService: KeycloakService, private router: Router, private sanitizer: DomSanitizer) {
    this.hasKeycloakAdminPermission = this.keycloakService.isUserInRole('admin');
  }
  
  iframeAirbyteConnectionURL = this.sanitizer.bypassSecurityTrustResourceUrl(environment.airbyte_Connection_URL);
  iframeMetabaseConfigurationURL = this.sanitizer.bypassSecurityTrustResourceUrl(environment.metabase_Configuration_URL);
  iframeKibanaURl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.kibana_URl);;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(() => {
        this.routerUrl = this.router.url;
      });
  }
  expandSideNavBar() {
    // this.sideBarStatus = true;
    this.expandSideBar.emit(true);
  }

  checkUrl(url: string): boolean {
    let isSameUrl: boolean = true;
    if ((url == this.routerUrl)) {
      isSameUrl = true;
    } else {
      isSameUrl = false;
    }
    return isSameUrl;
  }

  check(url: any): string {
    console.log('getting in before the viewInit');

    let className: string = 'inactive';
    if (this.checkUrl(url)) {
      if (this.isDarkModeTheme) {
        className = 'selected active';
      } else {
        className = 'selected active';
      }
    } else {
      if (this.isDarkModeTheme) {
        className = 'inactive';
      } else {
        className = 'active';
      }
    }
    return className;
  }

  changeMainNavColor(header: String) {
    this.subheader1 = false;
    this.subheader2 = false;
    this.subheader3 = false;
    if (header == "submenu1") {
      this.subheader1 = true;
    } else if (header == "submenu2") {
      this.subheader2 = true;
    } else if (header == "submenu3") {
      this.subheader3 = true
    }
  }

  clearSelection() {
    this.subheader1 = false;
    this.subheader2 = false;
    this.subheader3 = false;
    // Add other subheaders if needed
  }

  clearIconSelection() {
    this.clearSelection();
    this.expandSideBar.emit(true);
  }


}
