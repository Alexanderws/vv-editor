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
  contexts: string[];
  functions: any[];
}

export const services: Service[] = [
  {
    id: "id:service/besøkstjeneste",
    name: "Besøkstjeneste",
    description:
      "En besøksvenn kommer på regelmessig besøk til personer som av ulike grunner har behov for besøk i deres hjem eller være turfølge. Besøkstjenesten ønsker å bidra til økt livskvalitet og trivsel for innbyggere i Bydel Stovner.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [CONTEXT.sosialisere],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.nedstemt, score: 2 },
      { name: FUNCTION.balanse, score: 1 }
    ]
  },
  {
    id: "id:service/ledsagerbevis",
    name: "Ledsagerbevis",
    description:
      "Tilbudet er for deg som har varige fysiske eller psykiske funksjonshemninger (minst to års varighet) hvor du kan søke om ha med deg en ledsager. Med et ledsagerbevis slipper ledsageren din å betale for sin billett på for eksempel offentlig transport eller kulturarrangementer.",
    moreInformationURL: "",
    treatment: TREATMENT.kompenserende,
    contexts: [CONTEXT.sosialisere, CONTEXT.deltaSamfunn],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.nedstemt, score: 1 },
      { name: FUNCTION.syn, score: 2 }
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
      CONTEXT.kommeRundtHjemme,
      CONTEXT.kommeRundtUtenforHjemmet,
      CONTEXT.deltaSamfunn,
      CONTEXT.fysiskAktivitet,
      CONTEXT.sosialisere,
      CONTEXT.kontrollTanker
    ],
    functions: [{ name: FUNCTION.nedstemt, score: 2 }]
  },
  {
    id: "id:service/trygghetsalarm",
    name: "Trygghetsalarm",
    description:
      "Tilbudet er for deg som har behov for en stasjonær trygghetsalarm instalert i hjemmet ditt, slik at du kan tilkalle hjelp i akutte situasjoner når som helst på døgnet. Alarmknappen kan bæres på håndledd eller i snor rundt halsen og alle over 75 år kan få denne uten behovsvurdering.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [CONTEXT.kommeRundtHjemme, CONTEXT.fysiskAktivitet],
    functions: [
      { name: FUNCTION.balanse, score: 2 },
      { name: FUNCTION.nedstemt, score: 1 },
      { name: FUNCTION.hukommelse, score: 2 }
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
      CONTEXT.kommeRundtHjemme,
      CONTEXT.kommeRundtUtenforHjemmet,
      CONTEXT.kollektivTransport,
      CONTEXT.handleMat,
      CONTEXT.deltaSamfunn,
      CONTEXT.fysiskAktivitet,
      CONTEXT.sosialisere
    ],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.balanse, score: 2 },
      { name: FUNCTION.syn, score: 1 }
    ]
  },
  {
    id: "id:service/hjelpemidlerBad",
    name: "Midlertidig lån av hjelpemidler for bad og toalett",
    description:
      "Har du midlertidig behov for å låne hjelpemidler for bad og toalett som; badekarbrett, dusjstol og toalettstol dette lånes gratis hos Hjelpemiddelformidlingen i Oslo kommune. Du trenger ikke å gjøre avtale på forhånd.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [CONTEXT.personligStell],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.balanse, score: 2 },
      { name: FUNCTION.syn, score: 1 }
    ]
  },
  {
    id: "id:service/verktøyDaglig",
    name: "Midlertidig lån av hjelpemidler for daglig gjøremål",
    description:
      "Har du midlertidig behov for å låne hjelpemiddel som forenkler daglige gjøremål som; gåbord og arbeidstol kan dette lånes gratis hos Hjelpemiddelformidlingen i Oslo kommune. Du trenger ikke gjøre avtale på forhånd.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [CONTEXT.personligStell],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.balanse, score: 1 }
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
      CONTEXT.personligStell,
      CONTEXT.kommeRundtHjemme,
      CONTEXT.kommeRundtUtenforHjemmet,
      CONTEXT.kollektivTransport,
      CONTEXT.deltaSamfunn,
      CONTEXT.fysiskAktivitet,
      CONTEXT.sosialisere
    ],
    functions: [
      { name: FUNCTION.bevege, score: 1 },
      { name: FUNCTION.balanse, score: 2 }
    ]
  },
  {
    id: "id:service/vurderingsteam",
    name: "Kontaktpunkt for helse- og omsorgstjenester i Bydel Stovner",
    description:
      "Kontaktpunktet er for deg som har behov for å komme i kontakt med bydelens helse og omsorgstjenester. Vi er et tverrfaglig helseteam som har som hovedoppgave å gi veileding og utrede din henvendelse/søknad om helse og omsorgshjelp i samråd med deg. Vi tar utgangspunkt i at du skal oppnå størst mulig selvstendighet i eget liv.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      CONTEXT.personligStell,
      CONTEXT.kommeRundtHjemme,
      CONTEXT.fysiskAktivitet,
      CONTEXT.sosialisere,
      CONTEXT.kontrollTanker
    ],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.balanse, score: 1 },
      { name: FUNCTION.nedstemt, score: 1 },
      { name: FUNCTION.syn, score: 2 },
      { name: FUNCTION.hørsel, score: 2 },
      { name: FUNCTION.hukommelse, score: 2 }
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
      CONTEXT.kollektivTransport,
      CONTEXT.handleMat,
      CONTEXT.brukeInternett,
      CONTEXT.deltaSamfunn,
      CONTEXT.hobby,
      CONTEXT.sosialisere
    ],
    functions: [{ name: FUNCTION.digitalKompetanse, score: 2 }]
  },
  {
    id: "id:service/følgetjenesteTransport",
    name: "Følgetjeneste/transport",
    description:
      "Høybråten Velforening kan hjelpe deg med følgetjeneste til butikk, lege, tannlege, post, handling og praktiske oppgaver som for eksempel skifting av lyspærer, småreparasjoner og snømåking. ",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      CONTEXT.kommeRundtUtenforHjemmet,
      CONTEXT.handleMat,
      CONTEXT.sosialisere
    ],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.nedstemt, score: 2 },
      { name: FUNCTION.hukommelse, score: 1 }
    ]
  },
  {
    id: "id:service/eldresenterFolkvang",
    name: "Folkvang eldresenter",
    description:
      "Folkvang eldresenter er et populært samlingssted for deg over 60 år. Folkvang har åpent tirsdag og torsdag og er lokalisert sentralt på Høybråten. Her tilbys fallforebyggende gruppetrening og sosialt samvær over en matbit.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [CONTEXT.sosialisere, CONTEXT.fysiskAktivitet],
    functions: [
      { name: FUNCTION.nedstemt, score: 1 },
      { name: FUNCTION.balanse, score: 2 }
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
      CONTEXT.kommeRundtHjemme,
      CONTEXT.kommeRundtUtenforHjemmet,
      CONTEXT.fysiskAktivitet
    ],
    functions: [
      { name: FUNCTION.bevege, score: 2 },
      { name: FUNCTION.smerter, score: 1 }
    ]
  }
];
