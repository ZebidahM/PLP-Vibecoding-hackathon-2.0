
// EventHub Kenya - Minimal MVP Next.js 14 project
// Simplified monolithic file listing for quick copy-paste into GitHub.
// Create a new repo, run `npm init -y`, then replace/add files as named below.

// ================== package.json ==================
{
  "name": "eventhub-kenya",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build && next lint",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.42.4",
    "clsx": "^2.1.1",
    "lucide-react": "^0.336.0",
    "next": "14.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-hook-form": "^7.51.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.0"
  }
}

// ================== tsconfig.json ==================
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "verbatimModuleSyntax": true,
    "types": ["node"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// ================== tailwind.config.js ==================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

// ================== postcss.config.js ==================
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// ================== next.config.mjs ==================
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
export default nextConfig;

// ================== .env.example ==================
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

// ================== app/globals.css ==================
@tailwind base;
@tailwind components;
@tailwind utilities;

// ================== lib/supabaseClient.ts ==================
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const supabaseClient = createBrowserSupabaseClient({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
});

// ================== components/ui/button.tsx ==================
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-2 shadow",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };

// ================== components/ui/card.tsx ==================
import * as React from "react";
import clsx from "clsx";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "rounded-2xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx("p-6 pt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";
export { Card, CardContent };

// ================== app/layout.tsx ==================
import "@/app/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "EventHub Kenya",
  description: "Find & book local event vendors quickly",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// ================== app/page.tsx ==================
"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Vendor {
  id: string;
  name: string;
  specialty: string;
}

export default function Home() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  useEffect(() => {
    fetch("/api/vendors")
      .then((r) => r.json())
      .then(setVendors)
      .catch(() => setVendors([]));
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex flex-col items-center justify-center gap-4 py-20 px-4 text-center">
        <h1 className="text-5xl font-bold">EventHub Kenya</h1>
        <p className="text-xl max-w-2xl">
          Find & book local caterers, chefs & event planners in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="/signup">Sign up as Vendor</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/services">Browse Services</a>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20">
        {vendors.map((v) => (
          <Card key={v.id} className="shadow-sm">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{v.name}</h3>
              <p className="text-sm text-gray-500">{v.specialty}</p>
              <Button className="mt-4" asChild>
                <a href={`/vendors/${v.id}`}>View Profile</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

// ================== app/api/vendors/route.ts ==================
import { NextResponse } from "next/server";

const demoVendors = [
  { id: "chef-kariuki", name: "Chef Kariuki", specialty: "Gourmet African Fusion" },
  { id: "nyumbani-caters", name: "Nyumbani Caters", specialty: "Small‑scale home catering" },
  { id: "mega-event-planners", name: "Mega Event Planners", specialty: "Full‑service large events" },
];

export async function GET() {
  // In production, fetch from Supabase
  return NextResponse.json(demoVendors);
}

// ================== app/vendors/[id]/page.tsx ==================
type Props = { params: { id: string } };
export default async function VendorProfile({ params }: Props) {
  // TODO: fetch vendor by ID
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Vendor Profile: {params.id}</h1>
      <p className="mt-2">
