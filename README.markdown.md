References:
* https://guides.github.com/features/mastering-markdown/
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
* https://daringfireball.net/projects/markdown/basics
* [Typing Extended ASCII Characters on the Mac](http://www.idautomation.com/kb/mac_ascii.html)

NOTES:
1 Replace {{...}} with corresponding text

---

# Text

* Bold
  * `** {{B_TEXT}} **`
* Italic
  * `_ {{I_TEXT}} _`
* Strikethrough
  * `~~ {{ST_TEXT}} ~~`
* Image
  * `! [ {{IMG_ALT}} ]( {{IMG_SRC}} )`
* Link (Anchor)
  * `[ {{A_CONTENT}} ]( {{A_HREF}} )`
* Block Quotes
  * `> {{TEXT}}`
  * `> {{TEXT}}`
* Inline Code
  * \``{{TEXT}}`\`
* Syntax Highlighting
  * \`\`\``{{LANGUAGE:javascript,python,...}}`
  * ...
  * \`\`\`

---

# Structure

* Divider Line
  * `---` (3 or more: \-, \*, \_)
* Headers
  * `# {{H1_TEXT}}`
  * `## {{H2_TEXT}}`
  * `### {{H3_TEXT}}`
* Unordered Lists
  * `* {{ITEM_1}}`
  * `* {{ITEM_2}}`
  * `··* {{ITEM_2a}}`
  * `··* {{ITEM_2b}}`
* Ordered Lists
  * `1 {{ITEM_1}}`
  * `1 {{ITEM_2}}`
  * `··1 {{ITEM_2a}}`
  * `··1 {{ITEM_2b}}`
* Task Lists
  * `- [x] {{TEXT}}`
  * `- [ ] {{TEXT}}`

---

# Tables

```
| {{TH1_TEXT}} | {{TH2_TEXT}} | {{TH3_TEXT}}
| ------------ | :----------: | -----------:
| {{TD11_TEXT}} | {{TD12_TEXT}}
| {{TD21_TEXT}} | {{TD22_TEXT}}
```

NOTES:
1 `-----` => left-aligned
1 `:---:` => center-aligned
1 `----:` => right-aligned

