# Project Setup

- [x] `ng new ppm`
- [x] `cd {{NG_PROJECT}}`
- [x] `ng generate component ppm-nav`
- [x] `ng generate component ppm-home`
- [x] `ng generate component ppm-view-list`
- [x] `ng generate component ppm-create`
- [x] `ng generate component ppm-edit`

---
# Test
- [x] `ng serve`
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add`
- [x] `git commit -m "Added ...; initial commit"`

---
# AppComponent: Update content

- [x] Update `.../src/app/app.component.html`: Removed default content; Added top-level component (ppm-nav) element
```HTML
<app-ppm-nav></app-ppm-nav>
```

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmNavComponent: Update content

- [x] Update `.../src/app/ppm-nav/ppm-nav.component.html`: Added basic content
- [x] Update `.../src/app/ppm-nav/ppm-nav.component.css`: Added basic content

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmHomeComponent: Update TS/HTML/CSS Content

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.ts`: Add content
- [x] Update `.../src/app/{{COMP}/{{COMP}.component.html`: Add content
- [x] Update `.../src/app/{{COMP}/{{COMP}.component.css`: Add content

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmViewListComponent: Update TS/HTML/CSS Content

- [x] Update `.../src/app/{{COMP}/{{COMP}.component.ts`: Add content
- [x] Update `.../src/app/{{COMP}/{{COMP}.component.html`: Add content
- [x] Update `.../src/app/{{COMP}/{{COMP}.component.css`: Add content

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmCreateComponent: Update TS/HTML/CSS Content

- [ ] Update `.../src/app/{{COMP}/{{COMP}.component.ts`: Add content
- [ ] Update `.../src/app/{{COMP}/{{COMP}.component.html`: Add content
- [ ] Update `.../src/app/{{COMP}/{{COMP}.component.css`: Add content

---
# RoutingModule: Build-out (basic) and Register

- [ ] Create `.../src/app/routing.module.ts`:
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

- [ ] Update `.../src/app/app.module.ts`: Register RoutingModule
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

- [ ] Update `.../src/app/routing.module.ts`: Add custom routing
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

- [ ] Update `.../src/app/{{COMP}}Component/{{COMP}}.component.html`: Add "router-outlet" element
```HTML
 ...
+<router-outlet></router-outlet>
 ...
```

- [ ] Update `.../src/app/{{COMP}}Component/{{COMP}}.component.html`: Add anchor tag "routerLink"
```HTML
 ...
+<a [routerLink]="['{{URL}}',...]">{{A_CONTENT}}</a>
 ...
```

