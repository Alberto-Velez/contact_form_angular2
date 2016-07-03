import {Component} from 'angular2/core';
import {Service} from './services';
import {HTTP_PROVIDERS} from 'angular2/http';
import {FORM_DIRECTIVES} from 'angular2/common';



@Component({
    selector: 'my-app',
    directives: [FORM_DIRECTIVES],
    template: `
      <form >
        <h1> Send me a message </h1>
        <div class="row">
  <div class="label">
      Email:</div>
       <div class="answer"> <input [(ngModel)]="call_post" placeholder="Email"> </div>
</div>
        <br>
        <div class="row">
        <div class="label">
      Comments:</div>
      <div class="answer"> <textarea [(ngModel)]="comment"> </textarea></div>
  <br>
</div>
<div class="row">
         <button type="submit" class="">Send Message</button>
       </div>
    </form>
               `,

               styles: [`
                 h1{
       text-align: center;
       color: #445668
     }
     form{
       background: #c9d0de;
       width:500px;
       height: 300px;

       border: 1px solid #e1e1e1
     }
     .row{
       display: flex;
          flex-wrap: wrap;
          width:400px;
          padding-left: 25px;


     }
     .label{
       width:120px;
       font-size: 20px;
     color: #445668
     }

     input{
       width:250px;
     background-color: #818b94;
     border-radius: 5px;
     height: 25px;
     }
     textarea{
       width:250px;
       height:75px;
       background-color: #818b94;
       border-radius: 5px;
     }
     button{
       margin-left: 255px;
       margin-top: 25px;;
       padding: 10px 15px;
       background-color: #718da9;
       border-radius: 5px;
       color: white;
     }
               `]
})
export class AppComponent {

    public call_post;
    public comment;

    constructor(private _Service: Service) { }



    doPost() {

      this._Service.post(this.call_post, this.comment);

     }


}
