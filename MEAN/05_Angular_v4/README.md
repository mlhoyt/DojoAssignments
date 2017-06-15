Installation

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

# Directory Structure

```
{{NG_PROJECT}}/src/app/
├── ...
├── src/
│    ├── app/
│    │    ├── app.component.css
│    │    ├── app.component.html
│    │    ├── app.component.spec.ts
│    │    ├── app.component.ts
│    │    ├── app.module.ts
│    │    ├── {{COMP}}
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

