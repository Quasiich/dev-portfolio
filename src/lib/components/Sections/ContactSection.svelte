<script lang="ts">
  import { SectionHeadline, Button } from "$components";

  function onSubmit(event: Event) {
    event.preventDefault();
    console.log(event);
  }
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Lets Talk</SectionHeadline>
  <div class="form-container default-margin mt-m">
    <form action="">
      <input class="text-input mb-b" placeholder="Your Name" />
      <input class="text-input mb-b" placeholder="Your Email" />
      <textarea name="" placeholder="Whats on your mind?"></textarea>
      <Button onclick={onSubmit}>Send it!</Button>
    </form>
    <div class="form-text">
      <h3 class="bold mb-s">Lets bring your ideas to Life</h3>
      <p>
        Every great project starts with an idea — big or small. Whether you have
        a fully thought-out concept or just a rough vision, I’d love to hear all
        about it! I’m always excited to learn about new ideas and explore how we
        can bring them to reality together. Feel free to share as many details
        as you like — your goals, challenges, or even just a general direction.
        I’ll review your message and get back to you as soon as possible. Let’s
        turn your vision into something amazing! I’m looking forward to hearing
        from you!
      </p>
    </div>
  </div>
</section>
