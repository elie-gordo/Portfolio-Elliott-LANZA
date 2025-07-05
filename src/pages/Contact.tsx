import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  User, 
  Phone, 
  Send, 
  Briefcase, 
  MessageSquare,
  Info
} from "lucide-react";
import Footer from "@/components/Footer";

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Adresse email invalide" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Le sujet doit contenir au moins 5 caractères" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  // Gestion du mouvement de souris pour les animations parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    
    mousePositionRef.current = { x, y };
    
    if (titleRef.current) {
      titleRef.current.style.transform = `translate(${x * -15}px, ${y * -8}px)`;
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.transform = `translate(${x * -8}px, ${y * -4}px)`;
    }
  };

  useEffect(() => {
    setMounted(true);
    
    const resetTransforms = () => {
      if (titleRef.current) {
        titleRef.current.style.transform = 'translate(0, 0)';
      }
      
      if (subtitleRef.current) {
        subtitleRef.current.style.transform = 'translate(0, 0)';
      }
    };
    
    const currentContainer = containerRef.current;
    currentContainer?.addEventListener('mouseleave', resetTransforms);
    
    return () => {
      currentContainer?.removeEventListener('mouseleave', resetTransforms);
    };
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Préparer les données en s'assurant que les champs optionnels sont des chaînes
      const contactData = {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        subject: data.subject,
        message: data.message,
      };

      const { error } = await supabase
        .from('contact_messages')
        .insert([contactData]);

      if (error) {
        throw error;
      }

      toast.success("Message envoyé !");
      form.reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full relative overflow-hidden flex flex-col"
    >
      {/* Particules d'animation de fond - exactement comme dans Home */}
      <motion.div
        animate={{ scale: [0.9, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-white/5 blur-3xl"
      />
      
      <motion.div
        animate={{ scale: [1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-white/5 blur-3xl"
      />

      {/* Petites particules scintillantes */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>

      {/* Orbes flottants */}
      <motion.div 
        className="absolute bottom-20 left-10 md:left-20 w-20 h-20 bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-xl"
        animate={{ y: [-10, 10], opacity: [0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="absolute top-20 right-10 md:right-20 w-24 h-24 bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-xl"
        animate={{ y: [10, -10], opacity: [0.3, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="content-wrapper relative z-10 flex-1">
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center mb-8 md:mb-12">
              <motion.h1 
                ref={titleRef}
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold mb-4 text-gradient transition-transform duration-200 ease-out"
              >
                Contactez-nous
              </motion.h1>
              <motion.p 
                ref={subtitleRef}
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base transition-transform duration-200 ease-out"
              >
                Vous avez une question ou un projet en tête ? N'hésitez pas à nous contacter. 
                Nous vous répondrons dans les plus brefs délais.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Effet de lueur au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center relative z-10">
                  <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Formulaire de contact
                </h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              <User className="h-4 w-4 mr-2" /> Nom
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Votre nom" 
                                className="bg-card-hover border-white/10 relative z-10" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              <Mail className="h-4 w-4 mr-2" /> Email
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="votre@email.com" 
                                className="bg-card-hover border-white/10 relative z-10" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              <Phone className="h-4 w-4 mr-2" /> Téléphone (optionnel)
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Votre numéro de téléphone" 
                                className="bg-card-hover border-white/10 relative z-10" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-2" /> Entreprise (optionnel)
                            </FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Nom de votre entreprise" 
                                className="bg-card-hover border-white/10 relative z-10" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <Info className="h-4 w-4 mr-2" /> Sujet
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Sujet de votre message" 
                              className="bg-card-hover border-white/10 relative z-10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-2" /> Message
                          </FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Détaillez votre demande ici..." 
                              className="min-h-32 bg-card-hover border-white/10 relative z-10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", duration: 0.3 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Send className="mr-2 h-4 w-4 relative z-10" /> 
                        <span className="relative z-10">
                          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10 shadow-xl space-y-6 relative overflow-hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Effet de lueur au survol */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <h2 className="text-lg sm:text-xl font-semibold mb-4 relative z-10">Informations</h2>
                
                <div className="space-y-4 relative z-10">
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400 text-sm">contact@elliott-lanza.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-gray-400 text-sm">Bientôt disponible</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Briefcase className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                    <div>
                      <h3 className="font-medium">Entreprise</h3>
                      <p className="text-gray-400 text-sm">Situé a Lyon</p>
                    </div>
                  </motion.div>
                </div>
                
                <Separator className="my-6 relative z-10" />
                
                <div className="relative z-10">
                  <h3 className="font-medium mb-2">Horaires</h3>
                  <p className="text-gray-400 text-sm">Nous sommes joignables 7j/7.</p>
                </div>
                
                <motion.p 
                  className="text-sm text-gray-500 mt-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrées.
                </motion.p>
              </motion.div>
            </div>

            {/* Particules supplémentaires pour l'ambiance - comme dans Home */}
            <motion.div 
              className="absolute top-40 left-10 w-2 h-2 bg-white/20 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute bottom-40 right-20 w-1.5 h-1.5 bg-white/30 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
      
      <div className="footer-wrapper flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;