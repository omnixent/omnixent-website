import HomepageHero from '../components/organisms/HomepageHero';
import HomepageTargetHero from '../components/organisms/HomepageTargetHero';
import HomepageIntegration from '../components/organisms/HomepageIntegration';

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <HomepageTargetHero />
      <HomepageIntegration />
    </div>
  );
}
