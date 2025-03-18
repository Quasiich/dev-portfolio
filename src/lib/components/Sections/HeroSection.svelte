<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button } from "$components";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="hero-section default-margin">
  <h3>Hello iam Erik</h3>
  <div class="underscore mb-m"></div>
  <h1>I'm a upcoming web-developer</h1>
  <h1 class="dark-grey">fueled by coffee</h1>
  <Button {onclick}>Lets talk</Button>
</section>

<style>
  .hero-section {
    padding-top: 3%;
  }
</style>
