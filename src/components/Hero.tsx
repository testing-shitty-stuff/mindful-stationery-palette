import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stationery.jpg";

export const Hero = () => {
  const scrollToShowcase = () => {
    const showcaseElement = document.getElementById('bundles-showcase');
    showcaseElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-warm">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful stationery arrangement"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground uppercase tracking-wide text-sm font-medium">
                Thoughtfully Curated
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Beautiful
                <span className="font-script text-primary block mt-2 text-6xl lg:text-7xl">
                  Stationery Bundles
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Carefully curated bundles for anyone eager to begin journaling, planning, 
                or simply organizing their thoughts in a fun and affordable way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={scrollToShowcase}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm hover:shadow-bundle transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Bundles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Color Options</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">₹500</p>
                <p className="text-sm text-muted-foreground">Per Bundle</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Curated</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-warm">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-bundle-green rounded-full" />
                  <div className="w-3 h-3 bg-bundle-red rounded-full" />
                  <div className="w-3 h-3 bg-bundle-blue rounded-full" />
                </div>
                <blockquote className="text-foreground/80 italic">
                  "Each bundle is carefully put together, featuring high-quality items 
                  that I personally love and find truly practical."
                </blockquote>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="text-sm text-muted-foreground text-center">
                  Handpicked with ❤️ for your creative journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};