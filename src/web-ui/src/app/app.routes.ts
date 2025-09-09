import {Routes} from '@angular/router';
import {DoctorsListComponent} from './features/doctor/list/doctors-list.component';
import {HomeComponent} from './features/home/home.component';
import {MedicinesListComponent} from './features/medicine/list/medicines-list.component';

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () => import("./features/home/home.component").then((t) => HomeComponent)
  },
  {
    path: "medicines", children: [
      {
        path: "list",
        loadComponent: () => import("./features/medicine/list/medicines-list.component").then((t) => MedicinesListComponent)
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  },
  {
    path: "doctors", children: [
      {
        path: 'list',
        loadComponent: () => import("./features/doctor/list/doctors-list.component").then((c) => DoctorsListComponent)
      },
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  },
  {
    path: "login",
    loadComponent: () => import("./features/login/login.component").then((t) => t.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./features/register/register.component").then((t) => t.RegisterComponent)
  },
  {path: "", redirectTo: "/status", pathMatch: "full"},
  {path: "**", redirectTo: "status"}
];
