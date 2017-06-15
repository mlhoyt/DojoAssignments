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

