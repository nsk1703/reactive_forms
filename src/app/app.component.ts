import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/core';
import { CustomValidators } from './validators/custom-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	formGroup: FormGroup;
	constructor(private formBuild: FormBuilder){}

	myForm = this.formBuild.group({
		name: ['', Validators.required, CustomValidators.invalidProjectName],
		email: ['', [Validators.required, Validators.email] ],
		status: ['stable']
	})

	ngOnInit(): void {
		this.formGroup = this.myForm;
	}

	onAdding(){
		console.log(this.formGroup.value);
		
	}
}
