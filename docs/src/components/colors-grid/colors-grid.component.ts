import { Component } from '@angular/core';
import {getContrast} from "polished";

@Component({
  selector: 'colors-grid',
  templateUrl: './colors-grid.component.html',
  styleUrls: ['./colors-grid.component.css']
})
export class ColorsGridComponent {
  colors = {
    white: '#FFF',
    black: '#000',

    gray100: '#E1E1E6',
    gray200: '#A9A9B2',
    gray400: '#7C7C8A',
    gray500: '#505059',
    gray600: '#323238',
    gray700: '#29292E',
    gray800: '#202024',
    gray900: '#121214',

    ignite300: '#00B37E',
    ignite500: '#00875F',
    ignite700: '#015F43',
    ignite900: '#00291D',
  }

  getContrastingColor(
    color: string,
    backgroundColor: string,
  ): '#000' | '#FFF' {
    return getContrast(color, backgroundColor) < 3.5 ? '#000' : '#FFF'
  }

  retrieveColorsAsArray() {
    return Object.entries(this.colors).map(([key, color]) => ({key, color}));
  }
}
