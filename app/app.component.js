System.register(['angular2/core', './services', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, services_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_Service) {
                    this._Service = _Service;
                }
                AppComponent.prototype.doPost = function () {
                    this._Service.post(this.call_post, this.comment);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n      <form   (ngSubmit)=\"doPost()\" >\n        <h1> Send me a message </h1>\n        <div class=\"row\">\n  <div class=\"label\">\n      Email:</div>\n       <div class=\"answer\"> <input [(ngModel)]=\"call_post\" placeholder=\"Email\"> </div>\n\n</div>\n        <br>\n        <div class=\"row\">\n        <div class=\"label\">\n      Comments:</div>\n      <div class=\"answer\"> <textarea [(ngModel)]=\"comment\"> </textarea></div>\n  <br>\n</div>\n<div class=\"row\">\n         <button type=\"submit\" class=\"\">Send Message</button>\n       </div>\n    </form>\n               ",
                        styles: ["\n                 h1{\n       text-align: center;\n       color: #445668\n     }\n     form{\n       background: #c9d0de;\n       width:500px;\n       height: 300px;\n\n       border: 1px solid #e1e1e1\n     }\n     .row{\n       display: flex;\n          flex-wrap: wrap;\n          width:400px;\n          padding-left: 25px;\n\n\n     }\n     .label{\n       width:120px;\n       font-size: 20px;\n     color: #445668\n     }\n\n     input{\n       width:250px;\n     background-color: #818b94;\n     border-radius: 5px;\n     height: 25px;\n     }\n     textarea{\n       width:250px;\n       height:75px;\n       background-color: #818b94;\n       border-radius: 5px;\n     }\n     button{\n       margin-left: 255px;\n       margin-top: 25px;;\n       padding: 10px 15px;\n       background-color: #718da9;\n       border-radius: 5px;\n       color: white;\n     }\n               "]
                    }), 
                    __metadata('design:paramtypes', [services_1.Service])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map