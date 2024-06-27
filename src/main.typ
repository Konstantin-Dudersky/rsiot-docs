#set heading(numbering: "1.1")

#set text(lang: "ru", font: "PT Serif", hyphenate: true)

#show heading.where(level: 1): it => { pagebreak(weak: true); it }
#show heading.where(level: 2): it => { pagebreak(weak: true); it }

#show link: underline

#outline()

#include "1_components/mod.typ"

#include "2_external_services/mod.typ"
