Installation
New Project
New Component
New Class
New Service

---

# [Installation]:

```
$ npm install -g @angular/cli
...

$ which ng
/opt/local/bin/ng

$ ng -v
...
@angular/cli: 1.1.1
node: 6.10.1
os: ...
```

---

# New Project:

```
$ ng new {{NG_PROJECT}}
...

$ ls -1
...
{{NG_PROJECT}}/
...

$ cd {{NG_PROJECT}}
```

---

# New Component:

```
$ cd .../{{NG_PROJECT}}
$ ng generate component {{COMP}}
...
./src/app/{{COMP}}.component...
...
```

---

# New Class:

```
$ cd .../{{NG_PROJECT}}
$ ng generate class {{CLASS}}
...
./src/app/{{CLASS}}.ts
...
```

---

# New Service:

```
$ cd .../{{NG_PROJECT}}
$ ng generate service {{COMP}}
...
./src/app/{{SERVICE}}.service...
...
```

---

# Directory Structure

```
{{NG_PROJECT}}/
├── ...
├── src/
│    ├── app/
│    │    ├── app.component.css
│    │    ├── app.component.html
│    │    ├── app.component.spec.ts
│    │    ├── app.component.ts
│    │    ├── app.module.ts
│    │    ├── app-routing.module.ts
│    │    ├── {{COMP}}/
│    │    │   ├── {{COMP}}.component.css
│    │    │   ├── {{COMP}}.component.html
│    │    │   ├── {{COMP}}.component.spec.ts
│    │    │   └── {{COMP}}.component.ts
│    │    ├── {{CLASS}}.ts
│    │    ├── {{SERVICE}}.service.spec.ts
│    │    └── {{SERVICE}}.service.ts
│    ├── ...
│    ├── index.html
│    └── ...
└── ...
```

---

# Routing

Create `app/app-routing.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { {{COMP}}Component } from './{{COMP}}/{{COMP}}.component';
const routes: Routes = [
  // Static URLs
  // { path: '{{URL}}' [, pathMatch: 'full'] , ( component: {{COMP}}Component | redirectTo: '{{URL}}' ) }, ...
  // Parameterized URLs
  // { path: '{{PATH}}/:id', component: {{COMP}}Component } 
    // URL: http://localhost:4200/{{PATH}}/7
    // TS: params.id => '7'
    // HTML: <a routerLink="['/{{PATH}}', {{PATH}}.id]" >{{A_CONTENT}}</a>
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
```

Update `app/app.module.ts`

```typescript
...
import { AppRoutingModule } from './app-routing.module';
...
@NgModule({
  ...
  imports: [
    ...
    AppRoutingModule,
  ],
  ...
})
...
```

Update `app/{{COMP}}/{{COMP}.component.html`

```HTML
...
<router-outlet></router-outlet>
...
<a [routerLink]="[ '/{{URL}}', ... ]">{{A_CONTENT}}</a>
...
```

