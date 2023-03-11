import {Component, Input} from '@angular/core';

import { css } from "../../stories/styles";

const $button = css({
  borderRadius: "9999px",
  border: 'none',
  padding: "0 0.600rem 0 0.600rem",
  fontWeight: "bold",
  cursor: 'pointer',
  height: "$md",
  transition: '0.3s ease-in',

  variants: {
    color: {
      primary: {
        background: "$primary",
        color: "$white",
      },
      secondary: {
        background: "$secondary",
        color: "$dark",
      },
      tertiary: {
        background: "$tertiary",
        color: "$dark",
      },
    },
    size: {
      sm: {
        height: "$sm",
      },
      md: {
        height: "$md",
      },
      lg: {
        height: "$lg",
      }
    },
    state: {
      disabled: {
        cursor: 'not-allowed',
        background: "$secondary",
        color: "$tertiary",
      }
    }
  }
})
@Component({
  selector: 'smy-button',
  templateUrl: 'smy-button.component.html',
  styleUrls: ['./smy-button.component.css'],
})
export class SmyButtonComponent {
  @Input() label = 'example';
  @Input() disabled = false;

  public get classes(): string[] {
    let classes = [$button().className]

    if (this.disabled) {
      classes = [...classes, $button({state: "disabled"}).className]
    }

    return classes;
  }
}
