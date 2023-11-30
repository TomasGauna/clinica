import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', 
    [
        transition('inicio => usuarios', [
        query(':enter, :leave', 
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ opacity: 0 }),
            animate('0.5s ease-out',
              style({ opacity: 1 })
            )
          ], { optional: true }),
          query(':leave', [
            style({ opacity: 1 }),
            animate('0.5s ease-out',
              style({ opacity: 0 })
            )
          ], { optional: true }),
        ])
    ]),

    transition('usuarios => inicio', [
        query(':enter, :leave', 
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-out',
              style({ transform: 'translateY(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-out',
              style({ transform: 'translateY(100%)' })
            )
          ]
          , { optional: true }),
        ])
    ]),  

    transition('turnos => solicitar-turnos', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(100%)' })
            )
          ], { optional: true }),
        ])
      ]),

      transition('solicitar-turnos => turnos', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(-100%)' })
            )
          ], { optional: true }),
        ])
    ]),

    transition('turnos => home', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(100%)' })
            )
          ], { optional: true }),
        ])
      ]),
      
      transition('inicio => turnos', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(-100%)' })
            )
          ], { optional: true }),
        ])
    ]),

    transition('turnos => pacientes', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(100%)' })
            )
          ], { optional: true }),
        ])
      ]),
      
      transition('pacientes => turnos', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', height: '100%' }),
          { optional: true }
        ),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(0%)' })
            )
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s .5s ease-in-out',
              style({ transform: 'translateX(-100%)' })
            )
          ], { optional: true }),
        ])
    ]),
    
]);
