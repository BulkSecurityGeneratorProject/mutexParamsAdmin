import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MutexParamsAdminSharedModule } from 'app/shared';
import {
  RubriqueComponent,
  RubriqueDetailComponent,
  RubriqueUpdateComponent,
  RubriqueDeletePopupComponent,
  RubriqueDeleteDialogComponent,
  rubriqueRoute,
  rubriquePopupRoute
} from './';

const ENTITY_STATES = [...rubriqueRoute, ...rubriquePopupRoute];

@NgModule({
  imports: [MutexParamsAdminSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RubriqueComponent,
    RubriqueDetailComponent,
    RubriqueUpdateComponent,
    RubriqueDeleteDialogComponent,
    RubriqueDeletePopupComponent
  ],
  entryComponents: [RubriqueComponent, RubriqueUpdateComponent, RubriqueDeleteDialogComponent, RubriqueDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MutexParamsAdminRubriqueModule {}
