import { Background } from '@/components/background';
import { Input } from '@/components/input';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Navbar />
      <Background />
      <div className="flex flex-row h-full w-full py-4">
        <div className="flex flex-col gap-4 grow mx-auto w-full max-w-2xl">
          <div className="grow"></div>
          <div className="flex flex-col">
            <Input id="search" />
          </div>
        </div>
      </div>
    </div>
  );
}
