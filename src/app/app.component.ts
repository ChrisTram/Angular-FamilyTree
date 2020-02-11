import { Component } from '@angular/core';
import {PositionModel} from './models/position.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Choisir une branche';
  branch = -1;

  coords: PositionModel[];


  constructor() {
      this.coords = [];
      this.populate();
      this.display(0); //TODO remove in prod
  }

  display(val) {
    switch (val) {
        case 0:
          this.branch = 0;
          break;
        case 1:
          this.branch = 1;
          break;
        case 2:
            this.branch = 2;
            break;
        case 3:
            this.branch = 3;
            break;
        case 4:
            this.branch = 4;
            break;
        case 5:
            this.branch = 5;
            break;
        default:
          break;
    }
  }

  populate() {
      // Arnaud
      this.coords.push(new PositionModel(42.872222, 1.834167, 'arnaud.png'));
      this.coords.push(new PositionModel(42.907778, 1.860556, 'arnaud.png'));
      // Barthe
      this.coords.push(new PositionModel(43.068333, 0.761389, 'barthe.png'));
      this.coords.push(new PositionModel(43.129167, 0.835556, 'barthe.png'));
      this.coords.push(new PositionModel(43.274722, 0.779722, 'barthe.png'));
      this.coords.push(new PositionModel(43.068056, 0.717778, 'barthe.png'));
      this.coords.push(new PositionModel(43.301944, 0.772778, 'barthe.png'));
      this.coords.push(new PositionModel(43.050556, 0.723056, 'barthe.png'));
      this.coords.push(new PositionModel(43.086944, 0.8125, 'barthe.png'));
      // Maillot
      this.coords.push(new PositionModel(45.983611, 0.8975, 'maillot.png'));
      this.coords.push(new PositionModel(45.678611, 0.221111, 'maillot.png'));
      this.coords.push(new PositionModel(46.003611, 0.850833, 'maillot.png'));
      this.coords.push(new PositionModel(45.556111, 0.043611, 'maillot.png'));
      this.coords.push(new PositionModel(46.355833, 0.108889, 'maillot.png'));
      this.coords.push(new PositionModel(45.887222, 0.901111, 'maillot.png'));
      this.coords.push(new PositionModel(46.396667, 0.054167, 'maillot.png'));
      this.coords.push(new PositionModel(45.954167, 0.985, 'maillot.png'));
      this.coords.push(new PositionModel(46.011389, 0.781389, 'maillot.png'));
      this.coords.push(new PositionModel(46.033333, 0.722222, 'maillot.png'));
      // Mainguy
      this.coords.push(new PositionModel(47.218371, -1.553621, 'mainguy.png'));
      this.coords.push(new PositionModel(47.194722, -1.723056, 'mainguy.png'));
      this.coords.push(new PositionModel(47.183333, -1.683333, 'mainguy.png'));
      this.coords.push(new PositionModel(47.1175, -1.583889, 'mainguy.png'));
      this.coords.push(new PositionModel(45.820278, -0.569722, 'mainguy.png'));
      this.coords.push(new PositionModel(47.168889, -1.469722, 'mainguy.png'));
      this.coords.push(new PositionModel(44.775556, 0.817222, 'mainguy.png'));
      this.coords.push(new PositionModel(47.963611, -2.711389, 'mainguy.png'));
      this.coords.push(new PositionModel(47.935556, -2.675556, 'mainguy.png'));
  }

}
