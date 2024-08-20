import { Component, ViewChild, OnInit } from "@angular/core";
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTitleSubtitle,
} from "ng-apexcharts";

interface BlockStatistics {
  [blockName: string]: {
    [roomType: string]: number;
  };
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: {
    categories: string[];
    labels: {
      formatter: (val: string) => string;
    };
  };
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique_chambre.component.html',
  styleUrls: ['./statistique_chambre.component.scss']
})
export class StatistiqueChambreComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;

  public chartOptions!: ChartOptions;
  blockStatistics: BlockStatistics = {};

  constructor(private _BlocService: BlocService) {}

  ngOnInit(): void {
    this._BlocService.getBlocStat().subscribe(
      (res: any) => {
        if (this.isValidBlockStatistics(res)) {
          this.chartOptions = this.prepareChartOptions(res);
        } else {
          console.error("Received data is not in the expected format for block statistics.");
        }
      },
      (error) => {
        console.error("Error fetching block statistics", error);
      }
    );
  }

  isValidBlockStatistics(data: any): data is BlockStatistics {
  
    return true; 
  }

  prepareChartOptions(data: BlockStatistics): ChartOptions {
    const blockNames = Object.keys(data);
    const roomTypes = new Set<string>();

    blockNames.forEach(blockName => {
      const types = Object.keys(data[blockName]);
      types.forEach(type => roomTypes.add(type));
    });

    const seriesData = Array.from(roomTypes).map(roomType => {
      const series = {
        name: roomType,
        data: blockNames.map(blockName => data[blockName][roomType] || 0)
      };
      return series;
    });

    const chartOptions: ChartOptions = {
      series: seriesData,
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: blockNames,
        labels: {
          formatter: function (value: string) {
            return value; 
          }
        }
      },
      title: {
        text: " Statistique des typeChambres par Bloc"
      }
    };

    return chartOptions;
  }
}
