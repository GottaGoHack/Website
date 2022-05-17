<script>
    import { title } from '/app';
    import Shadows from '$components/Shadows.svelte';
    import Arrow from '$components/Arrow.svelte';
    import Cubes from '/assets/cubes.svg';
    import Cup from '/assets/cup.svg';
    import lfl from '/assets/teams/1/lfl.webp';
    import foodcycle from '/assets/teams/1/foodcycle.webp';
    import assogrow from '/assets/teams/1/assogrow.webp';
    import croposphere from '/assets/teams/1/croposphere.webp';
    import dokini from '/assets/teams/1/dokini.webp';
    import feedtheworld from '/assets/teams/1/feedtheworld.webp';
    import flago from '/assets/teams/1/flago.webp';
    import lebonplant from '/assets/teams/1/lebonplant.webp';
    import monkeys from '/assets/teams/1/monkeys.webp';
    import proximiam from '/assets/teams/1/proximiam.webp';
    import restauck from '/assets/teams/1/restauck.webp';
    import systemedx from '/assets/teams/1/systemeDX.webp';
    import totallyspes from '/assets/teams/1/totallyspes.webp';
    import treeflop from '/assets/teams/1/treeflop.webp';
    import yedi from '/assets/teams/1/yedi.webp';
    import bubble from '/assets/teams/1/bubbleteam.webp';

    import Moon from '/assets/teams/2/moonteam.jpg';

    import Anne from '/assets/juries/0/anne.webp';

    import Jury from '/assets/jury.svg';

    const projects = [
        {
            image: yedi,
            name: "MOON - Equipe Moon",
            content: `
           Imaginez un avenir où les datacenters ne rejettent pas 12 milliards de tonnes de CO2 par an. 
           MOON, c’est un projet futuriste qui propose d’installer des datacenters sur la Lune, là où il n’y 
           ni faune ni flore à protéger, là où les questions de chaleur ne pose aucun problème, 
           là où il reste encore tout à imaginer. Pour un cloud au-delà des nuages.`
        },
        {
            image: yedi,
            name: "Proxint - Equipe TooEmptyKay",
            content: `
            Les interconnexions possibles aujourd'hui nous permettent d’être en contact instantanément avec 
            l’autre bout du monde, mais nous font oublier ce qu’il y a autour de nous.  L’idée derrière PROXINT, 
            c’est d’équiper les commerçants avec des petits boitiers bluetooth qui notifient les passants 
            possédant l’application. Toutes formes d’informations pourraient être transmises : des promotions, 
            une recherche d’employés, l'installation d’un nouveau commerce…
            Un seul objectif : remettre la vie de quartier au centre de nos interractions.

            `
        },
        {
            image: yedi,
            name: "Cidoos - Equipe Cidoos",
            content: `
            Un jeu mobile avec des petits monstres, mais surtout une blockchain pour prévenir tout risque de 
            triche. L’application Cidoos permet aux joueurs d’attraper et de collectionner ces petits monstres 
            sous forme de NFTs, et de les faire se battre ou se reproduire. Le jeu pousse également ses joueurs 
            à marcher pour gagner plus de monnaie locale, le Cid, et ainsi faire évoluer leurs monstres.

            `
        },
        {
            image: yedi,
            name: "Gotta Go Dance - Equipe GottaGoDance",
            content: `
            Salut à toi jeune célibataire ! Tu en as marre des sites de rencontres qui fonctionnent comme des 
            supermarchés ? Viens rejoindre Gotta Go Dance, le premier site de rencontre dans le métavers qui te 
            fait rencontrer des gens directement sur le dancefloor. Prends ton téléphone, allume la caméra, et 
            tous tes gestes seront retranscrits directement par ton avatar sur la piste de danse. Un match 
            réciproque ? Tu peux te retrouver dans un carré VIP pour discuter en privé avec cette personne. 
            Tu peux également venir avec tes potes et passer la meilleure des soirées !

            `
        },
        {
            image: yedi,
            name: "Ploutos - Equipe FARM",
            content: `
            Application proposant un bot tutoriel pour découvrir le monde de la crypto et du trading de manière 
            ludique. Le programme investit en bourse à votre place en suivant une stratégie préfaite de votre 
            choix, et vous explique de manière pédagogique ses choix et ses actions.

            `
        },
        {
            image: yedi,
            name: "ShopMaker - Equipe Flying Bananas",
            content: `
            Le shopping de demain se situe dans le Metavers. Et si à la fin de votre partie Minecraft, vous 
            passiez au Carrefour Market, à l’angle derrière le donjon, pour votre dîner de ce soir ? ShopMaker 
            propose aux entreprises de créer des magasins dans le métavers, à l’identique de leur magasin physique, 
            où leurs clients pourront y commander de vrai produit et se faire livrer chez eux.
            `
        },
        {
            image: yedi,
            name: " RatsDAO - Equipe H-Lfd'i",
            content: `
            Utiliser vos cryptos dans un objectif qui a du sens ? C’est ce que propose l’équipe H-Lfd’i 
            avec leur projet de plateforme de crowdfunding uniquement basé sur des devises de crypto-monnaies 
            et indexé sur le stablecoin pour en garantir leur valeur.
            `
        },
        {
            image: yedi,
            name: "UROOM - Equipe Le Perroquet",
            content: `
            UROOM est un outil qui permet aux clients réguliers de chaine d’hôtel de conserver l’ensemble de 
            leurs settings (lumières, compte netflix, …) en un clic et de les ré-appliquer à chaque hôtel et 
            chaque chambre qu’ils visiteront.
            `
        },
        {
            image: yedi,
            name: "LightCOM - Equipe LightCom",
            content: `
            40 minutes, c’est le temps qu’un automobiliste parisien passe par jour dans les bouchons. 
            Et s’il était temps d’introduire de l’IA dans nos feux de signalisation pour réguler les flux de 
            circulation ? C’est ce que propose l’équipe LightCOM en équipant les feux d’un boîtier récupérant 
            des données pour alimenter leur IA synchronisant la circulation. Les particuliers sont également 
            dotés d’une map renseignant l’état des feux et le meilleur itinéraire en fonction des feux de 
            signalisation !
            `
        },
        {
            image: yedi,
            name: "Gotta Fit You - Equipe Piano",
            content: `
            Gotta Fit You c’est un jumeau numérique 3D qui vous permet de shopper en ligne tout en essayant 
            les habits. Plus question de commander la mauvaise taille ou la mauvaise coupe et de renvoyer plusieurs 
            fois vos achats.

            `

        },
        {
            image: yedi,
            name: "Cross News - Equipe ShowPatate",
            content: `
            Les algorithmes de recommandation nous empêchent d’être informés de manière neutre en ligne. 
            Cross News propose une application d’information neutre, qui ne se base ni sur un algorithme de 
            recommandation ni sur des tendances de lecture pour vous faire vivre l’expérience d’information 
            la moins biaisée possible.`
        },
        {
            image: yedi,
            name: "Parcours Tuto - Equipe PassTheButter",
            content: `
            La team PassTheButter a développé une application de reconnaissance vocale pour expressions 
            mathématiques : en dictant une formule ou une expression mathématiques à votre portable, il est en 
            capacité de vous le renvoyer en écriture mathématique, qui pourra être intégré à n’importe quelle note 
            ou traitement texte. En plus, il vous en donne le résultat (oui, même pour des intégrales).`

        },
        {
            image: yedi,
            name: "Parcours Tuto - Equipe WherePizza?",
            content: `
            La team WherePizza? a imaginé un assistant vocal pour les personnes ayant des difficultés à 
            accéder à la technologie. Il sera en capacité de les aiguiller mais également d’effectuer des tâches 
            pour eux, à la manière de Siri.`

        },
        {
            image: yedi,
            name: "Parcours Tuto - Equipe Le C c'est le meilleur",
            content: `
            La team Le C c’est le meilleur a imaginé une solution de génération de texte pour les présentations. 
            L’idée : aider les personnes anxieuses lors des présentations orales en leur fournissant de l’aide 
            pour la rédaction de leur speech mais également des tutos personnalisés pour réussir leur passage 
            devant un auditoire.`

        }

    ];

    const juries = [
        {
            photo: Jury,
            name: 'Kellian Nahon',
            content: `
            Software Engineer chez Trinov.
            `
        },
        {
            photo: Anne,
            name: 'Anne Dewilde',
            content: `
                Directrice de 3IE, laboratoire d'innovation de l'EPITA.
            `
        },{
            photo: Jury,
            name: 'Lisa Castaignede',
            content: `
            Ingénieur, Consultante en Architecture d'Entreprise et Stratégie IT chez Onepoint.
            `
        }
    ];
</script>

<svelte:head>
    <title>{title('Hackathon #1')}</title>
</svelte:head>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Hackathon</h1> 
            <h1>Gotta Go Hack</h1>
            <h1>Edition #2</h1>
            <hr />

            <div class="date">13 - 15 Mai 2022</div>
            <div class="online">En présentiel à EPITA Paris et Lyon</div>
        </div>

    </div>
    <div class="right">
        <Shadows top="blue" bottom="red" width="40" height="60" shadowWidth="20" shadowHeight="10" margin="3">
            <img class="cubes" src={Cubes} alt="Cubes" />
            <iframe src="https://www.youtube.com/embed/OxNag_Bvut4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Shadows>
    </div>
</div>

<div id="recap">
    <div class="lf">
            <img class="photo" src={Moon} alt="GottaAgro"/>
        <div class="description">[La team MOON, vainqueur du Hackathon #2]</div>
    </div>

    <div class="rg">
        <div class="title">En bref</div>

        <div class="description">
            Le Hackathon GGH #2 Spring Edition 2022 a réuni une soixantaine de participant en présentiel à EPITA 
            Paris et Lyon !
        </div>
        <div class="description">
            Une vingtaine d'équipe se sont lancées dans la compétition autour du thème "L'internet du Futur".
            Une dizaine de participants ont également eu la chance de suivre le parcours tuto, programme hors compétion
            sur le thème du "Langage Processing & User Interface".
        </div>
        <div class="description"> 
            Cette édition a de nouveau été possible grâce au soutien de la Société Général, partenaire de notre évènement.
        </div>

        <a href="#projects" class="see-projects clickable">
            <h3 class="red">Tous les projets</h3>
            <h3 class="red">présentés</h3>
            <Arrow />
        </a>
    </div>
</div>

<div id="projects">
    {#each projects as { image, name, content }, i}
        <div class="project">
            <img class="team" src={image} alt="Logo de {name}" />
            <div class="content">
                <div class="title">
                    {name}
                    {#if i === 0}
                        <img class="cup" src={Cup} alt="1ère place" />
                    {/if}
                </div>
                <div class="description">{content}</div>
            </div>
        </div>
    {/each}
</div>

<div id="jury">
    <div id="sub-header">
        <div class="inner">
            <h1 class="title">Le jury<br /> Gotta Go Hack edition #1</h1>
            <hr class="separator" />
        </div>
    </div>

    <div id="juries">
        {#each juries as { photo, name, content }}
            <div class="jury">
                <img class="photo" src={photo} alt="Photo de {name}" />
                <div class="name">{name}</div>
                <div class="content">{content}</div>
            </div>
        {/each}
    </div>
</div>

<div id="ribbon"></div>

<style lang="scss">
    @import 'vars';
    #header {
        height: calc(100vh - #{$nav-height});

        background-color: $color-yellow;

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

        .left {
            flex-direction: column;
            padding-left: 10vw;
            padding-top: 0vh;;

            .inner {
                flex-direction: column;
            }

            .date {
                font-family: $font-suez;
                font-size: 4vw;
                font-weight: bold;
            }

            .online {
                font-size: 2vw;
            }
        }

        .right {
            :global(.shadows-content) {
                position: relative;
            }

            .cubes {
                position: absolute;
                top: -10vh;
                right: -10vh;

                width: 10vw;
            }
        }
    }

    #recap
    {
      background-color: $color-yellow;

      .lf {
        flex: 0.5;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding-top: 10vh;
        padding-right: 5vh;
        padding-bottom: 20vh;

        width: 40vw;

        .photo {
            width : 40vw;
            height: auto;
        }
        .description {

          flex-direction: column;

          font-size: 1.5vw;

          
        }

      }

      .rg {
        flex-direction: column;
        flex: 0.5;

        align-items: center;

        .title {
          flex-direction: column;
          justify-content: center;

          font-size: 2vw;
          font-weight: bold;

          text-transform: uppercase;
          margin-top: 5vh;

        }
        .description
        {
          margin-top: 5vh;

          flex-direction: column;

          font-size: 1.5vw;

          width: 45vw;

          text-align: justify;
        }

        .see-projects {
                display: flex;
                flex-direction: column;
                align-items: center;

                height: 6vh; // Little hack simplifying a lot

                margin-top: 2vh;
                background-color: $color-yellow;
            }
      }
    }

    #projects {
        flex-direction: column;
        align-items: center;

        background-color: white;
        color: black;

        padding: 2vw 0;

        .project {
            padding-left: 8vw;;
            padding-top: 10vh;


            width: 80vw;

            .team {
                height : 12vw;
                width: auto;

                padding-right: 3vh;

                border-radius: 50%;
            }
            .content {
                flex-direction: column;
                justify-content: center;

                .title {
                    padding-bottom: 3vh;

                    font-size: 2vw;
                    font-weight: bold;

                    color: $color-blue;

                    .cup {
                        width: 2vw;

                        padding-left: 1vw;
                    }
                }

                .description {
                    font-size: 1.1vw;
                    font-weight: 300;
                    text-align: justify;
                }
            }
        }
    }

    #jury {
        flex-direction: column;

        padding: 75px 125px;

        background-color: $color-yellow;

        #sub-header {
            justify-content: flex-start;

            .inner {
                flex-direction: column;

                .title {
                    font-size: 4vw;
                }

                .title, .separator {
                    width: 30vw;
                }
            }
        }

        #juries {
            justify-content: space-between;

            padding-bottom: 3vh;

            color: #222;

            .jury {
                flex-direction: column;
                align-items: center;

                width: 20vw;

                padding-top: 7vh;
                padding-left: 5vh;

                .photo {
                    height: 13vw;
                    width : auto;

                    border-radius: 50%;
                }

                .name {
                    margin-top: 5vh;

                    font-size: 1.7vw;
                }

                .content {
                    margin-top: 3vh;

                    font-size: 1.5vw;
                    font-weight: 300;
                    text-align: center;
                }
            }
        }
    }

    #ribbon {
        width: calc(100vw + 50px);
        height: 60px;
        background-color: $color-red;
        transform: rotate(-1.5deg) translate(-10px, -30px);
    }
</style>