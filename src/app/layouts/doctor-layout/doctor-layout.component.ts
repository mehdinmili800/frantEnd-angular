import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user/user.service";
import {AuthenticationService} from "../../service/user/auth/authentication.service";
import {DoctorService} from "../../service/user/doctor/doctor.service";
import {Doctor} from "../../pages/admin/manage-doctor/manage-doctor.component";



@Component({
  selector: 'app-doctor-layout',
  templateUrl: './doctor-layout.component.html',
  styleUrls: ['./doctor-layout.component.css']
})
export class DoctorLayoutComponent  {


}
