import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    state('*', style({ opacity: 1 })),
    transition('void <=> *', animate(200))
  ])