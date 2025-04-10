import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PublicNavbar } from '../layout/PublicNavbar';
import { PublicFooter } from '../layout/PublicFooter';
import {
  MailIcon,
  ClockIcon,
  ShieldCheckIcon,
  SearchIcon,
  CheckCircleIcon,
  BarChartIcon
} from 'lucide-react';

const features = [
  {
    name: 'Smart Document Management',
    description: 'Efficiently organize and manage all your business correspondence in one place.',
    icon: MailIcon
  },
  {
    name: 'Real-time Tracking',
    description: 'Track the status of your letters and documents in real-time.',
    icon: ClockIcon
  },
  {
    name: 'Advanced Security',
    description: 'Enterprise-grade security to keep your sensitive documents safe.',
    icon: ShieldCheckIcon
  },
  {
    name: 'Powerful Search',
    description: 'Find any document instantly with our advanced search capabilities.',
    icon: SearchIcon
  },
  {
    name: 'Automated Workflows',
    description: 'Streamline your approval processes with automated workflows.',
    icon: CheckCircleIcon
  },
  {
    name: 'Analytics & Insights',
    description: 'Gain valuable insights into your document workflows.',
    icon: BarChartIcon
  }
];

const Home = ({ onLogin }: { onLogin: () => void }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();             // Mark as authenticated
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      <main className="flex-grow">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Letter Management ystem</span>
                <span className="block text-blue-600">Space Science and Geospatial Institute (SSGI)</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                LetterFlow helps organizations manage their business
                correspondence efficiently. Track, organize, and collaborate on
                all your important communications in one place.
              </p>

              {/* 🚀 Add Log In Link */}
              <div className="mt-5">
                <button
                  onClick={handleLogin}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Log in
                </button>
              </div>

              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-24" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Everything you need to manage business correspondence
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Powerful features to help you take control of your business
                communications.
              </p>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="bg-white pt-6 px-6 pb-8 rounded-lg shadow-lg"
                  >
                    <div>
                      <span className="p-3 bg-blue-50 rounded-lg inline-block">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-blue-200">Start your free trial today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
};

export default Home;
