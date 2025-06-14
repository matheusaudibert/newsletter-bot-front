
import { Bot, Settings, Bell, Users, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Commands from "@/components/Commands";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <Features />
      <Commands />
      <Footer />
    </div>
  );
};

export default Index;
