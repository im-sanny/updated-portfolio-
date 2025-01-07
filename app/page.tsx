import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-5 md:mx-32 py-8">
        <Sidebar />
      </div>
    </main>
  );
}
