import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { AdminService } from '../admin.service';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent {

  selectedFile: File;
  flag: boolean;
  @ViewChild('variable')variable: ElementRef;
  result: String;

  constructor(private adminService: AdminService){
    this.flag = false;
  }

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.flag = false;
  }

  upload(){
    let fd = new FormData();
    fd.append('upload', this.selectedFile, this.selectedFile.name);
    this.adminService.postData(fd)
    .subscribe(
      (res) => {
        this.flag = true;
        this.result = res.message;
        console.log("Uploaded successfully");
        this.variable.nativeElement.value = '';
      }
    )
  }
}