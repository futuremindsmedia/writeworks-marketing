-- Create authors table
CREATE TABLE IF NOT EXISTS public.authors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no auth required for public content)
CREATE POLICY "Allow public read access to authors"
  ON public.authors
  FOR SELECT
  USING (true);

-- Create policy for authenticated insert (for future admin features)
CREATE POLICY "Allow authenticated insert to authors"
  ON public.authors
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated update (for future admin features)
CREATE POLICY "Allow authenticated update to authors"
  ON public.authors
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create index on slug for faster lookups
CREATE INDEX IF NOT EXISTS authors_slug_idx ON public.authors(slug);

-- Insert sample authors
INSERT INTO public.authors (slug, name, role, bio, image) VALUES
  ('sarah-chen', 'Sarah Chen', 'Head of Content Strategy', 'Sarah Chen is the Head of Content Strategy at WriteWorks with over 10 years of experience in digital marketing and AI-powered content optimization.', '/placeholder.svg?height=100&width=100'),
  ('emily-watson', 'Dr. Emily Watson', 'AI Research Lead', 'Dr. Emily Watson leads AI research at WriteWorks, focusing on understanding and optimizing content for large language models.', '/placeholder.svg?height=100&width=100'),
  ('marcus-rodriguez', 'Marcus Rodriguez', 'Customer Success Manager', 'Marcus Rodriguez is a Customer Success Manager at WriteWorks, helping companies optimize their content for maximum AI visibility.', '/placeholder.svg?height=100&width=100'),
  ('michael-rodriguez', 'Michael Rodriguez', 'Search Technology Analyst', 'Michael Rodriguez is a search technology analyst specializing in AI-powered search engines and their impact on digital marketing strategies.', '/placeholder.svg?height=100&width=100')
ON CONFLICT (slug) DO NOTHING;
