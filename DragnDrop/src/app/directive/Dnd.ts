import { Directive,HostListener,HostBinding,EventEmitter,Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

	@Output() private dropEventHanlder : EventEmitter<Object> = new EventEmitter();
	@HostBinding('style.background') 
	private background = '';

	@HostListener('drop', ['$event']) 
	public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.dropEventHanlder.emit(evt);
    }

   @HostListener('dragover', ['$event']) 
   public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    //this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) 
  public onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    //this.background = '#eee'
  }
  
}