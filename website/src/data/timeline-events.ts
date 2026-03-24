/**
 * Curated timeline events for the Confessional Streams visualisation.
 * Each event belongs to one tradition lane or is "POLITICAL" (cross-cutting).
 * Built from Sources/Source_Index.md and the chapter outline.
 */

export type EventCategory = "DOCUMENT" | "HYMNAL" | "LITURGICAL" | "POLITICAL";
export type Tradition = "LUTHERAN" | "UTRAQUIST" | "UNITY" | "TRANS";

export interface TimelineEvent {
  id: string;
  year: number;
  yearEnd?: number;
  tradition: Tradition;
  category: EventCategory;
  titleSk: string;
  titleEn: string;
  descriptionSk: string;
  descriptionEn: string;
  sourceId?: string;
}

export const timelineEvents: TimelineEvent[] = [
  // ── Utraquist ──
  {
    id: "hus-de-ecclesia",
    year: 1413,
    tradition: "UTRAQUIST",
    category: "DOCUMENT",
    titleSk: "Hus: De ecclesia",
    titleEn: "Hus: De ecclesia",
    descriptionSk: "Husov traktát o cirkvi — základ utrakvistickej ekleziológie.",
    descriptionEn: "Jan Hus's treatise on the church — foundational for Utraquist ecclesiology.",
    sourceId: "Hus_DeEccl_1413",
  },
  {
    id: "four-articles",
    year: 1420,
    tradition: "UTRAQUIST",
    category: "DOCUMENT",
    titleSk: "Štyri pražské artikuly",
    titleEn: "Four Articles of Prague",
    descriptionSk: "Programové požiadavky husitského hnutia: slobodné kázanie, prijímanie pod obojím, chudoba kléru, trestanie smrteľných hriechov.",
    descriptionEn: "Programmatic demands of the Hussite movement: free preaching, communion sub utraque, clerical poverty, punishment of mortal sins.",
    sourceId: "ArtPrag_1420",
  },
  {
    id: "jistebnice",
    year: 1420,
    tradition: "UTRAQUIST",
    category: "HYMNAL",
    titleSk: "Jistebnický kancionál",
    titleEn: "Jistebnice Hymnal",
    descriptionSk: "Najstarší husitský kancionál — Graduál, Kancionál, Antifonár a Misál. Husitské hymny a liturgické texty.",
    descriptionEn: "Earliest Hussite hymnal — Gradual, Cantionale, Antiphonary, and Missal sections. Hussite hymns and liturgical texts.",
    sourceId: "KancJisteb_1420",
  },
  {
    id: "basel-compacts",
    year: 1436,
    tradition: "UTRAQUIST",
    category: "POLITICAL",
    titleSk: "Bazilejské kompaktáty",
    titleEn: "Basel Compacts",
    descriptionSk: "Dohoda medzi Bazilejským koncilom a husitmi — právne uznanie prijímania pod obojím.",
    descriptionEn: "Agreement between the Council of Basel and Hussites — legal recognition of communion in both kinds.",
    sourceId: "CompBasil_1436",
  },

  // ── Unity of Brethren ──
  {
    id: "chelcicky-siet",
    year: 1440,
    tradition: "UNITY",
    category: "DOCUMENT",
    titleSk: "Chelčický: Sieť viery",
    titleEn: "Chelčický: Net of Faith",
    descriptionSk: "Ideový základ ranej Jednoty — radikálna kritika inštitucionálnej cirkvi.",
    descriptionEn: "Ideological foundation of the early Unity — radical critique of institutional church.",
    sourceId: "Chelcicky_Siet",
  },
  {
    id: "unity-founded",
    year: 1457,
    tradition: "UNITY",
    category: "POLITICAL",
    titleSk: "Založenie Jednoty bratskej",
    titleEn: "Unity of Brethren founded",
    descriptionSk: "Nasledovníci Petra Chelčického zakladajú Unitas Fratrum v Kunvalde.",
    descriptionEn: "Followers of Petr Chelčický establish the Unitas Fratrum at Kunvald.",
  },
  {
    id: "lukas-sacramental",
    year: 1500,
    tradition: "UNITY",
    category: "DOCUMENT",
    titleSk: "Lukáš Pražský: sakramentálne spisy",
    titleEn: "Lukáš of Prague: sacramental writings",
    descriptionSk: "Prechod od raného memorializmu k 'duchovnej prítomnosti' \u2014 zrelá eucharistická pozícia Jednoty.",
    descriptionEn: "Shift from early memorialism to 'spiritual presence' — the mature Unity Eucharistic position.",
    sourceId: "LukasPrazsky_Sviat",
  },

  // ── Lutheran ──
  {
    id: "luther-captivitate",
    year: 1520,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Luther: De captivitate Babylonica",
    titleEn: "Luther: Babylonian Captivity",
    descriptionSk: "Sakramentálna teológia, protiobetná polemika. Tri múry romanistov zbúrané.",
    descriptionEn: "Sacramental theology, anti-sacrificial polemic. Three walls of the Romanists demolished.",
    sourceId: "Luther_DeCaptiv_1520",
  },
  {
    id: "formula-missae",
    year: 1523,
    tradition: "LUTHERAN",
    category: "LITURGICAL",
    titleSk: "Luther: Formula Missae",
    titleEn: "Luther: Formula Missae",
    descriptionSk: "Lutherova prvá liturgická reforma — latinská, konzervatívna reštrukturácia omše.",
    descriptionEn: "Luther's first liturgical reform — Latin, conservative restructuring of the Mass.",
    sourceId: "Luther_FormMissae_1523",
  },
  {
    id: "deutsche-messe",
    year: 1526,
    tradition: "LUTHERAN",
    category: "LITURGICAL",
    titleSk: "Luther: Deutsche Messe",
    titleEn: "Luther: German Mass",
    descriptionSk: "Vernakurálna liturgická reforma — hymny nahrádzajú časti ordináriá.",
    descriptionEn: "Vernacular liturgical reform — hymns replace parts of the ordinary.",
    sourceId: "Luther_DtMesse_1526",
  },

  // ── Unity (mature) ──
  {
    id: "confessio-fidei",
    year: 1535,
    tradition: "UNITY",
    category: "DOCUMENT",
    titleSk: "Confessio Fidei (Jednota)",
    titleEn: "Confessio Fidei (Unity)",
    descriptionSk: "Zrelé vyznanie viery Jednoty — 20 článkov. Luther napísal predhovor pre wittenbergské vydanie.",
    descriptionEn: "Mature Unity confession of faith — 20 articles. Luther wrote the preface for the Wittenberg edition.",
    sourceId: "ConfFidei_1535",
  },

  // ── Lutheran regional ──
  {
    id: "conf-pentapolitana",
    year: 1549,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Confessio Pentapolitana",
    titleEn: "Confessio Pentapolitana",
    descriptionSk: "Vyznanie piatich slobodných kráľovských miest Horného Uhorska — regionálna recepcia Confessio Augustana.",
    descriptionEn: "Confession of the five free royal cities of Upper Hungary — regional reception of Confessio Augustana.",
    sourceId: "ConfPentapol_1549",
  },
  {
    id: "blahoslav-musica",
    year: 1558,
    tradition: "UNITY",
    category: "DOCUMENT",
    titleSk: "Blahoslav: Musica",
    titleEn: "Blahoslav: Musica",
    descriptionSk: "Hymnologická teória Jednoty bratskej.",
    descriptionEn: "Hymnological theory of the Unity of Brethren.",
    sourceId: "Blahoslav_Musica",
  },
  {
    id: "conf-heptapolitana",
    year: 1559,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Confessio Heptapolitana",
    titleEn: "Confessio Heptapolitana",
    descriptionSk: "Vyznanie siedmich banských miest — ďalšia regionálna elaborácia.",
    descriptionEn: "Confession of the seven mining towns — further regional elaboration.",
    sourceId: "ConfHeptapol_1559",
  },
  {
    id: "samotulsky",
    year: 1561,
    tradition: "UNITY",
    category: "HYMNAL",
    titleSk: "Šamotulský kancionál",
    titleEn: "Szamotuly Hymnal",
    descriptionSk: "735 piesní — Blahoslavova edícia, vrchol bratskej hymnografie.",
    descriptionEn: "735 songs — Blahoslav's edition, peak of Brethren hymnological achievement.",
    sourceId: "KancSamotul_1561",
  },
  {
    id: "ivancicky",
    year: 1564,
    tradition: "UNITY",
    category: "HYMNAL",
    titleSk: "Ivančický kancionál",
    titleEn: "Ivančice Hymnal",
    descriptionSk: "745 piesní — revidované zo Šamotulského. Zrelá hymnografia Jednoty.",
    descriptionEn: "745 songs — revised from the Šamotulský. Mature Unity hymnography.",
    sourceId: "KancIvanc_1564",
  },
  {
    id: "conf-scepusiana",
    year: 1569,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Confessio Scepusiana",
    titleEn: "Confessio Scepusiana",
    descriptionSk: "Vyznanie spišského regiónu — tretie uhorské regionálne vyznanie.",
    descriptionEn: "Confession of the Spiš region — the third Hungarian regional confession.",
    sourceId: "ConfScepus_1569",
  },

  // ── Trans-confessional ──
  {
    id: "conf-bohemica",
    year: 1575,
    tradition: "TRANS",
    category: "DOCUMENT",
    titleSk: "Confessio Bohemica",
    titleEn: "Bohemian Confession",
    descriptionSk: "Ekumenická syntéza — zámerne nejednoznačná v otázke Eucharistie ako politický kompromis medzi luteránskou, utrakvistickou a bratskou pozíciou.",
    descriptionEn: "Ecumenical synthesis — deliberately ambiguous on the Eucharist as political compromise between Lutheran, Utraquist, and Unity positions.",
    sourceId: "ConfBohem_1575",
  },
  {
    id: "biblia-kralicka",
    year: 1579,
    yearEnd: 1593,
    tradition: "TRANS",
    category: "DOCUMENT",
    titleSk: "Biblia Kralická",
    titleEn: "Kralice Bible",
    descriptionSk: "Štandardný liturgický jazyk (bibličtina) — zdieľaný naprieč tradíciami.",
    descriptionEn: "Standard liturgical language (bibličtina) — shared across traditions.",
    sourceId: "BiblKral",
  },

  // ── Book of Concord ──
  {
    id: "book-concord",
    year: 1580,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Book of Concord",
    titleEn: "Book of Concord",
    descriptionSk: "Normatívny luteránsky konfesionálny korpus — Confessio Augustana, Formula Concordiae a ďalšie kľúčové texty.",
    descriptionEn: "Normative Lutheran confessional corpus — Confessio Augustana, Formula Concordiae, and other key texts.",
    sourceId: "BookConcord_1580",
  },

  // ── Liturgical sources ──
  {
    id: "agenda-ceska",
    year: 1581,
    tradition: "UTRAQUIST",
    category: "LITURGICAL",
    titleSk: "Agenda Česká",
    titleEn: "Bohemian Agenda",
    descriptionSk: "Novoutrakvistický liturgický poriadok \u2014 elevačné napomenutie interpretuje 'toto je moje telo' funkcionálno-svedecky, nie metafyzicko-ontologicky.",
    descriptionEn: "Neo-Utraquist liturgical order — elevation admonition glosses 'this is my body' in functional-testimonial terms, not metaphysical-ontological.",
    sourceId: "AgCeska_1581",
  },

  // ── White Mountain ──
  {
    id: "white-mountain",
    year: 1620,
    tradition: "TRANS",
    category: "POLITICAL",
    titleSk: "Bitka na Bielej hore",
    titleEn: "Battle of White Mountain",
    descriptionSk: "Porážka českých protestantských stavov — koniec legálneho protestantského bohoslužobného života v Čechách a na Morave.",
    descriptionEn: "Defeat of the Bohemian Protestant estates — end of legal Protestant worship in Bohemia and Moravia.",
  },

  // ── Cithara Sanctorum ──
  {
    id: "cithara-sanctorum",
    year: 1636,
    tradition: "LUTHERAN",
    category: "HYMNAL",
    titleSk: "Cithara Sanctorum (Tranovský)",
    titleEn: "Cithara Sanctorum (Tranovsky)",
    descriptionSk: "Základný slovenský luteránsky kancionál \u2014 49 % staršieho českého repertoáru je utrakvistického pôvodu. Kľúčový dôkaz teologickej 'luteranizácie' redakčným zásahom.",
    descriptionEn: "The foundational Slovak Lutheran hymnal — 49% of older Czech repertoire is Utraquist. Key evidence of theological 'Lutheranisation' through editorial intervention.",
    sourceId: "CitharaSanct_1636",
  },
];

/** Sorted chronologically */
export const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);

/** Year range for the timeline */
export const YEAR_MIN = 1400;
export const YEAR_MAX = 1660;
