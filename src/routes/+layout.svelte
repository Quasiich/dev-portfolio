<script lang="ts">
  import { Header, Footer } from "$components";
  import "../app.css";

  let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
