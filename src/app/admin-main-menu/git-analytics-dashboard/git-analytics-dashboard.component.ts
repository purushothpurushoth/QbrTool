import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'src/app/service/SpinnerService';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-git-analytics-dashboard',
  templateUrl: './git-analytics-dashboard.component.html',
  styleUrls: ['./git-analytics-dashboard.component.scss']
})
export class GitAnalyticsDashboardComponent {
  constructor(private sanitizer: DomSanitizer) {
  }
  iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl(environment.metabase_GuthubAnalyticsDashboard_URL);
}
