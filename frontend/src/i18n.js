import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
            header: {
                navMenuProjects: `Projects`,
                navMenuAbout: `About`,
                navMenuContact: `Contact`,
                resume: `Resume`,
            },
            hero: {
                introTitle: `Hi I'm Evan.`,
                descSequenceOne: `A Full-Stack Developer.`,
                descSequenceTwo: `A Computer Science Student.`,
                descSequenceThree: `A problem solver.`,
                descSequenceFour: `An innovative thinker.`,
                descSequenceFive: `An intern.`,
                descSequenceSix: `A team player.`,
                descSequenceSeven: `Scroll down or use the navbar to learn more about me and what I do.`
            }
        }
      },
      fr: {
        translation: {
            header: {
                navMenuProjects: `Projets`,
                navMenuAbout: `Moi`,
                navMenuContact: `Contact`,
                resume: `Résumé`,
            },
            hero: {
                introTitle: `Bonjour, je suis Evan.`,
                descSequenceOne: `Un Développeur Full-Stack.`,
                descSequenceTwo: `Un Étudiant en Informatique.`,
                descSequenceThree: `Un Résolveur de Problèmes.`,
                descSequenceFour: `An innovative thinker.`,
                descSequenceFive: `Un Stagiare.`,
                descSequenceSix: `Un Joueur D'Équipe.`,
                descSequenceSeven: `Faites défiler la page ou utilisez la barre de navigation pour en savoir plus sur moi et ce que je fais.`
            }
        }
      }
    }
  });

export default i18n;