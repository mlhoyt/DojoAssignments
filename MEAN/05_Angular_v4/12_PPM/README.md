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
# FormsModule: Register

- [x] Update `.../src/app/app.module.ts`: Register FormsModule
```typescript
 ...
+import { FormsModule } from '@angular/forms';
 ...
 @NgModule({
   ...
   imports: [
     ...
+    FormsModule
   ],
   ...
 })
 export class AppModule {}
```

---
# PpmCreateComponent: Update TS/HTML/CSS Content

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
# PpmEditComponent: Update TS/HTML/CSS Content

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
# PpmProductsDataService: Create and Register

- [x] `ng generate service ppm-products-data`

- [x] Update `.../src/app/ppm-products-data.service.ts`: Build-out as observable data
```typescript
 import { Injectable } from '@angular/core';
+import { Subject } from 'rxjs/Subject';
+import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 
 @Injectable()
 export class PpmProductsDataService {
+  subject = new BehaviorSubject( null );
 
   constructor() { }
 
+  update( data: Array<any> ) {
+    this.subject.next( data );
+  }
 }
```

- [x] Update `.../src/app/app.module.ts`: Register PpmProductsDataService
```typescript
 ...
+import { PpmProductsDataService } from './ppm-products-data.service';

 @NgModule({
   ...
-  providers: [],
+  providers: [ PpmProductsDataService ],
   ...
 })
 export class AppModule { }
```

---
# PpmNavComponent: Configure as PpmProductsDataService MASTER

- [x] Update `.../src/app/ppm-nav/ppm-nav.component.ts`: Add PpmProductsDataService MASTER info
```typescript
```

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmViewListComponent: Configure as PpmProductsDataService SLAVE

- [x] Update `.../src/app/ppm-view-list/ppm-view-list.component.ts`: Add PpmProductsDataService SLAVE info
```typescript
```

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmCreateComponent: Configure as PpmProductsDataService SLAVE

- [x] Update `.../src/app/ppm-create/ppm-create.component.ts`: Add PpmProductsDataService SLAVE info
```typescript
```

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
# PpmEditComponent: Configure as PpmProductsDataService SLAVE

- [ ] Update `.../src/app/ppm-edit/ppm-edit.component.ts`: Add PpmProductsDataService SLAVE info
```typescript
```

---
# Test
- [ ] Browser: http://localhost:4200

---
# Commit
- [ ] `git add . ../README.md`
- [ ] `git commit -m "..."`

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
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

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
# PpmNavComponent: Update HTML to use "router-outlet" and anchor tag "routerLink"

- [x] Update `.../src/app/ppm-nav/ppm.nav.component.html`: Add "router-outlet" element
```HTML
 ...
+<router-outlet></router-outlet>
 ...
```

- [x] Update `.../src/app/ppm-nav/ppm-nav.component.html`: Add anchor tag "routerLink"
```HTML
 ...
+<a [routerLink]="['/{{URL}}',...]">{{A_CONTENT}}</a>
 ...
```

---
# Test
- [x] Browser: http://localhost:4200

---
# Commit
- [x] `git add . ../README.md`
- [x] `git commit -m "..."`

---
- [x] PpmCreateComponent: Enable redirect to "/products" on creation
- [x] PpmViewListComponent: Enable "Delete" buttons
- [x] PpmViewListComponent: Enable "EDIT" buttons
- [x] RoutingModule: Add "/products/edit/:id" routes
- [x] PpmEditComponent: Enable "Delete" button
- [x] PpmEditComponent: Enable "UPDATE" button
