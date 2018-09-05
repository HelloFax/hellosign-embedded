/**
 * HelloSign Embedded class names.
 *
 * @enum {string}
 * @readonly
 */
const classNames = {
  BASE: 'x-hellosign-embedded',
  BASE_IN_MODAL: 'x-hellosign-embedded--in-modal',
  IFRAME: 'x-hellosign-embedded__iframe',
  MODAL_CLOSE: 'x-hellosign-embedded__modal-close',
  MODAL_CLOSE_BTN: 'x-hellosign-embedded__modal-close-button',
  MODAL_CONTENT: 'x-hellosign-embedded__modal-content',
  MODAL_SCREEN: 'x-hellosign-embedded__modal-screen',
};

/**
 * HelloSign Embedded events.
 *
 * @enum {string}
 * @readonly
 */
const events = {
  ERROR: 'error',
  INITIALIZE: 'initialize',
  SEND: 'send',
  CLOSE: 'close',
  CREATE_TEMPLATE: 'createTemplate',
  DECLINE: 'decline',
  MESSAGE: 'message',
  OPEN: 'open',
  REASSIGN: 'reassign',
  SIGN: 'sign',
};

/**
 * HelloSign Embedded iFrame properties.
 *
 * @enum {string}
 * @readonly
 */
const iframe = {
  NAME: 'x-hellosign-embedded',
};

/**
 * HelloSign Embedded supported locales.
 *
 * @enum {string}
 * @readonly
 */
const locales = {
  DA_DK: 'da_DK', // Danish (Denmark)
  DE_DE: 'de_DE', // German (Germany)
  EN_US: 'en_US', // English (United States)
  ES_ES: 'es_ES', // Spanish (Spain)
  ES_MX: 'es_MX', // Spanish (Mexico)
  FR_FR: 'fr_FR', // French (France)
  NL_NL: 'nl_NL', // Dutch (Netherlands)
  PL_PL: 'pl_PL', // Polish (Poland)
  PT_BR: 'pt_BR', // Portuguese (Brazil)
  SV_SE: 'sv_SE', // Swedish (Sweden)
  ZH_CN: 'zh_CN', // Chinese (Simplified)
};

/**
 * HelloSign Embedded cross-origin window messages.
 *
 * @enum {string}
 * @readonly
 */
const messages = {
  APP_CONFIGURE: 'hellosign:configure',
  APP_ERROR: 'hellosign:error',
  APP_INITIALIZE: 'hellosign:initialize',
  APP_VERIFY_DOMAIN_REQUEST: 'hellosign:verifyDomainRequest',
  APP_VERIFY_DOMAIN_RESPONSE: 'hellosign:verifyDomainResponse',
  USER_CLOSE_REQUEST: 'hellosign:userCloseRequest',
  USER_CREATE_TEMPLATE: 'hellosign:userCreateTemplate',
  USER_DECLINE_REQUEST: 'hellosign:userDeclineRequest',
  USER_REASSIGN_REQUEST: 'hellosign:userReassignRequest',
  USER_SEND_REQUEST: 'hellosign:userSendRequest',
  USER_SIGN_REQUEST: 'hellosign:userSignRequest',
};

/**
 * Embedded signature request types.
 *
 * @enum {string}
 * @readonly
 */
const types = {
  EMBEDDED_SIGN: 'embeddedSign',
  EMBEDDED_TEMPLATE: 'embeddedTemplate',
  EMBEDDED_REQUEST: 'embeddedRequest',
  UNKNOWN: 'unknown',
};

export default {
  classNames,
  events,
  iframe,
  locales,
  messages,
  types,
};
