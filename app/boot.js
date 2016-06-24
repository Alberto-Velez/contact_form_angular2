System.register(['angular2/platform/browser', 'angular2/http', 'rxjs/add/operator/map', './app.component', './demo.service'], function(exports_1) {
    var browser_1, http_1, app_component_1, demo_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                demo_service_1.DemoService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map