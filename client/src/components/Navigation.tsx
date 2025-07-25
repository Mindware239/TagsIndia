import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown,
  ShoppingCart,
  Search,
  User
} from 'lucide-react';
import MegaMenu from './MegaMenu';

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products',
      hasDropdown: true,
      megaMenu: true
    },
    { 
      name: 'Bulk Orders', 
      href: '/bulk-orders',
      hasDropdown: true,
      items: [
        { name: 'Custom Labels/Tags', href: '/bulk/custom-labels' },
        { name: 'Tech Behind Tags', href: '/bulk/tech-behind-tags' },
        { name: 'RFID Solutions', href: '/bulk/rfid-solutions' },
        { name: 'Smart Printing Devices', href: '/bulk/smart-printing' }
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { 
      name: 'Industries We Serve', 
      href: '/industries',
      hasDropdown: true,
      items: [
        { name: 'Hospitals', href: '/industries/hospitals' },
        { name: 'Schools & Colleges', href: '/industries/education' },
        { name: 'Events & Conferences', href: '/industries/events' },
        { name: 'Retail & Supermarkets', href: '/industries/retail' },
        { name: 'Government & Corporate', href: '/industries/government' }
      ]
    },
    { 
      name: 'Why MINDWARE', 
      href: '/why-tagindia',
      hasDropdown: true,
      items: [
        { name: 'Innovation in ID', href: '/why/innovation' },
        { name: 'Eco-Friendly Materials', href: '/why/eco-friendly' },
        { name: 'Fast Production & Delivery', href: '/why/fast-delivery' },
        { name: 'Case Studies / Success Stories', href: '/why/case-studies' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { 
      name: 'Tag Talk (Blog)', 
      href: '/blog',
      hasDropdown: true,
      items: [
        { name: 'Trends in Tagging', href: '/blog/trends' },
        { name: 'RFID and Future of IDs', href: '/blog/rfid-future' },
        { name: 'Guides and How-Tos', href: '/blog/guides' }
      ]
    },
    { 
      name: 'Get Tagged', 
      href: '/contact',
      hasDropdown: true,
      items: [
        { name: 'Instant Quote', href: '/contact/quote' },
        { name: 'Design Request', href: '/contact/design' }
      ]
    }
  ];

  const handleDropdownToggle = (itemName: string) => {
    if (itemName === 'Products') {
      setIsMegaMenuOpen(!isMegaMenuOpen);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(activeDropdown === itemName ? null : itemName);
      setIsMegaMenuOpen(false);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMegaMenuOpen(false);
  };

  useEffect(() => {
    closeAllDropdowns();
  }, [location]);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="font-bold text-xl text-gray-900">MINDWARE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleDropdownToggle(item.name)}
                    onMouseLeave={() => {
                      if (item.name !== 'Products') {
                        setTimeout(() => setActiveDropdown(null), 100);
                      }
                    }}
                  >
                    <button
                      className={`flex items-center space-x-1 px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                        location === item.href || activeDropdown === item.name || (item.name === 'Products' && isMegaMenuOpen)
                          ? 'text-blue-600 bg-blue-50 shadow-sm'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.name || (item.name === 'Products' && isMegaMenuOpen) ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Regular Dropdown */}
                    {item.items && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      >
                        {item.items.map((subItem) => (
                          <Link key={subItem.name} href={subItem.href}>
                            <div className="px-4 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer">
                              {subItem.name}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <div
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        location === item.href
                          ? 'text-indigo-600 bg-indigo-50'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && item.items && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.items.map((subItem) => (
                              <Link key={subItem.name} href={subItem.href}>
                                <div className="block px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                                  {subItem.name}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.href}>
                        <div className="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg cursor-pointer">
                          {item.name}
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mega Menu for Products */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onClose={() => setIsMegaMenuOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;