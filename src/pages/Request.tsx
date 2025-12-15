import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload, Send, CheckCircle, Phone } from "lucide-react";

const Request = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    files: [] as File[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Application Development",
    "Website Building",
    "Poster Design & Video Works",
    "Account Help & Safety",
    "Voice Work & Recording",
    "Job Training (Tech & Non-Tech Fields)",
    "Custom Request"
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('description', formData.description);
      
      // Append all files
      formData.files.forEach(file => {
        formDataToSend.append('files', file);
      });

      // Send to Formspree
      const response = await fetch('https://formspree.io/f/movooayv', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Request Submitted Successfully!",
          description: "Your service request has been sent to our team. We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          description: "",
          files: []
        });

        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
            Submit Your Service Request
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you with a detailed proposal within 24 hours.
          </p>
        </div>

        <Card className="shadow-purple border-primary/20 bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
              Project Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 (555) 123-4567"
                  className="border-primary/20 focus:border-primary"
                />
                <p className="text-xs text-muted-foreground">
                  Include your number if you'd prefer a phone call consultation
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service">Choose Service *</Label>
                <Select 
                  required
                  value={formData.service} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                >
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select the service you need" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload Files (Optional)</Label>
                <div className="border-2 border-dashed border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                  <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground mb-2">
                    Click to upload files or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Images, documents, videos (Max 10MB each)
                  </p>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.mp4,.mov,.avi"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Choose Files
                  </Button>
                </div>
                {formData.files.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      {formData.files.length} file(s) selected:
                    </p>
                    <ul className="text-sm text-primary">
                      {formData.files.map((file, index) => (
                        <li key={index}>• {file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your project in detail. Include specific requirements, preferences, timeline, and any other relevant information..."
                  className="min-h-[120px] border-primary/20 focus:border-primary"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-primary hover:shadow-glow transition-all min-w-[200px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Request
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Your request will be sent directly to infyrex.tech@gmail.com</li>
                  <li>• If you provided a phone number, we may call to discuss your project</li>
                  <li>• Our team will review your requirements within 24 hours</li>
                  <li>• You'll receive a detailed proposal with timeline and pricing</li>
                  <li>• Once approved, we'll start working on your project immediately</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Request;