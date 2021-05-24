import * as S from './styles'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type AssetsValues = {
  qtdEmAlerta: number
  qtdEmOperacao: number
  qtdEmParada: number
  qtdDesligado: number
  total: number
}
export type AssetsStatusProps = {
  values: AssetsValues
}

const AssetsStatus = ({ values }: AssetsStatusProps) => {
  const options = {
    chart: {
      type: 'pie',
    },
    legend: {
      align: 'left',
      floating: true,
      verticalAlign: 'top',
      layout: 'vertical',
      y: 100,
    },
    title: {
      text: `Ativos <br> cadastrados</br> <br>${values.total} </br>`,
      align: 'center',
      verticalAlign: 'middle',
    },
    tooltip: {
      valueDecimals: 0,
      pointFormat: '<b>{point.y}</b>',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '100%',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        innerSize: '80%',
        data: [
          {
            name: 'Em Operação',
            y: values.qtdEmOperacao,
            color: 'green',
          },
          {
            name: 'Em Alerta',
            y: values.qtdEmAlerta,
            color: 'yellow',
          },
          {
            name: 'Em Parada',
            y: values.qtdEmParada,
            color: 'red',
          },
          {
            name: 'Desligado',
            y: values.qtdDesligado,
            color: 'gray',
          },
        ],
      },
    ],
  }

  return (
    <S.Wrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </S.Wrapper>
  )
}

export default AssetsStatus
