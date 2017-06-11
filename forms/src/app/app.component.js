"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
        this.data = { name: 'Dinesh',
            addresses: [
                { street: 'street1', city: 'chennai' },
                { street: 'street2', city: 'chennai' }
            ]
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    };
    AppComponent.prototype.initAddress = function () {
        return this._fb.group({
            street: ['', forms_1.Validators.required],
            postcode: ['']
        });
    };
    AppComponent.prototype.addAddress = function () {
        this.data.addresses.push({
            street: '',
            city: '',
            state: ''
        });
    };
    AppComponent.prototype.removeAddress = function (i) {
        this.data.addresses.splice(i, 1);
    };
    AppComponent.prototype.save = function (model) {
        // call API to save
        // ...
        console.log(model);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map