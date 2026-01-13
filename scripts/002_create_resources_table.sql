-- Create resources table
CREATE TABLE IF NOT EXISTS public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('blog', 'guide', 'case-study', 'whitepaper', 'video', 'webinar', 'news')),
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  modified_date TIMESTAMP WITH TIME ZONE,
  read_time TEXT NOT NULL,
  image TEXT NOT NULL,
  author_id UUID REFERENCES public.authors(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',
  content TEXT NOT NULL,
  key_highlights TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to resources"
  ON public.resources
  FOR SELECT
  USING (true);

-- Create policy for authenticated insert
CREATE POLICY "Allow authenticated insert to resources"
  ON public.resources
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy for authenticated update
CREATE POLICY "Allow authenticated update to resources"
  ON public.resources
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS resources_slug_idx ON public.resources(slug);
CREATE INDEX IF NOT EXISTS resources_category_idx ON public.resources(category);
CREATE INDEX IF NOT EXISTS resources_author_id_idx ON public.resources(author_id);
CREATE INDEX IF NOT EXISTS resources_date_idx ON public.resources(date DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_resources_updated_at ON public.resources;
CREATE TRIGGER update_resources_updated_at
  BEFORE UPDATE ON public.resources
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
