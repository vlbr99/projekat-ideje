<script>
  import "@fontsource-variable/outfit";
  import { Layers } from "lucide-svelte";
  let { children } = $props();
</script>

<p class="pre_header">
  Projekat ideje - objavi ideju za programerski projekat. Ideja: <a
    href="https://what-to-code.com/"
    target="_blank">what-to-code</a
  >
</p>
{@render children()}

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Outfit Variable", sans-serif;
  }
  :global(body) {
    background-color: rgb(26, 26, 26);
  }
  .pre_header {
    padding: 20px;
    text-align: center;
    background-color: rgb(39, 39, 39);
    color: white;
    font-size: 1.2rem;
  }
  .pre_header a {
    background: #00b7ff;
    background: linear-gradient(to right, #00b7ff 0%, #ff72ea 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
  }
</style>
