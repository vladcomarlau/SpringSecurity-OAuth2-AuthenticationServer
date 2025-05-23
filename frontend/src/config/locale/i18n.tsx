import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../../locales/en/common.json';
import ro from '../../../locales/ro/common.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector) // detectare localStorage inainte de montare a componentei
    .use(initReactI18next) // leaga hook-uri (ex:useTranslation()) i18next cu react
    .init({
        resources: {
            en: { translation: en },
            ro: { translation: ro }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'], //prioritizeaza scanarea localStorage
            caches: ['localStorage'], //pastreaza in cache ce gaseste in localStorage
        },
        react: { useSuspense: false },
    });