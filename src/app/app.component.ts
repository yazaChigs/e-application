import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public contactList: FormArray;
  list: any[];
  selected : any;
  questionType = ['text', 'check box', 'select', 'number', 'radio'];

  // returns all form groups under contacts
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      organization: [null],
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;
  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      // type: ['email', Validators.compose([Validators.required])], // i.e Email, Phone
      // name: [null, Validators.compose([Validators.required])], // i.e. Home, Office
      // value: [null, Validators.compose([Validators.required, Validators.email])]
      type: new FormControl(),
      question: new FormControl(),
      weight: new FormControl(),
      required: new FormControl(),
      answer: new FormControl()
    });
  }

  // add a contact form group
  addContact() {
    this.contactList.push(this.createContact());
    this.list = this.form.get('contacts').value;
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.contactList.removeAt(index);
  }

  // triggered to change validation of value field type
  changedFieldType() {

    // if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
    //   validators = Validators.compose([Validators.required, Validators.email]);
    // } else {
    //   validators = Validators.compose([
    //     Validators.required,
    //     Validators.pattern(new RegExp('^\\+[0-9]?()[0-9](\\d[0-9]{9})$')) // pattern for validating international phone number
    //   ]);
    }

  //   this.getContactsFormGroup(index).controls['value'].setValidators(
  //     validators
  //   );

  //   this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  // }

  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    const family = this.list,
    unique = [...Array.from(new Set(family.map(a => a.name)))];

console.log(unique);
    console.log(this.form.value);
  }

  checkDuplicateInObject(propertyName, inputArray) {
    var seenDuplicate = false,
        testObject = {};

    inputArray.map(function(item) {
      var itemPropertyName = item[propertyName];
      if (itemPropertyName in testObject) {
        testObject[itemPropertyName].duplicate = true;
        item.duplicate = true;
        seenDuplicate = true;
      }
      else {
        testObject[itemPropertyName] = item;
        delete item.duplicate;
      }
    });

    console.log(seenDuplicate);
    return seenDuplicate;
  }

}
