<script>
    import Navbar from "./lib/Navbar.svelte";
    import Footer from "./lib/Footer.svelte";
    import Page from './lib/Page.svelte'; 
    import {Router,Route} from 'svelte-routing';
    import { linkUtil } from "./utils/linkUtil";
    import { pageUtil } from "./utils/pageUtil";
    export let url = "";
  
  </script>
  
  <Router url="{url}">
    <Navbar data={linkUtil} />
    <main>
      {#each pageUtil as page }
        <Route path={page.url}><Page page={page}/></Route>
      {/each}
    </main>
    <Footer data={linkUtil} />
  </Router>