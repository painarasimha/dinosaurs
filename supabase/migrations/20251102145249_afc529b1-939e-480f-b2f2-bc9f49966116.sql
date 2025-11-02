-- Create contact_submissions table for storing contact form entries
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact form submissions
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
TO public
WITH CHECK (true);

-- Create policy to allow authenticated users to read submissions (for admin access later)
CREATE POLICY "Authenticated users can view submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (true);