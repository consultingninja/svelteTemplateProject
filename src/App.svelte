<script>
import Navbar from "./lib/Navbar.svelte";
import { linkUtil } from "./utils/linkUtil";
import url from "./url";
import { pageUtil } from "./utils/pageUtil";
import Page from "./lib/Page.svelte";
import Footer from "./lib/Footer.svelte";
</script>

<Navbar data={linkUtil} />
<main>

  {#each pageUtil as page}
  {#if $url.hash === page.url || ($url.hash === '' && page.url === '#/')}
    <Page page={page} />
  {/if}
  {/each}
</main>
<Footer data={linkUtil} />



