import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
 usuario:Usuarios;
 @ViewChild('return') back:ElementRef;
 db$: any;
  constructor(private db: AngularFireDatabase,private router: Router) { 
  }

  ngOnInit() {
    this.db$ = this.db.list('/usuarios');
  }
  register(forms){
       this.usuario=forms.value;
       this.usuario.nivel=2;
       delete this.usuario.password;
       this.db$.push(this.usuario).then(data=>{
       this.back.nativeElement.click;
       });

	
  }
}
