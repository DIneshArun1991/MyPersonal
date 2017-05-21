import { Component,ElementRef ,ViewChild} from '@angular/core';

import { DndDirective } from './directive/Dnd';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { 
name = 'Angular'; 

HeroList = ['Ajith','Briyani','Cat','David'];

HeroListDropped =[];

@ViewChild('parentList') el:ElementRef;

constructor(private elementRef: ElementRef){
	
}

onDragStart(event :any) {
  event.dataTransfer.setData('text', event.target.innerHTML);
}

onDropHanlder(event){
    
    this.HeroListDropped.push(event.dataTransfer.getData('text'));
	/*var liData = document.createElement("li");
	liData.appendChild(document.createTextNode(event.dataTransfer.getData('text')));
	liData.setAttribute("class", "list-group-item");
	this.el.nativeElement.appendChild(liData); */
	console.log(event);	
}
}
