import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
	{
	  path: '',
	  component: LandingPageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
