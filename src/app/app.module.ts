import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { GitAnalyticsDashboardComponent } from './admin-main-menu/git-analytics-dashboard/git-analytics-dashboard.component';
import { GitDashboardComponent } from './admin-main-menu/git-dashboard/git-dashboard.component';
import { AirbyteConnectionsComponent } from './admin-main-menu/airbyte-connections/airbyte-connections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KibanaComponent } from './admin-main-menu/kibana/kibana.component';
import { MetabaseConfigurationComponent } from './admin-main-menu/metabase-configuration/metabase-configuration.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './utils/app-init';
import { CodeQualitySummaryComponent } from './admin-main-menu/code-quality-summary/code-quality-summary.component';
import { SecurityAndComplianceComponent } from './admin-main-menu/security-and-compliance/security-and-compliance.component';
import { EngineeringProductivityResourceComponent } from './admin-main-menu/engineering-productivity-resource/engineering-productivity-resource.component';
import { EngineeringProductivitySummaryComponent } from './admin-main-menu/engineering-productivity-summary/engineering-productivity-summary.component';

const keycloakService = new KeycloakService();
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    ModalComponent,
    GitDashboardComponent,
    GitAnalyticsDashboardComponent,
    AirbyteConnectionsComponent,
    KibanaComponent,
    MetabaseConfigurationComponent,
    CodeQualitySummaryComponent,
    SecurityAndComplianceComponent,
    EngineeringProductivityResourceComponent,
    EngineeringProductivitySummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
