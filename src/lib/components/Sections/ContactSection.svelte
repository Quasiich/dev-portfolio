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
      <input class="text-input mb-s" placeholder="Your Name" />
      <input class="text-input mb-s" placeholder="Your Email" />
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

<style>
  section {
    padding-bottom: 140px;
  }

  .form-container {
    display: flex;
    justify-content: space-between;

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 45%;
    }

    form * {
      font-size: 20px;
      font-family: "Inter Tight", sans-serif;
      font-weight: 500;
      color: black;
    }
  }

  .form-text {
    width: 39%;
  }

  textarea,
  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.035);
    border-radius: 8px;
    padding: 4px 12px;
    outline: none;
    border: none;
  }

  input {
    height: 48px;
  }

  textarea {
    height: 120px;
    margin-bottom: 40px;
  }

  textarea::placeholder,
  input::placeholder {
    font-size: 20px;
    font-weight: 400;
  }

  .input-error {
    background-color: rgba(rgba(214, 47, 47, 0.665), green, blue, alpha);
  }

  .input-error::placeholder {
    color: white;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: black;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spinner-container {
    display: flex;
  }
</style>
