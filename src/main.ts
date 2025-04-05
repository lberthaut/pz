import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const providers = [
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  ...appConfig.providers,
];

bootstrapApplication(AppComponent, {
  providers: providers,
}).catch((err) => console.error(err));
