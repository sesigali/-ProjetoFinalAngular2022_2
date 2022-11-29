import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { BcoService } from '../bco.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  meusUsuarios: Usuario[] = [];

  constructor(private servico: BcoService) { }

  ngOnInit(): void {
    this.obterUsuarios()
  }
  obterUsuarios():void{
    console.log("Carregando usuários...")
    this.servico.obterUsuarios().subscribe(res => { console.log(res),this.meusUsuarios = res})
  }
  excluirUsuario(id:string){
    if(confirm("Deseja mesmo excluir?"))
      this.servico.excluirUsuario(id).subscribe(res => {
        console.log(res),
        this.obterUsuarios()
      });
  }

}
