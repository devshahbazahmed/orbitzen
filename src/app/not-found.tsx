import Header from '@/components/shared/shared-header';
import NotFoundBody from '@/components/not-found-hero';
import Footer from '@/components/shared/shared-footer';

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
