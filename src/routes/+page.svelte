<script>
  import { HeroSection, AboutMe } from "$components";

  const { data } = $props();
  let { workExperience } = data;
</script>

<HeroSection />
<AboutMe {workExperience} />
