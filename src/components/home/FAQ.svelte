
<div id="faq">
    <div class="question">ENCORE DES QUESTIONS ?</div>
    
        <div class="container"><div class="button"><a href='faq#top'>Foire Aux Questions</a></div></div>
        <div class="container"><div class="button"><a href='hackathon#top'>Déroulé du Hackathon</a></div></div>
        <div class="container"><div class="button"><a href='archives#top'>Dernières Editions</a></div></div>
</div>

<style lang="scss">
    @import 'mixins';
    @import 'vars';
#faq {
    background-color: white;
    background-size: cover;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding-bottom: 50px;
    padding-top: 50px;

    .question {

        color : black;
        font-size: 60px;
        font-weight: bold;
    }

    .container {
        padding-top: 30px;
    .button {
                background: $color-blue;
                border-radius: 999px;
                box-shadow: $color-blue 0 10px 20px -10px;
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
}

</style>