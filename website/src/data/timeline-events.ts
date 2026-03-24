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
  description: string;
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
    description: "Jan Hus's treatise on the church — foundational for Utraquist ecclesiology.",
    sourceId: "Hus_DeEccl_1413",
  },
  {
    id: "four-articles",
    year: 1420,
    tradition: "UTRAQUIST",
    category: "DOCUMENT",
    titleSk: "Štyri pražské artikuly",
    titleEn: "Four Articles of Prague",
    description: "Programmatic demands of the Hussite movement: free preaching, communion sub utraque, clerical poverty, punishment of mortal sins.",
    sourceId: "ArtPrag_1420",
  },
  {
    id: "jistebnice",
    year: 1420,
    tradition: "UTRAQUIST",
    category: "HYMNAL",
    titleSk: "Jistebnický kancionál",
    titleEn: "Jistebnice Hymnal",
    description: "Earliest Hussite hymnal — Gradual, Cantionale, Antiphonary, and Missal sections. Hussite hymns and liturgical texts.",
    sourceId: "KancJisteb_1420",
  },
  {
    id: "basel-compacts",
    year: 1436,
    tradition: "UTRAQUIST",
    category: "POLITICAL",
    titleSk: "Bazilejské kompaktáty",
    titleEn: "Basel Compacts",
    description: "Agreement between the Council of Basel and Hussites — legal recognition of communion in both kinds.",
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
    description: "Ideological foundation of the early Unity — radical critique of institutional church.",
    sourceId: "Chelcicky_Siet",
  },
  {
    id: "unity-founded",
    year: 1457,
    tradition: "UNITY",
    category: "POLITICAL",
    titleSk: "Založenie Jednoty bratskej",
    titleEn: "Unity of Brethren founded",
    description: "Followers of Petr Chelčický establish the Unitas Fratrum at Kunvald.",
  },
  {
    id: "lukas-sacramental",
    year: 1500,
    tradition: "UNITY",
    category: "DOCUMENT",
    titleSk: "Lukáš Pražský: sakramentálne spisy",
    titleEn: "Lukáš of Prague: sacramental writings",
    description: "Shift from early memorialism to 'spiritual presence' — the mature Unity Eucharistic position.",
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
    description: "Sacramental theology, anti-sacrificial polemic. Three walls of the Romanists demolished.",
    sourceId: "Luther_DeCaptiv_1520",
  },
  {
    id: "formula-missae",
    year: 1523,
    tradition: "LUTHERAN",
    category: "LITURGICAL",
    titleSk: "Luther: Formula Missae",
    titleEn: "Luther: Formula Missae",
    description: "Luther's first liturgical reform — Latin, conservative restructuring of the Mass.",
    sourceId: "Luther_FormMissae_1523",
  },
  {
    id: "deutsche-messe",
    year: 1526,
    tradition: "LUTHERAN",
    category: "LITURGICAL",
    titleSk: "Luther: Deutsche Messe",
    titleEn: "Luther: German Mass",
    description: "Vernacular liturgical reform — hymns replace parts of the ordinary.",
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
    description: "Mature Unity confession of faith — 20 articles. Luther wrote the preface for the Wittenberg edition.",
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
    description: "Confession of the five free royal cities of Upper Hungary — regional reception of Confessio Augustana.",
    sourceId: "ConfPentapol_1549",
  },
  {
    id: "blahoslav-musica",
    year: 1558,
    tradition: "UNITY",
    category: "DOCUMENT",
    titleSk: "Blahoslav: Musica",
    titleEn: "Blahoslav: Musica",
    description: "Hymnological theory of the Unity of Brethren.",
    sourceId: "Blahoslav_Musica",
  },
  {
    id: "conf-heptapolitana",
    year: 1559,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Confessio Heptapolitana",
    titleEn: "Confessio Heptapolitana",
    description: "Confession of the seven mining towns — further regional elaboration.",
    sourceId: "ConfHeptapol_1559",
  },
  {
    id: "samotulsky",
    year: 1561,
    tradition: "UNITY",
    category: "HYMNAL",
    titleSk: "Šamotulský kancionál",
    titleEn: "Szamotuly Hymnal",
    description: "735 songs — Blahoslav's edition, peak of Brethren hymnological achievement.",
    sourceId: "KancSamotul_1561",
  },
  {
    id: "ivancicky",
    year: 1564,
    tradition: "UNITY",
    category: "HYMNAL",
    titleSk: "Ivančický kancionál",
    titleEn: "Ivančice Hymnal",
    description: "745 songs — revised from the Šamotulský. Mature Unity hymnography.",
    sourceId: "KancIvanc_1564",
  },
  {
    id: "conf-scepusiana",
    year: 1569,
    tradition: "LUTHERAN",
    category: "DOCUMENT",
    titleSk: "Confessio Scepusiana",
    titleEn: "Confessio Scepusiana",
    description: "Confession of the Spiš region — the third Hungarian regional confession.",
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
    description: "Ecumenical synthesis — deliberately ambiguous on the Eucharist as political compromise between Lutheran, Utraquist, and Unity positions.",
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
    description: "Standard liturgical language (bibličtina) — shared across traditions.",
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
    description: "Normative Lutheran confessional corpus — Confessio Augustana, Formula Concordiae, and other key texts.",
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
    description: "Neo-Utraquist liturgical order — elevation admonition glosses 'this is my body' in functional-testimonial terms, not metaphysical-ontological.",
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
    description: "Defeat of the Bohemian Protestant estates — end of legal Protestant worship in Bohemia and Moravia.",
  },

  // ── Cithara Sanctorum ──
  {
    id: "cithara-sanctorum",
    year: 1636,
    tradition: "LUTHERAN",
    category: "HYMNAL",
    titleSk: "Cithara Sanctorum (Tranovský)",
    titleEn: "Cithara Sanctorum (Tranovsky)",
    description: "The foundational Slovak Lutheran hymnal — 49% of older Czech repertoire is Utraquist. Key evidence of theological 'Lutheranisation' through editorial intervention.",
    sourceId: "CitharaSanct_1636",
  },
];

/** Sorted chronologically */
export const sortedEvents = [...timelineEvents].sort((a, b) => a.year - b.year);

/** Year range for the timeline */
export const YEAR_MIN = 1400;
export const YEAR_MAX = 1660;
