<script lang="ts">
  import { SectionHeadline, Button } from "$components";

  let contactName = $state("Erik");
  let contactMail = $state("erik@gmail.com");
  let contactInformation = $state("hella lit");
  let isFormInvalid = $state(false);

  $inspect(isFormInvalid);

  async function onSubmit(event: Event) {
    event.preventDefault();

    if (contactMail && contactName && contactInformation) {
      try {
        const response =  await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({
          contactName,
          contactMail,
          contactInformation,
        }),
      headers: {'Content-Type': 'application.json'}
      })
      console.log(response)
      } catch (err) {
        console.log(err)
      }
    } else {
      isFormInvalid = true;
    }
  }

  $effect(() => {
    if (contactName || contactMail || contactInformation) {
      isFormInvalid = false;
    }
  });
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Lets Talk</SectionHeadline>
  <div class="form-container default-margin mt-m">
    <form action="">
      <input
        class={`text-input mb-s`}
        class:input-error={isFormInvalid && !Boolean(contactName.length)}
        placeholder="Your Name"
        bind:value={contactName}
      />
      <input
        class="text-input mb-s"
        class:input-error={isFormInvalid && !Boolean(contactMail.length)}
        placeholder="Your Email"
        bind:value={contactMail}
      />
      <textarea
        name=""
        class:input-error={isFormInvalid && !Boolean(contactInformation.length)}
        placeholder="Whats on your mind?"
        bind:value={contactInformation}
      ></textarea>
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
    background-color: rgba(214, 47, 47, 0.665);
  }

  /* .input-error::placeholder {
    color: white;
  } */

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
