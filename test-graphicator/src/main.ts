import { Graphicator, LineChartGraphicator } from 'graphicator';

let datum:object;
let graphicator:Graphicator;

//#########################

datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 1, año: 2014, valor: 1230 },
        { comuna: 2, año: 2014, valor: 1430 },
        { comuna: 3, año: 2014, valor: 1980 },
        { comuna: 4, año: 2014, valor: 1520 },
        { comuna: 1, año: 2015, valor: 1360 },
        { comuna: 2, año: 2015, valor: 1330 },
        { comuna: 3, año: 2015, valor: 1320 },
        { comuna: 4, año: 2015, valor: 1490 },
        { comuna: 1, año: 2016, valor: 2230 },
        { comuna: 2, año: 2016, valor: 2330 },
        { comuna: 4, año: 2016, valor: 2620 },
        { comuna: 1, año: 2017, valor: 2730 },
        { comuna: 2, año: 2017, valor: 2830 },
        { comuna: 3, año: 2017, valor: 2780 },
        { comuna: 4, año: 2017, valor: 2920 },
    ]
}

graphicator = new LineChartGraphicator('mortalidadChart', datum);
graphicator.renderTabulation();
