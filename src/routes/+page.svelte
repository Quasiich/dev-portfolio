<script>
  import { HeroSection, AboutMe, MyWorkSection } from "$components";

  const { data } = $props();
  let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMe {workExperience} />
<MyWorkSection {projects} />
