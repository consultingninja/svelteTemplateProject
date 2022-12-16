<!--Recursive Svelte Component-->

<script>
    export let contentBlocks;

    const wrappers = ['ul','div','section','article'];
    const checkWrappers = (ele) => wrappers.includes(ele.elementType);
console.log(contentBlocks);
</script>



<!--Render the appropriate element type, if it is one of the  wrapper types then it will
    call itself passing in the children as the content blocks i.e unlimited nesting-->
    {#each contentBlocks as block }
    {#if block.elementType === 'h1'}
        <h1>{block.content}</h1>
    {:else if block.elementType === 'h2'}
        <h2>{block.content}</h2>
    {:else if block.elementType === 'h3'}
        <h3>{block.content}</h3>
    {:else if block.elementType === 'h4'}
        <h4>{block.content}</h4>
    {:else if block.elementType === 'h5'}
        <h5>{block.content}</h5>
    {:else if block.elementType === 'p'}
        <p>{block.content}</p>
    {:else if block.elementType === 'span'}
        <span>{block.content}</span>
    {:else if block.elementType === 'li'}
        <li>{block.content}</li>
    {:else if block.elementType === "ul" && block.children.length && block.children.length > 0 }
        <ul class="ul-wrapper">
            <svelte:self contentBlocks="{block.children}"/>
        </ul>
    {:else if block.elementType === "div" && block.children.length && block.children.length > 0 }
        <div class="div-wrapper">
            <svelte:self contentBlocks="{block.children}"/>
        </div>
    {:else if block.elementType === "section" && block.children.length && block.children.length > 0 }
        <section class="section-wrapper">
            <svelte:self contentBlocks="{block.children}"/>
        </section>
    {:else if block.elementType === "article" && block.children.length && block.children.length > 0 }
        <article class="article-wrapper">
            <svelte:self contentBlocks="{block.children}"/>
        </article>
    {/if}
    <!--Need to make sure that this isn't a wrapper type to prevent double renders-->
    {#if block.children.length && block.children.length > 0 && !checkWrappers(block)}
    <svelte:self contentBlocks="{block.children}"/>
    {/if}
    
    {/each}
    
    <!--I will leave this here for more custom styling!-->
    <style>
        h1{
            margin-top: .25em;
            margin-bottom: .25em;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        h2{
            margin-top: .25em;
            margin-bottom: .25em;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        h3{
            margin-top: .25em;
            margin-bottom: .25em;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        h4{
            margin-top: .25em;
            margin-bottom: .25em;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        h5{
            margin-top: .25em;
            margin-bottom: .25em;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        p{
            margin-top: .25em;
            margin-bottom: .25em;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        ul{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        li{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        span{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        section{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        article{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .ul-wrapper{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .article-wrapper{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .div-wrapper{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .section-wrapper{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    </style>
    
