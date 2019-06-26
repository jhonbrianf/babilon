import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
 email:string="";
  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase) {

            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth;
              this.email=auth.email;
            });
          }

          getCurrentUser(){
            return new Promise<any>((resolve, reject) => {
              var user = this.afAuth.auth.onAuthStateChanged(function(user){
               
                if (user) {
                  resolve(user);
                } else {
                  reject('No user logged in');
                }
              })
          
          })
        }
        getCurrentNivel(email){
          return new Promise<any>((resolve, reject) => {
            var user = this.db.list('/usuarios', ref => ref.orderByChild('correo').equalTo(email)).snapshotChanges().subscribe(usuario=>{
             
              if (usuario) {
                resolve(usuario);
              } else {
                reject('No user logged in');
              }
            })
        
        })
  
        }
     getCurrentEmail(){
           return this.email;
          }
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }
}
