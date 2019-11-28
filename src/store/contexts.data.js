import { FUNCTION } from "./functions.data";

export const CONTEXT = Object.freeze({
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
});

export const contexts = [
  {
    id: CONTEXT.kommeRundtHjemme,
    text: "Komme meg rundt i mitt eget hjem",
    textDefinite: "komme deg rundt i eget hjem",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.syn
    ]
  },
  {
    id: CONTEXT.kommeRundtUtenforHjemmet,
    text: "Komme meg fra A til B utenfor hjemmet",
    textDefinite: "komme deg fra A til B utenfor hjemmet",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.nedstemt,
      FUNCTION.overfalt,
      FUNCTION.syn,
      FUNCTION.hørsel
    ]
  },
  {
    id: CONTEXT.kollektivTransport,
    text: "Bruke kollektivtransport og drosje",
    textDefinite: "bruke kollektivtransport og drosje",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.overfalt,
      FUNCTION.syn,
      FUNCTION.hørsel,
      FUNCTION.digitalKompetanse
    ]
  },
  {
    id: CONTEXT.handleMat,
    text: "Handle mat og andre varer",
    textDefinite: "handle mat og andre varer",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.nedstemt,
      FUNCTION.overfalt,
      FUNCTION.syn,
      FUNCTION.digitalKompetanse,
      FUNCTION.hukommelse
    ]
  },
  {
    id: CONTEXT.brukeInternett,
    text:
      "Bruke mobil, internett, f.eks. e-post, nettbank, Facebook e.l.",
    textDefinite:
      "bruke mobil, internett, f.eks. e-post, nettbank, Facebook e.l.",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.nedstemt,
      FUNCTION.syn,
      FUNCTION.digitalKompetanse
    ]
  },
  {
    id: CONTEXT.deltaSamfunn,
    text: "Delta i samfunnet",
    textDefinite: "delta i samfunnet",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.nedstemt,
      FUNCTION.syn,
      FUNCTION.hørsel,
      FUNCTION.digitalKompetanse
    ]
  },
  {
    id: CONTEXT.hobby,
    text: "Drive med hobby",
    textDefinite: "drive med hobby",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.nedstemt,
      FUNCTION.syn,
      FUNCTION.digitalKompetanse
    ]
  },
  {
    id: CONTEXT.fysiskAktivitet,
    text: "Være i fysisk aktivitet",
    textDefinite: "være i fysisk aktivitet",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.nedstemt,
      FUNCTION.hukommelse,
      FUNCTION.overfalt,
      FUNCTION.syn
    ]
  },
  {
    id: CONTEXT.sosialisere,
    text: "Være sammen med folk",
    textDefinite: "være sammen med folk",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.nedstemt,
      FUNCTION.syn,
      FUNCTION.hørsel,
      FUNCTION.digitalKompetanse
    ]
  },
  {
    id: CONTEXT.kontrollTanker,
    text: "Ha kontroll på tankene mine",
    textDefinite: "ha kontroll på tankene dine",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.syn
    ]
  },
  {
    id: CONTEXT.endreKosthold,
    text: "Endre kostholdet mitt",
    textDefinite: "endre kostholdet ditt",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.smerter,
      FUNCTION.nedstemt,
      FUNCTION.syn
    ]
  },
  {
    id: CONTEXT.personligStell,
    text: "Ivareta personlig stell",
    textDefinite: "Ivareta personlig stell",
    hindrances: [
      FUNCTION.bevege,
      FUNCTION.balanse,
      FUNCTION.smerter,
      FUNCTION.nedstemt,
      FUNCTION.syn
    ]
  }
];
