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
# {{COMP}}Component: Inject, Connect, and Test HttpService

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.ts`: Inject HttpService
``` typescript
 ...
+import { HttpService } from '../http.service';
 
 ...
 export class {{COMP}}Component implements OnInit {
 
   constructor(
+    private _httpService: HttpService
   )
   {}
   ...
 }
```

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.ts`: Connect HttpService
```typescript
 ...
 export class WeatherSeattleComponent implements OnInit {
+  data = [];
+  owapi_url = "http://api.openweathermap.org/data/2.5/weather";
+  owapi_uid = "APPID=9e6717fb14947b2948cd7f033dacd57f";
+  owapi_args = "q=seattle";
   ...
   ngOnInit() {
+    this._httpService.get( this.owapi_url + "?" + this.owapi_uid + "&" + this.owapi_args )
+      .then( data => { this.data = data; } )
+      .catch( err => { console.log( "Error: WeatherSeattleComponent: HttpService.get:" + err ); } );
   }
 }
```

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.html`: Test HttpService
```HTML
 ...
+{{ data | json }}
 ...
```

---
# {{COMP}}Component: Update HTML/CSS Content

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.ts`: Add helper method/s

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.html`: Add content

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.css`: Add content

---
# RoutingModule: Build-out (basic) and Register

- [x] Create `.../src/app/routing.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
```

- [x] Update `.../src/app/app.module.ts`: Register RoutingModule
```typescript
 ...
+import { RoutingModule } from './routing.module';
 
 @NgModule({
   ...
   imports: [
     ...
+    RoutingModule
   ],
   ...
 })
 export class AppModule { }
```

---
# RoutingModule: Add custom routing

- [x] Update `.../src/app/routing.module.ts`: Add custom routing
```typescript
 ...
+import { {{COMP}}Component } from './{{COMP}/{{COMP}.component';
 ...
 const routes: Routes = [
+  { path: '', pathMatch: 'full', redirectTo: '{{URL}}' },
+  { path: '{{URL}}', component: {{COMP}}Component },
 ]
 ...
```

---
# {{COMP}}Component: Update HTML to use "router-outlet" and anchor tag "routerLink"

- [x] Update `.../src/app/{{COMP}}Component/{{COMP}}.component.html`: Add "router-outlet" element
```HTML
 ...
+<router-outlet></router-outlet>
 ...
```

- [x] Update `.../src/app/{{COMP}}Component/{{COMP}}.component.html`: Add anchor tag "routerLink"
```HTML
 ...
+<a [routerLink]="['{{URL}}',...]">{{A_CONTENT}}</a>
 ...
```
