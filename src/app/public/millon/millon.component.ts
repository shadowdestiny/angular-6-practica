import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ResultsService } from './services/results.service';
import { Results } from './models/results.models';

@Component({
  selector: 'app-millon',
  templateUrl: './millon.component.html',
  styleUrls: ['./millon.component.scss']
})
export class MillonComponent implements OnInit {

  results: Results;

  public one: string;
  public two: string;
  public three: string;
  public four: string;
  public five: string;
  public result_lucky_number_one: string;
  public result_lucky_number_two: string;
  public date: string;

  constructor(public _resultsServices: ResultsService) { }

  ngOnInit() {

    this.one = '0';
    this.two = '0';
    this.three = '0';
    this.four = '0';
    this.five = '0';
    this.result_lucky_number_one = '0';
    this.result_lucky_number_two = '0';
    this._resultsServices.get().subscribe(
        (data: Results) => {
            if (data.error === 0) {
              this.results = data;
              this.format(data.results);
              this.formatDate(data.draw);
            } else {
              this.otherService();
            }
        },
        err => {
            console.log(err);
            this.otherService();
        },
        () => {
            console.log('completed');
        }
    );
  }

  otherService() {
    this._resultsServices.getOtherService().subscribe(
      (data: Results) => {
        this.results = data;
        this.format(data.results);
        this.formatDate(data.draw);
      },
      err2 => {
        console.log(err2);
      },
      () => {
        console.log('completed');
      }
    );
  }

  format(data) {
    const ar_data = data.split(',');
    this.one = ar_data[0];
    this.two = ar_data[1];
    this.three = ar_data[2];
    this.four = ar_data[3];
    this.five = ar_data[4];
    this.result_lucky_number_one = ar_data[5];
    this.result_lucky_number_two = ar_data[6];
  }
  formatDate(data) {
    const date = data.split('-');
    this.date = date[2] + '.' + date[1] + '.' + date[0];
  }

}
