import {Graphicator, LineChartGraphicator, PieChartGraphicator, BarChartGraphicator} from 'graphicator';
import Tabulator = require('tabulator');


let tabulator = new Tabulator();
tabulator.defaultShowAttribute = 'valor';

function renderTableInElement(elementId: string, matrix: any) {
    let element = document.getElementById(elementId);
    element.innerHTML = "";
    const table = tabulator.toHtmlTable(matrix);
    element.parentNode.insertBefore(table.create(), element);
}

let datum:object;
let graphicator:Graphicator;
let matrix 

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


matrix = tabulator.toMatrix(datum);
renderTableInElement('mortalidadChart', matrix);
graphicator = new LineChartGraphicator('mortalidadChart', matrix);
graphicator.renderTabulation();

// //#########################
datum = {
    vars: [
        { name: 'tipoDeHacinamiento', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { "tipoDeHacinamiento": "hacinadas", año: 2012, valor: 19.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2012, valor: 78.8 },
        { "tipoDeHacinamiento": "hacinadas", año: 2013, valor: 16.4 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2013, valor: 79.0 },
        { "tipoDeHacinamiento": "hacinadas", año: 2014, valor: 16.0 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2014, valor: 81.3 },
        { "tipoDeHacinamiento": "hacinadas", año: 2015, valor: 12.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2015, valor: 84.3 },
    ]
};

matrix = tabulator.toMatrix(datum);
renderTableInElement('mortalidadChart2', matrix);
graphicator = new LineChartGraphicator('mortalidadChart2', matrix);
graphicator.renderTabulation();

//#########################
datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'rangoEdad', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 'Total', rangoEdad: '0-4', valor: 165.638 },
        { comuna: 'Total', rangoEdad: '5-9', valor: 156.372 },
        { comuna: 'Total', rangoEdad: '10-14', valor: 150.501 },
        { comuna: 'Total', rangoEdad: '15-17', valor: 92.521 },
    ]
};
matrix = tabulator.toMatrix(datum);
renderTableInElement('poblacionChart', matrix);
graphicator = new PieChartGraphicator('poblacionChart', matrix);
graphicator.renderTabulation();
//#########################
datum = {
    vars: [
        { name: 'sexo', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { sexo: 'mujer', año: 2015, valor: 1230 },
        { sexo: 'varon', año: 2015, valor: 1430 },
        { sexo: 'varon', año: 2015, valor: 1980 },
        { sexo: 'mujer', año: 2015, valor: 1520 },
        { sexo: 'mujer', año: 2016, valor: 2230 },
        { sexo: 'varon', año: 2016, valor: 2330 },
        { sexo: 'varon', año: 2016, valor: 2280 },
        { sexo: 'mujer', año: 2016, valor: 2620 },
        { sexo: 'mujer', año: 2017, valor: 2730 },
        { sexo: 'varon', año: 2017, valor: 2830 },
        { sexo: 'varon', año: 2017, valor: 2780 },
        { sexo: 'mujer', año: 2017, valor: 2920 },
    ]
};
matrix = tabulator.toMatrix(datum);
renderTableInElement('adopcionesChart', matrix);
graphicator = new BarChartGraphicator('adopcionesChart', matrix);
graphicator.renderTabulation();
