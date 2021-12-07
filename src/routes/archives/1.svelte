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

    import bubble from '/assets/teams/1/bubbleteam.webp'

    import Anne from '/assets/juries/0/anne.webp';

    import Jury from '/assets/jury.svg';

    const projects = [
        {
            image: lfl,
            name: "Laids Fruit & Légume - GottAgro",
            content: `
            Une plateforme qui permet de mettre en relation les agriculteurs et les consommateurs pour écouler
		    les stocks de fruits et légumes impropres à la distribution du fait de leur esthétiques. 35% des récoltes
		    chaque année sont laissés de côté car les fruits et légumes sont jugés trop laids.`
        },
        {
            image: treeflop,
            name: "La BoboBox - TreeFlop",
            content: `
            Un projet de jardinière connectée à destination des toits de bâtiment d'entreprise et d'école. L'équipe
		    TreeFlop nous propose ici la nature 2.0 : on plante, et on cueille lorsque c'est mûr ! La BoboBox s'occupe
		    du reste.
            `
        },
        {
            image: assogrow,
            name: "AssoGrow - Jacques Houzit",
            content: `
            Un logiciel à destination de la Banque Alimentaire, pour les aider à centraliser les demande d'aide faites par
		    des bénéficaires, les possibilités d'aide proposées par chacun de leurs partenaires et les quantités d'offre qu'ils
		    peuvent encore fournir.
            `
        },
        {
            image: restauck,
            name: "Restauck - Les Immortels",
            content: `
            Une application web permettant aux restaurants et aux commerces de proximité de prédire les stocks nécessaires dans
		    les prochaines semaines. L'analyse se base sur les données du commerçant ainsi qu'un questionnaire de feedback client
		    qui leur permet d'annoncer au magasin quels produits les intéressent à quelle période.
            `
        },
        {
            image: foodcycle,
            name: "FoodCycle - 4earth",
            content: `
            Cette application permet au consomateur une vision transparente quant à  la provenance des produits qu'il achète
            en grande surface. Tout le voyage, des matières premières à la transformation finale de l'aliment est recensé
            et accessible.

            `
        },
        {
            image: proximiam,
            name: "Proxi'Miam - Les Fermiers d'EPITECH",
            content: `
            Un moteur de recherche à destination des consommateurs, pour trouver les magasins de proximité
            et se renseigner sur la vente de produits locaux.
            `
        },
        {
            image: totallyspes,
            name: " SeaFish - Totally Spés",
            content: `
            Un web-Service à destination des professionels de la pêche responsable. L'idée est de pouvoir réaliser son itinéraire
            de pêche sur le software, qui rassemble des données telles les marées, la pollution mais surtout
            les zones dans lesquelles trop de poisson ont été récemment pêchés et ainsi lutter contre la surpêche !
            `
        },
        {
            image: flago,
            name: "Flago, le frigo de demain - Nuckfix",
            content: `
            Un frigo connecté qui détecte automatiquement les aliments qu'il contient et propose de multiple
            option pour lutter contre le gaspillage alimentaire (recette de cuisine, notification de peremption, etc...)
            `
        },
        {
            image: dokini,
            name: "Dokini - BRA K C",
            content: `
            Un logiciel à destination des cantines scolaires qui suggèrent des menus locaux et de saison
            adaptés aux âges des enfants, pour une alimentation collective ayant moins d'impact sur l'environnement.
            `
        },
        {
            image: croposphere,
            name: "Crop'O'Sphère - AthmosFood",
            content: `
            Un jeu de simulation aux graphisme méticuleux : on incarne un tracteur qui gère ses champs
            et doit nourrir différentes villes en famine. L'expérience de jeu est tournée autour des questions
            de surproduction et d'inégalités face aux ressources alimentaires.
            `
        },
        {
            image: bubble,
            name: " HearEatIs - Bubble Team",
            content:`
            Une application pensée sous forme de jeu permettant aux utilisateurs de partager leurs recettes à proximité
            tout en encourageant les recettes à base de produits locaux et de saison à travers des gratifications virtuelles.
            `
        },
        {
            image: systemedx,
            name: "Apocallyptic Farmer - SystèmeDX",
            content: `
            Un jeu de simulation de gestion de ferme en 2D post apocalyptique.`

        },
        {
            image: lebonplant,
            name: "Le Bon PlanT - We Fell In Code In October",
            content: `
            Une application visant à réunir les anciens et les nouveaux passionés de jardinage et d'agriculture sous toutes ces formes. Le Bon Plant
            regroupe une market place, tournée vers le troc de graines et de produits agricoles, un forum ainsi qu'une map recenssant
            les jardins collectifs à proximité.`
        },
        {
            image: monkeys,
            name: " - Monkeys",
            content: `
            Un site web qui analyse les goûts de ces utilisateurs par le biais de recettes renseignées
            pour leur suggérer de nouvelles recettes basées sur des ingrédients de saison.`

        },
        {
            image: feedtheworld,
            name: "Feed The World - BA_RO²",
            content: `
            Quizz interactif en ligne, Feed The World permet d'en apprendre plus sur les recettes du monde entier ainsi
            que les associations dans chaque pays qui luttent contre la faim et la malnutrition.`
        },
        {
            image: yedi,
            name: "Yedi - Equipe en Parcours Tuto sur le thème 'E-accessibilité' ",
            content: `
            Une application alliant l'eye-tracking et le speech-to-text pour permettre aux personnes
            tétraplégiques ou atteintes d'autres handicaps physique d'utiliser un ordinateur
            sans avoir besoin de bouger. Pouvoir contrôler un ordinateur juste à l'aide de ses yeux
            et de sa bouche peut permettre d'effectuer toutes sortes de tâches de bureautique
            sans aucune difficulté !
            `
        }

    ];

    const juries = [
        {
            photo: Jury,
            name: 'Adrien Fenech',
            content: `
                Co-founder & CTO d'Estimeo.
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
            name: 'Loïc Marot',
            content: `
                Innovation project manager à la Société Générale Corporate & Investment Banking.
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
            <h1>Hackathon Gotta Go Hack Winter Edition #1</h1>
            <hr />

            <div class="date">26 - 28 Novembre 2021</div>
            <div class="online">En présentiel à EPITA KB et partout en France</div>
        </div>

        <a href="#projects" class="see-projects clickable">
            <h3 class="red">Tous les projets</h3>
            <h3 class="red">présentés</h3>

            <Arrow />
        </a>
    </div>
    <div class="right">
        <Shadows top="blue" bottom="red" width="800" height="500" shadowWidth="450" shadowHeight="100" margin="40">
            <img class="cubes" src={Cubes} alt="Cubes" />
            <iframe src="https://www.youtube.com/embed/nkuBFhYur2w?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Shadows>
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
            .inner {
                flex-direction: column;
            }
            .date {
                font-family: $font-suez;
                font-size: 48px;
                font-weight: bold;
            }
            .online {
                font-size: 32px;
            }
            .see-projects {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 50px; // Little hack simplifying a lot
                margin-top: 125px;
            }
        }
        .right {
            :global(.shadows-content) {
                position: relative;
            }
            .cubes {
                position: absolute;
                top: -85px;
                right: -65px;
                width: 200px;
            }
        }
    }
    #projects {
        flex-direction: column;
        align-items: center;
        background-color: white;
        color: black;
        padding: 25px 0;
        .project {
            margin: 50px 0;
            width: 1250px;
            .team {
                width: 195px;
                margin-right: 25px;
                border-radius: 50%;
            }
            .content {
                flex-direction: column;
                justify-content: center;
                .title {
                    margin-bottom: 15px;
                    font-size: 28px;
                    font-weight: bold;
                    color: $color-blue;
                    .cup {
                        width: 25px;
                        margin-left: 10px;
                    }
                }
                .description {
                    font-size: 18px;
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
                    font-size: 42px;
                    line-height: 50px;
                }
                .title, .separator {
                    width: 350px;
                }
            }
        }
        #juries {
            justify-content: space-between;
            padding-bottom: 20px;
            color: #222;
            .jury {
                flex-direction: column;
                align-items: center;
                width: 275px;
                margin-top: 50px;
                .photo {
                    width: 150px;
                    border-radius: 50%;
                }
                .name {
                    margin-top: 20px;
                    font-size: 24px;
                }
                .content {
                    margin-top: 20px;
                    font-size: 20px;
                    font-weight: 300;
                    text-align: justify;
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