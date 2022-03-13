<script>
    import { onMount } from 'svelte';

    import { title } from '/app';

    import Shadows from '$components/Shadows.svelte';
    import Arrow from '$components/Arrow.svelte';

    import Atelier from '/assets/home/atelier.png';
    import Workshop from '/assets/home/workshop.png';
    import Tuto from '/assets/home/tuto.png'

    import Monde from '/assets/home/voyage.png';
    import Paris from '/assets/home/paris.png';
    import Lyon from '/assets/home/lion.png';
    import Pizza from '/assets/home/pizza.png';
    import Prix from '/assets/home/sac-dargent.png'


    import EPITA from '/assets/school/epita-logo.png';
    import EPITECH from '/assets/school/epitech-logo.png';
    import SUPBIO from '/assets/school/supbiotech-logo.png';
    import ESME from '/assets/school/esme-logo.png';


    const nextFrom = new Date(2022, 4, 13); // 0 = january, 11 = december (only months have this specificity)
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

    const first_info = [
        {
            title: 'PARCOURS TUTO',
            photo: Tuto,
            description: `
                En parallèle de la compétition, le parcours tuto est un condensé de cours et de 
                workshops pour apprendre à réussir en hackathon ! 
                `
        },
        {
            title: 'MAKER SPACE x GGH',
            photo: Atelier,
            description: `
                L'Atelier, Maker Space de l'EPITA Paris, s'associe avec Gotta Go Hack pour proposer
                aux participants un accès illimité à leur matériel pendant le Hackathon.`
        },
        {
            title: 'WORKSHOPS',
            photo: Workshop,
            description: `
                Tout au long du week-end, des workshops animés par notre staff et des intervenants sont
                accessibles aux participants et au public.            
                `
        }
    ]

    const villes = [
        {
            title: 'Paris',
            photo: Paris
        },
        {
            title: 'Lyon',
            photo: Lyon
        },
        {
            title: 'Partout en remote',
            photo: Monde
        }
    ]

    const bonus = [
        {
            title: 'Nourriture fournie',
            photo: Pizza
        },
        {
            title: 'Par équipe',
            photo: Pizza
        },
        {
            title: 'Inter-école',
            photo: Pizza
        }
    ]

    const school = [
        EPITA,
        EPITECH,
        ESME,
        SUPBIO
    ]
</script>

<svelte:head>
    <title>{title('Accueil')}</title>
</svelte:head>


<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Hackathon</h1>
            <h1>Gotta Go Hack</h1> 
            <h1>Edition #2</h1>
            <div>
                <div class="date">13/14/15 mai 2022</div>
            </div>
            <div class="event-container">
                <a class="event" href="#countdown">TOUT SAVOIR</a>
                <div class="space"></div>
            </div>
        </div>
    </div>
    <div class="right">
        <Shadows top="yellow" bottom="red" width="40" height="60" shadowWidth="20" shadowHeight="10" margin="3">
            <iframe src="https://www.youtube.com/embed/nkuBFhYur2w?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Shadows>   
    </div>
</div>

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

<div id="alaune">
    <div class="title">LES + DE L'EDITION</div>
    <div class="infos">
            {#each first_info as { title, photo, description}, i}
            <div class="info">
            <img class="photo" src={photo} alt=""/>
            <div class="title">{title}</div>
            <div class="description">{description}</div>
            </div>
            {/each}
    </div>
</div>

<div id="carroussel">
    {#each school as photo, i}
    <div class="images">
        <img class="photo" src={photo} alt="" height="100vh"/>
    </div>
    {/each}
</div>

<div class="subtitle">LES VILLES HÔTES</div>
<div id="secondinfo">
    <div class="infos">
            {#each villes as { title, photo, description}, i}
            <div class="info">
            <img class="photo" src={photo} alt=""/>
            <div class="subject">{title}</div>
            </div>
            {/each}
    </div>
</div>

<div id="novembre">
    <a class="flickr" href="https://www.flickr.com/photos/club-ephemere/albums/72177720295591573">LA DERNIERE EDITION EN IMAGE</a>
</div>

<div id="faq">
    <div class="question">ENCORE DES QUESTIONS ?</div>
    
    <div class="button"><a href='faq#top'>FAQ's</a></div>
</div>


<style lang="scss">
    @import 'mixins';
    @import 'vars';
    #header {
        height: calc(100vh - #{$nav-height});
        //height: 900px;

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

        .left {
            flex-direction: column;
            padding-left: 10vw;

            .inner {
                flex-direction: column;

                .date {
                    padding-top: 2vh;
                    font-size: 3vw;
                    @include colored(box-shadow, 0 -38px inset);
                }
            }

            .event-container {
                $border: solid white 3px;
                margin-top: 15vh;

                .event {
                    padding: 20px 25px;
                    font-size: 1.5vw;
                    font-weight: 600;
                    background: none;
                    border: $border;
                }
                .space {
                    border-top: $border;
                    width: 20vw;
                }
            }
        }
    }

    #countdown{
        background-color: white;
        background-image: url('../assets/home/pejman.jpg');
        
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;

        height: 25vh;

        flex-direction: row;
        align-items: center;
        justify-content: center;


        .cd {
                .elements {

                    display: grid;
                    grid-template-columns: repeat(4,1fr);
                    grid-gap: 5vw;

                    padding-top: 5vw;
                    padding-bottom: 5vw;
                    padding-left: 20vw;
                    padding-right: 20vw;

                    .element {
                        flex-direction: column;
                        align-items: center;                    

                        .time {
                            font-size: 6vw;
                            line-height: 5vw;
                            font-weight: bold;

                        }

                        .name {
                            font-size:4vh;
                        }
                    }
            }
        }
    }

    #alaune {
        padding: 1vw;
        padding-top: 10vh;

        background-color: $color-yellow;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .title {
            font-size: 5vw;
            font-family: $font-barlow;

            justify-content: center;
            align-items: center;

            padding-bottom: 5vh;
        }

        .infos {
            display: grid;
            grid-template-columns: repeat(3, minmax(25vw, 1fr));
            
            grid-gap: 5vh;

            padding: 35px;
            justify-content: center;
            align-content: flex-start;

            .info {
                flex: 1;
                flex-direction: column;
                align-items: center;

                .photo {
                    height: 25vw;
                    width: auto;

                }

                .title {
                    margin-top: 15px;

                    font-family: $font-barlow;
                    font-weight: bold;
                    font-size: 3vw;

                    justify-content: center;
                    text-align: center;
                }

                .description {
                    width: 23vw;

                    margin-top: 1vh;

                    font-size: 1.2vW;
                    text-align: justify;

                    color: black;
                }
            }
        }
    }

    #carroussel {
        background-color: white;
        flex-direction: row;
        align-items: center;
        justify-content: center;


        padding-left: 10vw;
        padding-right: 10vw;
        padding-top: 5vh;
        padding-bottom: 5vh;

        .images {
            display : grid;
            grid-template-columns: repeat(auto-fit, 1fr);
        }
    }

    .subtitle {
            font-size: 4vw;
            font-family: $font-barlow;

            justify-content: center;
            align-items: center;

            padding-top: 15vh;
            background-color: $color-red;
        }

    #secondinfo {
        padding: 1vw;
        padding-top: 10vh;

        background-color: $color-red;
        display: flex;
        justify-content: center;
        //flex-direction: column;

        padding-bottom: 15vh;


        .infos {
            display: grid;
            grid-template-columns: repeat(3, minmax(10vw, 1fr));
            
            grid-gap: 10vh;

            justify-content: center;
            align-content: flex-start;

            .info {
                flex: 1;
                flex-direction: column;
                align-items: center;


                .photo {
                    height: 10vw;
                    width: auto;
                }

                .subject {
                    margin-top: 3vh;

                    font-family: $font-barlow;
                    font-weight: bold;
                    font-size: 2vw;

                    text-align: center;
                    justify-content: center;
                    width: 10vw;
                }
            }
        }
        
    }

    #novembre {
        background-image: url('https://live.staticflickr.com/65535/51786100158_7b195b8552_c.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        
        height: 100vh;
        
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .flickr {
            font-size : 60px;
            color : white;
            font-weight: bold;

            text-shadow: -1px -1px 4px black;
        }
    }

    #faq {
        background-color: white;
        background-size: cover;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        padding-bottom: 15vh;

        .question {

            padding-top: 20vh;
            color : black;

            font-size: 4vw;
            padding-bottom: 10vh;

            font-weight: bold;

            font-family: $font-barlow;
            

        }

        .button {

            background-color: $color-blue;

            color: white;
            font-size: 4vw;

            border-color: black;
            border: 20px;

            width: 20vw;
            height: 15vh;

            text-align: center;
            justify-content: center;

        }

    }

</style>
