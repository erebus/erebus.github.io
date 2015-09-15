'use strict';

angular
    .module('erebus')
    .controller('bandwidthGraph', bandwidthGraph);
    
bandwidthGraph.$inject = ['$scope'];
    
function bandwidthGraph($scope) {
    activate();

    function activate() {
        $scope.options = {
            axes: {
                x: {key: 'x', ticksFormat: '.2f', type: 'linear', min: 0, max: 15, ticks: 10, grid: true},
                y: {min: 0, max: 1024, ticks: 5, innerTicks: true, grid: true},
                y2: {min: 0, max: 1024, ticks: 5, innerTicks: true, grid: true}
            },
            margin: {
                left: 35
            },
            series: [
                {y: 'read', color: '#3498db', thickness: '3px', type: 'area', striped: false},
                {y: 'written', color: '#e74c3c', thickness: '3px', type: 'area', striped: false, axis: 'y2'}
            ],
            tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return formatBytes(y, 2);}},
            drawLegend: false,
            drawDots: true,
            hideOverflow: false,
            columnsHGap: 4
        }
        
        $scope.data = [
            { x: 0, read: 980, written: 1000 },
            { x: 1, read: 720, written: 700 },
            { x: 2, read: 350, written: 200 },
            { x: 3, read: 100, written: 100 },
            { x: 4, read: 280, written: 280 },
            { x: 5, read: 900, written: 950 },
            { x: 6, read: 10, written: 50 },
            { x: 7, read: 20, written: 60 },
            { x: 8, read: 30, written: 30 },
            { x: 9, read: 70, written: 70 },
            { x: 10, read: 280, written: 280 },
            { x: 11, read: 380, written: 3800 },
            { x: 12, read: 180, written: 180 },
            { x: 13, read: 980, written: 980 },
            { x: 14, read: 990, written: 990 },
            { x: 15, read: 390, written: 420 },
        ];
    }
}

function formatBytes(bytes, decimals) {
    if(bytes == 0) return '0 Byte';
    var k = 1000;
    var dm = decimals + 1 || 3;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i];
}
