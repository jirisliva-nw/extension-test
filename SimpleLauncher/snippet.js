var NW_launcher_path = '{launcher_path_url}';
(function() {
    var new_script = document.createElement('script');
    new_script.type = 'text/javascript';
    new_script.src = NW_launcher_path + 'NW_launcher_loader.js?' + new Date().getTime();
    new_script.id = 'snippet-launcher';
    new_script.onload = function() {
        console.log('Newired Launcher added to the site successfully');
        window.newired.loader.loadLauncher({
            pathPrefix: NW_launcher_path,
            backend: '{backend_url}',
            urlMap: {url_map}            
        });
    };
    new_script.onerror = function(e) {
        console.error('Unable to load Newired Launcher to the site: ' + e.target.src);
    };
    document.head.appendChild(new_script);
})();
