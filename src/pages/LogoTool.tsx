import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Download, Loader2 } from "lucide-react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";
import { useToast } from "@/hooks/use-toast";

const LogoTool = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);

    // Process image
    setIsProcessing(true);
    try {
      const img = await loadImage(file);
      const resultBlob = await removeBackground(img);
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(resultUrl);
      
      toast({
        title: "Sukces!",
        description: "Tło zostało usunięte. Możesz teraz pobrać plik.",
      });
    } catch (error) {
      console.error("Error processing image:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się przetworzyć obrazu. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const a = document.createElement("a");
    a.href = processedImage;
    a.download = "logo-transparent.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Narzędzie do usuwania tła z logo
          </h1>
          <p className="text-muted-foreground text-lg">
            Wgraj swoje logo, a automatycznie usuniemy tło i uzyskasz przezroczysty plik PNG
          </p>
        </div>

        <Card className="p-8 shadow-large">
          <div className="space-y-6">
            {!originalImage && (
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden"
                />
                <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Wgraj logo</h3>
                <p className="text-muted-foreground mb-4">
                  Obsługiwane formaty: JPG, PNG, WebP
                </p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  Wybierz plik
                </Button>
              </div>
            )}

            {originalImage && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Oryginał</h3>
                  <div className="border border-border rounded-lg p-4 bg-muted/30">
                    <img
                      src={originalImage}
                      alt="Original"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Po usunięciu tła
                  </h3>
                  <div className="border border-border rounded-lg p-4 bg-[repeating-linear-gradient(45deg,hsl(var(--muted))_0px,hsl(var(--muted))_10px,hsl(var(--muted)/0.5)_10px,hsl(var(--muted)/0.5)_20px)]">
                    {isProcessing ? (
                      <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                          <p className="text-muted-foreground">
                            Przetwarzanie obrazu...
                          </p>
                        </div>
                      </div>
                    ) : processedImage ? (
                      <img
                        src={processedImage}
                        alt="Processed"
                        className="w-full h-auto rounded"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-64 text-muted-foreground">
                        Przetwarzanie...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {processedImage && (
              <div className="flex gap-4 justify-center pt-4">
                <Button onClick={handleDownload} size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Pobierz przezroczyste logo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setOriginalImage(null);
                    setProcessedImage(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                >
                  Wgraj nowe logo
                </Button>
              </div>
            )}
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Przetwarzanie odbywa się lokalnie w przeglądarce - Twoje pliki nie są
            wysyłane na serwer
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoTool;
