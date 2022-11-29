import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EditarComponent } from './editar/editar.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { LivrosComponent } from './livros/livros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ExibirISBNPipe } from './exibir-isbn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroUsuarioComponent,
    EditarComponent,
    EditarUsuarioComponent,
    LivrosComponent,
    UsuariosComponent,
    ExibirISBNPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
