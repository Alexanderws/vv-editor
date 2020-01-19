import { FUNCTION } from "./functions.data";

/*export const CONTEXT = Object.freeze({
  kommeRundtHjemme: "kommeRundtHjemme",
  kommeRundtUtenforHjemmet: "kommeRundtUtenforHjemmet",
  kollektivTransport: "kollektivTransport",
  handleMat: "handleMat",
  brukeInternett: "brukeInternett",
  deltaSamfunn: "deltaSamfunn",
  hobby: "hobby",
  fysiskAktivitet: "fysiskAktivitet",
  sosialisere: "sosialisere",
  kontrollTanker: "kontrollTanker",
  endreKosthold: "endreKosthold",
  personligStell: "personligStell"
});*/

export const CONTEXT = Object.freeze({
  spiseTilpassetMat: "spiseTilpassetMat",
  godFysiskForm: "godFysiskForm",
  slutteRøykSnus: "slutteRøykSnus",
  handleMat: "handleMat",
  klareSpise: "klareSpise",
  kleMeg: "kleMeg",
  personligHygiene: "personligHygiene",
  brukeInternett: "brukeInternett",
  forflytteMegHjemme: "forflytteMegHjemme",
  forflytteMegUtenfor: "forflytteMegUtenfor",
  brukeKollektivtransport: "brukeKollektivtransport",
  skaffeHobby: "skaffeHobby",
  treffeFolk: "treffeFolk",
  bidraSamfunn: "bidraSamfunn"
});

export const contexts: any[] = [
  {
    id: CONTEXT.spiseTilpassetMat,
    text: "Spise mat som er tilpasset min situasjon",
    textDefinite: "spise mat som er tilpasset min situasjon",
    hindrances: [
      FUNCTION.sykdom,
      FUNCTION.dårligMatlyst,
      FUNCTION.overvektig
    ]
  },
  {
    id: CONTEXT.godFysiskForm,
    text: "Fortsette å være i god fysisk form",
    textDefinite: "fortsette å være i god fysisk form",
    hindrances: []
  },
  {
    id: CONTEXT.slutteRøykSnus,
    text: "Slutte med røyk eller snus",
    textDefinite: "slutte med røyk eller snus",
    hindrances: []
  },
  {
    id: CONTEXT.handleMat,
    text: "Handle mat og andre varer",
    textDefinite: "handle mat og andre varer",
    hindrances: [
      FUNCTION.ikkeKrefter,
      FUNCTION.trøbleteVei,
      FUNCTION.langtGå,
      FUNCTION.reddFalle,
      FUNCTION.psykiskeProblemer,
      FUNCTION.dårligHukommelse,
      FUNCTION.forstårIkkeHandleNett
    ]
  },
  {
    id: CONTEXT.klareSpise,
    text: "Klare å spise",
    textDefinite: "klare å spise",
    hindrances: [
      FUNCTION.dårligMatlyst,
      FUNCTION.dårligSyn,
      FUNCTION.huskerIkkeSpise
    ]
  },
  {
    id: CONTEXT.kleMeg,
    text: "Kle meg selv",
    textDefinite: "kle meg selv",
    hindrances: [
      FUNCTION.ikkeKrefter,
      FUNCTION.reddFalle,
      FUNCTION.dårligHukommelse,
      FUNCTION.redusertBevegelighet,
      FUNCTION.smerter
    ]
  },
  {
    id: CONTEXT.personligHygiene,
    text: "Ivareta personlig hygiene",
    textDefinite: "ivareta personlig hygiene",
    hindrances: [
      FUNCTION.reddFalle,
      FUNCTION.psykiskeProblemer,
      FUNCTION.ikkeKrefter,
      FUNCTION.redusertBevegelighet,
      FUNCTION.smerter
    ]
  },
  {
    id: CONTEXT.brukeInternett,
    text: "Bruke internett, sosiale medier eller apper",
    textDefinite: "bruke internett, sosiale medier eller apper",
    hindrances: [
      FUNCTION.dårligHukommelse,
      FUNCTION.dårligSyn,
      FUNCTION.reddTrykkeFeil,
      FUNCTION.ikkeLærtDigitaleVerktøy
    ]
  },
  {
    id: CONTEXT.forflytteMegHjemme,
    text: "Forflytte meg rundt i hjemmet mitt",
    textDefinite: "Forflytte meg rundt i hjemmet ditt",
    hindrances: [
      FUNCTION.reddFalle,
      FUNCTION.redusertBevegelighet,
      FUNCTION.hjemmetTilrettelegging
    ]
  },
  {
    id: CONTEXT.forflytteMegUtenfor,
    text: "Forflytte meg rundt utenfor hjemmet mitt",
    textDefinite: "forflytte meg rundt utenfor hjemmet ditt",
    hindrances: [
      FUNCTION.psykiskeProblemer,
      FUNCTION.reddFalle,
      FUNCTION.redusertBevegelighet,
      FUNCTION.utendørsTilrettelegging,
      FUNCTION.reddGåMegBort
    ]
  },
  {
    id: CONTEXT.brukeKollektivtransport,
    text: "Bruke kollektivtransport",
    textDefinite: "bruke kollektivtransport",
    hindrances: [
      FUNCTION.trøbleteVei,
      FUNCTION.reddFalle,
      FUNCTION.psykiskeProblemer,
      FUNCTION.dårligHukommelse,
      FUNCTION.redusertBevegelighet,
      FUNCTION.langtHoldeplassen,
      FUNCTION.kommerIkkeInnBussen,
      FUNCTION.forstårIkkeKjøperBillett
    ]
  },
  {
    id: CONTEXT.skaffeHobby,
    text: "Skaffe meg en hobby",
    textDefinite: "skaffe deg en hobby",
    hindrances: []
  },
  {
    id: CONTEXT.treffeFolk,
    text: "Treffe folk",
    textDefinite: "treffe folk",
    hindrances: [
      FUNCTION.psykiskeProblemer,
      FUNCTION.dårligHukommelse,
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.nyBydelen
    ]
  },
  {
    id: CONTEXT.bidraSamfunn,
    text: "Bidra i samfunnet og hjelpe andre",
    textDefinite: "bidra i samfunnet og hjelpe andre",
    hindrances: []
  }
];
