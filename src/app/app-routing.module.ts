import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'user/:id', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
