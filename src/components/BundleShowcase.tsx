import { useState } from "react";
import { BundleCard } from "./BundleCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import bundleGreen from "@/assets/bundle-green.jpg";
import bundleBlack from "@/assets/bundle-black.jpg";
import bundleRed from "@/assets/bundle-red.jpg";
import bundleYellow from "@/assets/bundle-yellow.jpg";
import bundleBlue from "@/assets/bundle-blue.jpg";
import bundleViolet from "@/assets/bundle-violet.jpg";

const bundles = [
  { color: 'green' as const, image: bundleGreen, name: 'Forest Green' },
  { color: 'black' as const, image: bundleBlack, name: 'Elegant Black' },
  { color: 'red' as const, image: bundleRed, name: 'Warm Red' },
  { color: 'yellow' as const, image: bundleYellow, name: 'Sunny Yellow' },
  { color: 'blue' as const, image: bundleBlue, name: 'Ocean Blue' },
  { color: 'violet' as const, image: bundleViolet, name: 'Rich Violet' },
];

export const BundleShowcase = () => {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);

  return (
    <section id="bundles-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-muted-foreground uppercase tracking-wide text-sm font-medium">
            Six Beautiful Collections
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Choose Your
            <span className="font-script text-primary block mt-2 text-5xl lg:text-6xl">
              Perfect Bundle
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each bundle contains thoughtfully selected stationery items that work harmoniously together. 
            Pick the color that speaks to your creative soul.
          </p>
        </div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bundles.map((bundle) => (
            <BundleCard
              key={bundle.color}
              color={bundle.color}
              image={bundle.image}
              isSelected={selectedBundle === bundle.color}
              onClick={() => setSelectedBundle(selectedBundle === bundle.color ? null : bundle.color)}
            />
          ))}
        </div>

        {/* What's Included Section */}
        <Card className="bg-gradient-paper p-8 lg:p-12 shadow-warm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                What's in Each
                <span className="font-script text-primary block text-4xl mt-1">
                  Bundle?
                </span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Premium Notebook</h4>
                    <p className="text-muted-foreground text-sm">High-quality paper perfect for journaling and note-taking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Coordinated Pen Set</h4>
                    <p className="text-muted-foreground text-sm">Smooth-writing pens in matching colors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Decorative Washi Tape</h4>
                    <p className="text-muted-foreground text-sm">Beautiful patterns to enhance your pages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Curated Stickers</h4>
                    <p className="text-muted-foreground text-sm">Thoughtfully selected designs for planning and decoration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Planning Accessories</h4>
                    <p className="text-muted-foreground text-sm">Additional tools to help organize your thoughts</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-primary">₹500</p>
                  <p className="text-muted-foreground">per bundle</p>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">✓ Carefully curated items</p>
                  <p className="text-sm text-muted-foreground">✓ Coordinated color scheme</p>
                  <p className="text-sm text-muted-foreground">✓ High-quality materials</p>
                  <p className="text-sm text-muted-foreground">✓ Perfect for gifting</p>
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm hover:shadow-bundle transition-all duration-300"
                >
                  Order Your Bundle
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};