---
title: README
---

# MyKnowledgeTrack
Aggregation of the knowledge i've deepen into


Here is the structure of the repo and it's knowledge:
```dataviewjs
let string = "";

for (let group of dv.pages().groupBy(p => p.file.folder)){
    string = String(group.rows.file.folder[0]);
    if (string == "");
    
    else
	 dv.table([string.split("/")[string.split("/").length - 1], "In-Links", "Out-Links", "Words Count", "Modified"],
        group.rows.map(k => [k.file.link, k.file.inlinks, k.file.outlinks, k.file.size, k.file.mtime]))
}
```
