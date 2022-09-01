import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss']
})
export class ViewHomeComponent implements OnInit {

  value = [
    'value1',
    'value2',
    'value3',
    'value4',
    'value5',
  ]

  constructor(
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  copyToClipboard(str: string) {
    console.log('copyToClipboard', str);
    const result = this.clipboard.copy(str);
    console.log('copyToClipboard result', result);
  }

}
