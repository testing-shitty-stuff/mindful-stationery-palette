import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bundle: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order received!",
      description: "Thank you for your interest. We'll contact you soon with order details.",
    });
    setFormData({ name: '', email: '', bundle: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-muted-foreground uppercase tracking-wide text-sm font-medium">
            Ready to Start?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Order Your
            <span className="font-script text-primary block mt-2 text-5xl lg:text-6xl">
              Perfect Bundle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch to place your order or ask any questions. We'll help you choose 
            the perfect bundle for your creative journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-warm bg-gradient-paper">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="bundle" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Bundle Color
                  </label>
                  <select
                    id="bundle"
                    name="bundle"
                    value={formData.bundle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a color</option>
                    <option value="green">Forest Green</option>
                    <option value="black">Elegant Black</option>
                    <option value="red">Warm Red</option>
                    <option value="yellow">Sunny Yellow</option>
                    <option value="blue">Ocean Blue</option>
                    <option value="violet">Rich Violet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full"
                    placeholder="Any special requests or questions?"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm hover:shadow-bundle transition-all duration-300"
              >
                Place Your Order
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Order Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex justify-between items-center">
                  <span>Price per bundle:</span>
                  <span className="font-semibold text-primary">₹500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Available colors:</span>
                  <span className="font-semibold">6 options</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery time:</span>
                  <span className="font-semibold">3-5 days</span>
                </div>
                <div className="w-full h-px bg-border" />
                <p className="text-sm">
                  Each bundle is carefully packed and quality-checked before shipping. 
                  We'll send you order confirmation and tracking details via email.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Need Help?</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="text-sm">
                  Have questions about which bundle is right for you? Want to know more 
                  about specific items in each bundle? We're here to help!
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Response time:</span> Usually within 24 hours
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-foreground">Best for:</span> First-time buyers, bulk orders, custom requests
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Color Palette Display */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-4">Bundle Colors</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-bundle-green rounded-full mx-auto" />
                  <p className="text-xs text-muted-foreground">Green</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-bundle-black rounded-full mx-auto" />
                  <p className="text-xs text-muted-foreground">Black</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-bundle-red rounded-full mx-auto" />
                  <p className="text-xs text-muted-foreground">Red</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-bundle-yellow rounded-full mx-auto" />
                  <p className="text-xs text-muted-foreground">Yellow</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-bundle-blue rounded-full mx-auto" />
                  <p className="text-xs text-muted-foreground">Blue</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-8 h-8 bg-bundle-violet rounded-full mx-auto" />
                  <p className="text-xs text-muted-foreground">Violet</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};