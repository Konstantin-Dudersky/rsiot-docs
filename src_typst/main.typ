#set heading(numbering: "1.1")

#show heading.where(level: 1): it => { pagebreak(weak: true); it }
#show heading.where(level: 2): it => { pagebreak(weak: true); it }

#outline()

#include "1_components/mod.typ"
