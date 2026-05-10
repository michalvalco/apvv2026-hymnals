# Local Resource Inventory — TEPALIT-relevant holdings

**Scope:** Three OneDrive folders catalogued as a combined-but-distinguished inventory:

1. `<OneDrive>\Documents\06 Resources\Dejiny\` (general history)
2. `<OneDrive>\Documents\06 Resources\Dejiny\Domace cirkevne dejiny\` (Slovak church history)
3. `<OneDrive>\Documents\06 Resources\Liturgika\` (liturgy)

**Generated:** 2026-05-10
**Purpose:** Pre-survey meta-catalogue. Avoid duplicating existing holdings when running scholar-survey prompts (Holeton, Škoviera, Kowalska, Csepregi). Source notes follow `Sources/_Source_Template.md` discipline; this inventory is a flat catalogue.

**Note on paths.** Absolute paths use `<OneDrive>` as a placeholder for the user's OneDrive root (preserves the original task brief's "use absolute paths" requirement without leaking machine-specific user details). On the author's machine this resolves to `%OneDrive%\Documents\...`. Repo-relative references (e.g., `Sources/_Source_Template.md`) use forward slashes for GitHub navigability. Within the OneDrive subtree, native Windows backslashes are retained since these are filesystem paths, not repo paths.
**Method:** Filename triage primary; content sampling reserved for ambiguous filenames and primary-source archives. Title pages of primary-source archives sampled where confirmed.

---

## File counts

### Dejiny root (excluding `Domace cirkevne dejiny`)
| Extension | Count |
|---|---|
| `.pdf` | 224 |
| `.doc` | 68 |
| `.docx` | 37 |
| `.mobi` / `.epub` | 6 |
| Other | 11 |
| **Total** | **346** files (incl. subfolder contents) |

### Dejiny\Domace cirkevne dejiny
| Extension | Count |
|---|---|
| `.pdf` | 785 |
| `.JPG` / `.png` / `.jpeg` | 3585 |
| `.doc` / `.docx` | 65 |
| `.txt` | 134 |
| Other | 4 |
| **Total** | **~4573** files (most are page-image scans of primary sources) |

### Liturgika
| Extension | Count |
|---|---|
| `.pdf` | 179 |
| `.JPG` | 151 |
| `.docx` | 5 |
| `.doc` | 2 |
| `.djvu` | 1 |
| **Total** | **338** files (most JPG/PDF are Agenda Česká page scans) |

### Inventoryable items (after triage and primary-source bundling)

| Source folder | In-scope | Out-of-scope (briefly noted) | Inspection-pending |
|---|---|---|---|
| Dejiny root | ~24 | ~60 | 0 |
| Dejiny\Reformacia | ~46 | 0 | 1 |
| Dejiny\Dejiny Dogiem | ~12 | ~17 | 1 |
| Dejiny\Vseobecne cirkevne dejiny | ~8 | ~31 | 0 |
| Dejiny\Cyril a Method | 0 | 5 | 0 |
| Dejiny\Domace cirkevne dejiny (root) | ~52 | ~21 | 0 |
| Dejiny\Domace cirkevne dejiny (subfolders) | ~14 (incl. 11 Stöckel primary works) | ~5 | 1 (Žitňan archives) |
| Liturgika | ~50 (incl. Agenda Česká as 1 entry) | 0 | 0 |
| **Total in-scope** | **~206** | | |

(Primary-source archive subfolders treated as single entries: Agenda Česká 1581, Abrahamides Postilla 1601, Hebler Brevis Confessio, Skrovina x2, plus 11 individual Stöckel works in `Diela Stoeckela\`.)

---

## Caveats

- **Agenda Česká 1581:** ~229 page-image files (`P7290006.JPG` through `P7290158.JPG` plus per-page PDFs) plus consolidated `Agenda Ceska 1581.pdf` and three extracts. Treated as ONE inventory entry. Pages not enumerated. Title sampling failed (PDF text extraction tool unavailable in session); title taken from folder name and corroborated by user description.
- **Stöckel primary-work subfolders** (`Diela Stoeckela\`): 11 distinct Stöckel primary works held as page-image archives. Each catalogued as its own primary-source entry. Total ~2800 files across all 11 works.
- **Žitňan Archiv sept 05:** Multi-level archive of 20th-c. ECAV "Generálna rada / Generálne presbyterium / Generálny konvent" minutes. Out of TEPALIT chronological scope (16–18c). Listed as out-of-scope; flagged in inspection gaps for confirmation.
- **Scanned-without-OCR materials:** The Stöckel `Diela Stoeckela\X` JPG-only archives, the Skrovina archives, Kuzmány PNG scans, Kronika Sv. Martinskej JPG scans, and Abrahamides Postilla scans have no text layer. OCR pipeline (cf. `stockel_annotation` repo) applies primarily to Stöckel Postilla 1596.
- **Non-primary topical tags conservatively applied:** when filename was uninformative, no tag was guessed.
- **Diacritic encoding:** Slovak/Czech filenames retain native diacritics where the filesystem preserved them; otherwise rendered without (e.g., "Skoviera" not "Škoviera" in some entries) — this reflects actual filenames, not loss of information.

---

## Section A — Index by author (in-scope, alphabetical)

Format: **Author — Title.** Path. *Tags.* §§. One-line signature.

### A

- **Albini — Reformácia a vzdelanosť.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Albini - Reformacia a vzdelanost.pdf`. *reformation-general, slovak-lutheran.* §3, §5. Reformation and education in Slovakia.
- **Andrej Hajduk — Leonard Stöckel: Život a dielo, 2010** (PDF + DOCX). `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Andrej Hajduk - Leonard Stockel, Zivot a dielo, 2010.pdf` (and .docx). *slovak-lutheran.* §3, §5. Biographical monograph on Stöckel.
- **Andrej Hajduk — Leonard Stöckel** (Cirkevné Listy article). `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Andrej Hajduk - Leonard Stockel, Cirkevne Listy.pdf`. *slovak-lutheran.* §3.
- **Andrej Hajduk — Leonard Stoeckel: Die Zeitung der Zeit (1980).** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Andrej Hajduk - Leonard Stoeckel - Die Zeitung der Zeit 1980.pdf`. *slovak-lutheran.* §3.
- **Andrej Hajduk — Melanchton a Stöckel** (Cirkevné Listy, 2 parts). Same folder, two PDFs. *slovak-lutheran, confessional-documents.* §3, §4 (Melanchthonian filiation).
- **Andrej Hajduk — Modlitba Leonarda Stöckela** (Posol). Same folder. *slovak-lutheran, liturgy.* §4.1.
- **Andrej Hajduk — Philipp Melanchton und Leonhard Stöckel.** Same folder. *slovak-lutheran, confessional-documents.* §3.
- **Andrej Hajduk — Leonard Stöckel: Výklad Otčenáša, preklad** (translation). `…\Diela Stoeckela - slovensky\…`. *primary-source (translation), slovak-lutheran, liturgy.* §4.1.
- **Anton Srholec — Katolícka viera na Slovensku.** `Dejiny\Domace cirkevne dejiny\Anton Srholec - Katolicka viera na Slovensku.pdf`. *reformation-general.* §2 (background).
- **Andrew Spicer — Lutheran Churches in Early Modern Europe.** `Dejiny\Andrew Spicer - Lutheran_Churches_in_Early_Modern_Europe.pdf`. *liturgy, slovak-lutheran (broader European frame), reformation-general.* §3, §4.1, §4.2.
- **August Skodáček — Lutherans in Slovakia.** `Dejiny\Domace cirkevne dejiny\August Skodacek - Lutherans in Slovakia\August Skodacek - Lutherans in Slovakia.pdf`. *slovak-lutheran.* §2, §3.

### B

- **Bagin — Vonkajšie dejiny I, II.** `Dejiny\Vseobecne cirkevne dejiny\Bagin - Vonkajsie dejiny I.pdf` (& II). *reformation-general.* §2 (background).
- **Bárnabás Guitman — Hit, hatalom, humanizmus, 2017.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Barnabas Guitman - Hit hatalom humanizmus, 2017.pdf`. *slovak-lutheran.* §3 (Stöckel reception).
- **Bárnabás Guitman — Politiae sunt opera Dei: Stöckel's doctrine of Government, 2019.** Same folder. *slovak-lutheran, soteriology (Two Kingdoms).* §3, §4.3.
- **Bazlík — Luther a liturgia.** `Liturgika\Bazlik-Luther a liturgia.pdf`. *liturgy.* §4.1, §5. **(Priority scholar.)**
- **Bede — History of the Church.** `Dejiny\Vseobecne cirkevne dejiny\Bede - History of the Church.pdf`. *reformation-general.* §2 (medieval background).
- **Bennett Witt — Leonard Stöckel: docta pietas in the service of Lutheran reform** (2008 dissertation). `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Bennett Witt - Leonard Stockel docta pietas in the service of Lutheran reform - Dissertation 2008.pdf`. *slovak-lutheran.* §3, §4 (across loci).
- **Berndt Hamm et al. — The Reformation of Faith in the Context of Late Medieval Theology and Piety.** `Dejiny\Reformacia\Berndt Hamm, et al. - The Reformation of Faith in the Context of Late Medieval Theology and Piety.pdf`. *reformation-general, soteriology.* §2, §4.3.
- **Bonnie Noble — Lucas Cranach the Elder: Art and Devotion of the German Reformation, 2009.** `Dejiny\Reformacia\…`. *reformation-general.* §2 (visual culture).

### C

- **Carlos M. N. Eire — War against the Idols: The Reformation worship from Erasmus to Calvin.** `Liturgika\Carlos_M._N._Eire_War_against_the_Idols_The_Reformation worship from Erasmus tu Calvin.djvu`. *liturgy.* §4.1, §4.2. **(Priority scholar.)**
- **Carter Lindberg — The European Reformations.** `Dejiny\Reformacia\Carter Lindberg - The European Reformations.pdf`. *reformation-general.* §2.
- **Csepregi, Zoltán — Das königliche Ungarn im Jahrhundert vor der Toleranz.** `Dejiny\Domace cirkevne dejiny\Csepregi - Das Konigliche Ungarn im Jahrhundert vor der Toleranz.pdf`. *slovak-lutheran, confessionalisation.* §2, §3, §4.4. **(Priority scholar.)**
- **Csepregi, Zoltán — Die Anfänge der Reformation im Königreich Ungarn bis 1548.** Same folder. *slovak-lutheran.* §2, §3. **(Priority scholar.)**
- **Csepregi, Zoltán — Die Confessio Pentapolitana: Fragen nach Autorschaft und Datierung.** Same folder. *slovak-lutheran, confessional-documents.* §3, §4 (Pentapolitana). **(Priority scholar — directly load-bearing.)**
- **Csepregi, Zoltán — Historia vzniku a prijatia vyznaní viery.** Same folder. *confessional-documents, slovak-lutheran.* §3, §4. **(Priority scholar.)**
- **Csepregi, Zoltán — Náboženské ustanovenia snemu 1548.** Same folder. *slovak-lutheran, confessional-documents.* §3.
- **Csepregi, Zoltán — The Evolution of the Language of the Reformation in Hungary.** Same folder. *slovak-lutheran, reformation-general.* §3.
- **Csepregi, Zoltán — Thurzovci a počiatky reformácie.** Same folder. *slovak-lutheran.* §3.
- **Csepregi, Zoltán (= "Zoltán Czepregy") — Lutheran pastors in the Kingdom of Hungary.** `Dejiny\Domace cirkevne dejiny\Zoltan Czepregy - Lutheran_pastors_in_the_Kingdom_of_Hungary.pdf`. *slovak-lutheran.* §3.
- **Csepregi notes** (4 .docx note files synthesising Csepregi 2008/2009/2011/2012). `Dejiny\Domace cirkevne dejiny\_Markdown subory poznamky\…`. Internal notes; useful for chapter §3.

### D

- **Daniel Skoviera — see "Skoviera, Daniel" below** (cross-reference; ~10 items).
- **Daniel, David P. — Highlights of the Lutheran Reformation in Slovakia, 1973.** `Dejiny\Domace cirkevne dejiny\David Daniel - Highlights of the Lutheran Reformation in Slovakia, 1973.docx`. *slovak-lutheran.* §3. **(Priority scholar.)**
- **Daniel, David P. — K problému a interpretácii konfesionalizácie a protireformácie na SK.** `Dejiny\Domace cirkevne dejiny\David Daniel - K problemu a interpretacii konfesionalizacie a protireformacie na SK.pdf`. *confessionalisation, slovak-lutheran.* §3, §4.4. **(Priority scholar.)**
- **Daniel notes** (2 .docx + 1 .md). `…\_Markdown subory poznamky\Daniel 1999 K problemu…` Internal notes.
- **Daniel Vesely — Všeobecné cirkevné dejiny Novovek, 1500–2000.** `Dejiny\Vseobecne cirkevne dejiny\Daniel Vesely - Vseobecne cirkevne dejiny Novovek, 1500-2000.pdf`. *reformation-general.* §2.
- **David Bernard — A History of Christian Doctrine.** `Dejiny\Dejiny Dogiem\David Bernard - A History of Christian Doctrine.pdf`. *soteriology, reformation-general.* §2, §4.3.
- **David Steinmetz — Luther in Context, 2nd ed., 2002.** `Dejiny\Reformacia\David Steinmetz - Luther in Context, 2nd ed., 2002.pdf`. *reformation-general, soteriology.* §3, §4.3.
- **David Collins — Reforming Saints, Saints' lives and their authors in Germany, 1470–1530.** `Dejiny\David Collins - Reforming Saints, Saints' lives and their authors in Germany, 1470-1530.pdf`. *reformation-general.* §2.
- **Demmel — Panslávi v kaštieli.** `Dejiny\Domace cirkevne dejiny\Demmel - Panslávi v kaštieli.pdf`. *out-of-scope (19c)* — listed but skip.
- **Diarmaid MacCulloch — The Reformation, 2004.** `Dejiny\Reformacia\Diarmaid MacCulloch - The Reformation, 2004.pdf`. *reformation-general.* §2.
- **Donald Miller — Myth of Isolated Worship** (Patheos 2014). `Liturgika\…`. *liturgy.* §5 (modern reception, optional).

### E

- **Emily Dieter — Martin Luther The Worship Leader (Master's thesis).** `Liturgika\Emily Dieter - Martin Luther The Worship Leader - Processes and Methods of Liturgical Reform Through Reformation - Master's…`. *liturgy.* §4.1.
- **Enoch Wan — Quincentennial Celebration: paradigm shift from Luther then to now, LMM 5-2017.** `Dejiny\Reformacia\…`. *reformation-general.* §2.
- **Erika Rummel — The Confessionalization of Humanism in Reformation Germany, 2000.** `Dejiny\Reformacia\…`. *confessionalisation.* §3, §4.4.
- **Eva Kowalská — Acta Historica Neosoliensa, 2015** (on Hungarian Lutheran emigrants). `Dejiny\Acta Historica Neosoliensa, 2015 - Kowalska o imigrantoch v Uhorsku.pdf`. *slovak-lutheran.* §3. **(Priority scholar.)**
- **Eva Kowalská — Dievčenské vzdelávanie v Uhorsku.** `Dejiny\Eva Kowalska - Dievcenske vzdelavanie v Uhorsku.pdf`. *slovak-lutheran (education).* §3 (limited).
- **Eva Kowalská — Kultúra ako faktor integrácie a dezintegrácie, 18 a 19 storočia.** `Dejiny\Eva Kowalska - Kultura ako faktor integracie a dezintegracie…`. *slovak-lutheran, confessionalisation.* §3.
- **Eva Kowalská — Evanjelické a.v. spoločenstvo v 18. storočí, 2001.** `Dejiny\Domace cirkevne dejiny\Eva Kowalska - Evanjelicke a.v. spolocenstvo v 18. storoci 2001.pdf`. *slovak-lutheran.* §3, §5 (post-Zsitva reception). **(Priority scholar — directly load-bearing for 18c.)**
- **Eva Kowalská — Na ďalekých cestách v cudzích krajinách: Konfesionálny exil z Uhorska v 17. st.** `Dejiny\Domace cirkevne dejiny\Eva Kowalska - Na dalekych cestach v cudzich krajinach…`. *slovak-lutheran, confessionalisation.* §3.
- **Eva Kowalská & László Vörös — Collective Identities and their Borders, A Slovak Perspective.** `Dejiny\Domace cirkevne dejiny\Eva Kowalska a Laszlo Voros - Collective Identities and their Borders…`. *slovak-lutheran (background).* §3.

### F

- **Frank Senn — Reformation Liturgies, ORER 2015.** `Liturgika\Frank Senn - Reformation Liturgies, ORER 2015.pdf`. *liturgy.* §4.1, §5. **(Priority scholar.)**
- **Frank Senn — Sacraments and Social History: Postmodern Practice.** `Liturgika\Frank Senn - Sacraments and Social History - Postmodern Practice.pdf`. *liturgy, eucharist.* §4.1.
- **Frantisek Hrušovský — Obrázkové slovenské dejiny, 1944.** `Dejiny\Frantisek Hrusovsky - Obrazkove slovenske dejiny, 1944.pdf`. *slovak-lutheran (background).* §2 (limited).

### G

- **Gabriela Žibritová et al. — O reformácii, Knižnica 2017.03.** `Dejiny\Reformacia\Gabriela Zibritova et al. - O reformacii, Kniznica_2017_03.pdf`. *slovak-lutheran, reformation-general.* §2, §3.
- **Geoffrey Wainwright & Karen Westerfield (eds.) — The Oxford History of Christian Worship.** `Liturgika\…`. *liturgy.* §4.1.
- **Georg B. Michels — The Habsburg Empire under Siege: Ottoman Expansion and Hungarian Revolt, 2021.** `Dejiny\Domace cirkevne dejiny\…`. *slovak-lutheran (political background).* §2.
- **Graham Hughes — Worship as Meaning, A Liturgical Theology for Late Modernity.** `Liturgika\…`. *liturgy.* §4.1 (modern theory).
- **Gunther Gassmann — Naša celosvetová luteránska rodina, BS 2003.** `Dejiny\Gunther Gassmann - Nasa celosvetova luteranska rodina, bs 2003.pdf`. *reformation-general.* §2 (limited).

### H

- **Hans Hillerbrand — The Division of Christendom: Christianity in the 16th Century.** `Dejiny\Reformacia\Hans Hillerbrand - The Division of Christendom…`. *reformation-general.* §2.
- **Helmar Junghans — Luther on the Reform of Worship.** `Liturgika\Helmar Junghans - Luther on the Reform of Worship.pdf`. *liturgy.* §4.1, §5. **(Priority scholar.)**

### I

- **Ian Christopher Levy et al. — A Companion to the Eucharist in the Middle Ages, Brill 2011.** `Dejiny\Dejiny Dogiem\Ian Christopher Levy, et al. - A Companion to the Eucharist in the Middle Ages-Brill (2011).pdf`. *eucharist.* §4.1 (medieval background).
- **Imrich Michnovič — Prehľad dejín bardejovského školstva.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\…`. *slovak-lutheran.* §3.
- **Imrich Michnovič — Učiteľ celého Uhorska, Historická Revue IV, 3.** Same folder. *slovak-lutheran.* §3.
- **Irena Backus — Reformation Readings of the Apocalypse, Oxford.** `Dejiny\Reformacia\Irena Backus - Reformation Readings of the Apocalypse, Oxford.pdf`. *reformation-general, scripture-tradition.* §4.4.

### J

- **James T. Dennison (ed.) — Reformed Confessions of the 16th and 17th centuries, Vol. 2.** `Dejiny\Reformacia\…`. *confessional-documents.* §3, §4.
- **Jan Amos Komenský — Informatórium školy materskej, SPN 1991.** `Dejiny\Domace cirkevne dejiny\Jan Amos Komensky - Informatorium skoly materskej, SPN 1991.pdf`. *brethren, czech-reformation, primary-source.* §5 (Brethren reception, late).
- **Jan Hus — Dilematická výzva k obráteniu (Czech Catholic perspective).** `Dejiny\Domace cirkevne dejiny\Jan Hus - Dilematicka vyzva k obraceni - pohlad ceskeho katolika.doc`. *czech-reformation, utraquist.* §3.
- **Jan Kvačala — Dejiny Reformácie na Slovensku.** `Dejiny\Domace cirkevne dejiny\Jan Kvacala - Dejiny Reformacie na Slovensku.pdf`. *slovak-lutheran.* §2, §3 (foundational).
- **Jan Ligus — Jan Hus rektor (článok 2017).** `Dejiny\Jan Ligus - Jan Hus rektor, clanok 2017.docx`. *czech-reformation, utraquist.* §3.
- **John H. Leith — Creeds of the Churches: A Reader in Christian Doctrine.** `Dejiny\Dejiny Dogiem\…`. *confessional-documents.* §3, §4.
- **John N. D. Kelly — Early Christian Doctrines.** `Dejiny\Dejiny Dogiem\…`. *reformation-general (patristic background).* §2.

### K

- **Kat Hill — Baptism, Brotherhood, and Belief in Reformation Germany, 1525–1585.** `Dejiny\Reformacia\Kat Hill - Baptism, Brotherhood, and Belief in Reformation Germany, 1525-1585.pdf`. *reformation-general, ecclesiology.* §4.2.
- **Karel Schwarz — Von Leonhard Stöckel bis Ruprecht Steinacker, 2014.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Karl W. Schwarz - Von Leonhard Stockel bis Ruprecht Steinacker, 2014.pdf`. *slovak-lutheran.* §3.
- **Karol Mednánsky — Leonard Stöckel: zakladateľská osobnosť hudobnej kultúry.** Same folder. *slovak-lutheran, hymnology.* §5 (Stöckel and music — directly relevant).

### L

- **Larry W. Hurtado — At the Origins of Christian Worship.** `Liturgika\…`. *liturgy.* §2 (background).
- **Lee Palmer Wandel — A Companion to the Eucharist in the Reformation, 2013.** `Dejiny\Dejiny Dogiem\Lee Palmer Wandel - A Companion to the Eucharist in the Reformation (2013).pdf`. *eucharist, reformation-general.* §4.1 — **highly load-bearing for sacramental locus.**
- **Lubomír Ďurovič — Ako Bardejovský katechizmus modifikoval Luthera.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Zdroje ku Bardejovskemu katechizmu\Lubomir Durovic - Ako Bardejovský katechizmus modifikoval Luthera.pdf`. *slovak-lutheran, confessional-documents.* §4.4 (Lutheranisation pattern). **Highly load-bearing for §5.**
- **Luka Ilić — Flacius in Regensburg, 2025; Vestigia Flaciana.** `Dejiny\Reformacia\Luka Ilic - Flacius in Regensburg 2025.pdf`; `Luka Ilic - Vestigia_Flaciana-1-22 (4).pdf`. *reformation-general, confessional-documents (Formula of Concord prehistory).* §3.

### M

- **Maria Nováčka (ed.) — Slovenská cesta od kráľovstva ducha ku kráľovstvu človeka.** `Dejiny\Domace cirkevne dejiny\Maria Novacka (ed.) - Slovenska cesta…`. *out-of-scope (19c framework).* §2 (background).
- **Mark Granquist — A New History of Lutherans in America.** `Dejiny\Mark Granquist - A new HIstory of Lutherans in America.pdf`. *out-of-scope (American Lutheran).*
- **Martin Hetényi — Poznámky k úlohe cyrilo-metodského dedičstva v christianizácii Kyjevskej Rusi.** `Dejiny\Domace cirkevne dejiny\…`. *out-of-scope (medieval Slavic missions).*
- **Martin Šefranko — Traja bratia v duchovnej službe (Šenšel, Čobrda, Derer).** `Dejiny\Domace cirkevne dejiny\…`. *out-of-scope (20c ECAV).*
- **Martin Votruba — The Lutheran Church in Slovakia: Genealogy.** `Dejiny\Domace cirkevne dejiny\Martin Votruba - The Lutheran Church in Slovakia - Genealogy.pdf`. *slovak-lutheran.* §3 (limited).
- **Matthias Hebler — Brevis Confessio, 1561, 1563** (2 PDF editions). `Dejiny\Domace cirkevne dejiny\Matthias Hebler - Brevis Confessio\Brevis Confessio, 1561, 1563.pdf` (& 1563b). *primary-source, confessional-documents, slovak-lutheran.* §3, §4.
- **Miloslava Bodnárová — Reformácia vo východoslovenských kráľovských mestách.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Miloslava Bodnarova - Reformacia vo vychodoslovenskych kralovskych mestach.doc`. *slovak-lutheran.* §3.
- **Miloš Klátik — Cestou viery, 2013.** `Dejiny\Domace cirkevne dejiny\Milos Klatik - Cestou viery, 2013.pdf`. *slovak-lutheran (PI's own book).* §2.

### N

- **Norman Housley — Religious Warfare in Europe, 1400–1536, Oxford 2002.** `Dejiny\Norman Housley - Religious Warfare in Europe, 1400-1536, Oxford 2002.pdf`. *reformation-general, czech-reformation, utraquist.* §2 (Hussite Wars context).
- **Norman Tanner — The Church in Council: Conciliar Movements, Religious Practice and the Papacy from Nicea to Vatican II.** `Dejiny\…`. *ecclesiology.* §4.2.

### O

- **Oxford Illustrated History of the Reformation (Peter Marshall ed.), 2015.** `Dejiny\Reformacia\…` (also duplicate copy in `Vseobecne cirkevne dejiny\`). *reformation-general.* §2.

### P

- **Patrick Collinson — Review of MacCulloch's Reformation, 2004.** `Dejiny\Reformacia\…`. *reformation-general.* §2.
- **Peter Konya (ed.) — Leonard Stöckel a reformácia v strednej Európe, 2011** (PDF + cover). `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\…`. *slovak-lutheran.* §3.
- **Peter Konya & Z. Csepregi — Tri Lutherské vyznania viery z Uhorska, 2013.** `Dejiny\Domace cirkevne dejiny\Peter Konya, Z. Csepregi - Tri Lutherske vyznania viery z Uhorska, 2013.pdf`. *primary-source (modern critical edition), confessional-documents, slovak-lutheran.* §3, §4 — **highly load-bearing.**
- **Peter Volek — Dejiny liturgickej úcty Sv. Jozefa na Slovensku, 2016.** `Liturgika\Peter Volek - Dejiny liturgickej ucty Sv. Jozefa na Slovensku, 2016.pdf`. *liturgy.* §2 (Catholic comparator, limited).

### R

- **Reformácia v Strednej Európe I, II — zborník 2018.** `Dejiny\Domace cirkevne dejiny\Reformacia v Strednej Europe I, zbornik 2018.pdf` (& II). *slovak-lutheran, reformation-general, confessionalisation.* §3.
- **Riemer Faber — Philipp Melanchthon on Reformed Education.** `Dejiny\Reformacia\…`. *reformation-general.* §3.
- **Robert Kolb — Lutheran Ecclesiastical Culture, 1550–1675, 2008.** `Dejiny\Reformacia\Robert Kolb - Lutheran Ecclesiastical Culture, 1550-1675, 2008.pdf`. *ecclesiology, confessionalisation.* §3, §4.2, §4.4.
- **Robert Kolb — Martin Luther, Confessor of the Faith, 2009.** `Dejiny\Reformacia\…`. *reformation-general, confessional-documents.* §3.
- **Roland Bainton — Martin Luther (slovenský preklad).** `Dejiny\Reformacia\Roland Bainton - Martin Luther, slovensky.pdf`. *reformation-general.* §2.
- **Roland Bainton — The Church of Our Fathers.** `Dejiny\Vseobecne cirkevne dejiny\Roland Bainton - The Church of Our Fathers.pdf`. *reformation-general.* §2.

### S

- **Skoviera, Daniel — K liturgii Panny Márie Loretánskej od Erazma.** `Dejiny\Daniel Skoviera - K liturgii Panny Marie Loretanskej od Erazma .pdf`. *liturgy (Erasmus filiation).* §4.1. **(Priority scholar.)**
- **Skoviera, Daniel — Súbor vydaných prác do roku 2016.** `Dejiny\Daniel Skoviera - Subor vydanych prac do roku 2016.pdf`. *bibliography of priority scholar — useful as acquisition guide.* All §§.
- **Skoviera, Daniel — Erasmus von Rotterdam und Leonard Stöckel, Graeco-Latina 2013.** `Dejiny\Reformacia\Daniel Skoviera - Erazmus von Rotterdam und Leonard Stockel, Zw.pdf` (also `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Daniel Skoviera - Erasmus von Rotterdam und Leonard Stockel, Graeco-Latina 2013.pdf`). *slovak-lutheran, reformation-general.* §3.
- **Skoviera, Daniel — Básnik Valentín Ecchius a mesto Bardejov, Knižnica 2003.** `Dejiny\Domace cirkevne dejiny\Daniel Skoviera - Basnik Valentin Ecchius a mesto Bardejov, Kniznica 2003.pdf`. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Ecchius, Stöckel, Rakovský, 1998.** `Dejiny\Domace cirkevne dejiny\Daniel Skoviera - Ecchius, Stoeckel, Rakovsky, 1998.pdf` (and duplicate in Stoeckel folder). *slovak-lutheran.* §3.
- **Skoviera, Daniel — Humanistické podnety v školstve na Slovensku, 1988.** Stoeckel folder. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Humanistický rektor Bardejovskej školy, Leonard Stöckel.** Stoeckel folder. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Leonard Stoeckel: Jednotná škola 1975.** Stoeckel folder. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Pietas Docta: profil Humanistu Leonarda Stöckela.** Stoeckel folder (.docx). *slovak-lutheran.* §3.
- **Skoviera, Daniel — Stöckel a pietas docta, SAS 39, 2010.** Stoeckel folder. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Synovia Františka Révaia a Leonard Stöckel.** Stoeckel folder. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Dva významné dodatky do zbierky listov Leonarda Stöckela** (Diela Stoeckela - slovensky\). *slovak-lutheran, primary-source (companion).* §3.
- **Skoviera, Daniel — Epistulae Leonardi Stoeckel** (zborník Graeco-Latina). Same folder. *primary-source (critical edition), slovak-lutheran.* §3, §4.
- **Skoviera, Daniel — Listy Leonarda Stöckela, 1976.** Same folder. *primary-source, slovak-lutheran.* §3.
- **Skoviera, Daniel — Poznámky ku všeobecným zásadám: Predhovor, 1986.** Same folder. *slovak-lutheran.* §3.
- **Skoviera, Daniel — Výroky slávnych mužov, 1976.** Same folder (translation of Stöckel's Apophthegmata). *primary-source (translation), slovak-lutheran.* §3.
- **Skoviera, Daniel — Preludium Bardejovského katechizmu a Steckelov reformačný humanizmus.** `…\Zdroje ku Bardejovskemu katechizmu\…`. *slovak-lutheran, confessional-documents.* §4.4.
- **Confessio Pentapolitana 1549, slovenský preklad Skoviera.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Confessio Pentapolitana, 1549 - Slovensky preklad Skoviera.docx`. *primary-source (translation), confessional-documents, slovak-lutheran.* §3, §4.
- **Sarah Hinlicky Wilson — A Guide to Pentecostal Movements for Lutherans.** `Dejiny\…`. *out-of-scope (modern).*
- **Scott Dixon — The Reformation in Germany.** `Dejiny\Reformacia\…`. *reformation-general.* §2.
- **Scott Hendrix — Recultivating the Vineyard.** `Dejiny\Reformacia\Scott Hendrix - Recultivating the Vineyard.pdf`. *reformation-general.* §2, §3.
- **Stanislav Pieták et al. — Dejiny evanjelíkov na Tešínsku od reformace do tolerance.** `Dejiny\Reformacia\Stanislav Pietak et al. - Dejiny evangeliku na Tesinsku od reformace do tolerance.pdf`. *czech-reformation, slovak-lutheran (regional).* §3, §5.
- **Steven Ozment — Mysticism and Dissent: Religious Ideology and Social Protest in the 16th century, 1973.** `Dejiny\Reformacia\…`. *reformation-general.* §2.
- **Steven Ozment — The Reformation in the Cities, Switz/Germany.** `Dejiny\Reformacia\…`. *reformation-general.* §2.
- **Štepán Soltesz — Dejiny krestanske cirkve, Kalich 1990.** `Dejiny\Vseobecne cirkevne dejiny\Stepan Soltesz - Dejiny krestanske cirkve, Kalich 1990.pdf`. *czech-reformation (Kalich = Czech Brethren reception?).* §2, §3.

### T

- **Theodor Klauser — A Short History of the Western Liturgy, 2nd ed.** `Liturgika\Theodor Klauser - A Short History of the Western Liturgy, 2nd ed\…`. *liturgy.* §2 (background).
- **Theodor Pressel — David Chytraeus.** `Dejiny\Reformacia\Theodor Pressel - David_Chytraeus.pdf`. *confessional-documents, reformation-general.* §3.
- **Theodor Pressel — Justus Jonas.** Same folder. *reformation-general.* §3.
- **Theodor Pressel — Martin Chemnitz nach gleichzeitigen Quellen.** Same folder. *confessional-documents, reformation-general.* §3.
- **Theodor Pressel — Paulus Speratus.** Same folder. *reformation-general, hymnology.* §3, §5.
- **Thomas A. Fudge — Jan Hus: Religious Reform and Social Revolution in Bohemia, 2010.** `Dejiny\Thomas A. Fudge - Jan Hus - Religious Reform and Social Revolution in Bohemia (2010).pdf`. *czech-reformation, utraquist.* §2, §3 — **highly load-bearing.**
- **Tomáš G. Masaryk — Jan Hus, naše obrození a naše reformace, 1896.** `Dejiny\Tomas G. Masaryk - Jan Hus, nase obrozeni a nase reformace, 1896.pdf`. *czech-reformation, utraquist (reception).* §3.
- **Tony Lane — Dejiny Křesťanského Myšlení** (2 PDFs incl. "kvalitne"). `Dejiny\Dejiny Dogiem\…`. *reformation-general (survey).* §2.

### V

- **Václav Flajšhans — M. Jan Hus, Praha 1915.** `Dejiny\Vaclav Flajshans - M. Jan Hus, Praha 1915.pdf`. *czech-reformation, utraquist.* §3.
- **Valčo, Katarína — Luther and the Reform of the Worship Service** (.docx). `Liturgika\Katarina Valcova - Luther and the Reform of the Worship Service.docx`. *liturgy.* §4.1.
- **Valčo, Katarína — SB ECAV na Slovensku v ich konfesijnom a kultúrnom kontexte** (final, .doc + .pdf). `Liturgika\Valcova - SB ECAV…`. *slovak-lutheran, hymnology, confessional-documents.* §3, §5 — **highly load-bearing for §5.**
- **Valčo, Michal — Dogmatická pozícia BK** (.docx). `…\Zdroje ku Bardejovskemu katechizmu\…`. *Michal's own draft work; not citable as external source but informative for §4.4.*
- **Vasil Gluchman — Reformation Humanist Stockel and Ethics of Erasmus, JORH 2015.** Stoeckel folder. *slovak-lutheran, soteriology.* §4.3.
- **Vilmos Vajta — Luther on Worship: An Interpretation, 1956 / 2004** (.docx). `Liturgika\Vilmos Vajta, Luther on Worship An Interpretation 1956 a 2004.docx`. *liturgy.* §4.1, §5. **(Priority scholar — foundational.)**
- **Vernon Kleinig — Lutheran Liturgies from Martin Luther to Wilhelm Löhe.** `Liturgika\Vernon Kleinig - Lutheran Liturgies from Martin Luther to Wilhelm Lohe.pdf`. *liturgy.* §4.1, §5. **(Priority scholar.)**
- **Volker Stolle — Luthers Texts on Mission: The Church Comes from all Nations.** `Dejiny\Reformacia\…`. *reformation-general.* §2 (limited).

### Z

- **Zdeněk David — Realism, Tolerance and Liberalism in the Czech National Awakening.** `Dejiny\Zdenek David - Realism, Tolerance and Liberalism in the Czech National Awakening\…`. *czech-reformation (reception, 19c).* §3 (limited; Utraquist legacy reception).
- **Zuzana Lopatková — Cirkevné dejiny stredovekého Slovenska, 2013 GKTF.** `Dejiny\Domace cirkevne dejiny\Zuzana Lopatkova - cirkevne_dejiny_stredovekeho_slovenska 2013.pdf`. *slovak-lutheran (medieval background).* §2.

---

## Section B — Primary sources

This is the high-value section for §4 and §5 drafting. Items are listed by source/author with file path and chapter relevance.

### Brethren / Utraquist

- **Agenda Česká 1581** (Jednota bratrská). `Liturgika\Agenda ceska z roku 1581\` — single entry; ~229 page images (`P7290006.JPG`–`P7290158.JPG`) + per-page PDFs + consolidated `Agenda Ceska 1581.pdf` + 3 extracts (`00 / 01 / 02 Pages from Agenda Ceska 1581.pdf`). *primary-source, liturgy, brethren.* §4.1, §4.2 — **load-bearing for Brethren liturgical theology.** Title-page sampling: scanned-only material; OCR pending. Author/edition confirmed by user description; verify via inspection of `00 Pages from Agenda Ceska 1581.pdf` if title-page metadata is needed.
- **Abrahamides — Postilla Kázání od léta 1601, sig. 240 BN 1.** `Dejiny\Domace cirkevne dejiny\Abrahamides - Postilla Kázanj od léta 1601, sig. 240 BN 1\` — 360 JPG page scans (001.JPG ff.). *primary-source, slovak-lutheran (with Brethren-Czech liturgical-linguistic register), liturgy.* §3, §4.1, §5 — **directly load-bearing for §5 (post-CS Lutheran homiletic in Czech literary register).** Cross-reference: `Kiss - Abrahamides.doc` in Stöckel folder. Scanned, OCR pending.

### Slovak Lutheran (Stöckel and contemporaries)

The `Diela Stoeckela` subfolder holds 11 distinct primary works. Each is a separate primary-source entry.

- **Leonard Stöckel — Apophthegmata Illustrium Virorum, 1570.** `…\Diela Stoeckela\Apophthegmata Illvstrivm Virorvm, 1570\` — 339 page images. *primary-source, slovak-lutheran.* §3 (humanist context). Companion: Skoviera 1976 translation "Výroky slávnych mužov."
- **Leonard Stöckel — Catechesis Stockeli, 1556** (Bardejovský katechizmus). `…\Diela Stoeckela\Catechesis Stockeli, 1556\` — 22 files. *primary-source, slovak-lutheran, confessional-documents.* §4 (across loci), §4.4 — **highly load-bearing.** Companions: Bardejovský Katechizmus finálna maketa, Skoviera "Preludium," Ďurovič "Ako BK modifikoval Luthera," Valčo Dogmatická pozícia BK (all in `Zdroje ku Bardejovskemu katechizmu\`).
- **Leonard Stöckel — Epistolae.** `…\Diela Stoeckela\Epistolae\` — 3 files. *primary-source, slovak-lutheran.* §3. Companions: Skoviera Listy 1976, Epistulae critical edition, Stöckel-Hebler letter (Studia Bibliographica Posoniensia 2006).
- **Leonard Stöckel — Formulae Tractandarum, 1572.** `…\Diela Stoeckela\Formulae Tractandarum, 1572\` — 532 page images. *primary-source, slovak-lutheran.* §3 (rhetoric/homiletics).
- **Leonard Stöckel — Historia von Susanna, 1559** (drama). `…\Diela Stoeckela\Historia von Susanna, 1559\` — 73 page images. *primary-source, slovak-lutheran.* §3 (Reformation drama, limited but contextual).
- **Leonard Stöckel — Leges Scholae Bartphensi.** `…\Diela Stoeckela\Leges Scholae Bartphensi\` — 12 files. *primary-source, slovak-lutheran, ecclesiology (school discipline).* §3.
- **Leonard Stöckel — Loci Communes Melanchtoni a Annotationes, 1561.** `…\Diela Stoeckela\Loci Communes Melanchtoni a Annotationes, 1561\` — 4 files. *primary-source, slovak-lutheran, confessional-documents.* §3, §4 — **highly load-bearing for Stöckel's Melanchthonian dogmatic frame.** *Note: this is Stöckel's annotations on Melanchthon's Loci Communes; the corpus_processor pipeline annotates this work.*
- **Leonard Stöckel — Meditatio passionis Christi, 1572.** `…\Diela Stoeckela\Meditatio passionis Christi, 1572\` — 586 page images. *primary-source, slovak-lutheran, soteriology, liturgy (passion meditation).* §4.1, §4.3 — **load-bearing.**
- **Leonard Stöckel — Memorabilis et notatu digna Relatio Historica.** `…\Diela Stoeckela\Memorabilis et notatu digna Relatio Historica\` — 3 files. *primary-source, slovak-lutheran.* §3.
- **Leonard Stöckel — Postilla, 1596** (posthumous edition). `…\Diela Stoeckela\Postilla, 1596\` — 1257 files (largest archive). *primary-source, slovak-lutheran, liturgy (preaching).* §3, §4 (across loci) — **load-bearing for confessional theology in Slovak Lutheran preaching.** *Note: this is the Postilla being annotated in `stockel_annotation` corpus pipeline.*
- **Leonard Stöckel — Tractatus cuius titulus, 1558.** `…\Diela Stoeckela\Tractatus cuius titulus, 1558\` — 4 files. *primary-source, slovak-lutheran.* §3.
- **Leonard Stöckel — Arithmetica.** `…\Diela Stoeckela\Leonard Stockel - Arithmetica.pdf`. *primary-source, slovak-lutheran (educational).* §3 (limited).
- **Leonard Stöckel — De Musica.** `…\Diela Stoeckela\Leonard Stockel - De Musica.pdf`. *primary-source, slovak-lutheran, hymnology.* §5 — **load-bearing for Stöckel's musical theology** (cf. Mednánsky article in same folder).
- **Leonard Stöckel — Musica Latitia.** `…\Diela Stoeckela\Leonard Stockel - Musica Latitia.pdf`. *primary-source, slovak-lutheran, hymnology.* §5.
- **Leonard Stöckel — O Cirkvi** (Slovak translation, 2 versions). `…\Diela Stoeckela - slovensky\Leonard Stoeckel - O Cirkvi.pdf` (& b). *primary-source (translation), slovak-lutheran, ecclesiology.* §4.2 — **load-bearing for Stöckel's ecclesiology.**

### Other Slovak Lutheran primary sources

- **Confessio Pentapolitana 1549** (Slovak translation by Skoviera). `…\Leonard Stoeckel\Confessio Pentapolitana, 1549 - Slovensky preklad Skoviera.docx`. *primary-source (translation), confessional-documents, slovak-lutheran.* §3, §4 — **directly load-bearing.**
- **Matthias Hebler — Brevis Confessio, 1561, 1563.** `Dejiny\Domace cirkevne dejiny\Matthias Hebler - Brevis Confessio\` — 2 PDFs. *primary-source, confessional-documents, slovak-lutheran.* §3, §4 (Transylvanian Lutheran self-positioning vis-à-vis Reformed). Cross-reference: `Kiss - Abrahamides.doc` mentions Abrahamides; Stöckel-Hebler letter in `Studia Bibliographica Posoniensia 2006.pdf`.
- **Augsburské vyznanie — Symbolické knihy.** `Dejiny\Domace cirkevne dejiny\Leonard Stoeckel\Augsburske vyznanie - Symbolicke knihy.pdf`. *primary-source (Slovak edition), confessional-documents.* §3, §4 — load-bearing.
- **Malý katechizmus — Symbolické knihy ECAV.** Same folder. *primary-source (Slovak ed.), confessional-documents.* §4.
- **Der kleine Katechismus 1529** (242–245). Same folder. *primary-source, confessional-documents.* §4.4 — Luther's Small Catechism, early edition extract.
- **Der kleine Katechismus 1531** (346–402). Same folder. *primary-source, confessional-documents.* §4.4.
- **Kleine Katchismus 1529 — Walch.** Same folder. *primary-source.* §4.4.
- **Tri vyznania viery 16. st.** (.doc, edited). `Dejiny\Domace cirkevne dejiny\Tri vyznania viery 16 st - upravene.doc`. *confessional-documents, primary-source (compilation), slovak-lutheran.* §3, §4.
- **Lani's Catechism — Miklovič preklad obrany Žilinskej synody od Eliáša Lániho.** `Dejiny\Domace cirkevne dejiny\Miklovic - Preklad obrany Zilinskej synody od Eliasa Laniho.doc`. *primary-source (translation), confessional-documents.* §3.
- **Kovacka — Laniho katechizmus, Posol.** `Dejiny\Domace cirkevne dejiny\Kovacka - Laniho katechizmus - Posol.pdf`. *slovak-lutheran, confessional-documents.* §4.4. (Article on, not the catechism itself.)
- **Confutatio AV** (Brnický preklad — Latin text + Slovak translation, .docx + PDF). `Dejiny\Reformacia\Confutatio AV - Latinsky text, Brnicky.docx`; `…Odpoved na AV preklad Michal Brnicky.docx`; `Michal Brnicky - Konfutacio - Odpoved na AV.pdf`. *primary-source (Catholic counter-document to AV) + Slovak translation.* §3, §4.
- **Formula svornosti** (Klug, Stahlke prekladová verzia). `Dejiny\Reformacia\Formula svornosti - Klug, Stahlke.doc`; `Formulators of Concord - Andrae, Selnecker, Chytraeus.doc`; `Formulators of concord or discord.doc`; `Klug, Stahlke - Getting into FC - preklad.doc`; `Formulators of Concord - Betka.doc` (Domace cirkevne dejiny). *primary-source (translation), confessional-documents.* §3, §4.

### Lutheran liturgical primary sources

- **Luther — Formula Missae** (1523). `Liturgika\luther formula missae.pdf`. *primary-source, liturgy, lutheran.* §4.1, §5 — **directly load-bearing.**
- **Luther — Deutsche Messe** (1526). `Liturgika\luther deutsche messe.pdf`. *primary-source, liturgy, lutheran.* §4.1, §5 — **directly load-bearing.**
- **Luther's Liturgical Writings — General Introduction** (web page extract). `Liturgika\Luthers Liturgical Writings - General introduction - web page.pdf`. *liturgy.* §4.1.
- **Martin Luther's Liturgical Reforms — Wordpress.** `Liturgika\Martin Luthers Liturgical Reforms - Wordpress.com.pdf`. *liturgy (popular synthesis).* §4.1.

### Reformation reader

- **Denis Janz (ed.) — Reformation Reader: Primary Texts with Introductions** (PDF). `Dejiny\Reformacia\Reformation reader\Denis Janz, ed. - Reformation reader - Primary texts with Introductions.pdf`. *primary-source anthology, reformation-general.* §3, §4.
- **Denis Janz (ed.) — Reformation Reader: Additional Primary Readings.** Same folder. *primary-source anthology.* §3, §4.

### Czech literary / Brethren primary

- **Biblia Sacra (Bible Kralická), 1863 reprint of original.** `Dejiny\Domace cirkevne dejiny\Biblia Sacra - To jest Biblj Swata dle puwodniho wydani Kralickeho 1863 - Praha, Josef Ruzicka.pdf`. *primary-source, czech-reformation, brethren, scripture-tradition.* §4.4, §5 — **load-bearing for Brethren biblical text in Slovak Lutheran reception (Cithara).**
- **Jan Amos Komenský — Informatórium školy materskej, SPN 1991.** `Dejiny\Domace cirkevne dejiny\Jan Amos Komensky - Informatorium skoly materskej, SPN 1991.pdf`. *primary-source (modern critical reprint), czech-reformation, brethren.* §5 (Brethren reception).
- **Comenius — Orbis Sensualium Pictus** (Hoole translation, Latin/English). `Dejiny\John. Amos Comenii - Orbis Sensualium Pictus, Translated by Charles Hoole - Latin and English.pdf`. *primary-source, czech-reformation.* §5.

### Anglican / Catholic / Eastern reference (comparative liturgical)

- **The Book of Common Prayer with Psalter** (Anglican). `Liturgika\…`. *primary-source (Anglican), liturgy.* §2 (comparative reference).
- **The Divine Liturgy of St. John Chrysostom — Greek and English.** `Liturgika\…`. *primary-source (Eastern), liturgy.* §2 (comparative reference).
- **Allan Bouley (ed.) — Catholic Rites Today: Abridged Texts for Students.** `Liturgika\Allan Bouley ed - Catholic Rites Today - Abridged Texts for Students\Allan Bouley ed - Catholic Rites Today.pdf`. *primary-source extracts (Catholic), liturgy.* §2 (comparative reference).

---

## Section C — Cross-reference: Topic tags

### `eucharist`
- Lee Palmer Wandel (2013), Ian Christopher Levy (2011), Frank Senn — Sacraments and Social History.

### `ecclesiology`
- Kat Hill, Robert Kolb (Lutheran Ecclesiastical Culture), Norman Tanner, Stöckel "O Cirkvi," Stöckel "Leges Scholae Bartphensi."

### `soteriology`
- David Bernard, Berndt Hamm, David Steinmetz, Stöckel "Meditatio passionis Christi 1572," Bárnabás Guitman 2019, Vasil Gluchman.

### `scripture-tradition`
- Irena Backus, Biblia Kralická, Bardejovský katechizmus (cross-tag).

### `slovak-lutheran`
- All Stöckel materials (entire `Leonard Stoeckel` folder + `Diela Stoeckela`); Csepregi (8 items); Eva Kowalská (5+ items); David Daniel (2); Skoviera (10+); Konya volumes; Kvačala; Pieták; Pentapolitana; Hebler; Šaman; Bodnárová; Mednánsky; Schwarz; Witt; Hajduk x6; Albini; Konya/Csepregi 2013; Reformácia v Strednej Európe I+II; Augsburské vyznanie; Malý katechizmus; Tri vyznania viery; Brnický Confutatio; Lani; Klátik 2013; Skodáček; Komensky reception (limited); Studia Bibliographica Posoniensia 2006; Karol Mednánsky; Skoviera "Pietas Docta"; Karol Stöckel; Levocske knihtlace.

### `czech-reformation` / `brethren` / `utraquist`
- Thomas Fudge (Hus), Vaclav Flajshans (Hus), Tomáš Masaryk (Hus), Jan Ligus (Hus), Norman Housley (Hussite Wars context), Pieták (Tešín), Komensky (3 items), Biblia Kralická, Agenda Česká 1581 (brethren, primary), Zdeněk David (reception), Stepan Soltesz (Kalich), Štítný/Hus reception within Brethren tradition.

### `hymnology`
- Stöckel — De Musica; Stöckel — Musica Latitia; Karol Mednánsky on Stöckel's musical foundation; Theodor Pressel — Paulus Speratus (hymn writer); Valčová — SB ECAV (Spevník Evanjelickej cirkvi a.v.).

### `liturgy`
- Entire Liturgika folder (~52 items); Agenda Česká 1581; Luther Formula Missae; Luther Deutsche Messe; AGENDA ECAV; Bazlík; Vajta; Junghans; Kleinig; Senn (2); Eire; Geoffrey Wainwright; Stringer; Gerhards/Leonhard; Spicer (Lutheran Churches); Volek; Bouley; Klauser; Stöckel "Meditatio passionis"; Stöckel — Výklad Otčenáša (Hajduk transl.); Skoviera — K liturgii Panny Márie Loretánskej.

### `confessional-documents`
- Augsburské vyznanie; Malý katechizmus; Confessio Pentapolitana 1549 (Skoviera); Hebler Brevis Confessio 1561/1563; Konya/Csepregi Tri Lutherské vyznania 2013; Tri vyznania viery 16. st.; Bardejovský katechizmus 1556 + Skoviera "Preludium" + Ďurovič "Ako BK modifikoval Luthera" + Valčo "Dogmatická pozícia BK"; Formula svornosti — Klug/Stahlke; Formulators of Concord (3+); Pressel Chemnitz/Chytraeus/Jonas/Speratus; Confutatio AV (Brnický); Theodor Pressel; Robert Kolb (2); Luther Kleine Katechismus 1529/1531/Walch.

### `confessionalisation`
- Csepregi (Konigliche Ungarn; Confessio Pentapolitana; Anfänge), David Daniel (K problému konfesionalizácie), Eva Kowalská (Na ďalekých cestách; Kultúra ako faktor), Robert Kolb (Lutheran Ecclesiastical Culture), Erika Rummel (Confessionalization of Humanism), Reformácia v Strednej Európe I+II.

### `reformation-general`
- All Reformacia-folder items (~46); MacCulloch; Hillerbrand; Lindberg; Steinmetz; Marshall (Oxford); Spicer; Hamm et al.; Hendrix; Dixon; Ozment (2); Bainton; Rummel; Backus; Kolb (2); Pressel (4); Faber; Skoviera-Erasmus-Stöckel; Steinmetz Luther in Context.

### `pietism`
- (No clearly tagged items in this inventory pass; likely items in `Sources/` or in Reformacia background literature — not flagged here.)

### `primary-source`
- See Section B.

---

## Section D — Cross-reference: Chapter §

### §1 (Introduction — TEPALIT context, methodology)
- (No primary inventory items map directly. Methodological framework is in `CLAUDE.md` and `Project_Overview.md`.)

### §2 (Confessional Context — historical overview)
- Reformation surveys: MacCulloch, Lindberg, Marshall (Oxford), Hillerbrand, Spicer (Lutheran Churches in Early Modern Europe), Bainton (slovenský; Church of Our Fathers), Dixon, Hamm et al.
- Slovak/Hungarian: Kvačala, Daniel (Highlights), Veselý (Novovek), Bagin, Kowalská (Collective Identities), Lopatková (medieval background), Habsburg under Siege (Michels).
- Czech reformation context: Fudge (Hus), Housley, Masaryk (Hus), Flajšhans (Hus).
- Liturgical comparative: Klauser, Wainwright/Westerfield, Hurtado, Bouley.

### §3 (Dogmatic Profiles)
- **Lutheran:** Robert Kolb (2); Theodor Pressel x4; Steinmetz; Hendrix; Faber; Konya Stöckel zborník; Csepregi (all 8); Hajduk on Stöckel x6; Witt dissertation; Skoviera on Stöckel x10; Bárnabás Guitman x2; Konya/Csepregi 2013; Schwarz; Bodnárová; Pentapolitana 1549; Hebler Brevis Confessio; Pressel-Chemnitz, Chytraeus, Jonas; Augsburské vyznanie; Daniel (K problému); Reformácia v Strednej Europe I+II.
- **Brethren / Utraquist:** Fudge (Hus); Masaryk (Hus); Flajšhans (Hus); Ligus (Hus); Pieták (Tešín); Soltesz (Kalich); David (Realism); Komensky materials.
- **Confessionalisation paradigm:** Rummel; Daniel; Kowalská (5); Csepregi; Kolb (Lutheran Ecclesiastical Culture).

### §4 (Comparative Analysis — by locus)

**§4.1 Eucharist / Sacraments / Liturgy:**
- Wandel (Companion to Eucharist Reformation); Levy (Companion Eucharist Middle Ages); Senn (Reformation Liturgies; Sacraments and Social History); Eire (War against Idols); Junghans (Luther reform of worship); Vajta (Luther on Worship); Kleinig (Lutheran Liturgies); Bazlík (Luther a liturgia); Spicer (Lutheran Churches); Luther — Formula Missae; Luther — Deutsche Messe; AGENDA ECAV; Stöckel — Meditatio passionis; Hajduk — Modlitba Stöckela; Stöckel — Výklad Otčenáša; Agenda Česká 1581; Hurtado; Stringer; Gerhards/Leonhard; Wainwright/Westerfield; Skoviera — K liturgii Panny Márie Loretánskej; Valčová — Luther and the Reform of Worship Service; Emily Dieter MA; Bouley.

**§4.2 Ecclesiology / Ministry:**
- Stöckel — O Cirkvi; Stöckel — Leges Scholae Bartphensi; Robert Kolb — Lutheran Ecclesiastical Culture; Norman Tanner; Kat Hill; Spicer; Agenda Česká 1581 (Brethren ecclesiology in praxi).

**§4.3 Soteriology / Ethics:**
- David Bernard (History of Christian Doctrine); Berndt Hamm; Steinmetz (Luther in Context); Stöckel — Meditatio passionis; Bárnabás Guitman 2019 (Stöckel Doctrine of Government); Gluchman 2015.

**§4.4 Scripture and Tradition:**
- Backus (Reformation Readings of Apocalypse); Biblia Kralická (1863 reprint); Stöckel — Loci Communes Melanchtoni a Annotationes 1561; Bardejovský katechizmus 1556 + Ďurovič "Ako BK modifikoval Luthera" + Skoviera "Preludium"; Valčo — Dogmatická pozícia BK; Luther — Kleine Katechismus 1529/1531; Pressel — Chytraeus/Chemnitz; Klug/Stahlke FC translations; Konya/Csepregi 2013.

### §5 (Transfer and Reception — Cithara Sanctorum, Lutheranisation)
- **Directly load-bearing:**
  - Valčová — SB ECAV na Slovensku v ich konfesijnom a kultúrnom kontexte (final).
  - Ďurovič — Ako Bardejovský katechizmus modifikoval Luthera.
  - Stöckel — De Musica; Musica Latitia.
  - Mednánsky — Leonard Stöckel: zakladateľská osobnosť hudobnej kultúry.
  - Pressel — Paulus Speratus (hymn-author biography).
  - Abrahamides — Postilla 1601 (Lutheran preaching in Czech literary register).
  - Stöckel — Postilla 1596 (Lutheran preaching corpus).
  - Biblia Kralická 1863 reprint (text source for hymnody).
  - Eva Kowalská — Evanjelické a.v. spoločenstvo v 18. storočí 2001.
  - Pieták — Dejiny evanjelíkov na Tešínsku od reformace do tolerance.
- **Supporting:**
  - Junghans, Kleinig, Senn, Vajta (liturgical-comparative for "Lutheranisation diff" methodology).
  - Komensky materials (Brethren reception).

---

## Section E — Priority-scholar holdings (key for upcoming survey prompts)

This is the section that should most directly inform Holeton, Škoviera, Kowalska, Csepregi survey prompts — these scholars are already substantially represented on disk; survey prompts should focus on what is NOT held, not duplicate the below.

### Holeton (David R.)
- **Held: nothing identified locally** — survey prompt has clean field.
- *Acquisition priority remains high; no inventoryable holdings detected.*

### Škoviera, Daniel
- **Held: ~17 items.** Encyclopedic — see Section A "Skoviera" entry.
- Items span: Stöckel biography, Stöckel ethics/Erasmus reception, Bardejovský katechizmus prelude, Pentapolitana 1549 translation, Stöckel correspondence (Listy 1976; Epistulae critical edition; Dva významné dodatky), Stöckel translations (Výroky slávnych mužov 1976; Predhovor 1986), educational humanism (Humanistické podnety 1988), Erasmus's liturgy of Loreto, plus collected bibliography to 2016.
- *Survey prompt should focus on:* (a) any post-2016 Škoviera publications, (b) any Škoviera materials on Brethren or Utraquist sources (current holdings are heavily Lutheran/humanist).

### Krmíčková, Helena
- **Held: nothing identified locally** — survey prompt has clean field.

### Daniel, David P.
- **Held: 2 items + 2 derivative notes.** "Highlights of the Lutheran Reformation in Slovakia (1973)" and "K problému a interpretácii konfesionalizácie a protireformácie na SK." Plus 2 .docx note files synthesising these.
- *Survey prompt should focus on:* (a) Daniel's full bibliography (cf. `_Bibliografia diel a citovanych diel Davida Daniela.docx` in Vseobecne cirkevne dejiny — internal bibliography), (b) any Daniel materials on Brethren reception in Slovakia.

### Kowalská, Eva
- **Held: 5 items + 1 co-authored.** Exile in 17c (Na ďalekých cestách), 18c ECAV community (2001), girls' education in Hungary, culture as integration/disintegration factor, Hungarian emigrants in Acta Historica Neosoliensa 2015, and Collective Identities (with Vörös).
- *Survey prompt should focus on:* (a) Kowalská on hymnody/liturgy specifically (current holdings are primarily institutional/cultural), (b) Kowalská's edited volumes and proceedings.

### Csepregi, Zoltán
- **Held: 8+ items including notes.** Königliche Ungarn (centuries before Toleration); Anfänge der Reformation 1548; Confessio Pentapolitana 1549 (authorship + dating); Náboženské ustanovenia 1548; Evolution of Reformation language in Hungary; Thurzovci a počiatky reformácie; Lutheran pastors in the Kingdom of Hungary (under transliteration "Czepregy"); Konya/Csepregi 2013 — Tri Lutherské vyznania viery z Uhorska. Plus 4 internal note .docx files.
- *Survey prompt should focus on:* (a) Csepregi's Hungarian-language monographs (Reformáció kezdetei, Magyarországi reformáció, etc.), (b) Csepregi on hymnody/liturgical praxis specifically.

### Crews, C. Daniel (Moravian)
- **Held: nothing identified locally** — survey prompt has clean field.

### Hroboň, Bohdan
- **Held: nothing identified locally** — survey prompt has clean field.

### Sekelská, Adriana
- **Held: nothing identified locally in catalogued folders.** (Sekelská is a TEPALIT collaborator; her work may be in `Sources/` already, in Cithara Sanctorum critical edition materials, or in grant admin — outside this inventory's scope.)

### Vajta, Vilmos
- **Held: 1 item.** "Luther on Worship: An Interpretation 1956 a 2004" (.docx, likely re-set typescript or condensed version of the 1958 monograph).
- *Survey prompt should focus on:* (a) confirming whether the .docx is the full monograph or excerpts, (b) Vajta's later writings on Lutheran liturgy.

### Žurek, Jiří
- **Held: nothing identified locally** — survey prompt has clean field.

### Chalupský, Aleš
- **Held: nothing identified locally.**

### Patapios (Heliopoulos / Patapios of Cleveland)
- **Held: nothing identified locally.**

### de Vooght, Paul
- **Held: nothing identified locally.**

### Jakoubek of Stříbro
- **Held: no primary edition or scholarly study identified locally.** Hus-related materials present (Fudge, Masaryk, Flajshans) but not Jakoubek-specific.

### Hus, Jan
- **Held: 4 secondary studies.** Fudge (2010, primary monograph); Masaryk (1896); Flajšhans (1915); Ligus (2017 article).
- **No primary edition of Hus's writings (e.g., De ecclesia, Postilla) identified locally.**
- *Survey prompt should focus on:* (a) De ecclesia critical edition acquisition, (b) Hus Czech-language sermons / postilla.

### Matěj of Janov
- **Held: nothing identified locally.**

### Junghans, Helmar
- **Held: 1 item.** "Luther on the Reform of Worship."
- *Survey prompt should focus on:* (a) Junghans's other Luther studies, (b) Junghans on confessionalisation.

### Kleinig, Vernon (& others Kleinig family — John W., Peter)
- **Held: 1 item by Vernon Kleinig.** "Lutheran Liturgies from Martin Luther to Wilhelm Löhe."
- *Acquisition priority for John W. Kleinig — Old Testament theology and worship.*

### Senn, Frank C.
- **Held: 2 items.** "Reformation Liturgies" (ORER 2015) and "Sacraments and Social History."
- *Survey prompt should focus on:* (a) Senn's Christian Liturgy: Catholic and Evangelical (1997), (b) Senn's volumes on Lutheran Worship.

### Eire, Carlos M. N.
- **Held: 1 item.** "War against the Idols" (.djvu).
- *Survey prompt should focus on:* (a) Eire's Reformations: The Early Modern World (2016), (b) Eire on Catholic-Reformed devotional practice.

### Bazlík
- **Held: 1 item.** "Luther a liturgia."
- *Survey prompt should focus on:* (a) full Bazlík bibliography, (b) any Bazlík materials on hymnody.

---

## Section F — Out-of-scope (briefly noted, will not re-process)

### Dejiny root
- Adolf Hitler — Mein Kampf (1939) — out-of-scope (20c political).
- Ch. Tyerman — Crusades — medieval crusades.
- Daniel Gurnák — Dejepisný atlas — atlas, general history.
- David Blaikie / Diana Ginn — The Legal Guide for Religious Institutions — modern law.
- Erasmus — Colloquies (2 vols), Praise of Folly, Manual of Christian Knight — Erasmus generally, not directly TEPALIT (though Skoviera's work on Erasmus-Stöckel is in-scope).
- Frantisek Hrušovsky — Obrázkové slovenské dejiny 1944 — general national history.
- G. R. Evans — A Brief History of Heresy — broad heresiology.
- Geroge Kovtun — Comenius bibliography — bibliographic ref, low priority.
- Global Protestantism in 2017–2050 — modern.
- Gunther Gassmann — History of Christianity in 20c — modern.
- H. G. Wells — A Short History of the World — popular survey.
- Hans Jonas — The Gnostic Religion — antiquity.
- How We Got Here, World History, Yuval Harari — popular history surveys.
- James MacCaffrey — Hist. of Catholic Church Renaissance to French Revolution — covers period but Catholic-perspective survey.
- John Boardman — Oxford History Classical World — antiquity.
- Justo Gonzalez — Christianity in Latin America — out of regional scope.
- Konstantinove listy 2015 — Cyril-Methodius scholarship; tangential.
- Mark Granquist — New History of Lutherans in America.
- Mark Noll — America's God; Matthew Bowman — Primitivism in America; Justo Gonzalez (LatAm); Sylvester Johnson (African American religion); Paul Harvey (American South); Rodney Stark (multiple); Sarah Hinlicky Wilson (Pentecostal Movements); Vincent Shen (Nestorianism in China) — all geographically out of scope.
- Nicholas of Lyra — Postilla 01 Genesis to Job — medieval scriptural exegesis; tangential reference.
- Norman Tanner — kept in-scope for ecclesiology.
- Orlando Figes — Crimean War; Yuval Harari — Brief History; Hitler — out.
- Philip Jenkins (3 items) — Lost History of Christianity, Jesus Wars, New Anti-Catholicism — global / patristic / modern.
- Peter Gazík — Samuel Štefan Osuský — modern.
- Pavel Hanes — pptx on history pedagogy.
- René Guénon — Crisis of Modern World — modern.
- Tomáš Akvinský — O zákonech 2003 — Aquinas, medieval.
- USA History; Jushua Mark — Heresies of Middle Ages.
- World History Atlas; Vincent Shen.

### Dejiny\Vseobecne cirkevne dejiny
- Most general church-history surveys (Cynthia White, Cambridge History v8 + v9, Roland Bainton — Church of Our Fathers (kept above, dual-use), Bagin, Wolfram Kinzig — Early Christian Creeds 2024, James North, Justo González (multiple), Stepan Soltesz, Sheridan Gilley, Hugh McLeod, McClymond review, Diarmaid MacCulloch HoC notes, Bede, Riley-Smith Crusades, Paul Johnson — Dejiny krestanstvi (epub/mobi reprint), Lamin Sanneh (Whose Religion), Shelley Survey notes, Apostolski otcovia projekt, Peter Gazík, Peter Borza, Timothy Jones, Dana Robert, Healing the Past, The Papacy since 1500, David Bentley Hart) — survey reference, kept on shelf, not catalogued individually.
- 2 in-scope items kept above: Veselý (1500–2000 covers period) and Marshall Oxford Reformation 2015 (duplicate).

### Dejiny\Cyril a Method
- Klátik (ed.) Cyril a Metod 2012; Hnilica Sv. Cyril a Method; Kovačka Konštantínov Proglas (2 articles); Vasil kázeň. *All Cyril-Methodius topical, 19–20c reception focus, chronologically out of scope for TEPALIT.*

### Dejiny\Domace cirkevne dejiny — out-of-scope items
- Cervocova — Cirkev pocas komunizmu (link); Demmel Panslávi v kaštieli; Dušan Škvarna Príbeh slovenskej identity; ECAV v protifašistickom odboji; Slovenský štát v obrazoch (2 PDFs); Židovské zákony v SR 1941; Korespondencia Tisom a Piom XII; Nina Paulovičová — Rescue of Jews; Peter Borza Pomoc Židom; Karol Strmen materials (Marcinčin x2); Igor Kiss x4 Cyril-Methodius; Jan Kollár (kazne); Jaroslav Coranic — Z dejin GK cirkvi; John Palka — My Slovakia My Family; Ludvík Schedius Návrh o Unii 1843; M Dohnany — Historja povstanja 1848; Memorandum národa slovenského 1861; Maria Nováčka — Slovenská cesta; Martin Hetényi — cyrilometodské dedičstvo; Martin Šefranko — Traja bratia; Matúš Marcinčin (2x); Nina Paulovičová; Otázky z DCD vypracoval M Valčo (internal); Peter Ivanič — Constantine-Cyril 2024; Peter Svorc — Hurban; Resume o Buckovi; Schwarz — Habsburg collapse 20c; Tri vyznania viery (kept above); Demmel; Anton Laucek — Vojtašák (modern, RC); Dejiny ECAV plagatiky (modern posters); Zitňan Archiv (20c ECAV minutes); Ken Bryer — Christianity & Slovaks (Slovak-American historical narrative).
- Cyril-Method topical and 19c+ Slovak national / 20c political: out of scope.
- Anton Srholec — Katolícka viera na Slovensku — borderline, kept above.

### Other clearly-out folders (file count only — not enumerated)
- `Dejiny\Berkshire Encyclopedia of World History, Vol I-V` (5 PDFs).
- `Dejiny\Holokaust` (1).
- `Dejiny\Debata o Holokauste` (36).
- `Dejiny\Olga Bocakova - Dejiny politickeho myslenia na Slovensku` (1).
- `Dejiny\Slovenski imigranti v Amerike` (7).
- `Dejiny\Steven Aschheim - The Nietzsche Legacy in Germany 1890-1990` (12).
- `Dejiny\Dejiny rozne` (root holds general history; not opened for individual triage).
- `Dejiny\Domace cirkevne dejiny\Dejiny - Gymn Sv Andreja RU` (high-school history materials, 5 .doc).
- `Dejiny\Domace cirkevne dejiny\_Markdown subory poznamky` (internal note files; useful as personal aid but not citable).

---

## Section G — Inspection gaps

Items deferred or where confidence is low; recommended follow-up:

1. **Agenda Česká 1581 — title-page metadata.** Text extraction failed in this session (pdftoppm/pdftotext tooling unavailable). The source title and edition are confirmed by user description and folder labelling. **Recommendation:** confirm title page by manual inspection of `00 Pages from Agenda Ceska 1581.pdf` in next session, ideally creating a proper `Sources/Agenda_Ceska_1581.md` source note.

2. **Stöckel primary works — page-image archives.** Eleven works held as JPG-only scans. OCR has been performed (per project context) on the Postilla 1596 via `stockel_annotation` pipeline. **Recommendation:** verify which other Stöckel works have OCR transcriptions in the corpus pipeline; any that do not may warrant batch OCR before citation extraction.

3. **Abrahamides Postilla 1601 — 360 JPG scans, no text layer.** **Recommendation:** if this becomes a §5 case study, OCR via the same pipeline as Stöckel Postilla.

4. **Žitňan Archiv sept 05 — 134 .txt files + many subfolders.** Folder structure suggests 20c ECAV General Council/Convent minutes. Confirmed out-of-scope by chronology, but not fully opened. **Recommendation:** confirm chronological span; if pre-1800 material is mixed in, rescue accordingly.

5. **`_Bibliografia diel a citovanych diel Davida Daniela.docx`** in Vseobecne cirkevne dejiny. Internal bibliography of David Daniel — opening this would yield a likely-complete picture of Daniel's holdings on disk. **Recommendation:** open and reconcile against a full Daniel bibliography survey.

6. **Multiple .doc files with terse names** (e.g., "Sakralny priestor.doc," "Liturgy canada - summary notes.docx," "Worship Inclusive Language Controversy"). Authorship and citability uncertain from filename. **Recommendation:** open only if §-relevant during drafting.

7. **"Stockel-bibliografia.doc" (3 variants).** Bibliography of Stöckel — would close the gap on Stöckel coverage. **Recommendation:** open and reconcile during next phase.

8. **Brethren / Utraquist holdings are thin in primary scholarship.** No identified items by Holeton, Krmíčková, Crews, de Vooght, Jakoubek, Matěj of Janov. The Hus literature is biographical, not theological-textual. **Recommendation:** treat scholar-survey prompts on the Brethren/Utraquist tradition as priority — current local holdings cannot carry §3 (Brethren/Utraquist dogmatic profile) or §4.2 (ecclesiology) without significant acquisition.

9. **Kežmarská lyceálna knižnica subfolder is empty** — likely a placeholder. **Recommendation:** confirm whether content was moved or never digitised; potentially relevant for §3 if any 16–17c sources are catalogued there.

---

## End of inventory

*Generated by Claude Opus 4.7 on 2026-05-10 as a meta-catalogue for TEPALIT-relevant local holdings. Source notes for individual items will be created in subsequent sessions where warranted, following the `Sources/_Source_Template.md` discipline.*
