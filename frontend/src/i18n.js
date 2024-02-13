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
                navMenuTestimonial: `Testimonial`,
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
                descSequenceSeven: `Scroll down or use the navbar to learn more about me and what I do.`,
                scrollDown: `Scroll Down.`
            },
            projects: {
                header: `Projects`,
                zombieApocalypseTitle: `Zombie Apocalypse`,
                zombieApocalypseDesc: `A 2D top-down shooter where survival is key.`,
                hedgeTrimmingTitle: `Hedge Trimming Web App`,
                hedgeTrimmingDesc: `A full stack web application created for a local hedge trimming company.`,
                ecoSmartTitle: `Eco Smart Home Hub`,
                ecoSmartDesc: `A smart home hub which allows the user to control local lights and fans.`,
                demo: 'Demo ➜'
            },
            about: {
                header: `About Me`,
                sectionOne: `Hello, I'm <strong>Evan Bond</strong> from Montreal, Canada. I've built valuable experience across different jobs, enhancing my computer skills and fostering qualities like adaptability, strong work ethic, and daily self-improvement.`,
                sectionTwo: `I embarked on my computer journey in high school, dedicating 2 daily hours to computer science. This persisted in college as I pursued a computer science DEC. It demanded hard work, dedication, and countless hours, resulting in consistent Dean's List recognition.`,
                sectionThree: `Working within teams throughout my time in college was an incredibly valuable and eye-opening experience that has fueled my eagerness to continue exploring exciting projects in the future, with a particular interest in web development and full-stack applications.`,
                sectionFour: `I have become confident using the following technologies:`,
                testHeader: 'Testimonials'
            },
            contact: {
                header: `Get In Touch`,
                email: `Send Email`
            },
            review: {
                header: `Ever worked with me? Share your experience!`,
                buttonText: `Leave a Testimonial!`,
                formName: `Your Full Name`,
                formRelationship: `Your Relationship To Me (Coworker, Peer, ...)`,
                formExperience: `Your Experience`,
                formSubmit: `Submit Your Testimonial!`,
                successTitle: `Thank you for that!`,
                successText: `Your testimonial has been submitted successfully.`,
                successConfirm: `OK`,
                failTitle: `Oops...`,
                failText: `Something went wrong! Please try again.`,
                failConfirm: `OK`,
                requiredField: `Please fill out this field.`
            }
        }
      },
      fr: {
        translation: {
            header: {
                navMenuProjects: `Projets`,
                navMenuAbout: `Moi`,
                navMenuContact: `Contact`,
                navMenuTestimonial: `Approbations`,
                resume: `Résumé`,
            },
            hero: {
                introTitle: `Bonjour, je suis Evan.`,
                descSequenceOne: `Un Développeur Full-Stack.`,
                descSequenceTwo: `Un Étudiant en Informatique.`,
                descSequenceThree: `Un Résolveur de Problèmes.`,
                descSequenceFour: `Un penseur innovant.`,
                descSequenceFive: `Un Stagiare.`,
                descSequenceSix: `Un Joueur D'Équipe.`,
                descSequenceSeven: `Faites défiler la page ou utilisez la barre de navigation pour en savoir plus sur moi et ce que je fais.`,
                scrollDown: `Défiler Vers Le Bas.`
            },
            projects: {
                header: `Projets`,
                zombieApocalypseTitle: `Zombie Apocalypse`,
                zombieApocalypseDesc: `Un jeu de tir top-down en 2D où la survie est la priorité.`,
                hedgeTrimmingTitle: `Application Web de Taille de Haies`,
                hedgeTrimmingDesc: `Une application web full-stack crée pour une entreprise locale de taille de haies.`,
                ecoSmartTitle: `Eco Smart Home Hub`,
                ecoSmartDesc: `Un hub domestique intelligent qui permet à l'utilisateur de contrôler les lumières et les ventilateurs locaux.`,
                demo: 'Démo ➜'
            },
            about: {
                header: `Sur Moi`,
                sectionOne: `Bonjour, je suis <strong>Evan Bond</strong> de Montréal, Canada. J'ai acquis une expérience précieuse dans le cadre de différents emplois, ce qui m'a permis d'améliorer mes compétences en informatique et de développer des qualités telles que l'adaptabilité, une solide éthique de travail et l'amélioration quotidienne de soi.`,
                sectionTwo: `J'ai commencé mon parcours informatique à l'école secondaire, en consacrant deux heures par jour à l'informatique. Cela s'est poursuivi au cégep, où je poursuis un DEC en informatique. Cela m'a demandé beaucoup de travail, de dévouement et d'innombrables heures, ce qui m'a permis de figurer régulièrement sur la liste du doyen.`,
                sectionThree: `Travailler en équipe tout au long de mes études a été une expérience incroyablement précieuse et révélatrice qui m'a donné envie de continuer à explorer des projets passionnants à l'avenir, avec un intérêt particulier pour le développement web et les applications full-stack.`,
                sectionFour: `J'ai acquis une confiance dans l'utilisation des technologies suivantes :`,
                testHeader: 'Approbations'
            },
            contact: {
                header: `Contactez-Moi`,
                email: `Envoyer Un Courriel`
            },
            review: {
              header: `Déjà travaillé avec moi? Partagez votre expérience!`,
              buttonText: `Laissez vos Impressions!`,
              formName: `Votre Nom Complet`,
              formRelationship: `Votre Relation Avec Moi (Collègue, Pair, ...)`,
              formExperience: `Votre Expérience`,
              formSubmit: `Soumettez Votre Témoignage!`,
              successTitle: `Je vous en remercie!`,
              successText: `Votre témoignage a été soumis avec succès.`,
              successConfirm: `OK`,
              failTitle: `Oups...`,
              failText: `Quelque chose n'a pas fonctionné ! Veuillez réessayer.`,
              failConfirm: `OK`,
              requiredField: `SVP remplir ce champ.`
          }
        }
      }
    }
  });

export default i18n;