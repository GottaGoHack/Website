<script context="module">
    const allEdition = import.meta.glob("/src/routes/archives/*.svelte");

    const content = {
        title: "Python",
        description: "Python is an interpreted, high-level and general-purpose programming language.",
        number: "1"
    }
</script>
<div id="top"></div>
<div class="title">Toutes nos éditions</div>
<div class="container"><div class="button"><a href='/archives/0'>Hackathon Edition #0 - Spring 2021</a></div></div>
<div class="container"><div class="button"><a href='archives/1'>Hackathon Edition #1 - Winter 2021</a></div></div>
<div class="container"><div class="button"><a href='archives/2'>Hackathon Edition #2 - Spring 2022</a></div></div>


<style lang="scss">
    @import 'vars';

    #top {
        background-color: white;

    }

    .title {
        color: black;
        font-family: $font-sans;
        font-weight: 800;
        font-size: 60px;
        line-height: 70px;
        
        justify-content: center;
        align-items: center;

        text-transform: uppercase;

        padding-top: 70px;
        padding-bottom: 50px;
    }

   .container {
        justify-content: center;
        align-items: center;

        padding-bottom: 20px;
        .button {
                    background: $color-red;
                    border-radius: 999px;
                    box-shadow: $color-red 0 10px 20px -10px;
                    box-sizing: border-box;
                    color: #FFFFFF;
                    font-family: $font-sans;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 40px;
                    opacity: 1;
                    outline: 0 solid transparent;
                    padding: 10px 18px;
                    width: fit-content;
                    word-break: break-word;
                    border: 0;
                }
        }
    
</style>


