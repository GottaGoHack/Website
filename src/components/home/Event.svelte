 <script>
    import Cubes from "../../assets/big_cubes.svg";
    import { onMount } from "svelte";

    // Show mobile icon and display menu
    let showMobileMenu = false;
  
    // Mobile menu click event handler
    const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
  
    // Media match query handler
    const mediaQueryHandler = e => {
      // Reset mobile state
      if (!e.matches) {
        showMobileMenu = false;
      }
    };
  
    // Attach media query listener on mount hook
    onMount(() => {
      const mediaListener = window.matchMedia("(max-width: 767px)");
  
      mediaListener.addListener(mediaQueryHandler);
    });

 </script>
 
 <div class="grid-container">
        <div class="middle">
            <div class="title">HACKATHON</div>
            <div class="title">GOTTA GO HACK</div>
            <div class="title">EDITION #3</div>

            <div class="subtitle">18/19/20 NOVEMBRE 2022</div>
            <a class="button" href="https://explorer.ticketery.fr/events/view/634d8718bfd5945fbd5b230a">S'inscrire gratuitement</a>
        </div>
</div>


<style lang="scss">
    @import 'vars';

    .grid-container {
            display: grid;
            grid-template-areas: 
                'left middle middle middle middle right'; 
            /* grid-column-gap: 10px; - if you want gap between the columns */
        

        .left {
            grid-area: left;
        }


        .middle {

            grid-area: middle;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        
            padding-bottom: 70px;

            .title {
                color: black;
                font-family: $font-sans;
                font-weight: 800;
                font-size: 60px;
                line-height: 70px;

                &:first-child {
                    padding-top: 100px;
                }
            }

            .subtitle {
                padding-top : 30px;
                padding-bottom: 30px;
                color: $color-black;
                font-family: $font-sans;
                font-weight: 300;
                font-size: 30px;
            }

            .button {
                background: $color-red;
                border-radius: 999px;
                box-shadow: $color-red 0 10px 20px -10px;
                box-sizing: border-box;
                color: #FFFFFF;
                font-family: $font-sans;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                opacity: 1;
                outline: 0 solid transparent;
                padding: 8px 18px;
                width: fit-content;
                word-break: break-word;
                border: 0;
            }
        }

        .right {
            grid-area: right;
        }
    }

    @media only screen and (max-width: 767px) {
        .grid-container {
            grid-template-areas: 'middle middle middle middle middle middle';
            .middle {
                padding-bottom: 30px;
                grid-area: middle;
            
                .title {
                    font-size: 45px;
                    line-height: 50px;

                    &:first-child {
                        padding-top: 20px;
                    }
                }

                .subtitle {
                    padding-top : 20px;
                    padding-bottom: 20px;
                    font-size: 20px;
                }

                .button {
                    font-size: 13px;
                }
            }
        }
    }
</style>