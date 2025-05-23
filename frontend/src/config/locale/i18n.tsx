import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../../locales/en/common.json';
import ro from '../../../locales/ro/common.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector) // pt ca useState se intampla inainte sa se incarce resursele (din cauza OAuth redirects?)
    .use(initReactI18next)
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
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        react: { useSuspense: false },
    });