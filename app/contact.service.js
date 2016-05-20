System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService(http) {
                    this.http = http;
                    this._url = './mock/contacts.json';
                }
                ContactService.prototype.getContacts = function () {
                    // let c1: Contact = { Id: 1, EmailAddress: "a@a.com", Name: "rido", PhoneNumber: "123" }
                    // let c2: Contact = { Id: 2, EmailAddress: "b@b.com", Name: "odir", PhoneNumber: "222" }
                    // let contacts: Contact[] = [c1, c2];
                    //return Observable.apply(contacts);
                    return this.http.get(this._url)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.log(error);
                        return Observable_1.Observable.throw(error);
                    });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});
//# sourceMappingURL=contact.service.js.map