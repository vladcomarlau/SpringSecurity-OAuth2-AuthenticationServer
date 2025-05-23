import { useTranslation } from 'react-i18next';

export default function LangSwitcher() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e: { target: { value: string | undefined; }; }) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select onChange={handleLanguageChange} value={i18n.language}>
            <option value='en'>English</option>
            <option value='ro'>Română</option>
        </select>
    );
}