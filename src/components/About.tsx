import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-paper">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground uppercase tracking-wide text-sm font-medium">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Crafted with
                <span className="font-script text-primary block mt-2 text-5xl lg:text-6xl">
                  Passion & Care
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to my small stationery business! I'm offering carefully curated bundles 
                for anyone eager to begin journaling, planning, or simply organizing their 
                thoughts in a fun and affordable way.
              </p>
              <p>
                Each bundle is carefully put together, featuring high-quality items that I 
                personally love and find truly practical. I've put in a lot of effort to ensure 
                these bundles are both useful and visually appealing.
              </p>
              <p>
                Every item is hand-selected with your creative journey in mind. Whether you're 
                starting your first journal or you're a seasoned planner, these bundles will 
                inspire and support your organizational goals.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-px bg-primary" />
              <p className="text-primary font-medium">Made with love for creative minds</p>
            </div>
          </div>
          
          {/* Visual Elements */}
          <div className="space-y-6">
            <Card className="p-6 shadow-soft bg-card/60 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Why Choose Our Bundles?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bundle-green rounded-full" />
                    <p className="text-muted-foreground">Personally tested for quality</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bundle-blue rounded-full" />
                    <p className="text-muted-foreground">Thoughtfully coordinated colors</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bundle-red rounded-full" />
                    <p className="text-muted-foreground">Perfect for beginners and experts</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-bundle-violet rounded-full" />
                    <p className="text-muted-foreground">Affordable luxury stationery</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-soft bg-card/60 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Perfect For</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <p>• Journaling beginners</p>
                    <p>• Planning enthusiasts</p>
                    <p>• Creative minds</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Gift giving</p>
                    <p>• Self-care rituals</p>
                    <p>• Organization lovers</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};