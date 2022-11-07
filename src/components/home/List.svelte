<script>

    export let elements;
</script>

<div id="countdown">
    <div class="cd">
        <div class="elements"> 
        {#each elements as { title, description}}
        
            <div class="element">
                <div class="title">{title}</div>
                <div class="description">{description}</div>
            </div>
        {/each}
    </div>
    </div>
</div>

<style lang="scss">
    @import 'vars';

    #countdown{
        background-color: $color-yellow;

        flex-direction: row;
        align-items: center;
        justify-content: center;


        .cd {
                .elements {

                    display: grid;
                    //grid-template-columns: repeat(4,1fr);
                    grid-template-areas: 'element element element';
                    grid-gap: 60px;

                    padding-top: 70px;
                    padding-bottom: 70px;
                    padding-left: 70px;
                    padding-right: 70px;

                    .element {
                        flex-direction: column;
                        align-items: LEFT;                    

                        .title {
                            font-size: 20px;
                            font-weight: 600;
                            color: black;
                        }

                        .description {
                            font-size:12px;
                            width: 200px;
                            color: lighten($color: black, $amount: 20);

                            padding-top: 10px;
                        }
                    }
            }

            @media only screen and (max-width: 760px) {
                .elements {
                    grid-template-areas: 'element' 'element' 'element';
                    grid-gap: 10px;

                    padding-top: 10px;
                    padding-bottom: 10px;
                    padding-left: 10px;
                    padding-right: 10px;

                    .element {
                        .time {
                            font-size: 35px;
                            line-height: 25px;
                        }
                        .name {
                            font-size:15px;
                        }
                    }
                }
                
            }
        }


    }
</style>