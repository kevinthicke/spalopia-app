import { trigger, transition, animate, keyframes, style } from '@angular/animations';

export const zoomOut = trigger('zoomOut', [
    transition('* => void', [
      animate('500ms ease-out', keyframes([
        style({
          offset: 0,
          opacity: 1
        }),
        style({
          offset: .5,
          transform: 'scale3d(0.3, 0.3, 0.3)'
        }),
        style({
          offset: 1,
          opacity: 0
        })
      ]))
    ])
  ])