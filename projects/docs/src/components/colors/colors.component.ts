import {Component, OnInit} from '@angular/core';
import {colors} from "@majoris-ui/tokens";

@Component({
  selector: 'colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit{
  colors = colors;

  ngOnInit() {
    this.getColors()
  }

  getColors() {
    return Object.entries(colors).map(([key, value]) => ({key, value}))
  }


}
