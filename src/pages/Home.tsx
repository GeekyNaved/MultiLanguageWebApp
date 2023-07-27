import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {

    const { t } = useTranslation()
  // State to capture data from input fields
  const [field1Value, setField1Value] = useState('');
  const [field2Value, setField2Value] = useState('');
    return (
        <main>
            {/* <h1>{t('title')}</h1>
            <span>{t('label')} </span> */}
            <div>
                <h1>{t('title')}</h1>
                <span>{t('label')}</span>
                <div>
                    {/* Input field for capturing data */}
                    <label>{t('field1')}</label>
                    <input
                        type="text"
                        value={field1Value}
                        onChange={(e) => setField1Value(e.target.value)}
                    />
                </div>
                <div>
                    {/* Input field for capturing data */}
                    <label>{t('field2')}</label>
                    <input
                        type="text"
                        value={field2Value}
                        onChange={(e) => setField2Value(e.target.value)}
                    />
                </div>
                <div>
                    {/* Displaying translated data along with user's name */}
                    <p>{t('user', { name: 'Naved' })}</p>
                    <p>{t('field1')}: {t(field1Value)}</p>
                    <p>{t('field2')}: {t(field2Value)}</p>
                </div>
            </div>

        </main>
    )
}