import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;

    private data={name : 'Dinesh',
    	addresses : [
    		{street:'street1',city:'chennai'},
    		{street:'street2',city:'chennai'}]
    		};
    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }

    addAddress() {
    this.data.addresses.push({
      street: '',
      city: '',
      state: ''
    });
    }

    removeAddress(i: number) {
     	this.data.addresses.splice(i, 1);
    }

    save(model: any) {
        // call API to save
        // ...
        console.log(model);
    }
}