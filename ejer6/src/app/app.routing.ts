import { BookFormComponent } from './book-form.component';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';

const appRoutes = [
  { path: 'book/new', component: BookFormComponent,  },
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'book/edit/:id', component: BookFormComponent,  },
  { path: 'library', component: BookListComponent },
  { path: '', redirectTo: 'library', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
