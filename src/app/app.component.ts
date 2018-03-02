import { Component } from '@angular/core';
import {FilmListService} from './filmlist/film-list.service';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <div class="container-fluid">
        <ul>
          <li><a [routerLink]="['/home']">QACinema</a></li>
          <li><a [routerLink]="['/about']">About Us</a></li>
          <li><a [routerLink]="['/films']">Films</a></li>
          <li style="float: right"><a [routerLink]="['/login']">Login</a></li>
      </ul>
    </div>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
      <footer id="myFooter">
        <div class="container1">
          <div class="row">
            <div class="col-md-6">
              <h2>QACinema</h2>
              <ul>
                <li>David Hutton-Lewis</li>
                <li>Muhammad Ali</li>
                <li>John Lilleker</li>
                <li>Shirley Yang</li>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="social-networks">
                <a href="http://www.twitter.com" class="twitter"><i class="fa fa-twitter"></i></a>
                <a href="http://www.facebook.com" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="http://google.com" class="google"><i class="fa fa-google-plus"></i></a>
              </div>
              <a class="btn btn-danger" [routerLink]="['/contact']">Contact Us</a>
            </div>
          </div>
          <div class="info">
            <p>© QACinema 2018</p>
          </div>
        </div>
      </footer>
   </div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [FilmListService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
