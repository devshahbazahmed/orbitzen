import Header from '@/components/shared/Header';
import NotFoundBody from '@/components/NotFoundBody';
import Footer from '@/components/shared/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      <Header />

      {/* Main */}
      <NotFoundBody />

      {/* Footer */}
      <Footer />
    </div>
  );
}
