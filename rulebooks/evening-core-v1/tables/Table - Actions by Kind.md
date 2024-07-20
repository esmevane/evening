```dataview
table without id
	kind as "Kind",
	rows.file.name as "Aptitude",
	rows.summary as "Summary"
from "db/aptitudes"
where kind != null
sort file.name asc
group by kind
```
