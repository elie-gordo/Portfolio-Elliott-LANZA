import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarBackground from "@/components/StarBackground";
import ProjectReferenceCard from "@/components/ProjectReferenceCard";
import Footer from "@/components/Footer";
import web3Image from "@/assets/web3-blockchain.jpg";

const Web3Blockchain = () => {
  return (
    <div className="layout-container bg-background">
      <StarBackground />
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto p-6">
          <Link to="/index">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8 text-gradient">Web3/BlockChain</h1>
          
          <div className="grid gap-6">
            <ProjectReferenceCard
              title="Applications Décentralisées"
              description="Développement de DApps et smart contracts sur Ethereum et autres blockchains. Création d'interfaces utilisateur pour interagir avec la blockchain, intégration de wallets et développement de solutions DeFi innovantes."
              image={web3Image}
              technologies={["Solidity", "Web3.js", "Ethers.js", "React", "Ethereum", "IPFS", "MetaMask", "Hardhat"]}
              imageAlt="Interface blockchain et crypto-monnaies"
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