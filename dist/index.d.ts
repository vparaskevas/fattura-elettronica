import { FatturaElettronica } from './FatturaElettronica';
import { CausalePagamento } from './Tabelle/CausalePagamento';
import { CondizioniPagamento } from './Tabelle/CondizioniPagamento';
import { Divisa } from './Tabelle/Divisa';
import { EsigibilitaIVA } from './Tabelle/EsigibilitaIVA';
import { FormatoTrasmissione } from './Tabelle/FormatoTrasmissione';
import { IdPaese } from './Tabelle/IdPaese';
import { ModalitaPagamento } from './Tabelle/ModalitaPagamento';
import { Natura } from './Tabelle/Natura';
import { Provincia } from './Tabelle/Provincia';
import { RegimeFiscale } from './Tabelle/RegimeFiscale';
import { ScontoMaggiorazioneEnum } from './Tabelle/ScontoMaggiorazione';
import { SocioUnico } from './Tabelle/SocioUnico';
import { SoggettoEmittente } from './Tabelle/SoggettoEmittente';
import { StatoLiquidazione } from './Tabelle/StatoLiquidazione';
import { TipoCassa } from './Tabelle/TipoCassa';
import { TipoCessionePrestazione } from './Tabelle/TipoCessionePrestazione';
import { TipoDocumento } from './Tabelle/TipoDocumento';
import { TipoResa } from './Tabelle/TipoResa';
import { TipoRitenuta } from './Tabelle/TipoRitenuta';
export declare const Tabelle: {
    CausalePagamento: typeof CausalePagamento;
    CondizioniPagamento: typeof CondizioniPagamento;
    Divisa: typeof Divisa;
    EsigibilitaIVA: typeof EsigibilitaIVA;
    FormatoTrasmissione: typeof FormatoTrasmissione;
    IdPaese: typeof IdPaese;
    ModalitaPagamento: typeof ModalitaPagamento;
    Natura: typeof Natura;
    Provincia: typeof Provincia;
    RegimeFiscale: typeof RegimeFiscale;
    ScontoMaggiorazioneEnum: typeof ScontoMaggiorazioneEnum;
    SocioUnico: typeof SocioUnico;
    SoggettoEmittente: typeof SoggettoEmittente;
    StatoLiquidazione: typeof StatoLiquidazione;
    TipoCassa: typeof TipoCassa;
    TipoCessionePrestazione: typeof TipoCessionePrestazione;
    TipoDocumento: typeof TipoDocumento;
    TipoResa: typeof TipoResa;
    TipoRitenuta: typeof TipoRitenuta;
};
export declare const WriteXml: ({ FatturaElettronicaHeader, FatturaElettronicaBody }: FatturaElettronica) => any;
