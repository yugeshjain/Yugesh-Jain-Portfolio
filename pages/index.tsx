import BackgroundPlot from 'components/BackgroundPlot';
import Image from 'next/image';

import Container from '../components/Container';
import GradientCard from '../components/GradientCard';


export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col">
          <div className="flex justify-center mb-10">
            <Image
              alt="Yugesh Jain"
              height={176}
              width={176}
              src="/avatar.jpeg"
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col px-8">
            <h1 className="text-center font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
              👋 Yugesh Jain
            </h1>
            <h2 className="text-center text-gray-700 dark:text-gray-200 mb-4">
              Software Engineer III at <span className="font-semibold">Walmart Global Tech</span>
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Experienced Mobile Developer passionate about crafting intuitive, 
              user-focused apps and continuously evolving with emerging technologies.
            </p>
          </div>
          <BackgroundPlot />
        </div>
      </div>
    </Container>
  );
}

