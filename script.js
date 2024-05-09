options: {
    plugins: {
        datalabels: {
            color: '#000000',
            anchor: 'end',
            align: 'top',
            formatter: function(value, context) {
                return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            },
            offset: 4 // Espaçamento entre o valor e a barra
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
}
