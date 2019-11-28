export const FUNCTION = Object.freeze({
  bevege: "bevege",
  balanse: "balanse",
  smerter: "smerter",
  nedstemt: "nedstemt",
  overfalt: "overfalt",
  syn: "syn",
  hørsel: "hørsel",
  digitalKompetanse: "digitalKompetanse",
  hukommelse: "hukommelse"
});

export const functions = [
  {
    id: FUNCTION.bevege,
    text: "Jeg har problemer å bevege noen deler av kroppen"
  },
  { id: FUNCTION.balanse, text: "Jeg har dårlig balanse" },
  {
    id: FUNCTION.smerter,
    text: "Jeg har smerter i hele eller deler av kroppen"
  },
  {
    id: FUNCTION.nedstemt,
    text:
      "Jeg føler meg engstelig / nedstemt / har vansker med å kommunisere"
  },
  { id: FUNCTION.overfalt, text: "Jeg er redd for å bli overfalt" },
  { id: FUNCTION.syn, text: "Jeg har nedsatt syn" },
  { id: FUNCTION.hørsel, text: "Jeg har nedsatt hørsel" },
  {
    id: FUNCTION.digitalKompetanse,
    text: "Jeg er ikke så flink med mobil, data og internett"
  },
  {
    id: FUNCTION.hukommelse,
    text: "Jeg har dårlig hukommelse / stedsans"
  }
];

export const functionsOld = [
  {
    id: "id:function/bevegelighet",
    name: "bevegelighet",
    description:
      "redusert bevegelse av ulike årsaker (smerte, muskel, skjelett)"
  },
  {
    id: "id:function/balanse",
    name: "balanse",
    description: "dårlig balanse / redd for å falle"
  },
  {
    id: "id:function/angstDepKom",
    name: "angstDepKom",
    description: "angst / nedstemt / vansker med å kommunisere"
  },
  {
    id: "id:function/syn",
    name: "syn",
    description: "dårlig syn"
  },
  {
    id: "id:function/hørsel",
    name: "hørsel",
    description: "dårlig hørsel"
  },
  {
    id: "id:function/digitalKompetanse",
    name: "digitalKompetanse",
    description: "ikke flink med PC, internett og lignende"
  },
  {
    id: "id:function/ensomhet",
    name: "ensomhet",
    description: "ensom"
  },
  {
    id: "id:function/hukommelse",
    name: "hukommelse",
    description: "hukommelse /stedsans"
  },
  {
    id: "id:function/utmattelse",
    name: "utmattelse",
    description: "utmattelse"
  }
];
