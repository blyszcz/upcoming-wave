import { LOCALE_STORAGE_KEY } from '@/constants';
import { PREFIXED_LOCALES } from '@routes/locales';

// Runs in <head> on the English root before first paint. A remembered choice wins; otherwise a
// first-time visitor is sent to the first supported language their browser prefers (keeping the
// path and #section). English visitors, and anyone who picked English, stay put.
export const localeRedirectScript = `(function(){try{var L=${JSON.stringify(PREFIXED_LOCALES)};var s=localStorage.getItem('${LOCALE_STORAGE_KEY}');var t=null;if(s){if(L.indexOf(s)>-1)t=s;}else{var p=navigator.languages||[navigator.language||''];for(var i=0;i<p.length;i++){var c=String(p[i]).toLowerCase().split('-')[0];if(c==='en')break;if(L.indexOf(c)>-1){t=c;break;}}}if(t)location.replace('/'+t+location.pathname+location.search+location.hash);}catch(e){}})();`;
