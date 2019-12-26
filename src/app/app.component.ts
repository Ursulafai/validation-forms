import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'validation-forms';
  isActivatedSignupTab: boolean;

  ngOnInit(): void {
    this.isActivatedSignupTab = true;
  }

  switchTab(isSwitched: boolean): void {
    this.isActivatedSignupTab = isSwitched;
  }
}
