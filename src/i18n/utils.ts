import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        if (lang === 'es' && !ui['es'][key]) return ui['en'][key] || ui[defaultLang][key];
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function useDir(lang: keyof typeof ui) {
    return lang === 'he' ? 'rtl' : 'ltr';
}

export function getFallbackCollectionItems(lang: string, allItems: any[]) {
    if (lang === 'es') {
        const esItems = allItems.filter(e => e.id.startsWith('es/'));
        const enItems = allItems.filter(e => e.id.startsWith('en/'));
        
        const validEsItems = esItems.filter(e => e.data && e.data.title && e.data.title.trim() !== '' && (!('body' in e) || (e.body && e.body.trim() !== '')));
        const esSlugs = validEsItems.map(e => e.id.split('/').slice(1).join('/'));
        
        const fallbackItems = enItems.filter(en => !esSlugs.includes(en.id.split('/').slice(1).join('/')));
        return [...validEsItems, ...fallbackItems];
    }
    return allItems.filter(e => e.id.startsWith(`${lang}/`));
}
