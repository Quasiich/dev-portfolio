<script>
  import {
    HeroSection,
    AboutMe,
    MyWorkSection,
    SkillsSection,
    ContactSection,
  } from "$components";

  const { data } = $props();
  let { workExperience, projects, skills } = data;

  $inspect(skills);
</script>

<HeroSection />
<AboutMe {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
