# Project Setup

- [x] `ng new dojoWeatherForecast`
- [x] `cd {{NG_PROJECT}}`
- [x] `ng generate component weather-nav`
- [x] `ng generate component weather-seattle`
- [x] `ng generate component weather-sanjose`
- [x] `ng generate component weather-burbank`
- [x] `ng generate component weather-dallas`
- [x] `ng generate component weather-dc`
- [x] `ng generate component weather-chicago`
- [x] `ng generate service http`

---
# AppComponent: Update content

- [x] Update `.../src/app/app.component.html`: Removed default content; Added top-level component (app-weather-nav) element
```HTML
<app-weather-nav></app-weather-nav>
```
---
# WeatherNavComponent: Update content

- [x] Update `.../src/app/weather-nav/weather-nav.component.html`: Added basic content
- [x] Update `.../src/app/weather-nav/weather-nav.component.css`: Added basic content

---
# HttpService: Build-out and Register

- [x] Update `.../src/app/app.module.ts`: Import HttpModule
```typescript
 ...
+import { HttpModule } from '@angular/http';
 ...
 
 @NgModule({
   ...
   imports: [
     ...
+    HttpModule
   ],
   ...
 })
 export class AppModule { }
```

- [x] Update `.../src/app/http.service.ts`: Build-out via delegate to Http
```typescript
 ...
+import { Http } from '@angular/http';
+import 'rxjs/add/operator/map';
+import 'rxjs/add/operator/toPromise';
 
 @Injectable()
 export class HttpService {
 
   constructor(
+    private _http: Http
   )
   {}
 
+  get( url ) {
+    return this._http.get( url )
+      .map( data => data.json() )
+      .toPromise();
+  }
 }
```

- [x] Update `.../src/app/app.module.ts`: Register HttpService
```typescript
 ...
+import { HttpService } from './http.service';
 
 @NgModule({
   ...
-  providers: [],
+  providers: [ HttpService ],
   ...
 })
 export class AppModule { }
```

---
# App{{COMP}}Component: Inject, Connect, and Test HttpService

- [x] Update `.../src/app/weather-{{CITY}/weather-{{CITY}.component.ts`: Inject HttpService
``` typescript
 ...
+import { HttpService } from '../http.service';
 
 ...
 export class WeatherSeattleComponent implements OnInit {
 
   constructor(
+    private _httpService: HttpService
   )
   {}
   ...
 }
```

