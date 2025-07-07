import Timeline from '../components/Timeline';
import Container from 'components/Container';
import TopTracks from 'components/TopTracks';

export default function About() {
  return (
    <Container title="About">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p className="text-justify">
            My journey in software engineering commenced 3+ years ago, 
            specializing in android development with a focus on Kotlin by creating 
            robust and user-friendly applications. My expertise extends to iOS development 
            using Multi-Platform technologies like Flutter and Kotlin/Compose Multi-Platform. 
            I am passionate about working with Organisations having impactful projects 
            and am interested in collaborating with innovative teams.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
