import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.scss']
})
export class GetHelpComponent implements OnInit {

  generalDataFormGroup: FormGroup;
  specificDataFormGroup: FormGroup;
  fodaFormGroup: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.generalDataFormGroup = this.fb.group({
      firstCtrl: new FormControl('')
    });
    this.specificDataFormGroup = this.fb.group({
      secondCtrl: new FormControl('')
    });
    // this.fodaFormGroup = this.fb.group({
    //   fodaFormGroup: ['', Validators.required]
    // });
  }

}
