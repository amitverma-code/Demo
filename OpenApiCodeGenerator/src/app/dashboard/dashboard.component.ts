import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fileToUpload: File = null;
  fileUploadSuccess: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //   // success block
    // }, error => {
    //   console.log(error);
    // });
    this.fileUploadSuccess = true;
  }

  navigateToPropertyViewer(apiId: string) {
    this.router.navigate(['/property-viewer', { apiId: apiId }]);
  }

}
