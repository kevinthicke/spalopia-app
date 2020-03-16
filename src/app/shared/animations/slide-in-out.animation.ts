import { trigger, style, state, transition, animate } from '@angular/animations';

export const slideInOut = (animationDurationMs: number) => trigger('slideInOut', [
    state('void', 
        style({ 
            height: 0, 
            paddingTop: 0, 
            paddingBottom: 0 
        })
    ),
    transition('void <=> *', animate(animationDurationMs)),
]);