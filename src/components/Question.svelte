<script>
    import { slide } from 'svelte/transition';

    let visible = false;
    let down = "+"

    function appear() {
	    if (!visible)
        {
            visible=true;
            down="-";
        }
        else 
        {
            visible=false;
            down="+";
        }
	}

    export let question;
    export let answer;
</script>

<div class="block">
        <button on:click={appear}>{down} {question}</button>



    {#if visible}
        <div class="answer" transition:slide>
            {answer}
        </div>
    {/if}

</div>

<style lang="scss">
    @use 'sass:math';

    @import 'mixins';
    @import 'vars';

    button {
        flex-direction: row;
        background-color: none;

        width: 70vw;
        height: 4vw;

        font-size: 2vw;
        text-align: left;
        justify-content: safe;
        padding-left: 3vh;

        border: none;
        border-radius: 5px;

        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        
    }

    .block {
        flex-direction: column;

        .answer {

            width: 70vw;
            border: none;
            border-radius: 5px;
            box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
            padding: 3vh;

            font-size: 1.5vw;
        }
    }

    

</style>
