import { FUNCTION } from "./functions.data";
import { CONTEXT } from "./contexts.data";

export const TREATMENT = Object.freeze({
  kompenserende: "kompenserende",
  behandlende: "behandlende",
  forebyggende: "forebyggende"
});

export interface Service {
  id: string;
  name: string;
  description: string;
  moreInformationURL: string;
  treatment: string;
  contexts: any[];
  functions: string[];
}

export const services: Service[] = [
  {
    id: "id:service/braMatKurs",
    name: "Bra Mat kurs",
    description: "SMFS",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.spiseTilpassetMat, score: 2 }],
    functions: [FUNCTION.sykdom, FUNCTION.overvektig]
  },
  {
    id: "id:service/matkursForNybegynnere",
    name: "Matkurs for nybegynnere",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: []
  },
  {
    id: "id:service/seniorveileder",
    name: "Seniorveileder",
    description: "",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.spiseTilpassetMat, score: 2 },
      { name: CONTEXT.handleMat, score: 2 },
      { name: CONTEXT.klareSpise, score: 2 },
      { name: CONTEXT.kleMeg, score: 2 },
      { name: CONTEXT.personligHygiene, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 }
    ],
    functions: [
      FUNCTION.sykdom,
      FUNCTION.overvektig,
      FUNCTION.dårligMatlyst,
      FUNCTION.ikkeKrefter,
      FUNCTION.trøbleteVei,
      FUNCTION.langtGå,
      FUNCTION.reddFalle,
      FUNCTION.psykiskeProblemer,
      FUNCTION.dårligHukommelse,
      FUNCTION.forstårIkkeHandleNett,
      FUNCTION.smerter,
      FUNCTION.redusertBevegelighet,
      FUNCTION.hjemmetTilrettelegging,
      FUNCTION.utendørsTilrettelegging,
      FUNCTION.reddGåMegBort,
      FUNCTION.forstårIkkeKjøperBillett,
      FUNCTION.kommerIkkeInnBussen,
      FUNCTION.langtHoldeplassen,
      FUNCTION.nyBydelen
    ]
  },
  {
    id: "id:service/gratisTrening",
    name: "Gratis trening",
    description: "SFMS",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: []
  },
  {
    id: "id:service/linedanceKurs",
    name: "Linedance kurs",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.godFysiskForm, score: 1 },
      { name: CONTEXT.skaffeHobby, score: 1 }
    ],
    functions: []
  },
  {
    id: "id:service/fallforebyggendeTreningStovnerEldresenter",
    name: "Fallforebyggende gruppetrening",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: []
  },
  {
    id: "id:service/stovnerEldresenter",
    name: "Fallforebyggende gruppetrening",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.treffeFolk, score: 1 },
      { name: CONTEXT.bidraSamfunn, score: 1 },
      { name: CONTEXT.skaffeHobby, score: 1 },
      { name: CONTEXT.godFysiskForm, score: 2 }
    ],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.redusertBevegelighet,
      FUNCTION.kommerIkkeInnBussen,
      FUNCTION.reddFalle,
      FUNCTION.langtGå,
      FUNCTION.langtHoldeplassen
    ]
  },
  {
    id: "id:service/frivilligNo",
    name: "Frivillig.no",
    description: "Oslo",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.bidraSamfunn, score: 2 }],
    functions: []
  },
  {
    id: "id:service/rødeKors",
    name: "Røde Kors",
    description: "",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.bidraSamfunn, score: 2 }],
    functions: []
  },
  {
    id: "id:service/fallforebyggendeTreningFolkvang",
    name: "Fallforebyggende gruppetrening",
    description: "Folkvang",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: []
  },
  {
    id: "id:service/stovner60Pluss",
    name: "Stovner 60pluss",
    description: "Gåturer",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: []
  },
  {
    id: "id:service/stovnerStyrke60Pluss",
    name: "Stovner Styrke 60pluss",
    description: "Styrketrening",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: []
  },
  {
    id: "id:service/vestliILVolleyball60Pluss",
    name: "Vestli IL Volleyball 60pluss",
    description: "Volleyball",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: []
  },
  {
    id: "id:service/tobakkavvenning",
    name: "Tobakkavvenning",
    description: "SFMS",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.slutteRøykSnus, score: 2 }],
    functions: []
  },
  {
    id: "id:service/varerBestiltHjem",
    name: "Varer bestilt hjem",
    description: "",
    moreInformationURL: "",
    treatment: TREATMENT.kompenserende,
    contexts: [{ name: CONTEXT.handleMat, score: 2 }],
    functions: [
      FUNCTION.ikkeKrefter,
      FUNCTION.trøbleteVei,
      FUNCTION.langtGå,
      FUNCTION.reddFalle
    ]
  },
  {
    id: "id:service/hjelpemidler",
    name: "Varer bestilt hjem",
    description: "",
    moreInformationURL: "",
    treatment: TREATMENT.kompenserende,
    contexts: [{ name: CONTEXT.handleMat, score: 2 }],
    functions: [
      FUNCTION.ikkeKrefter,
      FUNCTION.trøbleteVei,
      FUNCTION.langtGå,
      FUNCTION.reddFalle
    ]
  },
  {
    id: "id:service/besøkstjeneste",
    name: "Besøkstjeneste",
    description:
      "En besøksvenn kommer på regelmessig besøk til personer som av ulike grunner har behov for besøk i deres hjem eller være turfølge. Besøkstjenesten ønsker å bidra til økt livskvalitet og trivsel for innbyggere i Bydel Stovner.",
    moreInformationURL: "stovner frivillig / røde kors",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.psykiskeProblemer
    ]
  },
  {
    id: "id:service/ledsagerbevis",
    name: "Ledsagerbevis",
    description:
      "Tilbudet er for deg som har varige fysiske eller psykiske funksjonshemninger (minst to års varighet) hvor du kan søke om ha med deg en ledsager. Med et ledsagerbevis slipper ledsageren din å betale for sin billett på for eksempel offentlig transport eller kulturarrangementer.",
    moreInformationURL: "",
    treatment: TREATMENT.kompenserende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 }
    ],
    functions: [
      FUNCTION.kommerIkkeInnBussen,
      FUNCTION.redusertBevegelighet,
      FUNCTION.reddGåMegBort
    ]
  },
  {
    id: "id:service/raskPsykiskHelsehjelp",
    name: "Rask psykisk helsehjelp",
    description:
      "Tilbudet er for deg over 16 år med lettere former for angst eller depresjon. Vi er et team som består av psykolog, ergoterapeut og psykiatriske sykepleiere, og du kan ta direkte kontakt med oss.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.psykiskeProblemer]
  },
  {
    id: "id:service/trygghetsalarm",
    name: "Trygghetsalarm",
    description:
      "Tilbudet er for deg som har behov for en stasjonær trygghetsalarm instalert i hjemmet ditt, slik at du kan tilkalle hjelp i akutte situasjoner når som helst på døgnet. Alarmknappen kan bæres på håndledd eller i snor rundt halsen og alle over 75 år kan få denne uten behovsvurdering.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 }
    ],
    functions: [
      FUNCTION.reddFalle,
      FUNCTION.dårligHukommelse,
      FUNCTION.reddGåMegBort
    ]
  },
  {
    id: "id:service/hjelpemidlerForflytning",
    name: "Midlertidig lån av hjelpemidler for forflytning",
    description:
      "Har du midlertidig behov for å låne hjelpemidler til forflytning som krykker, rullator, rullestol og kjøreskinner kan dette lånes gratis hos Hjelpemiddelformidlingen i Oslo kommune. Du trenger ikke å gjøre avtale på forhånd.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.handleMat, score: 2 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 }
    ],
    functions: [
      FUNCTION.reddFalle,
      FUNCTION.hjemmetTilrettelegging,
      FUNCTION.utendørsTilrettelegging,
      FUNCTION.redusertBevegelighet
    ]
  },
  {
    id: "id:service/hjelpemidlerBad",
    name: "Midlertidig lån av hjelpemidler for bad og toalett",
    description:
      "Har du midlertidig behov for å låne hjelpemidler for bad og toalett som; badekarbrett, dusjstol og toalettstol dette lånes gratis hos Hjelpemiddelformidlingen i Oslo kommune. Du trenger ikke å gjøre avtale på forhånd.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.kleMeg, score: 2 },
      { name: CONTEXT.personligHygiene, score: 2 }
    ],
    functions: [
      FUNCTION.redusertBevegelighet,
      FUNCTION.reddFalle,
      FUNCTION.ikkeKrefter
    ]
  },
  {
    id: "id:service/hjelpemidlerDaglig",
    name: "Midlertidig lån av hjelpemidler for daglige gjøremål",
    description:
      "Har du midlertidig behov for å låne hjelpemiddel som forenkler daglige gjøremål som; gåbord og arbeidstol kan dette lånes gratis hos Hjelpemiddelformidlingen i Oslo kommune. Du trenger ikke gjøre avtale på forhånd.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.klareSpise, score: 2 }],
    functions: [
      FUNCTION.hjemmetTilrettelegging,
      FUNCTION.ikkeKrefter,
      FUNCTION.reddFalle,
      FUNCTION.redusertBevegelighet
    ]
  },
  {
    id: "id:service/balansekurs",
    name: "Balansekurs",
    description:
      "Tilbudet er for deg som er redd for å falle. Du får styrke- og balansetrening, fokus på kosthold og en plan for videre aktivitet ved kursslutt. Du kan få dekket pasientreise hvis du har behov for det.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 1 },
      { name: CONTEXT.treffeFolk, score: 1 }
    ],
    functions: [FUNCTION.redusertBevegelighet, FUNCTION.reddFalle]
  },
  {
    id: "id:service/vurderingsteam",
    name: "Kontaktpunkt for helse- og omsorgstjenester i Bydel Stovner",
    description:
      "Kontaktpunktet er for deg som har behov for å komme i kontakt med bydelens helse og omsorgstjenester. Vi er et tverrfaglig helseteam som har som hovedoppgave å gi veileding og utrede din henvendelse/søknad om helse og omsorgshjelp i samråd med deg. Vi tar utgangspunkt i at du skal oppnå størst mulig selvstendighet i eget liv.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.handleMat, score: 2 },
      { name: CONTEXT.personligHygiene, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 },
      { name: CONTEXT.klareSpise, score: 2 },
      { name: CONTEXT.kleMeg, score: 2 },
      { name: CONTEXT.brukeInternett, score: 2 }
    ],
    functions: [
      FUNCTION.ikkeKrefter,
      FUNCTION.psykiskeProblemer,
      FUNCTION.dårligHukommelse,
      FUNCTION.redusertBevegelighet,
      FUNCTION.smerter,
      FUNCTION.hjemmetTilrettelegging,
      FUNCTION.utendørsTilrettelegging,
      FUNCTION.reddGåMegBort
    ]
  },
  {
    id: "id:service/digitalSenior",
    name: "Digital senior",
    description:
      "Oslo Røde Kors tilbyr deg over 70 år hjemmeopplæring i bruk av nettbrett. Du lærer å bruke nettbank og Altinn, handle, holde kontakt med venner og kjente via Facebook eller Skype, lese aviser og finne gode tilbud og søke etter informasjon om noe som interesserer deg.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.handleMat, score: 2 },
      { name: CONTEXT.brukeInternett, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 }
    ],
    functions: [
      FUNCTION.forstårIkkeHandleNett,
      FUNCTION.reddTrykkeFeil,
      FUNCTION.ikkeLærtDigitaleVerktøy,
      FUNCTION.forstårIkkeKjøperBillett
    ]
  },
  {
    id: "id:service/dataHjelpDeichman",
    name: "Datahjelp",
    description: "Deichman.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.handleMat, score: 2 },
      { name: CONTEXT.brukeInternett, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 2 }
    ],
    functions: [
      FUNCTION.forstårIkkeHandleNett,
      FUNCTION.reddTrykkeFeil,
      FUNCTION.ikkeLærtDigitaleVerktøy,
      FUNCTION.forstårIkkeKjøperBillett
    ]
  },
  {
    id: "id:service/fysioterapeut",
    name: "Fysioterapeut med kommunal avtale",
    description:
      "Fysioterapeuter gir deg tilpasset behandling, trening og veiledning etter operasjon, ved skader, eller om du har kroniske sykdommer. Du kan ta direkte kontakt uten henvisning fra lege. Du betaler kun egenandel når fysioterapeuten har kommunal avtale.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.forflytteMegUtenfor, score: 2 }
    ],
    functions: [
      FUNCTION.redusertBevegelighet,
      FUNCTION.smerter,
      FUNCTION.reddFalle
    ]
  },
  {
    id: "id:service/rosaSykler",
    name: "Rosa sykler",
    description: "Sesong",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.klarerIkkeKommeUtAlene]
  },
  {
    id: "id:service/leseGruppe",
    name: "Lesegruppe",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/sangOgMusikkgruppe",
    name: "Sang og musikkgruppe",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/sjakk",
    name: "Sjakk",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/bridge",
    name: "Bridge",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/snekkerBod",
    name: "Snekkerbod",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/hobbygruppeStovnerFrivilligsentral",
    name: "Hobbygruppe",
    description: "Stovner Frivilligsentral",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 1 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/stovnerFrivilligsentral",
    name: "Stovner Frivilligsentral",
    description: "Stovner Frivilligsentral",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 },
      { name: CONTEXT.bidraSamfunn, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  },
  {
    id: "id:service/transportTjeneste",
    name: "Transporttjeneste til Stovner Eldresenter",
    description: "Kun til Stovner Eldresenter",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.redusertBevegelighet,
      FUNCTION.langtHoldeplassen,
      FUNCTION.kommerIkkeInnBussen
    ]
  },
  {
    id: "id:service/følgetjeneste",
    name: "Følgetjeneste",
    description:
      "Høybråten Velforening kan hjelpe deg med følgetjeneste til butikk, lege, tannlege, post, handling og praktiske oppgaver som for eksempel skifting av lyspærer, småreparasjoner og snømåking.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.handleMat, score: 1 },
      { name: CONTEXT.forflytteMegUtenfor, score: 2 }
    ],
    functions: [
      FUNCTION.ikkeKrefter,
      FUNCTION.trøbleteVei,
      FUNCTION.langtGå,
      FUNCTION.reddFalle
    ]
  },
  {
    id: "id:service/jesperudhuset",
    name: "Jesperudhuset",
    description: ".",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.psykiskeProblemer
    ]
  },
  {
    id: "id:service/eldresenterFolkvang",
    name: "Eldresenter Folkvang",
    description:
      "Folkvang eldresenter er et populært samlingssted for deg over 60 år. Folkvang har åpent tirsdag og torsdag og er lokalisert sentralt på Høybråten. Her tilbys fallforebyggende gruppetrening og sosialt samvær over en matbit.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.godFysiskForm, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen]
  }
];
