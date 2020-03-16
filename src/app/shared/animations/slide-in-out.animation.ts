import { trigger, style, state, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const slideInOut = (animationDurationMs: number): AnimationTriggerMetadata => (
    trigger('slideInOut', [
    state('void', 
        style({ 
            height: 0, 
            paddingTop: 0, 
            paddingBottom: 0 
        })
    ),
    transition('void <=> *', animate(`${ animationDurationMs }ms ease-in-out`)),
    ])
);