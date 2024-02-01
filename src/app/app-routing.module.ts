import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitAnalyticsDashboardComponent } from './admin-main-menu/git-analytics-dashboard/git-analytics-dashboard.component';
import { GitDashboardComponent } from './admin-main-menu/git-dashboard/git-dashboard.component';
import { SpinnerService } from './service/SpinnerService';
import { KibanaComponent } from './admin-main-menu/kibana/kibana.component';
import { AirbyteConnectionsComponent } from './admin-main-menu/airbyte-connections/airbyte-connections.component';
import { MetabaseConfigurationComponent } from './admin-main-menu/metabase-configuration/metabase-configuration.component';
import { AuthGuard } from './service/auth.guard';
import { CodeQualitySummaryComponent } from './admin-main-menu/code-quality-summary/code-quality-summary.component';
import { SecurityAndComplianceComponent } from './admin-main-menu/security-and-compliance/security-and-compliance.component';
import { EngineeringProductivityResourceComponent } from './admin-main-menu/engineering-productivity-resource/engineering-productivity-resource.component';
import { EngineeringProductivitySummaryComponent } from './admin-main-menu/engineering-productivity-summary/engineering-productivity-summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: { state: 'home', title: 'Home' },
  },
  {
    path: 'home',
    component: GitAnalyticsDashboardComponent,
    data: { state: 'home', title: 'Home' },
    canActivate: [SpinnerService],
    title: 'QBR Tool - Git Analytics Dashboard',
  },
  {
    path: 'kibana-overview',
    component: KibanaComponent,
    data: { title: 'kibana Overview' },
  },
  {
    path: 'git-analytics-dashboard',
    component: GitAnalyticsDashboardComponent,
    data: { title: 'Code Review Analytics ' },
    canActivate: [SpinnerService],
    title: 'QBR Tool - Code Review Analytics',
  },
  {
    path: 'code-quality-summary',
    component: CodeQualitySummaryComponent,
    data: { title: 'Code Quality Summary' },
    canActivate: [SpinnerService],
    title: 'QBR Tool - Code Quality Summary',
  },
  {
    path: 'engineering-productivity-summary',
    component: EngineeringProductivitySummaryComponent,
    data: { title: 'Engineering Productivity Summary' },
    canActivate: [SpinnerService],
    title: 'QBR Tool - Engineering Productivity Summary',
  },
  {
    path: 'security-and-compliance',
    component: SecurityAndComplianceComponent,
    data: { title: 'Security and Compliance' },
    canActivate: [SpinnerService],
    title: 'QBR Tool - Security and Compliance',
  },
  {
    path: 'engineering-productivity-resource',
    component: EngineeringProductivityResourceComponent,
    data: { title: 'Engineering Productivity By Resource' },
    canActivate: [SpinnerService],
    title: 'QBR Tool - Engineering Productivity By Resource',
  },
  // {
  //   path: 'git-dashboard',
  //   component: GitDashboardComponent,
  //   data: { title: 'Git Dashboard' },
  //   canActivate: [SpinnerService],
  //   title: 'QBR Tool - Git Dashboard',
  // },
  {
    path: 'metabase-configuration',
    component: MetabaseConfigurationComponent,
    data: { title: 'Configuration' },
  },
  {
    path: 'airbyte-connections',
    component: AirbyteConnectionsComponent,
    data: { title: 'Connections' },
  },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
