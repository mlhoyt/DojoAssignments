See https://guides.github.com/features/mastering-markdown/

# Text (Replace {{...}} with corresponding text)

* Bold
  * \*\* {{B_TEXT}} \*\*
* Italic
  * \_ {{I_TEXT}} \_
* Strikethrough
  * \~\~ {{ST_TEXT}} \~\~
* Image
  * \! \[ {{IMG_ALT}} \]\( {{IMG_SRC}} \)
* Link (Anchor)
  * \[ {{A_CONTENT}} \]\( {{A_HREF}} \)
* Headers
  * \# {{H1_TEXT}}
  * \#\# {{H2_TEXT}}
  * \#\#\# {{H3_TEXT}}
* Unordered Lists
  * \* {{ITEM_1}}
  * \* {{ITEM_2}}
  *   \* {{ITEM_2a}}
  *   \* {{ITEM_2b}}
* Ordered Lists
  * \1 {{ITEM_1}}
  * \1 {{ITEM_2}}
  *   \1 {{ITEM_2a}}
  *   \1 {{ITEM_2b}}
* Task Lists
  * \- \[x\] {{TEXT}}
  * \- \[ \] {{TEXT}}
* Block Quotes
  * \> {{TEXT}}
  * \> {{TEXT}}
* Inline Code
  * \`{{TEXT}}\`
* Syntax Highlighting
  * \`\`\`{{LANGUAGE:javascript,python,...}}
  * ...
  * \`\`\`

# Tables

```
{{TH1_TEXT}} | {{TH2_TEXT}}
------------ | ------------
{{TD11_TEXT}} | {{TD12_TEXT }}
{{TD21_TEXT}} | {{TD22_TEXT }}
```

