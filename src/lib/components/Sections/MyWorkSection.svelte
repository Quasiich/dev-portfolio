<script lang="ts">
  import SectionHeadline from "$components/SectionHeadline.svelte";

    interface MyWorkSectionProps {
        projects: ProcessedProject[];
    }

    let {projects}: MyWorkSectionProps = $props();
    const mainProject = projects[0];
</script>

<section class="mt-l">
    <SectionHeadline sectionName="my-work"> My Work </SectionHeadline>
    <div class="default-margin projects-container mt-m">
        <article class="main-project mb-b">
            <a href={`/work/${mainProject}`}>
                <img src={mainProject.projectImageUrl} alt="" />
            </a>
        </article>
    </div>
</section>