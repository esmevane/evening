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
	file.name as "Aptitude",
	kind as "Kind",
	summary as "Summary"
from "rulebooks/evening-core/aptitudes"
where kind != null
sort file.name asc
```
