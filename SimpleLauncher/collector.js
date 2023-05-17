var _nrq = _nrq || [];
(function () {
    var url = '{collector_url}';

    console.info('Reports Initialization.');
    var script = document.createElement('script');
    _nrq.push(['setCollectorUrl', url + '/collect']);
    script.type = 'text/javascript';
    script.src = url + '/collector.js';
    script.id = 'newired-collector-js';
    script.onload = function () {
        console.log('Newired collector js added to the site successfully');
    };

    script.onerror = function () {
        console.error('Unable to add Newired collector js to the site.');
    };

    document.getElementsByTagName('head')[0].appendChild(script);
})();
