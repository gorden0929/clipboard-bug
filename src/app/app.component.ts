import { Component } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor(private clipboard: Clipboard) { }

  copyToClipboard(str: string) {
    this.clipboard.copy(str);
  }
}
