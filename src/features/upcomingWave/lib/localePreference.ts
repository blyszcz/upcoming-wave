export const LOCALE_STORAGE_KEY = 'uw-locale';

// Runs in <head> on the English root before first paint: a first-time visitor whose browser
// prefers Polish is sent to /pl/ (keeping the #section). An explicit choice always wins.
export const localeRedirectScript = `(function(){try{var s=localStorage.getItem('${LOCALE_STORAGE_KEY}');if(s==='en')return;var l=(navigator.languages||[navigator.language||'']).join(',').toLowerCase();if(s==='pl'||/(^|,)pl\\b/.test(l)){location.replace('/pl/'+location.search+location.hash);}}catch(e){}})();`;
