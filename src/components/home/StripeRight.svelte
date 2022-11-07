
<script>
     import Tuto from '/assets/home/tuto.jpg';

     export let image;
     export let content;
</script>

<div class="stripe">
    <div class="grid-container">         
            <div class="left">
                <div class="title">{content.title}</div>

                <div class="description">{content.description}</div>
            </div>
            <img class="photo" src={image} alt=""/>
    </div>
</div>


<style lang="scss">
    @import 'vars';
    .stripe {
        background-color: $color-red;
        align-items: center;
        justify-content: center;
        
        .grid-container {

            display: grid;
            grid-template-areas: 'photo left';
            grid-gap: 60px;

            padding-top: 70px;
            padding-bottom: 70px;
            padding-left: 70px;
            padding-right: 70px;

            align-items: center;
            justify-content: center;


            .photo {
                width: 500px;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }

            .left {
                        flex-direction: column;
                        align-items: left; 

                        .title {
                            font-size: 60px;
                            font-family: $font-sans;
                            font-weight: 600;
                
                            text-transform: uppercase;
                            line-height: 65px;

                            max-width: 600px;
                        }
                        .description
                        {
                            margin-top: 30px;
                            font-size: 20px;
                            text-align: justify;

                            max-width: 600px;
                        }
                    }
        }

        @media only screen and (max-width: 800px) {
                .grid-container {
                    grid-template-areas: 'photo' 'left';

                    padding-top: 0px;
                    padding-bottom: 50px;
                    padding-left: 0px;
                    padding-right: 0px;
                

                .photo {
                    object-fit: fill; 
                    object-position: center;
                }

            .left { 
                padding-left: 60px;
                padding-right: 60px;

                        .title {
                            font-size: 45px;
                            font-family: $font-sans;
                            font-weight: 600;
                
                            text-transform: uppercase;
                            line-height: 55px;                          

                        }
                        .description
                        {
                            margin-top: 20px;
                            font-size: 15px;
                            text-align: justify;
                        }
                    }
                }
        }
    }

</style>