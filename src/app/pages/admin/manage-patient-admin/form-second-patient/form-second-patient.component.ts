import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../../service/user/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-second-patient',
  templateUrl: './form-second-patient.component.html',
  styleUrls: ['./form-second-patient.component.css']
})
export class FormSecondPatientComponent implements OnInit {

  public username: string | undefined;
  public patientName: string | undefined;
  public patient_mobile: string | undefined;
  public patient_email: string | undefined;
  public patient_address: string | undefined;



  constructor(private patientService: PatientService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  createPatient(): void {
    this.patientService.createPatient(this.username, this.patientName, this.patient_mobile,
      this.patient_email, this.patient_address).subscribe(
      () => {
        // Optionally, you can navigate the user to another page or perform additional actions
        this.router.navigate(['/admin-layout/manage-patient-admin']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
