<script>
    //uncomment if using non-hash routing from svelte routing
    //    export const path = $$props.path ;
    export const page = $$props.page ;
    import RecursiveContent from "./RecursiveContent.svelte";
</script>


<div class="header">
    <h1>{page.headerText}</h1>
</div>
<div class={`main-${page.template}`}>
    <div>
        {#if page.pageData.leftBlocks?.length}
            <RecursiveContent contentBlocks={page.pageData.leftBlocks} />
        {/if}
    </div>
    <div>
        {#if page.pageData.centerBlocks?.length}
        <RecursiveContent contentBlocks={page.pageData.centerBlocks} />
        {/if}
        
    </div>
    <div>
        {#if page.pageData.rightBlocks?.length}
        <RecursiveContent contentBlocks={page.pageData.rightBlocks} />
        {/if}
        
    </div>

</div>


<style>
    div{
        padding: 1em;
    }

    .header{
        margin-top: 6rem;
        text-align: center;
        width: 100%;
    }
    .header h1{
        margin-top: .25em;
        margin-bottom: .25em;
    }
    .left-wrapper{
        display: flex;
        justify-content: center;
    }
    .center-wrapper{
        display: flex;
        justify-content: center;
    }
    .right-wrapper{
        display: flex;
        justify-content: center;
    }
    .main-center{
        height: 70vh;
        display: flex;
        flex-direction: row;
        padding: 4em;
        padding-top: 0;
        justify-content: space-between;
        overflow: auto;
    }
    .main-left{
        height: 70vh;
        display: flex;
        flex-direction: row;
        padding: 4em;
        padding-top: 0;
        align-items: flex-start;
        overflow: auto;
    }
    .main-right{
        height: 70vh;
        display: flex;
        flex-direction: row;
        padding: 4em;
        padding-top: 0;
        justify-content: flex-end;
        overflow: auto;
    }
    @media (max-width: 1024px) {
        .main-center{
            min-height: 60vh;
        }
        .main-left{
            min-height: 60vh;
        }
        .main-right{
           min-height: 60vh;
        }
    }

    @media (max-width: 768px) {
        .main-left{
            flex-direction: column;
            justify-content: start;
            align-items: center;
        }
        .main-right{
            flex-direction: column;
            justify-content: start;
            align-items: center;
        }
    }
    
</style>