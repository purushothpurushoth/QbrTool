import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-git-dashboard',
  templateUrl: './git-dashboard.component.html',
  styleUrls: ['./git-dashboard.component.scss']
})
export class GitDashboardComponent {
  constructor(private sanitizer: DomSanitizer) {
  }
  iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(environment.metabase_Gitdashboard_URL);

}
