import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StarBackground from "@/components/StarBackground";

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
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">À venir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Cette section sera bientôt mise à jour avec mes projets Web3/Blockchain.
                  N'hésitez pas à revenir prochainement pour découvrir mes réalisations dans ce domaine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3Blockchain;