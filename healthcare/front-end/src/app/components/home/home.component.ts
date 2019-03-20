import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service'
import { DoctorID, DoctorProfileClass, AddressClass } from '../../interfaces/doctor';
import { PatientClass, PatientProfileClass } from '../../interfaces/patient';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _doctorservice : DoctorService, 
    private _patientservice: PatientService) { }

  ngOnInit() {
    //this._doctorservice.getAllDoctorIDs().subscribe(data => console.log(data));
    //this._doctorservice.getDoctorProfileByID("Kapil Bhalotia").subscribe(data=> console.log(data));
    
  }

  AddNewDoctorProfile(){

    this._doctorservice.addnewDoctorProfile( 
      new DoctorProfileClass("Vinit Mahajan","resource:org.example.healthcare.Doctor#Vinit Mahajan","Vinit","Mahajan","vinitmahajan1@gmail.com",9101997,['Doctor of Medicine by research (MD(Res), DM)',
      'Doctor of Philosophy (PhD, DPhil)', 'Master of Clinical Medicine (MCM)',
      'Master of Medical Science (MMSc, MMedSc)', 'Master of Medicine (MM, MMed)',
      'Master of Philosophy (MPhil)', 'Master of Surgery (MS, MSurg, MChir, MCh, ChM, CM)',
      'Master of Science in Medicine or Surgery (MSc)'],"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBshi_KRgxaUnlwmEFklw7Jyox0vqpbcOiqldGpK6qqQ96rHxY",
      new AddressClass("D-6 Room No:38","Vishrambag","Sangli","India","416415"))
    ).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  AddNewDoctorIDs(){
    this._doctorservice.addnewDoctor(new DoctorID("Vinit Mahajan"))
    .subscribe(data => console.log(data), error => console.log(error));
    this._doctorservice.addnewDoctor(new DoctorID("Tejas Varade"))
    .subscribe(data => console.log(data), error => console.log(error));
    this._doctorservice.addnewDoctor(new DoctorID("Sumit Garje"))
    .subscribe(data => console.log(data), error => console.log(error));
    this._doctorservice.addnewDoctor(new DoctorID("Ritesh Harel"))
    .subscribe(data => console.log(data), error => console.log(error));
  }

  AddnewPatientProfile(){
    this._patientservice.AddPatientProfile(new PatientProfileClass(
    "Sundar Pichai","resource:org.example.healthcare.Patient#Sundar Pichai",
    "Sundar","Pichai","sundarpichai@gmail.com",10101997,
    new AddressClass("D-6 Room No:39","Vishrambag","Sangli","India","416415")  
    )).subscribe(data => {
      console.log(data);
    }, error => { console.log(error); })
  }

  AddNewPatientIDs(){
    this._patientservice.AddPatient(new PatientClass("Sundar Pichai",["Vinit Mahajan"],"Male","40"))
    .subscribe(data => {console.log(data);},error => {console.log(error);});
    this._patientservice.AddPatient(new PatientClass("Satya Nadella",["Vinit Mahajan"],"Male","44"))
    .subscribe(data => {console.log(data);},error => {console.log(error);});
    
    this._patientservice.AddPatient(new PatientClass("Elon Musk",["Vinit Mahajan"],"Male","42"))
    .subscribe(data => {console.log(data);},error => {console.log(error);});
    
    this._patientservice.AddPatient(new PatientClass("Narendra Modi",["Vinit Mahajan"],"Male","65"))
    .subscribe(data => {console.log(data);},error => {console.log(error);});
    
  }
}
