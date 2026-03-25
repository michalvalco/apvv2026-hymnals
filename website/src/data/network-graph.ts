/**
 * Network graph data — curated nodes and edges for the Intertextual Network.
 *
 * Nodes: primary sources (hymns, confessional documents, liturgical orders)
 * Edges: typed relationships argued for in the monograph chapter
 *
 * ~45 nodes, ~65 edges — hand-curated, not auto-generated.
 * Aligns with Source_Index.md Short IDs.
 */

// ── Types ──

export type NodeType = "DOCUMENT" | "HYMNAL" | "LITURGICAL" | "POLITICAL" | "PERSON";
export type Tradition = "LUTHERAN" | "UTRAQUIST" | "UNITY" | "TRANS";

export interface GraphNode {
  id: string;
  label: string;
  labelEn: string;
  tradition: Tradition;
  type: NodeType;
  year: number;
  /** Locus codes this source is relevant to */
  locusCodes: string[];
  /** Canonical Short ID from Source_Index.md (if applicable) */
  sourceId?: string;
}

export type EdgeType =
  | "BORROWING"       // text/melody taken from source
  | "POLEMIC"         // theological opposition
  | "PARALLEL"        // independent convergence on same doctrine
  | "SHARED_SCRIPTURE"// same biblical passage used
  | "INFLUENCE"       // doctrinal or editorial influence
  | "REVISION"        // later edition revises earlier
  | "RECEPTION"       // receives/adapts material from another tradition
  | "COMPILATION";    // compiles material from source

export interface GraphEdge {
  source: string;
  target: string;
  type: EdgeType;
  labelSk: string;
  labelEn: string;
  /** Which loci this relationship touches */
  locusCodes: string[];
  epistemicStatus: "FACTUAL" | "INTERPRETIVE" | "DEFERRED";
  weight: number; // 1-3, affects edge thickness
}

// ── Edge display config ──

export const EDGE_TYPE_META: Record<EdgeType, {
  sk: string;
  en: string;
  color: string;
  dash: string;
}> = {
  BORROWING:       { sk: "Výpožička",         en: "Borrowing",        color: "#D4A843", dash: "" },
  POLEMIC:         { sk: "Polemika",           en: "Polemic",          color: "#C0392B", dash: "6,3" },
  PARALLEL:        { sk: "Paralela",           en: "Parallel",         color: "#8B7EB8", dash: "3,3" },
  SHARED_SCRIPTURE:{ sk: "Zdieľané Písmo",     en: "Shared Scripture",  color: "#4A9C6E", dash: "1,3" },
  INFLUENCE:       { sk: "Vplyv",              en: "Influence",        color: "#7F8C8D", dash: "" },
  REVISION:        { sk: "Revízia",            en: "Revision",         color: "#2E8B8B", dash: "" },
  RECEPTION:       { sk: "Recepcia",           en: "Reception",        color: "#E67E22", dash: "" },
  COMPILATION:     { sk: "Kompilácia",         en: "Compilation",      color: "#9B59B6", dash: "" },
};

// ── Nodes ──

export const nodes: GraphNode[] = [
  // ── Utraquist ──
  { id: "hus-de-eccl",      label: "Hus: De ecclesia (1413)",           labelEn: "Hus: De ecclesia",               tradition: "UTRAQUIST", type: "DOCUMENT",   year: 1413, locusCodes: ["L2.1", "L2.2"],      sourceId: "Hus_DeEccl_1413" },
  { id: "art-prag",         label: "Prazske artikuly (1420)",            labelEn: "Four Articles of Prague",         tradition: "UTRAQUIST", type: "DOCUMENT",   year: 1420, locusCodes: ["L1.2", "L4.1"],      sourceId: "ArtPrag_1420" },
  { id: "kanc-jisteb",      label: "Jistebnicky kancional (c.1420)",     labelEn: "Jistebnice Hymnal",              tradition: "UTRAQUIST", type: "HYMNAL",     year: 1420, locusCodes: ["L1.1", "L1.2"],      sourceId: "KancJisteb_1420" },
  { id: "comp-basil",       label: "Bazilejske kompaktaty (1436)",       labelEn: "Basel Compacts",                 tradition: "UTRAQUIST", type: "POLITICAL",  year: 1436, locusCodes: ["L1.2"],              sourceId: "CompBasil_1436" },
  { id: "jakoubek",         label: "Jakoubek: eucharist. spisy",         labelEn: "Jakoubek: Eucharistic writings",  tradition: "UTRAQUIST", type: "DOCUMENT",   year: 1414, locusCodes: ["L1.1", "L1.2"],      sourceId: "Jakoubek_Euch" },
  { id: "missale-prag",     label: "Missale Pragense",                   labelEn: "Missale Pragense (Utraquist)",    tradition: "UTRAQUIST", type: "LITURGICAL", year: 1450, locusCodes: ["L1.1", "L1.3", "L1.4"], sourceId: "MissalePrag" },
  { id: "ag-ceska",         label: "Agenda Ceska (1581)",                labelEn: "Czech Agenda",                   tradition: "UTRAQUIST", type: "LITURGICAL", year: 1581, locusCodes: ["L1.1", "L1.3", "L1.4", "L2.1"], sourceId: "AgCeska_1581" },

  // ── Unity of Brethren ──
  { id: "chelcicky-siet",   label: "Chelcicky: Siet viery (c.1440)",     labelEn: "Chelcicky: Net of Faith",         tradition: "UNITY",     type: "DOCUMENT",   year: 1440, locusCodes: ["L2.1", "L3.2"],      sourceId: "Chelcicky_Siet" },
  { id: "lukas-sviat",      label: "Lukas Prazsky: sakram. spisy",       labelEn: "Lukas of Prague: sacramentals",   tradition: "UNITY",     type: "DOCUMENT",   year: 1500, locusCodes: ["L1.1", "L2.3"],      sourceId: "LukasPrazsky_Sviat" },
  { id: "kanc-prvy",        label: "Prvy kancional (1501)",              labelEn: "First Brethren Hymnal",           tradition: "UNITY",     type: "HYMNAL",     year: 1501, locusCodes: ["L1.1", "L3.1"],      sourceId: "KancPrvy_1501" },
  { id: "weisse-1531",      label: "Weisse: Gesengbuchlein (1531)",      labelEn: "Weisse: German Brethren Hymnal",  tradition: "UNITY",     type: "HYMNAL",     year: 1531, locusCodes: ["L1.1", "L3.1"],      sourceId: "Weisse_1531" },
  { id: "conf-fidei",       label: "Confessio Fidei (1535)",             labelEn: "Confessio Fidei",                tradition: "UNITY",     type: "DOCUMENT",   year: 1535, locusCodes: ["L1.1", "L2.3", "L3.1"], sourceId: "ConfFidei_1535" },
  { id: "kanc-roh",         label: "Rohov kancional (1541)",             labelEn: "Roh Hymnal",                     tradition: "UNITY",     type: "HYMNAL",     year: 1541, locusCodes: ["L1.1", "L3.1"],      sourceId: "KancRoh_1541" },
  { id: "blahoslav-musica", label: "Blahoslav: Musica (1558)",           labelEn: "Blahoslav: Musica",              tradition: "UNITY",     type: "DOCUMENT",   year: 1558, locusCodes: ["L4.1"],              sourceId: "Blahoslav_Musica" },
  { id: "kanc-samotul",     label: "Samotulsky kancional (1561)",        labelEn: "Szamotuly Hymnal",               tradition: "UNITY",     type: "HYMNAL",     year: 1561, locusCodes: ["L1.1", "L3.1", "L3.2"], sourceId: "KancSamotul_1561" },
  { id: "kanc-ivanc",       label: "Ivancicky kancional (1564)",         labelEn: "Ivancice Hymnal",                tradition: "UNITY",     type: "HYMNAL",     year: 1564, locusCodes: ["L1.1", "L3.1", "L3.2"], sourceId: "KancIvanc_1564" },
  { id: "kanc-kunv",        label: "Kunvaldsky kancional (1576)",        labelEn: "Kunvald Hymnal",                 tradition: "UNITY",     type: "HYMNAL",     year: 1576, locusCodes: ["L1.1"],              sourceId: "KancKunv_1576" },
  { id: "ag-bratska",       label: "Bratska agenda (1585)",              labelEn: "Brethren Agenda",                tradition: "UNITY",     type: "LITURGICAL", year: 1585, locusCodes: ["L1.1", "L1.3", "L2.3"], sourceId: "AgBratska_1585" },
  { id: "kanc-zav",         label: "Zavorkuv kancional (1602)",          labelEn: "Zavorka Hymnal",                 tradition: "UNITY",     type: "HYMNAL",     year: 1602, locusCodes: ["L1.1"],              sourceId: "KancZav_1602" },

  // ── Lutheran ──
  { id: "luther-captiv",    label: "Luther: De captivitate (1520)",      labelEn: "Luther: Babylonian Captivity",    tradition: "LUTHERAN",  type: "DOCUMENT",   year: 1520, locusCodes: ["L1.1", "L1.3", "L1.4"], sourceId: "Luther_DeCaptiv_1520" },
  { id: "form-missae",      label: "Luther: Formula Missae (1523)",      labelEn: "Luther: Formula Missae",          tradition: "LUTHERAN",  type: "LITURGICAL", year: 1523, locusCodes: ["L1.1", "L1.3", "L1.4"], sourceId: "Luther_FormMissae_1523" },
  { id: "dt-messe",         label: "Luther: Deutsche Messe (1526)",      labelEn: "Luther: German Mass",             tradition: "LUTHERAN",  type: "LITURGICAL", year: 1526, locusCodes: ["L1.1", "L1.3"],      sourceId: "Luther_DtMesse_1526" },
  { id: "conf-aug",         label: "Confessio Augustana (1530)",         labelEn: "Augsburg Confession",            tradition: "LUTHERAN",  type: "DOCUMENT",   year: 1530, locusCodes: ["L1.1", "L1.2", "L2.1", "L3.1"], sourceId: "BookConcord_1580" },
  { id: "conf-pentapol",    label: "Confessio Pentapolitana (1549)",     labelEn: "Confessio Pentapolitana",        tradition: "LUTHERAN",  type: "DOCUMENT",   year: 1549, locusCodes: ["L1.1"],              sourceId: "ConfPentapol_1549" },
  { id: "conf-heptapol",    label: "Confessio Heptapolitana (1559)",     labelEn: "Confessio Heptapolitana",        tradition: "LUTHERAN",  type: "DOCUMENT",   year: 1559, locusCodes: ["L1.1"],              sourceId: "ConfHeptapol_1559" },
  { id: "conf-scepus",      label: "Confessio Scepusiana (1569)",        labelEn: "Confessio Scepusiana",           tradition: "LUTHERAN",  type: "DOCUMENT",   year: 1569, locusCodes: ["L1.1"],              sourceId: "ConfScepus_1569" },
  { id: "book-concord",     label: "Book of Concord (1580)",             labelEn: "Book of Concord",                tradition: "LUTHERAN",  type: "DOCUMENT",   year: 1580, locusCodes: ["L1.1", "L2.1", "L3.1", "L4.1"], sourceId: "BookConcord_1580" },
  { id: "cithara",          label: "Cithara Sanctorum (1636)",           labelEn: "Cithara Sanctorum",              tradition: "LUTHERAN",  type: "HYMNAL",     year: 1636, locusCodes: ["L1.1", "L1.5", "L3.1"], sourceId: "CitharaSanct_1636" },

  // ── Trans-confessional ──
  { id: "conf-bohem",       label: "Confessio Bohemica (1575)",          labelEn: "Bohemian Confession",            tradition: "TRANS",     type: "DOCUMENT",   year: 1575, locusCodes: ["L1.1", "L1.2", "L2.1", "L4.1"], sourceId: "ConfBohem_1575" },
  { id: "bibl-kral",        label: "Biblia Kralicka (1579-93)",          labelEn: "Kralice Bible",                  tradition: "TRANS",     type: "DOCUMENT",   year: 1579, locusCodes: ["L4.1", "L4.2"],      sourceId: "BiblKral" },

  // ── Political milestones (context nodes) ──
  { id: "white-mountain",   label: "Biela hora (1620)",                  labelEn: "Battle of White Mountain",        tradition: "TRANS",     type: "POLITICAL",  year: 1620, locusCodes: [] },
  { id: "unity-founded",    label: "Zalozenie Jednoty (1457)",           labelEn: "Unity of Brethren founded",       tradition: "UNITY",     type: "POLITICAL",  year: 1457, locusCodes: ["L2.1"] },
];

// ── Edges ──

export const edges: GraphEdge[] = [
  // === UTRAQUIST INTERNAL ===
  { source: "hus-de-eccl",    target: "art-prag",       type: "INFLUENCE",       labelSk: "Husova ekleziologia ovplyvnila artikuly",                    labelEn: "Hus's ecclesiology influenced the Articles",                   locusCodes: ["L2.1"],       epistemicStatus: "FACTUAL",       weight: 3 },
  { source: "jakoubek",       target: "art-prag",       type: "INFLUENCE",       labelSk: "Jakoubkova obhajoba sub utraque",                            labelEn: "Jakoubek's defence of sub utraque",                            locusCodes: ["L1.2"],       epistemicStatus: "FACTUAL",       weight: 3 },
  { source: "jakoubek",       target: "kanc-jisteb",    type: "INFLUENCE",       labelSk: "Eucharisticka teologia v husitskych hymnach",                 labelEn: "Eucharistic theology in Hussite hymns",                        locusCodes: ["L1.1"],       epistemicStatus: "INTERPRETIVE",  weight: 2 },
  { source: "art-prag",       target: "comp-basil",     type: "INFLUENCE",       labelSk: "Artikuly ako zaklad kompaktatov",                             labelEn: "Articles as the basis of the Compacts",                        locusCodes: ["L1.2"],       epistemicStatus: "FACTUAL",       weight: 3 },
  { source: "missale-prag",   target: "ag-ceska",       type: "REVISION",        labelSk: "Agenda reviduje predtridentsky misal",                        labelEn: "Agenda revises pre-Tridentine missal",                         locusCodes: ["L1.1", "L1.3"], epistemicStatus: "INTERPRETIVE", weight: 2 },
  { source: "art-prag",       target: "conf-bohem",     type: "INFLUENCE",       labelSk: "Od slobodneho kazania k sola scriptura",                     labelEn: "From free preaching to sola scriptura",                        locusCodes: ["L4.1"],       epistemicStatus: "FACTUAL",       weight: 2 },

  // === UNITY INTERNAL ===
  { source: "chelcicky-siet", target: "unity-founded",  type: "INFLUENCE",       labelSk: "Chelcickeho radikalizmus zalozil Jednotu",                   labelEn: "Chelcicky's radicalism founded the Unity",                     locusCodes: ["L2.1"],       epistemicStatus: "FACTUAL",       weight: 3 },
  { source: "lukas-sviat",    target: "conf-fidei",     type: "INFLUENCE",       labelSk: "Lukasov sakramentalny obrat foroval Confessio",              labelEn: "Lukas's sacramental shift shaped the Confessio",               locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 3 },
  { source: "kanc-prvy",      target: "kanc-roh",       type: "REVISION",        labelSk: "Roh reviduje prvy kancional",                                labelEn: "Roh revises the first hymnal",                                 locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "kanc-roh",       target: "kanc-samotul",   type: "REVISION",        labelSk: "Blahoslav reviduje Rohov kancional",                         labelEn: "Blahoslav revises Roh's hymnal",                               locusCodes: ["L1.1", "L3.1"], epistemicStatus: "FACTUAL",     weight: 2 },
  { source: "kanc-samotul",   target: "kanc-ivanc",     type: "REVISION",        labelSk: "Ivancicky revidovany zo Samotulskeho",                       labelEn: "Ivancice revised from Szamotuly",                              locusCodes: ["L1.1", "L3.1"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "blahoslav-musica", target: "kanc-samotul",  type: "INFLUENCE",      labelSk: "Blahoslavova hymnologicka teoria",                           labelEn: "Blahoslav's hymnological theory",                              locusCodes: ["L4.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "blahoslav-musica", target: "kanc-ivanc",    type: "INFLUENCE",      labelSk: "Blahoslavova teoria aplikovana",                             labelEn: "Blahoslav's theory applied",                                   locusCodes: ["L4.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "kanc-ivanc",     target: "kanc-kunv",      type: "REVISION",        labelSk: "Kunvaldsky nadvazuje na Ivancicky",                          labelEn: "Kunvald continues Ivancice tradition",                         locusCodes: ["L1.1"],       epistemicStatus: "INTERPRETIVE",  weight: 1 },
  { source: "kanc-kunv",      target: "kanc-zav",       type: "REVISION",        labelSk: "Neskorsia bratska produkcia",                                labelEn: "Late Brethren production",                                     locusCodes: ["L1.1"],       epistemicStatus: "INTERPRETIVE",  weight: 1 },
  { source: "conf-fidei",     target: "ag-bratska",     type: "INFLUENCE",       labelSk: "Confessio formuje bratsku liturgiu",                          labelEn: "Confessio shapes Brethren liturgy",                            locusCodes: ["L1.1", "L2.3"], epistemicStatus: "INTERPRETIVE", weight: 2 },
  { source: "conf-fidei",     target: "conf-bohem",     type: "INFLUENCE",       labelSk: "Bratsky vstup do Bohemiky",                                  labelEn: "Brethren input into Bohemica",                                 locusCodes: ["L1.1", "L2.1"], epistemicStatus: "FACTUAL",      weight: 2 },

  // === LUTHERAN INTERNAL ===
  { source: "luther-captiv",  target: "form-missae",    type: "INFLUENCE",       labelSk: "Sakramentalna teologia -> liturgicka reforma",                labelEn: "Sacramental theology -> liturgical reform",                    locusCodes: ["L1.1", "L1.3"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "form-missae",    target: "dt-messe",       type: "REVISION",        labelSk: "Latinika -> vernakularna reforma",                           labelEn: "Latin -> vernacular reform",                                   locusCodes: ["L1.1", "L1.3"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "conf-aug",       target: "conf-pentapol",  type: "RECEPTION",       labelSk: "Regionalna recepcia CA",                                     labelEn: "Regional reception of CA",                                     locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "conf-aug",       target: "conf-heptapol",  type: "RECEPTION",       labelSk: "Regionalna recepcia CA",                                     labelEn: "Regional reception of CA",                                     locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "conf-aug",       target: "conf-scepus",    type: "RECEPTION",       labelSk: "Regionalna recepcia CA",                                     labelEn: "Regional reception of CA",                                     locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "conf-aug",       target: "book-concord",   type: "COMPILATION",     labelSk: "CA zahruta do Book of Concord",                              labelEn: "CA included in Book of Concord",                               locusCodes: ["L1.1", "L3.1"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "conf-aug",       target: "conf-bohem",     type: "INFLUENCE",       labelSk: "Luteransky vplyv na Bohemiku",                               labelEn: "Lutheran influence on Bohemica",                               locusCodes: ["L1.1", "L4.1"], epistemicStatus: "FACTUAL",     weight: 2 },

  // === CROSS-TRADITION: Lutheranisation chain (the core argument) ===
  { source: "kanc-ivanc",     target: "cithara",        type: "BORROWING",       labelSk: "Cithara prebera z Ivancickeho",                              labelEn: "Cithara borrows from Ivancice",                                locusCodes: ["L1.1", "L1.5"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "kanc-samotul",   target: "cithara",        type: "BORROWING",       labelSk: "Cithara prebera zo Samotulskeho",                            labelEn: "Cithara borrows from Szamotuly",                               locusCodes: ["L1.1", "L1.5"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "kanc-jisteb",    target: "cithara",        type: "BORROWING",       labelSk: "Utrakvisticky repertoar v Cithare (49%)",                    labelEn: "Utraquist repertoire in Cithara (49%)",                        locusCodes: ["L1.1", "L1.5"], epistemicStatus: "FACTUAL",     weight: 3 },
  { source: "kanc-roh",       target: "cithara",        type: "BORROWING",       labelSk: "Materiel z Rohovho kancionala",                              labelEn: "Material from Roh's hymnal",                                   locusCodes: ["L1.1"],       epistemicStatus: "INTERPRETIVE",  weight: 2 },
  { source: "kanc-kunv",      target: "cithara",        type: "BORROWING",       labelSk: "Materiel z Kunvaldskeho kancionala",                         labelEn: "Material from Kunvald hymnal",                                 locusCodes: ["L1.1"],       epistemicStatus: "INTERPRETIVE",  weight: 1 },
  { source: "book-concord",   target: "cithara",        type: "INFLUENCE",       labelSk: "Teologicky filter: luteranizacia redakciou",                  labelEn: "Theological filter: Lutheranisation by editing",               locusCodes: ["L1.1", "L3.1"], epistemicStatus: "INTERPRETIVE", weight: 3 },

  // === CROSS-TRADITION: Liturgical parallels ===
  { source: "form-missae",    target: "ag-ceska",       type: "PARALLEL",        labelSk: "Elevacia zachovana v oboch tradiciach",                       labelEn: "Elevation preserved in both traditions",                       locusCodes: ["L1.1", "L1.3"], epistemicStatus: "INTERPRETIVE", weight: 2 },
  { source: "ag-ceska",       target: "ag-bratska",     type: "PARALLEL",        labelSk: "Dva odlisne liturgicke poriadky (1580s)",                     labelEn: "Two distinct liturgical orders (1580s)",                       locusCodes: ["L1.1", "L1.3"], epistemicStatus: "FACTUAL",     weight: 1 },
  { source: "dt-messe",       target: "cithara",        type: "INFLUENCE",       labelSk: "Hymny nahraduju ordinarium",                                 labelEn: "Hymns replace ordinary parts",                                 locusCodes: ["L1.3"],       epistemicStatus: "INTERPRETIVE",  weight: 2 },

  // === CROSS-TRADITION: Doctrinal convergence/divergence ===
  { source: "lukas-sviat",    target: "luther-captiv",  type: "POLEMIC",         labelSk: "Lukas kritizuje sola fide",                                  labelEn: "Lukas critiques sola fide",                                    locusCodes: ["L3.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "conf-fidei",     target: "conf-aug",       type: "PARALLEL",        labelSk: "Nezavisle konvergentne vyslovenia",                          labelEn: "Independent convergent articulations",                         locusCodes: ["L1.1", "L1.2"], epistemicStatus: "INTERPRETIVE", weight: 2 },
  { source: "hus-de-eccl",    target: "luther-captiv",  type: "INFLUENCE",       labelSk: "Luther cita Husa (Lipsko 1519)",                             labelEn: "Luther reads Hus (Leipzig 1519)",                              locusCodes: ["L2.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "weisse-1531",    target: "dt-messe",       type: "BORROWING",       labelSk: "Luther poznal Weisseho spevy",                               labelEn: "Luther knew Weisse's hymns",                                   locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "chelcicky-siet", target: "lukas-sviat",    type: "POLEMIC",         labelSk: "Lukas sa odklana od Chelcickeho memorializmu",                labelEn: "Lukas diverges from Chelcicky's memorialism",                  locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 2 },

  // === TRANS-CONFESSIONAL ===
  { source: "conf-bohem",     target: "bibl-kral",      type: "SHARED_SCRIPTURE", labelSk: "Zdielany biblicky jazyk (biblictina)",                      labelEn: "Shared biblical language (biblictina)",                         locusCodes: ["L4.1", "L4.2"], epistemicStatus: "FACTUAL",    weight: 2 },
  { source: "bibl-kral",      target: "cithara",        type: "SHARED_SCRIPTURE", labelSk: "Biblictina ako liturgicky jazyk CS",                        labelEn: "Biblictina as liturgical language of CS",                       locusCodes: ["L4.1", "L4.2"], epistemicStatus: "INTERPRETIVE", weight: 2 },
  { source: "bibl-kral",      target: "kanc-ivanc",     type: "SHARED_SCRIPTURE", labelSk: "Kralicky preklad v bratskych hymnach",                      labelEn: "Kralice translation in Brethren hymns",                        locusCodes: ["L4.1"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "bibl-kral",      target: "ag-bratska",     type: "SHARED_SCRIPTURE", labelSk: "Kralicky text v bratskej liturgii",                         labelEn: "Kralice text in Brethren liturgy",                              locusCodes: ["L4.1"],       epistemicStatus: "INTERPRETIVE",  weight: 1 },

  // === Impact of White Mountain ===
  { source: "white-mountain", target: "cithara",        type: "INFLUENCE",       labelSk: "Exil uchoval ceske hymny na Slovensku",                      labelEn: "Exile preserved Czech hymns in Slovakia",                      locusCodes: [],             epistemicStatus: "FACTUAL",       weight: 3 },

  // === Sub utraque convergence (all three agree) ===
  { source: "art-prag",       target: "conf-aug",       type: "PARALLEL",        labelSk: "Sub utraque: reformna poziadavka vs. bibl. mandat",          labelEn: "Sub utraque: reform demand vs. biblical mandate",              locusCodes: ["L1.2"],       epistemicStatus: "FACTUAL",       weight: 2 },
  { source: "art-prag",       target: "conf-fidei",     type: "PARALLEL",        labelSk: "Sub utraque: spolocna pozicia, odlisne zdovodnenie",         labelEn: "Sub utraque: shared position, different grounding",            locusCodes: ["L1.2"],       epistemicStatus: "FACTUAL",       weight: 2 },

  // === Hungarian regional confessions cluster ===
  { source: "conf-pentapol",  target: "conf-heptapol",  type: "PARALLEL",        labelSk: "Regionalne konfesie v dialogi",                              labelEn: "Regional confessions in dialogue",                             locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 1 },
  { source: "conf-heptapol",  target: "conf-scepus",    type: "PARALLEL",        labelSk: "Regionalne konfesie v dialogi",                              labelEn: "Regional confessions in dialogue",                             locusCodes: ["L1.1"],       epistemicStatus: "FACTUAL",       weight: 1 },

  // === Luther's Confessio Fidei preface ===
  { source: "conf-fidei",     target: "luther-captiv",  type: "RECEPTION",       labelSk: "Luther napisal predhovor pre CF 1535",                       labelEn: "Luther wrote preface for CF 1535",                             locusCodes: ["L1.1", "L3.1"], epistemicStatus: "FACTUAL",     weight: 2 },
];

// ── Helpers ──

export function getNodeById(id: string): GraphNode | undefined {
  return nodes.find((n) => n.id === id);
}

export function getEdgesForNode(nodeId: string): GraphEdge[] {
  return edges.filter((e) => e.source === nodeId || e.target === nodeId);
}

export function getNodesByTradition(tradition: Tradition): GraphNode[] {
  return nodes.filter((n) => n.tradition === tradition);
}

export function getNodesByLocus(locusCode: string): GraphNode[] {
  return nodes.filter((n) => n.locusCodes.includes(locusCode));
}
