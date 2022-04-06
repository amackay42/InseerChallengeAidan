import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {
  }

  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  social: any;
  userData: any;
  awards: any;
  aboutUs: string;
  workInfo: any;
  education: any;
  skills: any;

  constructor() {
  }

  ngOnInit() {

    this.userData = {
      name: 'Aidan Mackay',
      title: 'Software Engineer',
      address: {
        street: 'Edina',
        state: 'Minnesota'
      },
      description: 'I\'m an India-based software developer who specializes in large-scale distributed systems for the web.\n' +
        // tslint:disable-next-line:max-line-length
      'I\'m a senior software engineer at <a style=\'color: darkturquoise;\' href="https://www.microsoft.com/en-in/msidc/">Microsoft IDC</a> - Azure SDN team.'
    };


    // tslint:disable-next-line:max-line-length

  }

}
