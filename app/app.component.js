System.register(['./demo.service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var demo_service_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_demoService) {
                    this._demoService = _demoService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getFoods();
                    this.getBooksAndMovies();
                };
                AppComponent.prototype.doPost = function () {
                    this._demoService.post(this.call_post, this.comment);
                };
                AppComponent.prototype.getFoods = function () {
                    var _this = this;
                    this._demoService.getFoods().subscribe(
                    // the first argument is a function which runs on success
                    function (data) { _this.foods = data; }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.error(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading foods'); });
                };
                AppComponent.prototype.getBooksAndMovies = function () {
                    var _this = this;
                    this._demoService.getBooksAndMovies().subscribe(function (data) {
                        _this.books = data[0];
                        _this.movies = data[1];
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'demo-app',
                        template: "\n  <h1>Angular2 HTTP Demo App</h1>\n\n  <form f=\"postForm\" (ngSubmit)=\"doPost()\">\n\n      <input [(ngModel)]=\"call_post\" placeholder=\"0\">\n      <br>\n      <textarea [(ngModel)]=\"comment\"> </textarea>\n<br>\n       <button type=\"submit\" class=\"btn btn-warning btn-lg\">POST</button>\n  </form>\n\n  <h1>comments</h1>\n<div class= \"desc\">\n  <div class=\"comment\" *ngFor=\"#food of foods\">\n\n  <div class=\"name\">\n  {{food._id}}\n</div>\n\n<div class=\"com\">\n<h3>Comment </h3>\n{{food.comment}}\n</div>\n\n  </div>\n</div>\n  <h2>Books and Movies</h2>\n  <h3>Books</h3>\n  <ul>\n    <li *ngFor=\"#book of books\">{{book.title}}</li>\n  </ul>\n  <h3>Movies</h3>\n  <ul>\n    <li *ngFor=\"#movie of movies\">{{movie.title}}</li>\n  </ul>\n  ",
                        styles: ["\n    .desc{\n\n      width: 900px;\n      display: flex;\n  flex-wrap: wrap;\n\n    }\n    .comment{\n      width:300px;\n      height: 300px;\n      magin-bottom:25px;\n    }\n\n  "]
                    }), 
                    __metadata('design:paramtypes', [demo_service_1.DemoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map