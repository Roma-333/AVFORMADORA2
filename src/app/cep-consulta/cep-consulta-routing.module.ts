import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CepConsultaPage } from './cep-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: CepConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CepConsultaPageRoutingModule {}
