---
tags:
  - aptitudes
  - tables
  - core
  - srd
updated: 2023-12-29
---
```dataview
table without id
	kind as "Kind",
	rows.file.name as "Aptitude",
	rows.summary as "Summary"
from "rulebooks/evening-core/aptitudes"
where kind != null
sort file.name asc
group by kind
```
