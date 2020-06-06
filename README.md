# RxJS HttpClient Best practices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Do

Use a service in a "smart" component (in this case Home component) and pass the data via the @Input decorator to your presentational component.

Subscribe (and unsub automatically) to the observable using the async-pipe.

