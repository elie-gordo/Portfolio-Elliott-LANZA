import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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

  const onSubmit = (data: FormValues) => {
    // In a real application, you would send this data to your backend
    console.log("Form data:", data);
    toast.success("Message envoyé avec succès! Nous vous contacterons bientôt.");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="container max-w-4xl mx-auto px-4 py-8 font-poppins">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-4 text-gradient"
            >
              Contactez-nous
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Vous avez une question ou un projet en tête ? N'hésitez pas à nous contacter. 
              Nous vous répondrons dans les plus brefs délais.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-card p-6 rounded-2xl border border-white/5"
            >
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Formulaire de contact
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              className="bg-card-hover border-white/10" 
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
                              className="bg-card-hover border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                              className="bg-card-hover border-white/10" 
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
                              className="bg-card-hover border-white/10" 
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
                            className="bg-card-hover border-white/10" 
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
                            className="min-h-32 bg-card-hover border-white/10" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gray-700 hover:bg-gray-800 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" /> Envoyer le message
                  </Button>
                </form>
              </Form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card p-6 rounded-2xl border border-white/5 space-y-6"
            >
              <h2 className="text-xl font-semibold mb-4">Informations</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400 text-sm">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-gray-400 text-sm">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Entreprise</h3>
                    <p className="text-gray-400 text-sm">Notre entreprise, Paris</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="font-medium mb-2">Horaires</h3>
                <p className="text-gray-400 text-sm mb-1">Lundi - Vendredi: 9h - 18h</p>
                <p className="text-gray-400 text-sm">Weekend: Fermé</p>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrées.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
