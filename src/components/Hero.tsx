import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stationery.jpg";

export const Hero = () => {
  const scrollToShowcase = () => {
    const showcaseElement = document.getElementById('bundles-showcase');
    showcaseElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-warm pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful stationery arrangement"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-bundle-green/20 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-bundle-blue/20 rounded-full blur-sm animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-bundle-yellow/20 rounded-full blur-sm animate-pulse delay-500" />
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-bundle-violet/20 rounded-full blur-sm animate-pulse delay-700" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <div className="w-2 h-2 bg-bundle-green rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-bundle-red rounded-full animate-pulse delay-200" />
                <div className="w-2 h-2 bg-bundle-blue rounded-full animate-pulse delay-400" />
              </div>
              <p className="text-muted-foreground uppercase tracking-wide text-sm font-medium">
                Thoughtfully Curated
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Beautiful
                <span className="font-script text-primary block mt-2 text-6xl lg:text-7xl transform hover:scale-105 transition-transform duration-300">
                  Stationery Bundles
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Carefully curated bundles for anyone eager to begin journaling, planning, 
                or simply organizing their thoughts in a fun and affordable way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button 
                size="lg"
                onClick={scrollToShowcase}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm hover:shadow-bundle transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  Explore Bundles
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
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
          
          {/* Enhanced Decorative Elements */}
          <div className="hidden lg:block relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-bundle-violet/5 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-warm border border-border/50 hover:shadow-bundle transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-bundle-green rounded-full animate-pulse" />
                    <div className="w-4 h-4 bg-bundle-red rounded-full animate-pulse delay-200" />
                    <div className="w-4 h-4 bg-bundle-blue rounded-full animate-pulse delay-400" />
                  </div>
                  <div className="text-2xl">✨</div>
                </div>
                <blockquote className="text-foreground/90 italic text-lg leading-relaxed">
                  "Each bundle is carefully put together, featuring high-quality items 
                  that I personally love and find truly practical."
                </blockquote>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Handpicked with ❤️ for your creative journey
                  </p>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-bundle-yellow rounded-full" />
                    <div className="w-1 h-1 bg-bundle-violet rounded-full" />
                    <div className="w-1 h-1 bg-bundle-green rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};