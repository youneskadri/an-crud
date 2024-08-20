import {Component, OnInit, ViewChild} from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import {FoyerService} from "../../shared/services/foyerService/foyer.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions!: ChartOptions;
  myMap : Map<string,number> = new Map<string, number>();
  keys :any[] = []
  values : any[] = []
  constructor(
   private _foyerService : FoyerService
  ) {

  }

  ngOnInit() {

    this._foyerService.getFoyerbyCapacite().subscribe({
      next: (res) => {
        if (res && typeof res === 'object') {
          // Assuming res is an object with string keys and number values
          this.myMap = new Map(Object.entries(res));
          this.keys = Array.from(this.myMap.keys());
          this.values = Array.from(this.myMap.values());
          this.chartOptions = {
            series: [
              {
                name: "My-series",
                data: this.values
              },

            ],
            chart: {
              height: 350,
              type: "bar",
              background: "#ffffff",

            },

            title: {
              text: "Visualisation des foyers par leurs capacités"
            },
            xaxis: {
              categories: this.keys
            }
          };
          // Rest of your code using this.myMap, this.keys, this.values
          // ...
        } else {
          console.error('Received data is not in the expected format');
        }
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });


  }
}
