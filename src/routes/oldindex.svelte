<script>
    import { onMount } from 'svelte';

    import { title } from '/app';

    import Shadows from '$components/Shadows.svelte';
    import Arrow from '$components/Arrow.svelte';

    import Place from '/assets/home/pin.png';
    import Gift from '/assets/home/cadeau.png';
    import Hat from '/assets/home/hat.png'

    import Monde from '/assets/home/voyage.png';
    import Paris from '/assets/home/paris.png';
    import Lyon from '/assets/home/lion.png';
    import Pizza from '/assets/home/pizza.png';

    import Tuto from '/assets/home/tuto.jpg';


    import EPITA from '/assets/school/epita-logo.png';
    import EPITECH from '/assets/school/epitech-logo.png';
    import SUPBIO from '/assets/school/supbiotech-logo.png';
    import ESME from '/assets/school/esme-logo.png';
    import Hackathon from './hackathon.svelte';

    import TimeLine from '$components/TimeLine.svelte';


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

    const first_info = [
        {
            title: 'PRIX',
            photo: Gift,
            description: `
                12000 EUROS C4EST STYLEEE 
                `
        },
        {
            title: 'LIEU',
            photo: Place,
            description: `
                A PARIS LES BOYS`
        },
        {
            title: 'ENTREE',
            photo: Hat,
            description: `
                ACCESSIBLE A TOUS LES ETUDIANTS INGE OU INFO. ENTREE GRATUITE POUR TOUS;           
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

    const carroussel = [
        {
            url: 'https://live.staticflickr.com/65535/52110481219_316b8abf31_k.jpg'
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
            <h1>Edition #3</h1>

            <div>
                <div class="date">18 au 20 nov 2022 </div>
            </div>

            <div class="event-container">
                <a class="event" href="">Inscription le 17 oct</a>
                <div class="space"></div>
            </div>
        </div>
    </div>
    <div class="right">
        <Shadows top="yellow" bottom="red" width="40" height="60" shadowWidth="20" shadowHeight="10" margin="3">            
            <iframe src="https://www.youtube.com/embed/OxNag_Bvut4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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

<div id="theme">
    <div class="title">2 thèmes</div>
    <div class="subtitle">Donc deux fois plus de chance de gagner !</div>
</div>

<div id="recap">
    <div class="lf">
            <img class="photo" src={Tuto} alt="GottaAgro"/>
    </div>

    <div class="rg">
        <div class="title">Peur de plonger dans le grand bain ?</div>

        <div class="description">
            Rejoins le parcours Tuto, un programme qui te permet d'apprendre les meilleures pratiques en Hackathon,
            sans la pression de la compétition et tout en profitant de l'ambiance ! Entrée gratuite, places limitées.
        </div>

    </div>
</div>

<TimeLine />


<div id="novembre">
    <a class="flickr" href="https://www.flickr.com/photos/club-ephemere/albums/72177720299383429/with/52110271183/">LA DERNIERE EDITION EN IMAGE</a>
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

                .stay {
                    padding-top: 2vh;
                    font-size: 3vw;
                    @include colored(box-shadow, 0 -38px inset);
                }

                .date {
                    padding-top: 6vh;
                    font-size: 3vw;
                    @include colored(box-shadow, 0 -38px inset);
                }
            }

            .event-container {
                $border: solid white 3px;
                margin-top: 4vh;

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
        //background-attachment: fixed;
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

        background-color: white;
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
                    height: 5vw;
                    width: auto;

                }

                .title {
                    margin-top: 15px;
                    color: $color-red;

                    font-family: $font-barlow;
                    font-weight: bold;
                    font-size: 3vw;

                    justify-content: center;
                    text-align: center;
                }

                .description {
                    width: 23vw;

                    font-size: 1.2vW;
                    text-align: center;

                    color: black;
                }
            }
        }
    }

    #theme {
        

        background-color: white;
        padding-top: 10vh;
        padding-bottom: 10vh;

        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            font-size: 5vw;
            color: $color-red;
        }
        .subtitle {
            font-size: medium;
            color: black;
            background-color: white;
        }
        
        .container {
            display: grid;
            grid-template-columns:auto auto;

            .left {
		        display:flex;
		    align-items:center;
		        justify-content:center;
                background-color: white;
            }
            .right {
                background-color: $color-blue;
            }
        }
    }

    #recap
    {
      background-color: $color-yellow;
      padding: 5%;
      justify-content: center;
      align-content: center;
      align-items: center;


      .lf {
        flex-direction: column;

        width: 40vw;

        .photo {
            width : 40vw;
            height: auto;
        }
        .description {

          font-size: 1.5vw;          
        }

      }
      .rg {
        flex-direction: column;
        padding-left: 5%;

        .title {
            font-size: 5vw;
            font-family: $font-barlow;
  
            text-transform: uppercase;
            line-height: 4.5vw;

        }
        .description
        {
          margin-top: 4%;
          font-size: 1.5vw;

          width: auto;

          text-align: justify;
        }
    }
}

    #carroussel {
        background-color: white;
        flex-direction: row;
        justify-content: center;


        padding-left: 10vw;
        padding-right: 10vw;
        padding-top: 5vh;
        padding-bottom: 5vh;

        display : grid;
        grid-template-columns: auto auto auto auto;

        .images {
            height: 3vw;
            justify-content: center;
            align-items: center;

            padding: 5px;
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

    #team {
        flex-direction: column;

        padding: 7vh;

        background-color: white;

        .title-container {
            justify-content: center;

            .title {
                margin: 15px 0;
                padding: 0 5px;

                font-size: 2.5vw;
                font-weight: bold;
                text-transform: uppercase;

                color: #333;

                box-shadow: $color-yellow 0 -1.5vw inset;
            }
        }
    }

    #faq {
        background-color: white;
        background-size: cover;

        flex-direction: column;

        justify-content: center;
        align-items: center;

        padding-bottom: 15vh;
        padding-top: 20vh;

        .question {

            color : $color-black;

            font-size: 4vw;
            
            font-weight: bold;

            font-family: $font-barlow;
            box-shadow: $color-yellow 0 -2vw inset;

        }

        .button {

            margin-top: 10vh;
            background-color: $color-blue;

            color: white;
            font-size: 4vw;

            width: 20vw;
            height: 15vh;

            text-align: center;
            justify-content: center;

            

        }

    }

</style>
