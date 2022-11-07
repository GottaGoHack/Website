
<script>
    import Massa from "../../assets/logo_massa.png";
    import Soge from "../../assets/logo_societegenerale.png";
</script>

<div id="stripe">
    <div class="title">2 thèmes pour 2 fois plus d'innovations !</div>
    <div class="subtitle">Proposer par les partenaires de l'édition :</div>
    <div class="grid-container">
        <a href="https://massa.net"><img class="logo" src={Massa} alt=""/></a>
        <a href="https://particuliers.societegenerale.fr/"><img class="logo" src={Soge} alt="" /></a>
    </div>
</div>

<style lang="scss">
    @import 'mixins';
    @import 'vars';

    #stripe {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;        

        padding-top: 100px;
        padding-bottom: 100px;

        .title {
            color: black;
            font-size: 40px;
            font-weight: 800;
            font-family: $font-sans;

            padding-left: 15px;
            padding-right: 15px;

            text-shadow: 1px 1px 2px grey;
            text-transform: uppercase;

        }

        .subtitle {
            color: black;
            font-size: 25px;
            font-weight: 300;

            padding-top: 10px;
            padding-left: 15px;
            padding-right: 15px;
            padding-bottom: 100px;

        }
        
        .logo {
            max-width: 300px;
        }

        .grid-container {
            display: grid;
            grid-template-areas: 'logo logo';
            grid-gap: 60px;
        }

        @media only screen and (max-width: 800px) {

            .subtitle {

                padding-bottom: 50px;

            }
            .grid-container {
                grid-template-areas: 'logo' 'logo';
                grid-gap: 10px;
            }
        }
    }
</style>