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
var AppComponent = (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        this.name = 'Angular';
        this.HeroList = ['Ajith', 'Briyani', 'Cat', 'David'];
        this.HeroListDropped = [];
    }
    AppComponent.prototype.onDragStart = function (event) {
        event.dataTransfer.setData('text', event.target.innerHTML);
    };
    AppComponent.prototype.onDropHanlder = function (event) {
        this.HeroListDropped.push(event.dataTransfer.getData('text'));
        /*var liData = document.createElement("li");
        liData.appendChild(document.createTextNode(event.dataTransfer.getData('text')));
        liData.setAttribute("class", "list-group-item");
        this.el.nativeElement.appendChild(liData); */
        console.log(event);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('parentList'),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "el", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map