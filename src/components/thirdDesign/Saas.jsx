'use client'
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Zap,
  BarChart3,
  Shield,
  Globe,
  Menu,
  X,
  ChevronDown,
  Star,
  CheckCircle,
  MessageCircle,
  PlayCircle,
  ArrowUpRight,
  Users,
  Laptop,
  Brain,
  Rocket,
  Clock,
  Gift
} from 'lucide-react';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Products', 
      hasDropdown: true,
      dropdownItems: ['Analytics', 'Automation', 'Integration', 'Enterprise']
    },
    { 
      name: 'Solutions', 
      hasDropdown: true,
      dropdownItems: ['For Startups', 'For Enterprise', 'For Teams']
    },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Resources', hasDropdown: false },
  ];

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-8 h-8 text-violet-500" />
            nova<span className="text-violet-500">AI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-slate-800 rounded-lg shadow-lg py-2 mt-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg transition-colors">
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 rounded-lg mt-2 p-4 shadow-lg">
            {navigationItems.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  className="text-slate-300 hover:text-white transition-colors w-full text-left flex items-center justify-between"
                  onClick={() => item.hasDropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className="block text-sm text-slate-400 hover:text-white transition-colors py-1"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-700 space-y-4">
              <button className="w-full text-slate-300 hover:text-white transition-colors py-2">
                Sign In
              </button>
              <button className="w-full bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg transition-colors">
                Start Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-violet-500" />,
      title: "Lightning Fast",
      description: "Optimize your workflow with our high-performance platform"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-violet-500" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your business metrics"
    },
    {
      icon: <Shield className="w-6 h-6 text-violet-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security to protect your valuable data"
    },
    {
      icon: <Globe className="w-6 h-6 text-violet-500" />,
      title: "Global Scale",
      description: "Deploy worldwide with our distributed infrastructure"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO at TechFront",
      image: "/api/placeholder/100/100",
      content: "Implementing this platform has transformed our business operations. The AI-driven insights have been game-changing.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO at ScaleUp",
      image: "/api/placeholder/100/100",
      content: "The best SaaS platform we've used. The automation features have saved us countless hours of manual work.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Lead at GrowthCo",
      image: "/api/placeholder/100/100",
      content: "Outstanding support team and powerful features. It&apos;s been crucial for our company's growth.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "API access",
        "Weekly reports"
      ]
    },
    {
      name: "Professional",
      price: "99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Daily reports",
        "AI recommendations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "249",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Custom solutions",
        "Dedicated support",
        "Advanced security",
        "Custom reporting",
        "AI automation",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Navigation/>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          
          <div className="inline-block animate-bounce-slow">
            <span className="bg-violet-500/10 text-violet-400 text-sm font-medium px-4 py-2 rounded-full mb-8 inline-block">
              ✨ Revolutionizing Business Software
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <span className="text-violet-400"> With AI</span>
          </h1>
          
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Streamline your operations, boost productivity, and unlock growth with our intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              className={`
                px-8 py-4 rounded-lg font-medium text-lg
                transition-all duration-300 transform
                ${isHovered ? 'bg-violet-600 translate-y-0' : 'bg-violet-500 hover:-translate-y-1'}
                text-white shadow-lg shadow-violet-500/30
                flex items-center justify-center gap-2
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="px-8 py-4 rounded-lg font-medium text-lg border border-slate-700 text-slate-300 hover:bg-slate-800/50 transition-all flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="pt-12 border-t border-slate-800">
            <p className="text-slate-400 mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              {['Google', 'Microsoft', 'Airbnb', 'Uber', 'Netflix'].map((company) => (
                <div key={company} className="text-slate-400 text-xl font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Get up and running in minutes with our simple setup process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Laptop className="w-8 h-8 text-violet-500" />,
              title: "1. Quick Setup",
              description: "Connect your data sources with our one-click integration system"
            },
            {
              icon: <Brain className="w-8 h-8 text-violet-500" />,
              title: "2. AI Analysis",
              description: "Our AI analyzes your data and provides actionable insights"
            },
            {
              icon: <Rocket className="w-8 h-8 text-violet-500" />,
              title: "3. Scale Up",
              description: "Implement optimizations and watch your business grow"
            }
          ].map((step, index) => (
            <div key={index} className="relative p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-all">
              <div className="bg-violet-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to scale your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5"
            >
              <div className="bg-violet-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Businesses
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-all">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                  width={300}
                  height={300}
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative bg-slate-800/50 rounded-xl p-8
                ${plan.popular ? 'border-2 border-violet-500' : ''}
                hover:bg-slate-800 transition-all
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-white text-xl font-semibold mb-2">{plan.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-400 mb-6">{plan.description}</p>
              <button className={`
                w-full py-3 rounded-lg font-medium mb-8
                ${plan.popular ? 'bg-violet-500 text-white' : 'bg-slate-700 text-white'}
                hover:opacity-90 transition-all
              `}>
                Get Started
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-500" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              q: "How does the free trial work?",
              a: "Start with a 14-day free trial. No credit card required. Full access to all features."
            },
            {
              q: "Can I change my plan later?",
              a: "Yes, you can upgrade or downgrade your plan at any time from your account settings."
            },
            {
              q: "What kind of support do you offer?",
              a: "24/7 support via email, live chat, and phone for all customers. Priority support for Professional and Enterprise plans."
            },
            {
              q: "Is there a long-term contract?",
              a: "No long-term contracts. Pay month-to-month and cancel anytime."
            }
          ].map((faq, index) => (<div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-all">
          <h3 className="text-white text-lg font-semibold mb-2">{faq.q}</h3>
          <p className="text-slate-400">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Integration Partners Section */}
  <div className="max-w-7xl mx-auto px-4 py-24">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Seamless Integrations
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Connect with your favorite tools and platforms
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {['Slack', 'Zoom', 'Notion', 'Gmail', 'Trello', 'GitHub', 'Figma', 'Dropbox'].map((tool) => (
        <div 
          key={tool} 
          className="bg-slate-800/30 p-8 rounded-xl flex items-center justify-center hover:bg-slate-800/50 transition-all"
        >
          <span className="text-white text-lg font-medium">{tool}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Latest Blog Posts */}
  <div className="max-w-7xl mx-auto px-4 py-24">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Latest Updates
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Stay up to date with our latest news and insights
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "The Future of AI in Business",
          category: "AI & Technology",
          date: "Oct 15, 2024",
          readTime: "5 min read",
          image: "/api/placeholder/400/250"
        },
        {
          title: "Maximizing Productivity with Automation",
          category: "Productivity",
          date: "Oct 12, 2024",
          readTime: "4 min read",
          image: "/api/placeholder/400/250"
        },
        {
          title: "Building Scalable Teams Remotely",
          category: "Team Management",
          date: "Oct 10, 2024",
          readTime: "6 min read",
          image: "/api/placeholder/400/250"
        }
      ].map((post, index) => (
        <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800 transition-all">
          <Image src={post.image} alt={post.title} className="w-full h-48 object-cover" width={300} height={300}/>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-violet-400 text-sm">{post.category}</span>
              <span className="text-slate-400 text-sm">{post.readTime}</span>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">{post.title}</h3>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Pre-footer CTA */}
  <div className="max-w-7xl mx-auto px-4 py-24">
    <div className="bg-gradient-to-r from-violet-600 to-violet-400 rounded-2xl p-12 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of companies that trust our platform to scale their operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-lg font-medium text-lg bg-white text-violet-600 hover:bg-violet-50 transition-all flex items-center justify-center gap-2">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-lg font-medium text-lg border-2 border-white text-white hover:bg-white/10 transition-all">
            Talk to Sales
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <a href="#" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Zap className="w-8 h-8 text-violet-500" />
            nova<span className="text-violet-500">AI</span>
          </a>
          <p className="text-slate-400 mb-6">
            Transforming businesses with intelligent automation and AI-powered insights.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-slate-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Product",
            links: ["Features", "Solutions", "Pricing", "Changelog", "Documentation"]
          },
          {
            title: "Company",
            links: ["About", "Careers", "Blog", "Press", "Partners"]
          },
          {
            title: "Resources",
            links: ["Community", "Contact", "DPA", "Privacy", "Terms"]
          },
          {
            title: "Support",
            links: ["Help Center", "Status", "API", "Training", "Contact Sales"]
          }
        ].map((column, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold mb-4">{column.title}</h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-400">
          © 2024 novaAI. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
);
};

export default LandingPage;