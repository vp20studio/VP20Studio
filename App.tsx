import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  ChevronDown,
  Search,
  Layers,
  Zap,
  Monitor,
  Heart,
  Dog,
  FileText
} from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { FEATURES, COMPARISON, FAQS } from './constants';

const STRIPE_LINK = "https://buy.stripe.com/8x214m0zL6OL9Ev3W8dIA00";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-12">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold font-display">V</div>
      <span className="font-display font-bold text-white tracking-tight">VP20 Studio</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
      <a href="#samples" className="hover:text-white transition-colors">Examples</a>
      <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
      <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
    </div>
    <div className="flex items-center gap-4">
      <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="primary">Get Your Report</Button>
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
    
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <Badge>Competitive Intelligence</Badge>
      <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
        Unlock your competitors' <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Meta strategy</span> in 24 hours.
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Stop guessing. We reverse-engineer the top creative strategies of <strong className="text-white font-semibold">up to 3 competitors</strong> in your niche and deliver a 20-page tactical PDF report.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button size="lg" className="w-full group">
            Get Ad Intelligence — $79
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
        <a href="#samples" className="w-full sm:w-auto">
          <Button variant="secondary" size="lg" className="w-full">
            View Sample Report
          </Button>
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
        <div className="flex -space-x-2">
          {[1,2,3,4].map(i => (
            <img key={i} src={`https://picsum.photos/32/32?random=${i}`} className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
          ))}
        </div>
        <div className="flex flex-col items-start ml-2">
          <div className="flex text-yellow-500 h-4">
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
            <Star size={14} fill="currentColor" />
          </div>
          <span className="text-xs">Trusted by 400+ Founders</span>
        </div>
      </div>
    </div>
  </div>
);

const ValueProps = () => (
  <Section className="border-t border-white/5 bg-surface/50 relative overflow-hidden">
     {/* Decorative background elements */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { 
          icon: Search, 
          title: "Forensic Ad Analysis", 
          desc: "We don't just scroll. We track active ads, creative testing velocity, and scaling patterns to expose what is actually printing money.",
          color: "text-blue-400"
        },
        { 
          icon: Layers, 
          title: "Executive Summary Format", 
          desc: "No login fatigue. No complex dashboard to learn. Just a high-leverage PDF report designed for busy founders and CMOs.",
          color: "text-purple-400"
        },
        { 
          icon: Zap, 
          title: "72-Hour Action Plan", 
          desc: "Stop brainstorming from scratch. We give you ready-to-brief creative concepts based on the winningest ads in your market.",
          color: "text-amber-400"
        }
      ].map((item, i) => (
        <div key={i} className="group relative p-8 rounded-2xl bg-[#0A0B10] border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          
          <div className={`w-12 h-12 rounded-lg bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
            <item.icon size={24} />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight">{item.title}</h3>
          <p className="text-slate-400 leading-relaxed text-[15px]">{item.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const FeatureGrid = () => (
  <Section id="features">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What's inside the report?</h2>
      <p className="text-slate-400">Everything you need to beat them in the auction.</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {FEATURES.map((feature, idx) => (
        <div key={idx} className="p-6 rounded-xl border border-white/5 bg-surface hover:border-white/10 transition-all group">
          <div className="w-12 h-12 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <feature.icon size={24} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const SampleReports = () => (
  <Section id="samples" className="relative">
    <div className="text-center mb-16">
      <Badge>Real Examples</Badge>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">See what we uncover</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        We've analyzed thousands of brands. Here are three examples of the depth you can expect.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          niche: "Home Office",
          brands: ["EFFYDESK", "Ergonofis", "Desky"],
          icon: Monitor,
          gradient: "from-blue-500/10 to-cyan-500/10",
          pdfUrl: "https://drive.google.com/file/d/1WiVbBduznKKkSirmXrd8VCidCpkr6OgG/view?usp=sharing"
        },
        {
          niche: "Health & Wellness",
          brands: ["BEAM", "AG1", "RITUAL"],
          icon: Heart,
          gradient: "from-green-500/10 to-emerald-500/10",
          pdfUrl: "https://drive.google.com/file/d/1cpYgjiduxsllXHSPJtI_DYXa7VSgs4WR/view?usp=sharing"
        },
        {
          niche: "Pet Improvement",
          brands: ["BARKBOX", "OLLIE", "FURBO"],
          icon: Dog,
          gradient: "from-orange-500/10 to-amber-500/10",
          pdfUrl: "https://drive.google.com/file/d/1mJZt9zxVbOdg2M2rjKTwLczEOnR17v_s/view?usp=sharing"
        }
      ].map((item, i) => (
        <div key={i} className={`group relative p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent hover:bg-white/10 transition-all duration-300 h-full`}>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative h-full bg-[#0A0B10] rounded-xl p-8 border border-white/5 flex flex-col items-center text-center transition-colors hover:border-white/10">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-slate-200 mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
              <item.icon size={28} className="opacity-90" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 font-display">{item.niche}</h3>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Strategy Breakdown</p>
            
            <div className="w-full space-y-3 mb-8 bg-surface/50 p-4 rounded-lg border border-white/5">
              {item.brands.map((brand, idx) => (
                <div key={idx} className="text-sm font-medium text-slate-300 flex items-center justify-between">
                  <span>{brand}</span>
                  <Check size={14} className="text-green-500 opacity-50" />
                </div>
              ))}
            </div>

            <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
              <Button variant="secondary" fullWidth className="group-hover:bg-white group-hover:text-black transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                View Sample PDF
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const HowItWorks = () => (
  <Section id="how-it-works" className="bg-surfaceHighlight/30 border-y border-white/5">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">Intelligence on Autopilot</h2>
      <p className="text-slate-400">No calls, no onboarding, no friction.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 relative">
       {/* Connecting Line (Desktop) */}
       <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

      {[
        { step: "01", title: "Submit URLs", desc: "Paste 1-3 competitor URLs you want analyzed at checkout." },
        { step: "02", title: "We Analyze", desc: "Our strategists manually deconstruct their entire funnel." },
        { step: "03", title: "Receive PDF", desc: "Get your comprehensive strategy guide in <24 hours." }
      ].map((item, i) => (
        <div key={i} className="relative flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center text-xl font-bold text-white mb-6 z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {item.step}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-slate-400 max-w-xs">{item.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const ComparisonTable = () => (
  <Section>
    <div className="bg-surface rounded-2xl border border-white/5 overflow-hidden">
      <div className="grid grid-cols-4 p-6 border-b border-white/5 text-sm font-semibold text-slate-500">
        <div className="col-span-1"></div>
        <div className="col-span-1 text-center">Typical Agency</div>
        <div className="col-span-1 text-center">Free Tools</div>
        <div className="col-span-1 text-center text-white bg-white/5 rounded-t-lg -mb-6 pb-6 pt-2 border-t border-x border-white/10 relative">
          <span className="text-indigo-400">VP20 Studio</span>
        </div>
      </div>
      
      {COMPARISON.map((row, i) => (
        <div key={i} className="grid grid-cols-4 p-6 border-b border-white/5 text-sm items-center hover:bg-white/[0.02]">
          <div className="col-span-1 font-medium text-slate-300">{row.feature}</div>
          <div className="col-span-1 text-center text-slate-500">{row.agency}</div>
          <div className="col-span-1 text-center text-slate-500">{row.free}</div>
          <div className="col-span-1 text-center text-white font-semibold bg-white/5 -my-6 py-6 border-x border-white/10">
            {row.vp20}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Audience = () => (
  <Section>
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div className="p-8 rounded-2xl border border-green-500/10 bg-green-500/5">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Check size={16} /></span>
          Who this is for
        </h3>
        <ul className="space-y-4">
          {[
            "DTC Founders spending $5k - $50k/mo on Meta",
            "Performance Marketers needing fresh creative angles",
            "Agencies wanting to upsell strategy to clients",
            "Brands stuck at a ROAS plateau"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300">
              <Check className="w-5 h-5 text-green-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 rounded-2xl border border-red-500/10 bg-red-500/5">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400"><X size={16} /></span>
          Who this is NOT for
        </h3>
        <ul className="space-y-4">
          {[
            "People looking for a 'magic button' without work",
            "Businesses with zero product-market fit",
            "Those looking for generic automated scrape data",
            "People who don't understand paid social fundamentals"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-400">
              <X className="w-5 h-5 text-red-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const Pricing = () => (
  <Section id="pricing" className="relative">
    <div className="max-w-lg mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative bg-[#0A0B10] rounded-2xl p-10 border border-white/10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-6">
          Limited Time Offer
        </div>
        <h2 className="text-4xl font-bold text-white mb-2 font-display">Competitor Audit</h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-slate-500 line-through text-lg">$299</span>
          <span className="text-5xl font-bold text-white tracking-tight">$79</span>
        </div>
        <p className="text-slate-400 mb-8">One-time payment. Delivered in 24 hours.</p>
        
        <div className="space-y-4 text-left mb-8 border-t border-white/5 pt-8">
           {[
             "Analysis of up to 3 Competitors",
             "Full 15-20 Page Strategy PDF",
             "Creative Pattern Analysis",
             "Hook & Angle Breakdown",
             "72-Hour Action Plan",
             "100% Money-Back Guarantee"
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-3 text-slate-300">
               <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                 <Check size={12} strokeWidth={3} />
               </div>
               {item}
             </div>
           ))}
        </div>

        <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="block w-full mb-4">
          <Button fullWidth size="lg">
            Get Your Report Now
          </Button>
        </a>
        <p className="text-xs text-slate-500">Secure payment via Stripe. Invoice included.</p>
      </div>
    </div>
  </Section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12 font-display">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="border border-white/5 rounded-lg bg-surface overflow-hidden">
            <button 
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium text-white">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 bg-white/[0.01]">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/5 bg-surface py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold font-display">V</div>
        <span className="font-display font-bold text-white">VP20 Studio</span>
      </div>
      <div className="flex gap-8 text-sm text-slate-500">
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
      <div className="text-sm text-slate-600">
        © 2024 VP20 Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

const About = () => (
  <Section className="text-center py-20">
    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/10 shadow-xl">
       <ShieldCheck className="text-white w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">About VP20 Studio</h3>
    <p className="text-slate-400 max-w-lg mx-auto">
      We are a small team of senior media buyers and strategists. We built the tool we wished we had when managing $1M+ in monthly spend.
    </p>
  </Section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-slate-200">
      <Navbar />
      <Hero />
      <ValueProps />
      <FeatureGrid />
      <SampleReports />
      <HowItWorks />
      <ComparisonTable />
      <Audience />
      <Pricing />
      <About />
      <FAQ />
      
      {/* Final CTA Strip */}
      <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-b from-surface to-background text-center">
         <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">Ready to dominate your niche?</h2>
            <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full md:w-auto shadow-xl shadow-blue-500/10">
                Get Instant Access — $79
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
         </div>
      </section>

      <Footer />
    </div>
  );
}