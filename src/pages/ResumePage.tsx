import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const ResumePage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="w-full px-5 pb-20 pt-28 md:pt-36">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Resume</h1>
        <Button asChild variant="outline" className="rounded-none border-foreground hover:bg-muted"><a href="/Sandip_Shaw_Resume.pdf" download><Download className="mr-2 h-4 w-4" />Download PDF</a></Button>
      </div>
      <iframe src="/Sandip_Shaw_Resume.pdf" title="Sandip Shaw resume" className="h-[75vh] w-full border border-border bg-background" />
    </main>
  </div>
);

export default ResumePage;
