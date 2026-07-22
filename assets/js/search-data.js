// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "These are my chronologically ordered publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "All news announcements.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Overview of courses I teach at the University of Mannheim.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-formatting-and-links",
        
          title: "Formatting And Links",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "courses-scientific-programming-with-python",
          title: 'Scientific Programming with Python',
          description: "IS 557 &amp;middot; Master &amp;middot; Exercise Instructor",
          section: "Courses",handler: () => {
              window.location.href = "/courses/1_python/";
            },},{id: "courses-seminar-data-science-i-amp-ii",
          title: 'Seminar: Data Science I &amp;amp; II',
          description: "CS 721 / IS 723 &amp;middot; Master &amp;middot; Instructor",
          section: "Courses",handler: () => {
              window.location.href = "/courses/2_seminar/";
            },},{id: "courses-foundations-of-information-systems",
          title: 'Foundations of Information Systems',
          description: "IS 301 &amp;middot; Bachelor &amp;middot; Exercise Instructor",
          section: "Courses",handler: () => {
              window.location.href = "/courses/3_is301/";
            },},{id: "courses-seminar-data-science-i-amp-ii",
          title: 'Seminar: Data Science I &amp;amp; II',
          description: "CS 721 / IS 723 &amp;middot; Master &amp;middot; Instructor",
          section: "Courses",handler: () => {
              window.location.href = "/courses/4_seminar/";
            },},{id: "news-i-will-be-participating-at-ic-s-conference-in-norrköping-sweden-from-the-21-to-the-24-july-2025-presenting-a-poster-of-the-preprint-prompt-perturbations-reveal-human-like-biases-in-llm-survey-responses",
          title: 'I will be participating at IC²S² Conference in Norrköping, Sweden from the 21....',
          description: "",
          section: "News",},{id: "news-i-participated-in-a-workshop-at-gesis-in-cologne-germany-discussing-the-opportunities-and-challenges-of-simulating-societies-with-artificial-intelligence-especially-large-language-models-i-also-presented-our-current-work-on-representative-persona-collections-german-general-social-survey-personas-a-survey-derived-persona-prompt-collection-for-population-aligned-llm-studies",
          title: 'I participated in a workshop at GESIS in Cologne, Germany discussing the opportunities...',
          description: "",
          section: "News",},{id: "news-our-paper-german-general-social-survey-personas-a-survey-derived-persona-prompt-collection-for-population-aligned-llm-studies-has-been-accepted-at-lrec-2026-in-mallorca-spain-we-also-release-the-accompanying-ggss-personas-dataset-via-gesis",
          title: 'Our paper German General Social Survey Personas: A Survey-Derived Persona Prompt Collection for...',
          description: "",
          section: "News",},{id: "news-our-paper-qstn-a-modular-framework-for-robust-questionnaire-inference-with-large-language-models-has-been-accepted-at-eacl-2026-system-demonstrations",
          title: 'Our paper QSTN: A Modular Framework for Robust Questionnaire Inference with Large Language...',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-at-lrec-2026-in-palma-de-mallorca-spain-german-general-social-survey-personas-a-survey-derived-persona-prompt-collection-for-population-aligned-llm-studies",
          title: 'I presented our paper at LREC 2026 in Palma de Mallorca, Spain: German...',
          description: "",
          section: "News",},{id: "news-i-attended-the-css-dach-conference-in-vienna-austria-bringing-together-researchers-in-computational-social-science-from-german-speaking-countries",
          title: 'I attended the CSS DACH Conference in Vienna, Austria, bringing together researchers in...',
          description: "",
          section: "News",},{id: "news-i-attended-the-css-school-at-lake-como-and-presented-our-work-on-how-the-level-of-human-response-variation-in-a-survey-items-affects-the-alignment-of-synthetic-survey-responses-with-persona-prompting",
          title: 'I attended the CSS School at Lake Como and presented our work on...',
          description: "",
          section: "News",},{id: "news-i-will-present-our-paper-prompt-perturbations-reveal-human-like-biases-in-large-language-model-survey-responses-at-the-seventh-workshop-on-nlp-and-computational-social-science-nlp-css-at-acl-2026-in-san-diego-we-test-18-large-language-models-on-survey-questions-from-the-world-values-survey-applying-ten-different-perturbations-to-question-wording-and-answer-options-across-over-334-800-simulated-survey-interviews-we-find-that-17-out-of-18-models-display-recency-bias-disproportionately-favoring-the-last-presented-answer-option-while-larger-models-show-greater-overall-robustness-our-results-highlight-the-need-for-careful-prompt-design-when-generating-synthetic-survey-data-with-llms",
          title: 'I will present our paper Prompt Perturbations Reveal Human-Like Biases in Large Language...',
          description: "",
          section: "News",},{id: "news-i-am-co-organizing-a-tutorial-at-the-12th-international-conference-on-computational-social-science-ic-s-in-burlington-vermont-tutorial-an-introduction-to-simulating-human-survey-responses-with-large-language-models-potentials-and-pitfalls-this-hands-on-session-introduces-researchers-to-employing-large-language-models-for-generating-survey-data-with-an-emphasis-on-methodological-discipline-we-address-how-silicon-samples-can-supplement-human-data-collection-through-pretesting-and-statistical-correction-topics-covered-include-systematic-exploration-of-how-design-decisions-affect-simulation-results-the-qstn-framework-for-structured-simulations-python-based-practical-exercises-for-generating-simulated-responses-use-cases-including-missing-data-imputation-and-statistical-correction-critical-assessment-of-limitations-validation-issues-and-ethical-considerations-the-tutorial-is-co-organized-together-with-georg-ahnert-maximilian-kreutner-indira-sen-markus-strohmaier-university-of-mannheim-and-kristina-gligorić-johns-hopkins-university",
          title: 'I am co-organizing a tutorial at the 12th International Conference on Computational Social...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/jrupprec.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%6E%73.%72%75%70%70%72%65%63%68%74 [%61%74] %75%6E%69-%6D%61%6E%6E%68%65%69%6D.%64%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jrupprec", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jens-rupprecht-4018b5231", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-0749-4372", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/kuh5p/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=wiqnbWoAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
