import { FUNCTION } from "./functions.data";
import { CONTEXT } from "./contexts.data";

export const TREATMENT = Object.freeze({
  kompenserende: "kompenserende",
  behandlende: "behandlende",
  forebyggende: "forebyggende"
});

export const BYDEL = Object.freeze({
  stovner: "Stovner",
  gamleOslo: "Gamle Oslo"
});

export const bydeler = [BYDEL.stovner, BYDEL.gamleOslo];

export interface Service {
  id: string;
  name: string;
  description: string;
  moreInformationURL: string;
  treatment: string;
  contexts: any[];
  functions: string[];
  bydel: string[];
}

export const services: Service[] = [
  {
    id: "id:service/braMatKurs",
    name: "Bra Mat kurs",
    description: "SMFS",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.spiseTilpassetMat, score: 2 }],
    functions: [
      FUNCTION.sykdom,
      FUNCTION.dårligMatlyst,
      FUNCTION.overvektig
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/matkursForNybegynnere",
    name: "Matkurs for nybegynnere",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/seniorveileder",
    name: "Seniorveileder",
    description:
      "Tilbudet er for deg som ønsker besøk eller samtale om hverdagsliv, fysisk aktivitet, sosialt nettverk og trygghet i hjemmet. Du kan ta direkte kontakt med bydelens Seniorveileder.",
    moreInformationURL:
      "https://www.oslo.kommune.no/helse-og-omsorg/eldreomsorg/helsefremmende-tilbud-for-eldre/seniorveileder/#shortname=bsr",
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
      FUNCTION.huskerIkkeSpise,
      FUNCTION.redusertBevegelighet,
      FUNCTION.hjemmetTilrettelegging,
      FUNCTION.utendørsTilrettelegging,
      FUNCTION.reddGåMegBort,
      FUNCTION.forstårIkkeKjøperBillett,
      FUNCTION.kommerIkkeInnBussen,
      FUNCTION.langtHoldeplassen,
      FUNCTION.nyBydelen
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
  },
  {
    id: "id:service/gratisTrening",
    name: "Gratis trening",
    description: "SFMS",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 1 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/linedanceKurs",
    name: "Linedance kurs",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.godFysiskForm, score: 2 },
      { name: CONTEXT.skaffeHobby, score: 2 }
    ],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/fallforebyggendeTreningStovnerEldresenter",
    name: "Fallforebyggende gruppetrening",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 1 },
      { name: CONTEXT.godFysiskForm, score: 2 }
    ],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.redusertBevegelighet,
      FUNCTION.reddFalle,
      FUNCTION.langtGå
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/frivilligNo",
    name: "Frivillig.no",
    description: "Oslo",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.bidraSamfunn, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/rødeKors",
    name: "Røde Kors",
    description: "",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.bidraSamfunn, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/fallforebyggendeTreningFolkvang",
    name: "Fallforebyggende gruppetrening",
    description: "Folkvang",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.skaffeHobby, score: 1 },
      { name: CONTEXT.godFysiskForm, score: 2 }
    ],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.redusertBevegelighet,
      FUNCTION.reddFalle,
      FUNCTION.langtGå
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/stovner60Pluss",
    name: "Stovner 60pluss",
    description: "Gåturer",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/stovnerStyrke60Pluss",
    name: "Stovner Styrke 60pluss",
    description: "Styrketrening",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/vestliILVolleyball60Pluss",
    name: "Vestli IL Volleyball 60pluss",
    description: "Volleyball",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/tobakkavvenning",
    name: "Tobakkavvenning",
    description: "SFMS",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.slutteRøykSnus, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
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
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/besøkstjeneste",
    name: "Besøkstjeneste",
    description:
      "En besøksvenn kommer på regelmessig besøk til personer som av ulike grunner har behov for besøk i deres hjem eller være turfølge. Besøkstjenesten ønsker å bidra til økt livskvalitet og trivsel for innbyggere i Bydel Stovner.",
    moreInformationURL: "stovner frivillig / røde kors",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [FUNCTION.klarerIkkeKommeUtAlene],
    bydel: [BYDEL.stovner]
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
      FUNCTION.redusertBevegelighet
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
  },
  {
    id: "id:service/raskPsykiskHelsehjelp",
    name: "Rask psykisk helsehjelp",
    description:
      "Tilbudet er for deg over 16 år med lettere former for angst eller depresjon. Vi er et team som består av psykolog, ergoterapeut og psykiatriske sykepleiere, og du kan ta direkte kontakt med oss.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 1 },
      { name: CONTEXT.brukeKollektivtransport, score: 1 },
      { name: CONTEXT.treffeFolk, score: 1 },
      { name: CONTEXT.bedrePsykisk, score: 2 }
    ],
    functions: [
      FUNCTION.psykiskeProblemer,
      FUNCTION.indreUro,
      FUNCTION.vondeTanker
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
  },
  {
    id: "id:service/trygghetsalarm",
    name: "Trygghetsalarm",
    description:
      "Tilbudet er for deg som har behov for en stasjonær trygghetsalarm instalert i hjemmet ditt, slik at du kan tilkalle hjelp i akutte situasjoner når som helst på døgnet. Alarmknappen kan bæres på håndledd eller i snor rundt halsen og alle over 75 år kan få denne uten behovsvurdering.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.forflytteMegHjemme, score: 2 }],
    functions: [FUNCTION.reddFalle, FUNCTION.dårligHukommelse],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
  },
  {
    id: "id:service/hjelpemidlerForflytning",
    name: "Midlertidig lån av hjelpemidler for forflytning",
    description:
      "Har du midlertidig behov for å låne hjelpemidler til forflytning som krykker, rullator, rullestol og kjøreskinner kan dette lånes gratis hos Hjelpemiddelformidlingen i Oslo kommune. Du trenger ikke å gjøre avtale på forhånd.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.handleMat, score: 1 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.forflytteMegUtenfor, score: 2 },
      { name: CONTEXT.brukeKollektivtransport, score: 1 }
    ],
    functions: [
      FUNCTION.reddFalle,
      FUNCTION.hjemmetTilrettelegging,
      FUNCTION.utendørsTilrettelegging,
      FUNCTION.redusertBevegelighet
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
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
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
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
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
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
      { name: CONTEXT.treffeFolk, score: 1 }
    ],
    functions: [FUNCTION.redusertBevegelighet, FUNCTION.reddFalle],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/vurderingsteam",
    name: "Kontaktpunkt for helse- og omsorgstjenester i Bydel Stovner",
    description:
      "Kontaktpunktet er for deg som har behov for å komme i kontakt med bydelens helse og omsorgstjenester. Vi er et tverrfaglig helseteam som har som hovedoppgave å gi veileding og utrede din henvendelse/søknad om helse og omsorgshjelp i samråd med deg. Vi tar utgangspunkt i at du skal oppnå størst mulig selvstendighet i eget liv.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [
      { name: CONTEXT.forflytteMegUtenfor, score: 1 },
      { name: CONTEXT.forflytteMegHjemme, score: 1 },
      { name: CONTEXT.personligHygiene, score: 1 },
      { name: CONTEXT.klareSpise, score: 1 },
      { name: CONTEXT.kleMeg, score: 1 }
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
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
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
      { name: CONTEXT.brukeKollektivtransport, score: 1 }
    ],
    functions: [
      FUNCTION.forstårIkkeHandleNett,
      FUNCTION.reddTrykkeFeil,
      FUNCTION.ikkeLærtDigitaleVerktøy,
      FUNCTION.forstårIkkeKjøperBillett
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
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
      { name: CONTEXT.brukeKollektivtransport, score: 1 }
    ],
    functions: [
      FUNCTION.forstårIkkeHandleNett,
      FUNCTION.reddTrykkeFeil,
      FUNCTION.ikkeLærtDigitaleVerktøy,
      FUNCTION.forstårIkkeKjøperBillett
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/fysioterapeut",
    name: "Fysioterapeut med kommunal avtale",
    description:
      "Fysioterapeuter gir deg tilpasset behandling, trening og veiledning etter operasjon, ved skader, eller om du har kroniske sykdommer. Du kan ta direkte kontakt uten henvisning fra lege. Du betaler kun egenandel når fysioterapeuten har kommunal avtale.",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.forflytteMegUtenfor, score: 1 }],
    functions: [
      FUNCTION.redusertBevegelighet,
      FUNCTION.smerter,
      FUNCTION.reddFalle
    ],
    bydel: [BYDEL.stovner, BYDEL.gamleOslo]
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
    functions: [FUNCTION.klarerIkkeKommeUtAlene],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/leseGruppe",
    name: "Lesegruppe",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/sangOgMusikkgruppe",
    name: "Sang og musikkgruppe",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/sjakk",
    name: "Sjakk",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/bridge",
    name: "Bridge",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/snekkerBod",
    name: "Snekkerbod",
    description: "SE",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/hobbygruppeStovnerFrivilligsentral",
    name: "Hobbygruppe",
    description: "Stovner Frivilligsentral",
    moreInformationURL: "",
    treatment: TREATMENT.behandlende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.stovner]
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
    functions: [FUNCTION.nyBydelen],
    bydel: [BYDEL.stovner]
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
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/følgetjeneste",
    name: "Følgetjeneste",
    description:
      "Høybråten Velforening kan hjelpe deg med følgetjeneste til butikk, lege, tannlege, post, handling og praktiske oppgaver som for eksempel skifting av lyspærer, småreparasjoner og snømåking.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.handleMat, score: 2 },
      { name: CONTEXT.forflytteMegUtenfor, score: 1 }
    ],
    functions: [
      FUNCTION.ikkeKrefter,
      FUNCTION.trøbleteVei,
      FUNCTION.langtGå,
      FUNCTION.reddFalle
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/jesperudhuset",
    name: "Jesperudhuset",
    description: ".",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.treffeFolk, score: 2 },
      { name: CONTEXT.bedrePsykisk, score: 2 }
    ],
    functions: [
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.psykiskeProblemer,
      FUNCTION.vondeTanker,
      FUNCTION.indreUro
    ],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/eldresenterFolkvang",
    name: "Eldresenter Folkvang",
    description:
      "Folkvang eldresenter er et populært samlingssted for deg over 60 år. Folkvang har åpent tirsdag og torsdag og er lokalisert sentralt på Høybråten. Her tilbys fallforebyggende gruppetrening og sosialt samvær over en matbit.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [FUNCTION.nyBydelen],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/stovnerEldresenter",
    name: "Stovner Eldresenter",
    description:
      "Stovner eldresenter er et populært samlingssted for deg over 60 år.",
    moreInformationURL: "",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.treffeFolk, score: 2 },
      { name: CONTEXT.bidraSamfunn, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen],
    bydel: [BYDEL.stovner]
  },
  {
    id: "id:service/linkKontoret",
    name: "Link-kontoret",
    description:
      "Vi er et informasjons- og servicekontor for bydelens befolkning. Kontoret er betjent av medarbeidere med ulik etnisk bakgrunn og som snakker forskjellige språk i tillegg til norsk. Vi kan bistå deg med å få svar på ulike spørsmål og utfordringer du har når du skal ha kontakt med bydelens tjensteappart.",
    treatment: "kompenserende",
    moreInformationURL:
      "https://www.oslo.kommune.no/bydeler/bydel-gamle-oslo/link-kontoret/#gref",
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [
      FUNCTION.psykiskeProblemer,
      FUNCTION.dårligHukommelse,
      FUNCTION.klarerIkkeKommeUtAlene,
      FUNCTION.nyBydelen
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/stovnerEldresenter",
    name: "Tøyen Frivilligsentral",
    description:
      "Du finner oss på Aktivitetshuset K1 som er bydelens samfunnshus/kulturhus.Til daglig jobber vi med styrking og utvikling av nærmiljøet. Vi driver lokalt nettverksarbeid og jobber med kopling av frivillige organisasjoner, sosiale entreprenører, bydelens tjenester og befolkningen forøvrig.",
    moreInformationURL: "https://frivillig.no/tyen-frivilligsentral",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.bidraSamfunn, score: 2 }],
    functions: [],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/gamleOsloFrivilligsentral",
    name: "Gamle Oslo Frivilligsentral",
    description:
      "Hos oss kan du delta på en av sentralens aktiviteter, enten som deltagere eller som medhjelper. Frivilligsentralen er kort sagt en møteplass som formidler kontakt mellom mennesker i lokalmiljøet - noen trenger hjelp og andre ønsker å hjelpe.",
    moreInformationURL: "https://gamle-oslo.frivilligsentral.no/",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.treffeFolk, score: 2 },
      { name: CONTEXT.bedrePsykisk, score: 2 }
    ],
    functions: [FUNCTION.nyBydelen],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/gamleOsloHusflidlag",
    name: "Gamle Oslo Husflidlag",
    description:
      "Gamle Oslo Husflidslag ble stiftet i 2000. Vårt mål er å spre skaperglede og kunnskap om husflidsteknikker. Vi har ulike aktiviteter og vi arrangerer også teammøter. Ta en titt på vår kalender og se om du finner noe du liker.",
    moreInformationURL:
      "http://www.husflid.no/lokal_og_fylkeslag/oslo/lokallag/gamle_oslo_husflidslag",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/treningstilbudPåK1",
    name: "Treningstilbud på K1",
    description:
      "Her hos oss finner du ulike treningstilbud som eks yoga, pilates, meditasjon og dans. Ta en titt på vår aktivitetskalender og la deg friste.",
    moreInformationURL: "https://www.aktivitetshusetk1.no/hvaskjerher",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.godFysiskForm, score: 2 }],
    functions: [],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/aktivitetshusetK1",
    name: "Aktivitetshuset K1",
    description:
      "Aktivitetshuset K1 (også bare kalt «K1») er en åpen møteplass for nabolaget på Tøyen. Våre aktiviteter fremmer folkehelse og hjelper deg med å opprettholde god helse. I tillegg har vi fokus på at Aktivitetshuset bidrar til at Tøyen blir et mer inkluderende nabolag med et godt samhold og engasjement blant befolkningen.",
    moreInformationURL: "https://www.aktivitetshusetk1.no/",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [FUNCTION.nyBydelen],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/motivasjonsgruppen",
    name: "Motivasjonsgruppen",
    description:
      "Vi er til for deg som ønsker å endre levevaner sammen med andre. Vi møtes til samling hver torsdag fra klokken 13:00 – 14:30 til felles trening, samtaler rundt et aktuelt tema og felles gåturer.",
    moreInformationURL:
      "https://www.oslo.kommune.no/natur-kultur-og-fritid/gronland-flerkulturelle-seniorsenter/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.spiseTilpassetMat, score: 2 },
      { name: CONTEXT.godFysiskForm, score: 2 },
      { name: CONTEXT.bedrePsykisk, score: 1 }
    ],
    functions: [
      FUNCTION.vondeTanker,
      FUNCTION.dårligMatlyst,
      FUNCTION.overvektig
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/datakafe",
    name: "Datakafe",
    description:
      "Tilbudet er for deg som ønsker å lære og bli tryggere på bruk av data og mobiltelefon. Vi gir deg hjelp og veiledning. Vi holder til i Hagestua hver onsdag fra 11.00 - 12.30",
    moreInformationURL:
      "https://www.oslo.kommune.no/natur-kultur-og-fritid/gronland-flerkulturelle-seniorsenter/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.brukeInternett, score: 2 },
      { name: CONTEXT.handleMat, score: 1 },
      { name: CONTEXT.brukeKollektivtransport, score: 1 }
    ],
    functions: [
      FUNCTION.forstårIkkeHandleNett,
      FUNCTION.reddTrykkeFeil,
      FUNCTION.ikkeLærtDigitaleVerktøy,
      FUNCTION.forstårIkkeKjøperBillett
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/strikkegruppe",
    name: "Strikkegruppe",
    description:
      "Et tilbud til deg som ønsker å delta i en gruppe som har håndarbeid som hobby. Vi møtes hver tirsdag i aktivitetsstuen på Seniorsentret på Grønland.",
    moreInformationURL:
      "https://www.oslo.kommune.no/natur-kultur-og-fritid/gronland-flerkulturelle-seniorsenter/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.skaffeHobby, score: 2 }],
    functions: [],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/treningsgruppe",
    name: "Treningsgruppe",
    description:
      "Et tilbud for deg over 60 år som har behov for trening med fokus på styrke og balanse. Gruppen ledes av en dyktig fysioterapeut. /nHerretrening: mandager og fredager fra 09:00 – 10:00/nDametrening: mandager og fredager fra 10:00 – 11:00",
    moreInformationURL:
      "https://www.oslo.kommune.no/natur-kultur-og-fritid/gronland-flerkulturelle-seniorsenter/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.godFysiskForm, score: 2 },
      { name: CONTEXT.forflytteMegHjemme, score: 2 },
      { name: CONTEXT.forflytteMegUtenfor, score: 2 }
    ],
    functions: [FUNCTION.reddFalle],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/grønlandFlerkulturelleSeniorsenter",
    name: "Grønland flerkulturelle seniorsenter",
    description:
      "Vi er til for deg over 60 år og holder sentralt til på Grønland. Tilbudet er for deg som har behov eller ønske om å komme seg ut å være sammen med andre. Foruten å være en sosial møteplass tilbys det ulike aktiviteter.",
    moreInformationURL:
      "https://www.oslo.kommune.no/natur-kultur-og-fritid/gronland-flerkulturelle-seniorsenter/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [{ name: CONTEXT.treffeFolk, score: 2 }],
    functions: [],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/valleAktivitetssenter",
    name: "Valle Aktivitetssenter",
    description:
      "Vi er et lavterskeltilbud uten behandling. Vi er et sosialt møtested med et variert tilbud av aktiviteter (data, internett, håndarbeid, film, musikk, turer og noe fysisk aktivitet). Mandager avholdes det husmøte hvor dere gjester kan bestemme turer og ulike aktiviteter.",
    moreInformationURL:
      "https://www.oslo.kommune.no/helse-og-omsorg/psykisk-helse/aktivitetshus/valle-aktivitetssenter/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.bedrePsykisk, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [
      FUNCTION.vondeTanker,
      FUNCTION.indreUro,
      FUNCTION.psykiskeProblemer
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/kafèSvovel",
    name: "Kafè Svovel",
    description:
      "Er du i en livssituasjon hvor du ikke har noe fast å gå til, kan Kafe Svovel være noe for deg. Vi lytter til deg og gir deg støtte, men vi driver ikke behandling. Kafé Svovel er et aktivitetshus hvor du blant annet kan spise lunsj, lese aviser, bruke internett og delta på turer.",
    moreInformationURL:
      "https://www.oslo.kommune.no/helse-og-omsorg/psykisk-helse/aktivitetshus/kafe-svovel/",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.bedrePsykisk, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [
      FUNCTION.vondeTanker,
      FUNCTION.indreUro,
      FUNCTION.psykiskeProblemer,
      FUNCTION.nyBydelen
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/kafèJordal",
    name: "Kafè Jordal",
    description:
      "Vi er et uhøytidelig spisested som ligger i Vålerengen/Kampen-området. Kafé Jordal er ikke et behandlingssted, men et sosialt tilbud til folk som sliter med forskjellige psykiske problemer. Hos oss møter du faste medarbeidere. Du kan bruke kafeen etter eget behov: bare spise, prate med oss eller andre gjester, drikke kaffe, lese eller lignende. Vi får skryt av maten vår.",
    moreInformationURL:
      "https://www.oslo.kommune.no/helse-og-omsorg/psykisk-helse/aktivitetshus/kafe-jordal/",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.bedrePsykisk, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [
      FUNCTION.vondeTanker,
      FUNCTION.indreUro,
      FUNCTION.psykiskeProblemer
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/aktivitetssentret31B",
    name: "Aktivitetssentret 31B",
    description:
      "Aktivitetssenteret 31 B er for deg som har erfaring fra psykiatrien. Stedet er åpent for alle og du trenger ikke henvisning for å gå her. Vi vil vise deg rundt og fortelle deg om stedet. Hvis du vil kan du også ta med venner og familie.↵↵Vi driver ikke behandling eller terapi, men tilbyr et rikt utvalg av aktiviteter.",
    moreInformationURL:
      "https://www.oslo.kommune.no/helse-og-omsorg/psykisk-helse/aktivitetshus/aktivitetssenteret-31-b/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.bedrePsykisk, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [
      FUNCTION.vondeTanker,
      FUNCTION.indreUro,
      FUNCTION.psykiskeProblemer
    ],
    bydel: [BYDEL.gamleOslo]
  },
  {
    id: "id:service/aktivitetssentret31B",
    name: "Aktivitetssentret 31B",
    description:
      "Aktivitetssenteret 31 B er for deg som har erfaring fra psykiatrien. Stedet er åpent for alle og du trenger ikke henvisning for å gå her. Vi vil vise deg rundt og fortelle deg om stedet. Hvis du vil kan du også ta med venner og familie.↵↵Vi driver ikke behandling eller terapi, men tilbyr et rikt utvalg av aktiviteter.",
    moreInformationURL:
      "https://www.oslo.kommune.no/helse-og-omsorg/psykisk-helse/aktivitetshus/aktivitetssenteret-31-b/#gref",
    treatment: TREATMENT.forebyggende,
    contexts: [
      { name: CONTEXT.bedrePsykisk, score: 2 },
      { name: CONTEXT.treffeFolk, score: 2 }
    ],
    functions: [
      FUNCTION.vondeTanker,
      FUNCTION.indreUro,
      FUNCTION.psykiskeProblemer
    ],
    bydel: [BYDEL.gamleOslo]
  }
];
