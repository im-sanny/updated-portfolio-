import AboutMe from '@/components/AboutMe';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-32 py-8 gap-8">
        <div>
          <Sidebar />
        </div>
        <main className="md:col-span-2">
          <AboutMe />
        </main>
      </div>
    </div>
  );
}
