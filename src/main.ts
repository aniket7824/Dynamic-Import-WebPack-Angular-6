import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AppModule from './components/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
