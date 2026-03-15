"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeLargeTitles"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Elevate Digital"
          navItems={[
            { name: "About", id: "about" },
            { name: "Work", id: "portfolio" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get a Quote",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Your Business Deserves to Be Online."
          description="We build fast, modern websites for local businesses ready to grow."
          background={{ variant: "plain" }}
          testimonials={[
            {
              name: "Sarah Chen",              handle: "CEO, Local Restaurant Group",              testimonial: "Elevate Digital transformed our online presence in just two weeks. Our website converts.",              rating: 5
            },
            {
              name: "Marcus Rivera",              handle: "Owner, Rivera Salon & Spa",              testimonial: "Finally, a web design team that understands our business. Results speak for themselves.",              rating: 5
            },
            {
              name: "Jessica Park",              handle: "Operations Manager, Construction Co.",              testimonial: "Professional, fast, and affordable. Exactly what we needed for our business.",              rating: 5
            }
          ]}
          buttons={[
            { text: "See Our Work", href: "#portfolio" },
            { text: "Get a Free Quote", href: "#contact" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="what-we-do" data-section="what-we-do">
        <FeatureCardTwentyFour
          title="Most Local Businesses Are Invisible Online."
          description="If you don't have a website — or your current one is outdated — you're losing customers every day to competitors who do. We fix that, fast."
          features={[
            {
              id: "fast-turnaround",              title: "Fast Turnaround",              author: "Services",              description: "Delivered in days, not months.",              tags: ["Speed", "Efficiency"],
              imageSrc: "http://img.b2bpic.net/free-vector/abstract-background-design_1128-124.jpg?_wi=1",              imageAlt: "minimal dark grid pattern professional"
            },
            {
              id: "mobile-first",              title: "Mobile-First",              author: "Services",              description: "Looks perfect on every screen.",              tags: ["Responsive", "Modern"],
              imageSrc: "http://img.b2bpic.net/free-vector/smoothies-bar-landing-page_23-2148682482.jpg?_wi=1",              imageAlt: "ice cream business website design"
            },
            {
              id: "seo-ready",              title: "Built to Be Found",              author: "Services",              description: "SEO-ready from day one.",              tags: ["SEO", "Visibility"],
              imageSrc: "http://img.b2bpic.net/free-vector/display-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement_125964-1409.jpg?_wi=1",              imageAlt: "web design portfolio gallery showcase"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Work We're Proud Of."
          description="A few of the local businesses we've helped get online."
          products={[
            {
              id: "marcoza",              brand: "Restaurant",              name: "Marcoza — Luxury Italian Trattoria",              price: "Custom Design",              rating: 5,
              reviewCount: "Completed",              imageSrc: "http://img.b2bpic.net/free-photo/homemade-recipe-food-nutrition-appetite_53876-133764.jpg?_wi=1",              imageAlt: "restaurant website luxury dark elegant"
            },
            {
              id: "southern-ice",              brand: "Food Service",              name: "Southern Ice Co. — Family-Friendly Venue",              price: "Custom Design",              rating: 5,
              reviewCount: "Completed",              imageSrc: "http://img.b2bpic.net/free-vector/smoothies-bar-landing-page_23-2148682482.jpg?_wi=2",              imageAlt: "ice cream business website design"
            },
            {
              id: "your-business",              brand: "Next Client",              name: "Your Business — You Could Be Next",              price: "Starting at $199",              rating: 5,
              reviewCount: "Available",              imageSrc: "http://img.b2bpic.net/free-vector/display-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement_125964-1409.jpg?_wi=2",              imageAlt: "web design portfolio gallery showcase"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <MetricCardSeven
          title="A Small Team. Serious Results."
          description="Elevate Digital is a tight-knit web design studio with 2+ years of experience building websites for local businesses. We've worked with restaurants, salons, contractors, shops, and more. We're not a big agency — and that's the point. You get direct communication, fast turnaround, and people who genuinely care about your success."
          metrics={[
            {
              id: "websites-delivered",              value: "10+",              title: "Websites Delivered",              items: ["Quality Results", "Client Success"]
            },
            {
              id: "years-experience",              value: "2+",              title: "Years Experience",              items: ["Industry Expertise", "Proven Track Record"]
            },
            {
              id: "satisfaction",              value: "100%",              title: "Client Satisfaction",              items: ["Dedicated Support", "Long-term Partners"]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardTwentyFour
          title="Simple Process. No Guesswork."
          description="Four straightforward steps from concept to launch."
          features={[
            {
              id: "discovery",              title: "Discovery",              author: "Step 1",              description: "We learn your business, goals, and vision.",              tags: ["Understanding", "Strategy"],
              imageSrc: "http://img.b2bpic.net/free-vector/abstract-background-design_1128-124.jpg?_wi=2",              imageAlt: "minimal dark grid pattern professional"
            },
            {
              id: "design-build",              title: "Design & Build",              author: "Step 2",              description: "We build a custom site tailored to your brand.",              tags: ["Creation", "Development"],
              imageSrc: "http://img.b2bpic.net/free-photo/homemade-recipe-food-nutrition-appetite_53876-133764.jpg?_wi=2",              imageAlt: "restaurant website luxury dark elegant"
            },
            {
              id: "review",              title: "Review",              author: "Step 3",              description: "You give feedback, we refine until it's right.",              tags: ["Refinement", "Quality"],
              imageSrc: "http://img.b2bpic.net/free-vector/smoothies-bar-landing-page_23-2148682482.jpg?_wi=3",              imageAlt: "ice cream business website design"
            },
            {
              id: "launch",              title: "Launch",              author: "Step 4",              description: "Your site goes live. You start getting found.",              tags: ["Deployment", "Success"],
              imageSrc: "http://img.b2bpic.net/free-vector/display-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement-advertisement_125964-1409.jpg?_wi=3",              imageAlt: "web design portfolio gallery showcase"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="One Simple Plan."
          description="No tiers, no confusion. Just a clean website for your business."
          plans={[
            {
              id: "standard",              badge: "All You Need",              price: "$199",              subtitle: "Custom designed website for your local business",              features: [
                "Custom designed website",                "Mobile responsive",                "Contact form",                "Basic SEO setup",                "Fast turnaround"
              ],
              buttons: [{ text: "Get Started", href: "#contact" }]
            },
            {
              id: "premium",              badge: "Enhanced",              price: "$399",              subtitle: "Extended support and premium features",              features: [
                "Everything in All You Need",                "Advanced SEO optimization",                "Email setup and integration",                "3 months maintenance",                "Priority support"
              ],
              buttons: [{ text: "Get Started", href: "#contact" }]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about working with Elevate Digital."
          faqs={[
            {
              id: "q1",              title: "Do I need to provide anything?",              content: "Just your logo if you have one, a few photos, and info about your business. We handle everything else."
            },
            {
              id: "q2",              title: "What if I already have a website?",              content: "We do redesigns and updates too. We can refresh your existing site to modern standards and improve performance."
            },
            {
              id: "q3",              title: "Will it work on phones?",              content: "Every site we build is fully mobile-responsive. Your website will look perfect on every device."
            },
            {
              id: "q4",              title: "Do you offer support after launch?",              content: "Yes, we offer optional maintenance packages to keep your site secure, fast, and up to date."
            },
            {
              id: "q5",              title: "How do I get started?",              content: "Fill out the form below and we'll respond within 24 hours to discuss your project and get you a quote."
            }
          ]}
          mediaAnimation="blur-reveal"
          faqsAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Let's Build Something."
          ctaDescription="Tell us about your business and we'll get back to you within 24 hours."
          ctaButton={{ text: "Send Your Details", href: "mailto:hello@elevatedigital.com" }}
          ctaIcon={Zap}
          faqs={[
            {
              id: "turnaround",              title: "How quickly can you build my site?",              content: "Most projects are completed within 1-2 weeks from the discovery call to launch."
            },
            {
              id: "cost",              title: "Is $199 really all I pay?",              content: "Yes. Our pricing is transparent. No hidden fees, no surprises. If you need additional features, we'll discuss pricing upfront."
            },
            {
              id: "updates",              title: "Can I update my site after launch?",              content: "We provide all clients with a simple dashboard to update content. We're also available for larger updates and maintenance."
            }
          ]}
          animationType="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Elevate Digital"
          leftLink={{ text: "hello@elevatedigital.com", href: "mailto:hello@elevatedigital.com" }}
          rightLink={{ text: "© 2025 Elevate Digital. All rights reserved.", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
