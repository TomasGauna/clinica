import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import Chart from 'chart.js/auto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent {
  pieChart: any;
  pieChart2: any;
  barChart: any;
  donaChart: any;
  lapso: number = 7;
  lapso2: number = 7;
  turnos: any[] = [];
  logs: any[] = [];
  observableT: any;
  observableL: any;

  constructor(private firestore: Firestore) { }

  ngOnInit()
  {
    this.observableT = FirestoreService.traerFs('turnos', this.firestore).subscribe((data)=>{
      this.turnos = data;
      this.createPieChart(this.calcularCantidadTurnos(), 'pie');
      this.createBarChart(this.calcularCantidadTurnosPorDia());
      this.createLineChart(this.calcularCantidadTurnosPorEspecialistaEnPeriodo());
      this.createPie2Chart(this.calcularCantidadTurnosPorEspecialistaEnPeriodoFinalizado(), 'pie2');
    });

    this.observableL = FirestoreService.traerFs('logs', this.firestore).subscribe((data)=>{
      this.logs = data;
    });
  }
  
  ngOnDestroy()
  {
    if(this.observableT)
    {
      this.observableT.unsubscribe();
    }
  }

  obtenerColumnas(array: any): string[] 
  {
    let devuelve: string[] = [];
    if (array.length !== 0) 
    {
      Object.keys(array[0]).forEach((element:any) => {
        if(element != 'paciente' && element != 'resenia' && element != 'comentario')
        {
          devuelve.push(element);
        }
      });
    }
    
    return devuelve;
  }

  createPieChart(data: any, id: string) 
  {
    this.pieChart = new Chart(id, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
            label: '',
            data: data.map((d:any) => d.cantidad),
            backgroundColor: [
              '#21A6E5', '#063752', '#BAD696', '#3C6C83','#282728', '#202B2C',
              '#00A1FD','#fcb7af','#fdf9c4','#ffe4e1','#b2e2f2','#ff6961'
            ],
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            usePointStyle: true,
            borderColor: '#C5DB8F',
            borderWidth: 3,
            boxHeight: 130,
            boxWidth: 130,
            cornerRadius: 8,
            displayColors: true,
            bodyAlign: 'center',
            callbacks: {
              //@ts-ignore
              labelPointStyle(context) 
              {
                const value = context.parsed;
                const nombre = data[context.dataIndex].especialidad;
                const veces = value == 1 ? 'vez' : 'veces';
                context.label = `${nombre} ${value} ${veces}`;
                //let image = new Image(130, 130);
                return{
                  //pointStyle: image
                }
              },
            },
            legend: {
              display: false,
            },
            datalabels: {
              color: '#ffffff',
              anchor: 'end',
              align: 'center',
              font: {
                size: 30,
                weight: 'bold',
              },
              offset: 5,
              borderColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
              textShadowBlur: 10,
              textShadowColor: '#000000',
            },
          },
        },
      },
    });
  }

  createPie2Chart(data: any, id: string) 
  {
    this.pieChart = new Chart(id, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
            label: '',
            data: data.map((d:any) => d.cantidad),
            backgroundColor: [
              '#21A6E5', '#063752', '#BAD696', '#3C6C83','#282728', '#202B2C',
              '#00A1FD','#fcb7af','#fdf9c4','#ffe4e1','#b2e2f2','#ff6961'
            ],
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            usePointStyle: true,
            borderColor: '#C5DB8F',
            borderWidth: 3,
            boxHeight: 130,
            boxWidth: 130,
            cornerRadius: 8,
            displayColors: true,
            bodyAlign: 'center',
            callbacks: {
              //@ts-ignore
              labelPointStyle(context) 
              {
                const value = context.parsed;
                const nombre = data[context.dataIndex].especialista.apellido;
                const veces = value == 1 ? 'turno' : 'turnos';
                context.label = `${nombre} ${value} ${veces}`;
                //let image = new Image(130, 130);
                return{
                  //pointStyle: image
                }
              },
            },
            legend: {
              display: false,
            },
            datalabels: {
              color: '#ffffff',
              anchor: 'end',
              align: 'center',
              font: {
                size: 30,
                weight: 'bold',
              },
              offset: 5,
              borderColor: '#ffffff',
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
              textShadowBlur: 10,
              textShadowColor: '#000000',
            },
          },
        },
      },
    });
  }

  createBarChart(data: any) 
  {
    this.barChart = new Chart('bar', {
      type: 'bar',
      data: {
        labels: data.map((d:any) => ''),
        datasets: [{
            label: '',
            data: data.map((d:any) => d.cantidad),////////////////CAMBIAR
            backgroundColor: [
              '#21A6E5', '#063752', '#3C6C83','#282728', '#202B2C',
              '#00A1FD','#fcb7af','#fdf9c4','#ffe4e1','#b2e2f2','#ff6961'
            ],
            borderColor: [
              '#21A6E5', '#063752', '#3C6C83','#282728', '#202B2C',
              '#00A1FD','#fcb7af','#fdf9c4','#ffe4e1','#b2e2f2','#ff6961'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
          y: {
            display: false,
          },
          x: {
            grid: {
              color: '#555555',
            },
            ticks: {
              color: 'rgb(0,0,0)',
              font: {
                weight: 'bold',
              },
            },
          },
        },
        layout: {
          padding: 20,
        },
        plugins: {
          tooltip: {
            usePointStyle: true,
            borderColor: '#C5DB8F',
            borderWidth: 3,
            boxHeight: 130,
            boxWidth: 130,
            cornerRadius: 8,
            displayColors: true,
            bodyAlign: 'center',
            callbacks: {
              //@ts-ignore
              labelPointStyle(context) 
              {
                const value = context.formattedValue;
                const nombre = data[context.dataIndex].dia;
                context.label = `${value} turno/s - ${nombre}`;
                let image = new Image(120, 120);
                //image.src = fotos[context.dataIndex].foto;
                return{
                  //pointStyle: image
                }
              },
            },
            legend: {
              display: false,
            },
          },
        },
      },
    });
  }

  createLineChart(data: any)
  {
    this.donaChart = new Chart('line', {
      type: 'line',
      data: {
        labels: data.map((d:any) => ''),
        datasets: [{
            label: '',
            data: data.map((d:any) => d.cantidad),
            backgroundColor: [
              '#21A6E5', '#063752', '#3C6C83','#282728', '#202B2C',
              '#00A1FD','#fcb7af','#fdf9c4','#ffe4e1','#b2e2f2','#ff6961'
            ],
            borderColor: [
              '#21A6E5', '#063752', '#3C6C83','#282728', '#202B2C',
              '#00A1FD','#fcb7af','#fdf9c4','#ffe4e1','#b2e2f2','#ff6961'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        indexAxis: 'x',
        scales: {
          y: {
            display: false,
          },
          x: {
            grid: {
              color: '#555555',
            },
            ticks: {
              color: 'rgb(0,0,0)',
              font: {
                weight: 'bold',
              },
            },
          },
        },
        layout: {
          padding: 20,
        },
        plugins: {
          tooltip: {
            usePointStyle: true,
            borderColor: '#C5DB8F',
            borderWidth: 3,
            boxHeight: 130,
            boxWidth: 130,
            cornerRadius: 8,
            displayColors: true,
            bodyAlign: 'center',
            callbacks: {
              //@ts-ignore
              labelPointStyle(context) 
              {
                const value = context.formattedValue;
                const nombre = data[context.dataIndex].especialista;
                context.label = `${value} turnos/s - ${nombre}`;
                let image = new Image(120, 120);
                //image.src = fotos[context.dataIndex].foto;
                return{
                  //pointStyle: image
                }
              },
            },
            legend: {
              display: false,
            },
          },
        },
      },
    });
  }

  calcularCantidadTurnos() 
  {
    const cantidadTurnosPorEspecialidad: any[] = [];
  
    this.turnos.forEach(turno => {
      const especialidad = turno.especialidad;
      const index = cantidadTurnosPorEspecialidad.findIndex(item => item.especialidad === especialidad);
  
      if (index !== -1) {
        cantidadTurnosPorEspecialidad[index].cantidad++;
      } else {
        cantidadTurnosPorEspecialidad.push({ especialidad, cantidad: 1 });
      }
    });
  
    return cantidadTurnosPorEspecialidad;
  }

  calcularCantidadTurnosPorDia() 
  {
    const cantidadTurnosPorDia: any[] = [];
  
    this.turnos.forEach(turno => {
      const fechaParts = turno.fecha.split('-');
      const dia = `${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`;
  
      const index = cantidadTurnosPorDia.findIndex(item => item.dia === dia);
  
      if (index !== -1) 
      {
        cantidadTurnosPorDia[index].cantidad++;
      } 
      else 
      {
        cantidadTurnosPorDia.push({ dia, cantidad: 1 });
      }
    });
  
    return cantidadTurnosPorDia;
  }

  calcularCantidadTurnosPorEspecialistaEnPeriodo() 
  {
    const cantidadTurnosPorEspecialista: any[] = [];
    const hoy = new Date();
  
    const inicio = new Date();
    inicio.setDate(hoy.getDate() - this.lapso);
  
    this.turnos.forEach(turno => {
      const fechaParts = turno.fecha.split('-');
      const fechaTurno = new Date(`${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`);
  
      if (fechaTurno >= inicio && fechaTurno <= hoy) {
        const especialista = turno.especialista;
  
        const index = cantidadTurnosPorEspecialista.findIndex(item => item.especialista === especialista.apellido);
  
        if (index !== -1) {
          cantidadTurnosPorEspecialista[index].cantidad++;
        } else {
          cantidadTurnosPorEspecialista.push({ especialista: especialista.apellido, cantidad: 1 });
        }
      }
    });

    return cantidadTurnosPorEspecialista;
  }

  calcularCantidadTurnosPorEspecialistaEnPeriodoFinalizado() 
  {
    const cantidadTurnosPorEspecialista: any[] = [];
    const hoy = new Date();
  
    const inicio = new Date();
    inicio.setDate(hoy.getDate() - this.lapso2);
  
    this.turnos.forEach(turno => {
      const fechaParts = turno.fecha.split('-');
      const fechaTurno = new Date(`${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`);
  
      if (fechaTurno >= inicio && fechaTurno <= hoy && turno.estado === 'finalizado') {
        const especialista = turno.especialista;
  
        const index = cantidadTurnosPorEspecialista.findIndex(item => item.especialista === especialista);
  
        if (index !== -1) {
          cantidadTurnosPorEspecialista[index].cantidad++;
        } else {
          cantidadTurnosPorEspecialista.push({ especialista, cantidad: 1 });
        }
      }
    });
  
    return cantidadTurnosPorEspecialista;
  }

  actualizarGrafico(nuevosDatos: any, cual: string) 
  {
    if(cual === 'line')
    {
      this.donaChart.data.datasets[0].data = nuevosDatos.map((d:any) => d.cantidad);
      this.donaChart.update();
    }
    else
    {
      this.pieChart2.data.datasets[0].data = nuevosDatos.map((d:any) => d.cantidad);
      this.donaChart.update();
    }
  }
}
