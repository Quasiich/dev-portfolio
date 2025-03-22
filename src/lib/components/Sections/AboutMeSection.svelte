<script lang="ts">
  import { SectionHeadline, Button, ExperienceTable } from "$components";
  import image from "$assets/about-me.jpeg";
  import { goto } from "$app/navigation";

  function onclick() {
    goto("/#contact-form");
  }

  interface AboutMeProps {
    workExperience: SanityWorkExperience[];
  }

  let { workExperience }: AboutMeProps = $props();
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName="about-me">About me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="" />
    <div class="text">
      <p>
        Menu I'm baby wayfarers pinterest kitsch iPhone hexagon. Mustache
        gastropub tilde, flexitarian blog cornhole vice. Kinfolk tofu flannel
        marfa, freegan poutine pabst humblebrag vice succulents street art.
        Flannel 90's ugh, asymmetrical jean shorts pok pok bushwick YOLO franzen
        man braid keffiyeh poutine ramps hella.
      </p>
      <p>
        Cronut health goth neutra cold-pressed JOMO. Gastropub kogi seitan
        disrupt ascot vice salvia skateboard letterpress narwhal fit yr synth
        snackwave helvetica. Pickled offal sartorial fam occupy, tumeric ugh
        whatever selvage raw denim post-ironic hexagon next level.
      </p>
      <p>
        Pork belly sustainable franzen, narwhal forage cloud bread pour-over
        solarpunk. Mlkshk tacos fit ugh actually whatever before they sold out
        wolf beard pok pok trust fund truffaut cupping. Mukbang polaroid poke
        blog. Actually af PBR&B, lyft thundercats same artisan succulents
        pinterest. Small batch locavore pitchfork, banjo portland celiac cliche
        fixie blog swag. Skateboard hexagon keffiyeh cliche aesthetic
        dreamcatcher, af air plant raw denim swag. Edison bulb succulents
        mustache etsy seitan vibecession, kale chips air plant.
      </p>
      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <ExperienceTable {workExperience} />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 2%;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>
