import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Camera, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface UploadZoneProps {
  onImageUpload: (file: File, preview: string) => void;
  language: "en" | "hi";
}

const translations = {
  en: {
    dragText: "Drag and drop an image of cattle or buffalo here",
    orText: "or",
    uploadButton: "Upload Image",
    supportedFormats: "Supports JPG, PNG, WebP up to 10MB",
    processing: "Processing image...",
    error: "Please upload a valid image file",
    takePhoto: "Take Photo",
  },
  hi: {
    dragText: "गाय या भैंस की तस्वीर यहाँ खींचें और छोड़ें",
    orText: "या",
    uploadButton: "तस्वीर अपलोड करें",
    supportedFormats: "JPG, PNG, WebP तक 10MB समर्थित है",
    processing: "तस्वीर प्रोसेसिंग हो रही है...",
    error: "कृपया एक वैध तस्वीर फाइल अपलोड करें",
    takePhoto: "फोटो लें",
  },
};

const UploadZone = ({ onImageUpload, language }: UploadZoneProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const t = translations[language];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        setError(null);
        setIsProcessing(true);
        setUploadProgress(0);

        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setPreview(result);
          
          // Simulate upload progress
          let progress = 0;
          const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
              clearInterval(interval);
              setIsProcessing(false);
              onImageUpload(file, result);
            }
          }, 100);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false,
    onError: () => setError(t.error),
  });

  const clearPreview = () => {
    setPreview(null);
    setIsProcessing(false);
    setUploadProgress(0);
    setError(null);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-8">
      {preview ? (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={preview}
              alt="Upload preview"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={clearPreview}
              className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {isProcessing && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground text-center">
                {t.processing}
              </p>
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isDragActive
              ? "border-primary bg-primary/5 scale-105"
              : "border-border hover:border-primary/50 hover:bg-accent/50"
          }`}
        >
          <input {...getInputProps()} />
          
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {t.dragText}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.supportedFormats}
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-muted-foreground">{t.orText}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="default"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg"
              >
                <Upload className="w-4 h-4 mr-2" />
                {t.uploadButton}
              </Button>
              
              <Button variant="outline" className="hover:bg-accent">
                <Camera className="w-4 h-4 mr-2" />
                {t.takePhoto}
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-destructive" />
          <span className="text-sm text-destructive">{error}</span>
        </div>
      )}
    </Card>
  );
};

export default UploadZone;