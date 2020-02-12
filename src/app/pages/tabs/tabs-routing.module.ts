import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth/guard/auth.guard';
import { DataResolver } from '../../services/auth/resolver/data.resolver';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule),
            canActivate: [AuthGuard],
            resolve: { user: DataResolver }
          }
        ]
      },
      {
        path: 'image-manager',
        children: [
          {
            path:'',
            loadChildren: () => import('../image-manager/image-manager.module').then( m => m.ImageManagerPageModule),
            canActivate: [AuthGuard],
            resolve: { user: DataResolver }

          }
        ]
      },
      {
       path: 'settings-manager',
       children: [
         {
          path: '',
          loadChildren: () => import('../settings-manager/settings-manager.module').then( m => m.SettingsManagerPageModule)
         }
       ]
      },
      {
        path: 'account-manager',
        children: [
          {
            path: '',
            loadChildren: () => import('../account-manager/account-manager.module').then( m => m.AccountManagerPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    DataResolver
  ]
})
export class TabsPageRoutingModule {}
