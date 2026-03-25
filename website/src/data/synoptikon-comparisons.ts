/**
 * Synoptikon — curated comparison pairs for the parallel text viewer.
 *
 * Each comparison aligns segments from two or three traditions side by side.
 * Data is manually curated (not auto-generated from hymnic_evidence.csv)
 * because the parallel viewer requires carefully aligned segments with
 * scholarly annotations.
 *
 * Phase 1: example/placeholder texts — will be filled with verified
 * transcriptions as the research progresses.
 */

// ── Types ──

export interface Segment {
  id: string;
  /** Original-language text (CZ / LA / DE / SK) */
  text: string;
  /** English scholarly translation */
  translation: string;
  /** If this segment was theologically modified relative to a paired column */
  modification?: {
    type: "ADDITION" | "DELETION" | "REPHRASING" | "SUBSTITUTION";
    note: string;
  };
}

export interface Column {
  label: string;
  tradition: "LUTHERAN" | "UTRAQUIST" | "UNITY";
  phase: string;
  sourceId: string;
  year: number;
  originalLanguage: string;
  segments: Segment[];
}

export interface Comparison {
  id: string;
  titleSk: string;
  titleEn: string;
  locusCodes: string[];
  locusLabel: string;
  hymnicFunction: string;
  columns: Column[];
  epistemicStatus: "FACTUAL" | "INTERPRETIVE" | "DEFERRED";
  notesSk: string;
  notesEn: string;
}

// ── Curated Comparisons ──

export const comparisons: Comparison[] = [
  // ─── 1. Eucharist: Lutheranisation of "Pane náš nebeský" ───
  {
    id: "eucharist-pane-nas",
    titleSk: "Eucharistia: Luteranizácia hymnu \u201EPane náš nebeský\u201C",
    titleEn: "Eucharist: Lutheranisation of 'Pane náš nebeský'",
    locusCodes: ["L1.1", "L1.5"],
    locusLabel: "§4.1 Modus Praesentiae + Hymnodická prax",
    hymnicFunction: "CONFESSIONAL",
    columns: [
      {
        label: "Ivančický kancionál (1564)",
        tradition: "UNITY",
        phase: "BLAHOSLAV",
        sourceId: "KancIvanc_1564",
        year: 1564,
        originalLanguage: "CZ",
        segments: [
          {
            id: "iv208-1",
            text: "Chléb náš nebeský, / pokrme života,",
            translation: "Our heavenly bread, / food of life,",
          },
          {
            id: "iv208-2",
            text: "duší nasýcení / hojné a stálé,",
            translation: "nourishment of souls / abundant and enduring,",
          },
          {
            id: "iv208-3",
            text: "duch a duše tvá / duchovně se nám podává,",
            translation: "thy spirit and soul / are spiritually given to us,",
          },
          {
            id: "iv208-4",
            text: "věrným potěšení / v pravdě nemalé.",
            translation: "comfort to the faithful / in truth not small.",
          },
        ],
      },
      {
        label: "Cithara Sanctorum (1636)",
        tradition: "LUTHERAN",
        phase: "CS_TRANOSKY",
        sourceId: "CitharaSanct_1636",
        year: 1636,
        originalLanguage: "CZ",
        segments: [
          {
            id: "cs042-1",
            text: "Pane náš nebeský, / pokrme života,",
            translation: "Our heavenly Lord, / food of life,",
            modification: {
              type: "SUBSTITUTION",
              note: "\u2018Chléb\u2019 (bread) \u2192 \u2018Pane\u2019 (Lord): shifts from sacramental element to personal address",
            },
          },
          {
            id: "cs042-2",
            text: "duší nasýcení / hojné a stálé,",
            translation: "nourishment of souls / abundant and enduring,",
          },
          {
            id: "cs042-3",
            text: "tělo své pravé / v chlebě tělo své dáváš,",
            translation: "thy true body / in bread thy body thou givest,",
            modification: {
              type: "ADDITION",
              note: "Explicit real-presence language inserted: 'tělo své pravé' (thy true body) — absent in the Unity source",
            },
          },
          {
            id: "cs042-4",
            text: "věrným potěšení / v pravdě nemalé.",
            translation: "comfort to the faithful / in truth not small.",
          },
        ],
      },
    ],
    epistemicStatus: "INTERPRETIVE",
    notesSk:
      "Klasický príklad luteranizácie. Tranovský vkladá reálno-prezenčnú slovnú zásobu, ktorá v pôvodnom bratrskom prameni chýba. Duchovná prítomnosť Jednoty je nahradená explicitným luteránskym 'tělo své pravé'.",
    notesEn:
      "Classic Lutheranisation example. Tranovský inserts real-presence vocabulary absent from the original Unity source. The Unity's spiritual-presence framing is replaced with explicit Lutheran 'thy true body' language.",
  },

  // ─── 2. Eucharist: Elevation rubric in Agenda Česká ───
  {
    id: "eucharist-elevation",
    titleSk: "Eucharistia: Rubrika elevácie v Agende Českej",
    titleEn: "Eucharist: Elevation rubric in the Czech Agenda",
    locusCodes: ["L1.1", "L1.3", "L1.4"],
    locusLabel: "§4.1 Reálna prítomnosť + Obetný charakter",
    hymnicFunction: "LITURGICAL_PROPER",
    columns: [
      {
        label: "Agenda Česká (1581)",
        tradition: "UTRAQUIST",
        phase: "NEO",
        sourceId: "AgCeska_1581",
        year: 1581,
        originalLanguage: "CZ",
        segments: [
          {
            id: "ac-elev-1",
            text: "Kněz pozdvihne chléb a kalich / před obcí shromážděnou,",
            translation: "The priest elevates bread and chalice / before the assembled congregation,",
          },
          {
            id: "ac-elev-2",
            text: "řka: Toto jest tělo mé, / kteréž se za vás vydává.",
            translation: "saying: This is my body, / which is given for you.",
          },
          {
            id: "ac-elev-3",
            text: "Též kalich pozdvihna, dí: / Tento kalich jest nová smlouva / v krvi mé.",
            translation: "Likewise lifting the chalice, says: / This cup is the new covenant / in my blood.",
          },
        ],
      },
      {
        label: "Formula Missae (Luther, 1523)",
        tradition: "LUTHERAN",
        phase: "CONFESSIONAL",
        sourceId: "Luther_FormMissae_1523",
        year: 1523,
        originalLanguage: "LA",
        segments: [
          {
            id: "fm-elev-1",
            text: "Elevationem... non tollimus, / sed retinemus,",
            translation: "The elevation... we do not abolish, / but retain,",
          },
          {
            id: "fm-elev-2",
            text: "Hoc est corpus meum, / quod pro vobis datur.",
            translation: "This is my body, / which is given for you.",
          },
          {
            id: "fm-elev-3",
            text: "Hic calix novum testamentum / est in meo sanguine.",
            translation: "This cup is the new testament / in my blood.",
            modification: {
              type: "REPHRASING",
              note: "Identical verba institutionis, but Luther later (Deutsche Messe 1526) dropped the elevation entirely",
            },
          },
        ],
      },
    ],
    epistemicStatus: "INTERPRETIVE",
    notesSk:
      "Agenda Česká zachováva eleváciu z katolíckej tradície — liturgický úkon prezrádza reálno-prezenčnú teológiu, aj keď normatívne utrakvistické dokumenty boli v tejto otázke opatrnejšie. Luther v Formula Missae (1523) eleváciu ponechal, no v Deutsche Messe (1526) ju vypustil.",
    notesEn:
      "The Czech Agenda preserves the elevation from Catholic tradition — the liturgical act reveals real-presence theology even when normative Utraquist documents were more cautious on this point. Luther retained it in Formula Missae (1523) but dropped it in Deutsche Messe (1526).",
  },

  // ─── 3. Ecclesiology: Ministry and Apostolic Succession ───
  {
    id: "ecclesiology-ministry",
    titleSk: "Ekleziológia: Služba a apoštolská postupnosť",
    titleEn: "Ecclesiology: Ministry and Apostolic Succession",
    locusCodes: ["L2.3", "L2.1"],
    locusLabel: "§4.2 Successio Apostolica",
    hymnicFunction: "CONFESSIONAL",
    columns: [
      {
        label: "Confessio Fidei (1535)",
        tradition: "UNITY",
        phase: "CONFESSIO_1535",
        sourceId: "ConfFidei_1535",
        year: 1535,
        originalLanguage: "LA",
        segments: [
          {
            id: "cf-min-1",
            text: "Ministerium nostrum a Christo / per apostolos ordinatum,",
            translation: "Our ministry ordained by Christ / through the apostles,",
          },
          {
            id: "cf-min-2",
            text: "per impositionem manuum / continuatum et servatum,",
            translation: "continued and preserved / through the laying on of hands,",
          },
          {
            id: "cf-min-3",
            text: "non ab episcopis Romanis, / sed ab antiqua ecclesia.",
            translation: "not from Roman bishops, / but from the ancient church.",
          },
        ],
      },
      {
        label: "Confessio Augustana, art. XIV (1530)",
        tradition: "LUTHERAN",
        phase: "CONFESSIONAL",
        sourceId: "BookConcord_1580",
        year: 1530,
        originalLanguage: "LA",
        segments: [
          {
            id: "ca14-1",
            text: "De ordine ecclesiastico docent,",
            translation: "Concerning church order they teach,",
          },
          {
            id: "ca14-2",
            text: "quod nemo debeat in ecclesia / publice docere aut sacramenta administrare",
            translation: "that no one should in the church / publicly teach or administer the sacraments",
          },
          {
            id: "ca14-3",
            text: "nisi rite vocatus.",
            translation: "unless duly called.",
            modification: {
              type: "REPHRASING",
              note: "'rite vocatus' (duly called) — deliberately vague on ordination mechanics, unlike the Unity's explicit succession claim",
            },
          },
        ],
      },
    ],
    epistemicStatus: "FACTUAL",
    notesSk:
      "Jednota bratská trvala na vlastnej apoštolskej postupnosti 'per impositionem manuum' — nezávislej od Ríma. Luteráni v CA XIV formulovali minimalisticky: 'rite vocatus' bez špecifikácie mechanizmu ordinácie. Toto bol bod trvalého napätia.",
    notesEn:
      "The Unity of Brethren insisted on their own apostolic succession 'per impositionem manuum' — independent of Rome. Lutherans in CA XIV formulated minimally: 'rite vocatus' without specifying ordination mechanics. This was a point of lasting tension.",
  },

  // ─── 4. Soteriology: Justification in Hymnic Form ───
  {
    id: "soteriology-justification",
    titleSk: "Soteriológia: Ospravedlnenie v hymnickom podaní",
    titleEn: "Soteriology: Justification in Hymnic Form",
    locusCodes: ["L3.1", "L3.2"],
    locusLabel: "§4.3 Iustificatio + Sanctificatio",
    hymnicFunction: "CATECHETICAL",
    columns: [
      {
        label: "Šamotulský kancionál (1561)",
        tradition: "UNITY",
        phase: "BLAHOSLAV",
        sourceId: "KancSamotul_1561",
        year: 1561,
        originalLanguage: "CZ",
        segments: [
          {
            id: "sam-just-1",
            text: "Vírou živou v Krista Pána / ospravedlnění docházíme,",
            translation: "Through living faith in Christ the Lord / we attain justification,",
          },
          {
            id: "sam-just-2",
            text: "však skutky dobré z víry plynú, / bez nich víra mrtvá jest.",
            translation: "yet good works flow from faith, / without them faith is dead.",
          },
          {
            id: "sam-just-3",
            text: "Protož v kázni a v řádu / choďme, bratří, spolu.",
            translation: "Therefore in discipline and order / let us walk together, brethren.",
          },
        ],
      },
      {
        label: "Cithara Sanctorum (1636)",
        tradition: "LUTHERAN",
        phase: "CS_TRANOSKY",
        sourceId: "CitharaSanct_1636",
        year: 1636,
        originalLanguage: "CZ",
        segments: [
          {
            id: "cs-just-1",
            text: "Jedině z milosti Boží / skrze víru spasení máme,",
            translation: "Solely by God's grace / through faith we have salvation,",
            modification: {
              type: "REPHRASING",
              note: "'jedině z milosti' (solely by grace) — strengthens sola gratia framing vs. the Unity's \"living faith\" language",
            },
          },
          {
            id: "cs-just-2",
            text: "ne z skutků, ne z zásluh lidských, / dar to jest, ne mzda naše.",
            translation: "not from works, not from human merits, / it is a gift, not our wage.",
            modification: {
              type: "ADDITION",
              note: "Explicit anti-works polemic added — absent in the Unity version which affirms works flowing from faith",
            },
          },
          {
            id: "cs-just-3",
            text: "Protož v pokoře a v vděčnosti / slavme Pána svého.",
            translation: "Therefore in humility and gratitude / let us glorify our Lord.",
            modification: {
              type: "SUBSTITUTION",
              note: "Unity's 'v kázni a v řádu' (in discipline and order) -> 'v pokoře a v vděčnosti' (in humility and gratitude): ethical-communal accent replaced by devotional-individual",
            },
          },
        ],
      },
    ],
    epistemicStatus: "INTERPRETIVE",
    notesSk:
      "Jednota bratská zdôrazňovala 'živú vieru' spojenú so skutkami a komunitnou disciplínou. Luteránsky variant v Cithare explicitne posilňuje sola gratia a odstraňuje etický akcent Jednoty. Záverečná výzva sa mení z komunitnej disciplíny na individuálnu zbožnosť.",
    notesEn:
      "The Unity of Brethren emphasised 'living faith' bound to works and communal discipline. The Lutheran variant in Cithara explicitly strengthens sola gratia and removes the Unity's ethical accent. The closing exhortation shifts from communal discipline to individual devotion.",
  },

  // ─── 5. Scripture & Tradition: Hussite Four Articles -> Confessio Bohemica ───
  {
    id: "scripture-four-articles",
    titleSk: "Písmo a tradícia: Od Pražských artikulov ku Confessio Bohemica",
    titleEn: "Scripture & Tradition: From the Four Articles to Confessio Bohemica",
    locusCodes: ["L4.1", "L4.2"],
    locusLabel: "§4.4 Auctoritas Scripturae",
    hymnicFunction: "CONFESSIONAL",
    columns: [
      {
        label: "Štyri pražské artikuly (1420)",
        tradition: "UTRAQUIST",
        phase: "OLD",
        sourceId: "ArtPrag_1420",
        year: 1420,
        originalLanguage: "LA",
        segments: [
          {
            id: "4art-1",
            text: "Verbum Dei libere praedicetur / per regnum Bohemiae,",
            translation: "The Word of God shall be freely preached / throughout the Kingdom of Bohemia,",
          },
          {
            id: "4art-2",
            text: "Sacramentum Eucharistiae / sub utraque specie / omnibus fidelibus ministretur.",
            translation: "The Sacrament of the Eucharist / under both kinds / shall be administered to all the faithful.",
          },
        ],
      },
      {
        label: "Confessio Bohemica (1575)",
        tradition: "UTRAQUIST",
        phase: "NEO",
        sourceId: "ConfBohem_1575",
        year: 1575,
        originalLanguage: "LA",
        segments: [
          {
            id: "cb-1",
            text: "Sacram Scripturam / pro unica regula fidei / et vitae agnoscimus,",
            translation: "We acknowledge Sacred Scripture / as the sole rule of faith / and life,",
            modification: {
              type: "REPHRASING",
              note: "From 'free preaching' (1420) to 'sola scriptura' principle (1575) — 155 years of doctrinal development under Lutheran influence",
            },
          },
          {
            id: "cb-2",
            text: "Sub utraque specie / corpus et sanguinem Domini / administrari debere confitemur.",
            translation: "We confess that under both kinds / the body and blood of the Lord / ought to be administered.",
            modification: {
              type: "REPHRASING",
              note: "Retained from Four Articles but now with explicit 'corpus et sanguinem' (body and blood) — closer to Lutheran real-presence formulation",
            },
          },
        ],
      },
    ],
    epistemicStatus: "FACTUAL",
    notesSk:
      "Medzi Pražskými artikulmi (1420) a Confessio Bohemica (1575) prebehla zásadná doktrínna evolúcia. Požiadavka 'slobodného kázania' sa transformovala na princíp sola scriptura. Sub utraque zostáva, ale s explicitnejšou reálno-prezenčnou terminológiou — stopa luteránskeho vplyvu.",
    notesEn:
      "Between the Four Articles (1420) and the Confessio Bohemica (1575) a fundamental doctrinal evolution occurred. The demand for 'free preaching' transformed into the sola scriptura principle. Sub utraque remains, but with more explicit real-presence terminology — a trace of Lutheran influence.",
  },

  // ─── 6. Eucharist: Three-Tradition Comparison (sub utraque specie) ───
  {
    id: "eucharist-sub-utraque",
    titleSk: "Eucharistia: Sub utraque specie naprieč tradíciami",
    titleEn: "Eucharist: Sub utraque specie across traditions",
    locusCodes: ["L1.2", "L1.1"],
    locusLabel: "§4.1 Sub utraque specie + Modus Praesentiae",
    hymnicFunction: "CONFESSIONAL",
    columns: [
      {
        label: "Štyri pražské artikuly (1420)",
        tradition: "UTRAQUIST",
        phase: "OLD",
        sourceId: "ArtPrag_1420",
        year: 1420,
        originalLanguage: "LA",
        segments: [
          {
            id: "4art-utr-1",
            text: "Sub utraque specie, / panis scilicet et vini,",
            translation: "Under both kinds, / namely of bread and wine,",
          },
          {
            id: "4art-utr-2",
            text: "omnibus fidelibus Christi / libere ministretur.",
            translation: "it shall be freely administered / to all the faithful of Christ.",
          },
        ],
      },
      {
        label: "Confessio Augustana, art. XXII (1530)",
        tradition: "LUTHERAN",
        phase: "CONFESSIONAL",
        sourceId: "BookConcord_1580",
        year: 1530,
        originalLanguage: "LA",
        segments: [
          {
            id: "ca22-1",
            text: "Laicis datur utraque species / sacramenti in coena Domini,",
            translation: "To the laity both kinds of the sacrament / are given in the Lord's Supper,",
          },
          {
            id: "ca22-2",
            text: "quia hic mos habet mandatum Domini: / Bibite ex hoc omnes.",
            translation: "because this practice has the Lord's command: / Drink of this, all of you.",
            modification: {
              type: "REPHRASING",
              note: "Lutheran grounding is biblical mandate (Matt 26:27), not a reform demand as in the Four Articles",
            },
          },
        ],
      },
      {
        label: "Confessio Fidei (1535)",
        tradition: "UNITY",
        phase: "CONFESSIO_1535",
        sourceId: "ConfFidei_1535",
        year: 1535,
        originalLanguage: "LA",
        segments: [
          {
            id: "cf-utr-1",
            text: "Utramque speciem / panis et vini / in sacramento coenae",
            translation: "Both kinds / of bread and wine / in the sacrament of the supper",
          },
          {
            id: "cf-utr-2",
            text: "omnibus communicantibus / iuxta institutionem Christi / dari oportere credimus.",
            translation: "we believe ought to be given / to all communicants / according to Christ's institution.",
          },
        ],
      },
    ],
    epistemicStatus: "FACTUAL",
    notesSk:
      "Sub utraque specie bolo jediným bodom, na ktorom sa všetky tri tradície plne zhodovali — prijímanie pod obojím pre laikov. Líšili sa však v teologickom zdôvodnení: utrakvisti ako reformná požiadavka, luteráni ako biblický mandát (Mt 26,27), Jednota bratská ako vernosť Kristovmu ustanoveniu.",
    notesEn:
      "Sub utraque specie was the one point on which all three traditions fully agreed — communion under both kinds for the laity. They differed, however, in theological grounding: Utraquists as a reform demand, Lutherans as biblical mandate (Matt 26:27), Unity as fidelity to Christ's institution.",
  },
];

// ── Helper Functions ──

export function getComparisonById(id: string): Comparison | undefined {
  return comparisons.find((c) => c.id === id);
}

export function getComparisonsByLocus(locusCode: string): Comparison[] {
  return comparisons.filter((c) => c.locusCodes.includes(locusCode));
}

/** Locus code -> colour mapping for diff highlights */
export const LOCUS_COLOURS: Record<string, { bg: string; border: string; label: string }> = {
  L1: { bg: "bg-lutheran/10", border: "border-lutheran/40", label: "Eucharistia" },
  L2: { bg: "bg-utraquist/10", border: "border-utraquist/40", label: "Ekleziológia" },
  L3: { bg: "bg-unity/10", border: "border-unity/40", label: "Soteriológia" },
  L4: { bg: "bg-parchment-400/15", border: "border-parchment-500/40", label: "Písmo a tradícia" },
};

export const MODIFICATION_LABELS: Record<string, { sk: string; en: string; icon: string }> = {
  ADDITION: { sk: "Pridanie", en: "Addition", icon: "+" },
  DELETION: { sk: "Vypustenie", en: "Deletion", icon: "−" },
  REPHRASING: { sk: "Preformulovanie", en: "Rephrasing", icon: "~" },
  SUBSTITUTION: { sk: "Nahradenie", en: "Substitution", icon: "↔" },
};
