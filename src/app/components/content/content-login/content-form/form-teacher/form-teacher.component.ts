import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss']
})
export class FormTeacherComponent implements OnInit {

  msg_success: string = 'Login efetuado com sucesso'; 
  
  login = {
    dataUser:'',
    password:''
  }

  constructor(
    private accountService : AccountService,
    private router: Router, 
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }
  
  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      console.log(`login efetuado com sucesso: ${result}`);
      this.snackBar.open(this.msg_success, 'X', {
        duration:2000,
        horizontalPosition:'right' ,
        verticalPosition: 'top',
      });
      this.router.navigate(['/Entry-Teacher-page']);
    } catch (error) {
      console.log(error);
    }
  }
}
