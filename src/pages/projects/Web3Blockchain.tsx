import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import cryptowaifuImage from "@/assets/cryptowaifu-v2.jpg";

const Web3Blockchain = () => {
  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          <Link to="/index">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gradient">Web3/BlockChain</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="CryptoWaifu V2 – Relance d'un projet NFT communautaire (non aboutie)"
              description="CryptoWaifu V2 est une reprise ambitieuse d'une collection NFT déjà existante, avec pour objectif de transformer un projet laissé à l'abandon en une plateforme communautaire Web3 solide, orientée produit et storytelling. J'ai pris en main la relance globale du projet, en reconstituant une équipe pluridisciplinaire et en redéveloppant entièrement l'infrastructure web dédiée à l'expérience NFT : mint, lore, wallet connect, et galerie des assets.

Le projet s'est distingué par une forte implication communautaire et une approche narrative unique autour des personnages, avant d'être suspendu pour des raisons externes à la partie technique.

👨‍🚀 **Mon rôle a couvert l'ensemble du cycle produit :**

• Audit des smart contracts existants et de l'écosystème
• Recrutement & gestion d'équipe (design, dev, marketing)
• Développement d'un site complet avec intégration Web3
• Création d'une interface de mint, wallet connect, et galerie NFT
• Mise en place des fondations pour une DAO communautaire

**CryptoWaifu V2**, c'est une démonstration de ma capacité à reprendre un projet Web3 existant, à réactiver une dynamique produit et à articuler technologie, storytelling et communauté."
              image={cryptowaifuImage}
              technologies={["React", "Next.js", "TailwindCSS", "Ethers.js", "WalletConnect", "OpenSea API", "Notion", "Figma"]}
              imageAlt="Interface de CryptoWaifu V2"
              githubLink=""
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

export default Web3Blockchain;