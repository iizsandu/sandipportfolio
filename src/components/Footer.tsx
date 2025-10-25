const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sandip Shaw. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for data science and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
