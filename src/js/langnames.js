import langnames from './langnames.json';

export const getLanguage = (lc) => {
  let language = "NOT FOUND";
  const langname = langnames.filter(object => object.lc === lc)[0];
  
  if (langname) {
    language = langname;
  }
  return language;
};

export const getLanguageDisplay = (lc, format) => {
  // pattern for uw format: (am) Amharic – አማርኛ (Africa Gateway)
  const lg = getLanguage(lc);
  let langdisplay;
  if (lg) {
    if (format === "lc-ang") {
      langdisplay = lg.lc + "-" + lg.ang;
    } else {
      // default
      langdisplay = "(" + lg.lc + ") " + lg.ang + " - " + lg.ln + " (" + lg.lr + ")"
    }
  } else {
    langdisplay = "UNK"
  }
  return langdisplay;
};

export const getLanguages = (format, filter, limit) => {
  let langlist = [];
  var x;
  for (x of langnames) {
    var item;
    item = getLanguageDisplay(x.lc,format);
    if ( filter !== '' ) {
      if (item.indexOf(filter) > -1) {
        langlist.push(item);
      }  
    } else {
      langlist.push(item);
    }
    if ( langlist.length >= limit ) {
      break;
    }
  }
  return langlist;
}
