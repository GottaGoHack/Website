<script>
    import { slide } from 'svelte/transition';

    export let color;
</script>

<div class="grid-container">
    <div class="grid-element"><div class="second">1</div></div>
    <div class="grid-element"><div class="forth">2</div></div>
    <div class="grid-element"><div class="first">1</div></div>
    <div class="grid-element"><div class="third">2</div></div>
</div>

<style lang="scss">
    @use 'sass:math';

    @import 'mixins';
    @import 'vars';

    .grid-container {

        display: grid;
        grid-template-columns: auto auto;


        padding-left : 20vw;
        padding-right: 20vw;

        background-color: white;

    }
    .grid-element {
        
        border: 2px solid $color-red;

        justify-content: center;
        align-items: center;

        font-size: 3vw;

        .first {
            /*setting alpha = 0.1*/
            background: $color-red 0.1;
            opacity: 0.1;
            color: $color-red;
        }
        .second {
            /*setting alpha = 0.3*/
            background: $color-red 0.3;
            color: $color-red;
        }
        .third {
            /*setting alpha = 0.6*/
            background: $color-red 0.6;
            color: white;
        }
        .forth {
            /*setting alpha = 0.6*/
            background: $color-red 1;
            color: white;
        }

    }

    
      
            
      
            

    

</style>
