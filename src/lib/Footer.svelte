<script>
    export let data;
</script>

<footer>
    <div class='footer'>
        {#each data.links as link}
        {#if link.displayInFooter}
            <div class="footer-item">
                <a href={link.url}>{link.linkText}</a>
            </div>
        {/if}
        {/each}
        <div class="footer-below">
            <small class='website-right'>{data.copyrightNotice}</small>
        </div>
    </div>
</footer>


<style>   
 
    .footer {   
        width: 100%;  
        min-height: 4rem; 
        background-color: #000;   
        color: #FFF;   
        display: flex;   
        flex-direction: row;
        justify-content: space-around;  
        align-items: center; 
        flex-wrap: wrap;
        }   
      
        .footer-item {   
            display: flex;  
            height:100%;
            color: #FFF;   
            font-size: 1.2em; 
            align-items: center;   
            padding-top: 1em;
        } 
        .footer-item:hover{
            border-bottom: 4px solid #fff;
            transition: all 0.2s ease-out;
        }
        .footer-below{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-top: 1em;
            padding-bottom: 1em;
        }
        @media (max-width: 1024px) {
            .footer { 
                flex-direction: column;
                justify-content: start;
                align-items: center;
            }
            .footer-item {  
                padding-top: 0; 
                width: 100%;
                display: flex;  
                height:3em;
                color: #FFF;   
                font-size: 1.2em; 
                justify-content: center;   
            } 
            .footer-below{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
            .footer-item:hover {
                background-color: #FFF;
                color:#242424;
                transition: all 0.2s ease-out;
            }  
            .footer-item:hover a {
                color:#242424;
            }
        }
    
        @media (max-width: 764px) {
    
        }
    
    </style> 