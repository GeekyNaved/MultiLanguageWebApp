## **Demo app features ⚙️**

1. Change the application language.
2. Add languages

&nbsp;

## **Technologies 🧪**

- React JS **18.2.0**
- i18next **22.4.9**
- Vite JS **4.0.0**
- TypeScript **4.9.3**
- CSS vanilla

&nbsp;

## **Installation 🧰**

1. Clone the repository (you need to have [Git](https://git-scm.com) installed).

```shell
    git clone https://github.com/Franklin361/multi-lang-app.git
```

2.  Install dependencies of the project.

```shell
    npm install
```

3. Run the project.
```shell
    npm run dev
```

To achieve smooth translation of dynamic content like user inputs, it's important to have translations available for all possible user input values. There are a few approaches you can consider to handle dynamic content translations effectively:

1. Predefined Translations:
   - Define a set of pre-translated values for common user input options. For example, if your application has a dropdown to select a country, you can have translations for all the country names in different languages.

2. Dynamic Translations:
   - If the possible user input values are vast and constantly changing, you can use an API or database to store and retrieve translations dynamically. When a user selects an option or enters input, you can make an API call to get the translation for that specific value.

3. Custom Translation Management:
   - Implement a custom translation management system that allows you to input translations for dynamic content. You can build an admin panel where translators can add or edit translations for user inputs.

4. Crowdsourcing Translations:
   - If your application has a large user base, you can consider implementing a crowdsourcing approach for translations. Allow users to contribute translations for user input values, and then you can validate and incorporate these translations into your app.

5. Default Fallback:
   - If you cannot provide specific translations for all dynamic content, have a default fallback mechanism in place. For example, if a translation is missing, display the original input value as a fallback instead of showing a blank or untranslated text.

6. Internationalization Testing:
   - Conduct thorough testing of your application's internationalization features. Test with different languages, scripts, and user input values to ensure translations are working correctly and the user experience remains smooth.

Ultimately, the approach you choose will depend on the complexity of your application, the number of dynamic content elements, and the resources available for translation. Regardless of the approach, it's important to prioritize internationalization (i18n) and provide the best possible experience for users who speak different languages.