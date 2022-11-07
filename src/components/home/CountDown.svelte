<script>
    import { onMount } from 'svelte';

    const nextFrom = new Date(2022, 10, 18); // 0 = january, 11 = december (only months have this specificity)
    const nextTo = new Date(nextFrom);
    nextTo.setDate(nextTo.getDate() + 2);


    let countdown = getCountdown();

    onMount(() => {
        const interval = setInterval(() => countdown = getCountdown(), 1000);
        return () => clearInterval(interval);
    });

    function getCountdown()
    {
        const diff = new Date(nextFrom - new Date());
        const toDigits = (label, value, singular) => ({
            label: label + (value > 1 && !singular ? 's' : ''),
            value: value < 10 ? [0, value] : [~~(value / 10), value % 10]
        });

        return [
            toDigits('Mois', diff.getMonth(), true),
            toDigits('Jour', diff.getDate()),
            toDigits('Heure', diff.getHours()),
            toDigits('Minute', diff.getMinutes())
        ];
    }
</script>

<div id="countdown">
    <div class="cd">
        <div class="elements"> 
        {#each countdown as { label, value : [ first, second ]}, i}
        
            <div class="element">
            <div class="time">{first}{second}</div>
            <div class="name">{label}</div>
            </div>
        {/each}
    </div>
    </div>
</div>

<style lang="scss">
    @import 'vars';

    #countdown{
        background-color: white;
        background-image: url('../../assets/home/pejman.jpg');
        
        background-position: 40% 50%;
        //background-attachment: fixed;
        background-size: cover;

        height: 120px;

        flex-direction: row;
        align-items: center;
        justify-content: center;


        .cd {
                .elements {

                    display: grid;
                    //grid-template-columns: repeat(4,1fr);
                    grid-template-areas: 'element element element element';
                    grid-gap: 60px;

                    padding-top: 70px;
                    padding-bottom: 70px;
                    padding-left: 70px;
                    padding-right: 70px;

                    .element {
                        flex-direction: column;
                        align-items: center;                    

                        .time {
                            font-size: 50px;
                            line-height: 40px;
                            font-weight: bold;

                        }

                        .name {
                            font-size:25px;
                        }
                    }
            }

            @media only screen and (max-width: 800px) {
                .elements {
                    grid-template-areas: 'element element' 'element element';
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