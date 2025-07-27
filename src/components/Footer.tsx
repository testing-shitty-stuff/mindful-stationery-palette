export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              Curated
              <span className="font-script text-3xl ml-2">Stationery</span>
            </h3>
            <p className="text-primary-foreground/80">
              Beautiful bundles for your creative journey
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <p className="text-lg font-semibold">₹500</p>
              <p className="text-sm text-primary-foreground/70">Per Bundle</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-lg font-semibold">6</p>
              <p className="text-sm text-primary-foreground/70">Color Options</p>
            </div>
            <div className="w-px h-8 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-lg font-semibold">100%</p>
              <p className="text-sm text-primary-foreground/70">Hand Curated</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Curated Stationery. Made with love for creative minds.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};