import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AdminComponent } from './admin/admin.component';
import { NewCharacterComponent } from './admin/new-character/new-character.component';
import { EditCharacterComponent } from './admin/edit-character/edit-character.component';

const appRoutes: Routes = [
	{
	  path: '',
	  component: LandingPageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'character-list',
		component: CharacterListComponent
	},
	{
		path: 'characters/:id',
		component: CharacterDetailComponent
	},
	{
		path: 'admin',
		component: AdminComponent
	},
	{
		path: 'admin/new-character',
		component: NewCharacterComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
