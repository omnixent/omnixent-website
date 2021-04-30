import HomepageHero from '../components/organisms/HomepageHero';
import HomepageTargetHero from '../components/organisms/HomepageTargetHero';
import HomepageIntegration from '../components/organisms/HomepageIntegration';
import HomepageOSS from '../components/organisms/HomepageOSS';

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <HomepageTargetHero />
      <HomepageIntegration />
      <HomepageOSS />
    </div>
  );
}
