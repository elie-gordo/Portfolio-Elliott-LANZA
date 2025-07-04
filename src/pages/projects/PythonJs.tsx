import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import pythonJsImage from "@/assets/python-js.jpg";
import betiqImage from "@/assets/betiq-telegram-bot.jpg";
import photoContestImage from "@/assets/photo-contest-bot.jpg";

const PythonJs = () => {
  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper">
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <Link to="/index">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient">Python/JS</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="5 fonctionnalités dans 1 projet"
              description="**1. Agent IA autonome avec mémoire**
Un agent conversationnel intelligent capable de mémoriser les échanges et d'utiliser une base de connaissances vectorielle pour améliorer ses réponses. Idéal pour des assistants personnalisés ou des chatbots évolués.

**2. Analyse de texte intelligente**
Application d'analyse de texte basée sur l'IA permettant d'extraire des informations, de détecter des sentiments et de générer des résumés à partir de contenus textuels variés.

**3. Assistant IA connecté à Google Calendar**
Assistant intelligent qui s'intègre à Google Calendar pour planifier, organiser et automatiser la gestion d'événements, avec une interface simple et des fonctionnalités avancées d'IA.

**4. Dashboard intelligent**
Tableau de bord interactif pour visualiser, analyser et interpréter des données métiers grâce à l'intelligence artificielle. Permet de prendre des décisions éclairées à partir de données complexes.

**5. Générateur de personas + landing page IA**
Outil générant automatiquement des personas marketing et une landing page personnalisée à l'aide de l'IA, facilitant la création de profils clients et la mise en place de campagnes ciblées."
              image={pythonJsImage}
              technologies={["Python", "JavaScript", "React", "Django", "Flask", "PostgreSQL", "MongoDB", "REST API"]}
              imageAlt="Code Python et JavaScript sur écrans multiples"
              githubLink="https://github.com/elie-gordo/projets_portfolio_ai"
            />
            
            <ProjectReferenceCard
              title="BetIQ 2.5 - Bot Telegram IA"
              description="**BetIQ 2.5** est un bot Telegram intelligent conçu pour accompagner les parieurs dans leur prise de décision grâce à l'intelligence artificielle. Pensé pour être simple, rapide et accessible, le bot permet de générer automatiquement des combinés de paris optimisés selon plusieurs niveaux de risque, tout en proposant une analyse prédictive des cotes et la détection en temps réel de value bets.

L'expérience utilisateur est entièrement intégrée à Telegram : boutons cliquables, interactions fluides, mode démo sans API réelles, et génération instantanée de recommandations.

💡 **Fonctionnalités principales :**

🔍 Recherche automatique de matchs (J+0 à J+3) sur tous les sports

📊 Analyse IA des cotes et probabilités pour repérer les value bets

🎲 Génération de combinés par niveau de risque (SAFE, MOYEN, HIGH RISK)

💬 Interface Telegram 100% interactive avec boutons et commandes claires

🎭 Mode démo complet pour tests sans connexion à des API externes

🎯 **Types de combinés proposés :**

🛡️ **SAFE** – Haute confiance (≥75%) / Faible risque

⚖️ **MOYEN** – Bon équilibre (≥60%) / Potentiel modéré

🚀 **HIGH RISK** – Fort potentiel (≥45%) / Risque élevé"
              image={betiqImage}
              technologies={["Telegram Bot API", "IA", "Machine Learning", "JavaScript", "API REST"]}
              imageAlt="Interface du bot Telegram BetIQ pour paris sportifs avec IA"
            />
            
            <ProjectReferenceCard
              title="📸 PhotoContestBot – Bot Telegram pour concours photo automatisés"
              description="**PhotoContestBot** est un bot Telegram interactif conçu pour animer des groupes autour de concours photo hebdomadaires, avec un système de vote intégré, des statistiques en temps réel et une gestion automatisée des sondages et résultats.

Pensé pour favoriser l'engagement communautaire, le bot permet aux membres de publier des photos accompagnées d'un titre ou d'une description, de voter via des boutons personnalisés, et de suivre l'évolution des scores et classements. Chaque semaine, les meilleures contributions sont automatiquement sélectionnées pour un sondage final, et les résultats sont partagés au sein du groupe.

✨ **Fonctionnalités principales :**

🖼️ **Gestion des photos :** publication avec titre/description, vote direct via boutons (+1/-1), modification de vote, blocage des doublons

📊 **Système de vote :** notation en temps réel, affichage des scores, détails consultables, anti-abus intégré

🏆 **Concours hebdomadaires :** sélection automatique du top 3 chaque dimanche à 20h, sondage natif Telegram, vote de 24h, annonce automatique des gagnants

📈 **Statistiques :** score net, classement général, historique des gagnants, suivi des publications et performances individuelles

Le bot gère l'ensemble du processus en autonomie et transforme un simple groupe Telegram en une véritable compétition créative et communautaire."
              image={photoContestImage}
              technologies={["Telegram Bot API", "Python", "MongoDB", "API REST"]}
              imageAlt="Interface du bot Telegram PhotoContestBot pour concours photo avec système de vote"
            />
          </div>
        </div>
      </div>
      
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default PythonJs;