import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isDarkThemeMode: String = "default";
  public isSideBarOpen: boolean;
  public darkModeStatus = new BehaviorSubject<any>(this.isDarkThemeMode);

  constructor(private http: HttpClient) {
  }

  isDarkTheme(event: any) {
    this.isDarkThemeMode = event;
  }

  public getDefaultHeaders() {
    return new HttpHeaders({
      'Response-type': 'application/json',
      'hhsosSessionKey': sessionStorage.getItem('hhsosSessionKey') || '',
      'Content-Type': 'application/json'
    });
  }

  public getDefaultParameters(additionalParams?: any) {
    let defaultParams = {
      'hhsosSessionKey': sessionStorage.getItem('hhsosSessionKey') || ''
    };
    defaultParams = { ...defaultParams, ...additionalParams }
    return new HttpParams({ fromObject: defaultParams });;
  }

  getData(urlAction: any, queryParameters: any) {
    let queryParams = new HttpParams({ fromObject: queryParameters });
    return this.http.get<any>(urlAction, {
      headers: this.getDefaultHeaders(),
      params: queryParams
    });
  }

  postData(urlAction: any, queryParameters: any) {
    let queryParams = new HttpParams({ fromObject: queryParameters });
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'hhsosSessionKey': sessionStorage.getItem('hhsosSessionKey') || '',
      'Response-Type': 'application/json'
    });
    return this.http.post<any>(urlAction, queryParams, { headers: headers });
  }

  getSidebarStatus() {
    return this.isSideBarOpen;
  }

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
