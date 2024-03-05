import { Component } from '@angular/core';
import { MyDateService } from './myService/my-date.service';
import { UserDataService } from './myService/user-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todayDate: any;
  public personData = [
    {
      id: '',
      name: '',
      email: '',
      address: {
        city: '',
        zipcode: '',
      },
      phone: '',
    },
  ];

  constructor(
    private myDate: MyDateService,
    private userData: UserDataService
  ) {}
  ngOnInit() {
    this.todayDate = this.myDate.showTodayDate();
    this.userData.getData().subscribe((data: any) => {
      this.personData = data;
      console.log(this.personData);
    });
  }

  title = 'Welcome to Angular';
  description =
    'Welcome to our 1st bootstrap styled angular project. Start building projects with the most popular javascript framework.';
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  numberOfMonths = this.months.length;

  setTrue() {
    console.log('Now we have set the value to True');
  }
  setFalse() {
    console.log('Now we have set the value to False');
  }

  // // Events Extended
  // alertClass: string = 'alert-success';
  // message: string = 'This is a success message';

  // handleButtonClick(isTrue: boolean) {
  //   if (isTrue) {
  //     this.alertClass = 'alert-success';
  //     this.message = 'This is a success message';
  //   } else {
  //     this.alertClass = 'alert-warning';
  //     this.message = 'This is a warning message';
  //   }
  // }

  isSwitchOn: boolean = false;
  message: string = 'This is a warning message';

  // Function to handle switch toggle
  handleSwitchToggle() {
    if (this.isSwitchOn) {
      this.message = 'This is a success message';
    } else {
      this.message = 'This is a warning message';
    }
  }
  //pipes in angular
  myMessage = 'This is a sub-heading';

  // feature Set
  firstFeature = {
    heading: 'Feature One',
    body: 'Some feature details for the First feature in demo',
    linkText: 'Read more',
    link: 'http://google.com',
  };
  secondFeature = {
    heading: 'Feature Two',
    body: 'Some feature details for the Second feature in demo',
    linkText: 'Read more',
    link: 'http://google.com',
  };
  thirdFeature = {
    heading: 'Feature Three',
    body: 'Some feature details for the Third feature in demo',
    linkText: 'Read more',
    link: 'http://google.com',
  };
  fourthFeature = {
    heading: 'Feature Four',
    body: 'Some feature details for the Fourth feature in demo',
    linkText: 'Read more',
    link: 'http://google.com',
  };
}
