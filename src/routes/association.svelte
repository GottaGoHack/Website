<script>
    // @ts-ignore
import { title } from '/app';

    import Shadows from '$components/Shadows.svelte';
    import Arrow from '$components/Arrow.svelte';

    import Pin from '/assets/pin.png';

    import Jeanne from '/assets/staff/jeanne.webp';
    import Alexandre from '/assets/staff/alexandre.webp';
    import Tao from '/assets/staff/tao.webp';
    import Mehdi from '/assets/staff/mehdi.webp';
    import Adrien from '/assets/staff/adrien.webp';
    import Sarah from '/assets/staff/sarah.webp';
    import Adele from '/assets/staff/adele.webp';
    import Ronan from '/assets/staff/ronan.webp';
    import Matthieu from '/assets/staff/matthieu.webp';
    import Sixou from '/assets/staff/gros_bg.webp';

    import Anonymous from '/assets/jury.svg';

    const members = [
        {
            name: 'Jeanne Morin',
            photo: Jeanne,
            role: 'BURO | Présidente',
            description: `
                Micro-manageuse tyrannique de la team GGH, une légende dit qu'un jour on l'aurait entendu arrêter de
                parler (si si !). Si vous arrivez à en placer une quand elle est lancée, vous êtes très fort...
            `
        },
        {
            name: 'Mehdi Oueslati',
            photo: Mehdi,
            role: 'BURO | Vice président',
            description: `
                Hackathonien récidiviste, avec des projets plus ou moins dans le thème, Mehdi est un peu notre
                directeur artistique chez GGH. Mais surtout il offre toujours les pizzas, et ça c'est pas négligeable.
            `
        },
        {
            name: 'Alexandre Lemonnier',
            photo: Alexandre,
            role: 'BURO | Trésorier',
            description: `
                Prêt à braquer des banques pour avoir le plus d'argent possible, Alexandre n'est expert en rien mais va
                toujours au bout de ses idées (17km ça ne lui fait pas froid aux yeux).
            `
        },
        {
            name: 'Tao Blancheton',
            photo: Tao,
            role: 'BURO | Secrétaire',
            description: `
                Super flexeur mais incapable d'écrire une phrase sans faute d'orthographe, Tao avait le parfait profil
                pour devenir notre bouc émissaire à chaque coquille laissée dans un e-mail. Mairssi Taheaux <3
            `
        },
        {
            name: 'Ronan Pédron',
            photo: Ronan,
            role: 'RE | Responsable Sponsor',
            description: `
                Toujours partant pour des projets délirants, vif d'esprit, Ronan est tellement rapide qu'il n'a pas eu
                le temps d'écrire un seul mail pour la recherche de sponsor !
            `
        },
        {
            name: 'Matthieu Camart',
            photo: Matthieu,
            role: 'RE | Recruteur juré',
            description: `
                Dans le milieu, on l'appelle l'annuaire. En effet son bras est tellement long qu'il a un nombre de
                contact inimaginable pour le commun des mortels !
            `
        },
        {
            name: 'Antoine Aubin',
            photo: Anonymous,
            role: 'RE | Responsable Partenariat',
            description: `
                Ayant toujours rêvé de devenir influenceur, Quentin n'a pas hésité à prendre les devants lors de son
                arrivée chez GGH pour prendre le contrôle de nos réseaux !
            `
        },
        {
            name: 'Victor Sixou',
            photo: Sixou,
            role: 'COM | Responsable Communication',
            description: `
                Victor (ou Susucre pour les intimes), dernier arrivant venu gonfler les rangs de GGH, est un peu notre
                quota diversité (et oui chez GGH la diversité régionale c'est important #N'oublieJamaisD'oùTuViens).
            `
        },
        {
            name: 'Elie Abi-khalil',
            photo: Anonymous,
            role: 'COM | Responsable Créa',
            description: `
                De la musique, du fromage, et tout un tas de bonnes choses, tels étaient au départ les ingrédients
                choisis pour créer le savoyard parfait. Mais le hasard ajouta un autre ingrédient : du sel !
            `
        },
        {
            name: 'Paul Galand',
            photo: Anonymous,
            role: ' | ',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Jimmy Fabre',
            photo: Anonymous,
            role: 'GROWTH | Responsable Toulouse',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Vasco Sampaio',
            photo: Anonymous,
            role: 'GROWTH | Responsable Rennes',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Baptiste Cormorant',
            photo: Anonymous,
            role: 'STAFF | Lyon',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Hugo Jacquel',
            photo: Anonymous,
            role: 'STAFF | Lyon',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Adrien Anton-Ludwig',
            photo: Adrien,
            role: 'STAFF | Paris',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Sarah Gutierrez',
            photo: Sarah,
            role: 'STAFF | Paris',
            description: `
                Meilleure animatrice de live Twitch depuis Michel Drucker, vous ne pourrez pas la rater dans les
                couloirs avec sa chevelure mauve et son enceinte greffée à la main. Elle est là pour mettre l'ambiance !
            `
        },
        {
            name: 'Adèle Pluquet',
            photo: Adele,
            role: 'STAFF | Paris',
            description: `
                En réunion dans le métro, dans le train ou même en plein rally 4L, notre pro de canvas est toujours en
                pleine aventure. Mais comme on dit, tous les chemins mènent au Hackathon !
            `
        }
    ];

    const villes = [
        {
            title: 'Paris',
            photo: Pin
        },
        {
            title: 'Lyon',
            photo: Pin
        },
        {
            title: 'Rennes',
            photo: Pin
        },
        {
            title: 'Toulouse',
            photo: Pin
        }
    ]
</script>

<svelte:head>
    <title>{title('L\'asso')}</title>
</svelte:head>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>L'association</h1> 
            <h1>Gotta Go Hack</h1>
            <hr />

            <div class="since">Depuis février 2021</div>

            <div class="description">
                <p>
                    Saviez-vous que l'innovation était un muscle ? Et l'entraîner c'est notre raison d'être.
                </p>
            </div>

            <a class="team-container" href="#team">
                <h3 class="yellow">Toute la team</h3>
                <Arrow />
            </a>
        </div>
    </div>
    <div class="right">
        <Shadows top="yellow" bottom="red" width="40" height="50" shadowWidth="20" shadowHeight="10" margin="3">
            <iframe src="https://www.youtube.com/embed/9t-jS3UU4m8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Shadows>
    </div>

    <div class="corner"></div>
</div>

<div id="team">
    <div class="title-container">
        <div class="title">La team Gotta Go Hack</div>
    </div>

    <div class="members">
        {#each members as { name, photo, role, description }, i}
            <div class="member">
                <img class="photo" src={photo} alt="Photo de {name}"/>

                <div class="name {['red', 'blue', 'yellow'][i % 3]}">{name}</div>
                <div class="role">{role}</div>
            </div>
        {/each}
    </div>
</div>

<div id="Info">
    <div class="villes">
            {#each villes as { title, photo, description}, i}
            <div class="ville">
                <img class="photo" src={photo} alt=""/>
                <div class="subject">{title}</div>
            </div>
            {/each}
    </div>
</div>

<div id="recrutement">
    <a href="https://forms.office.com/r/FedcuQtKNt">Nous rejoindre</a>
</div>

<style lang="scss">
    @use 'sass:math';

    @import 'mixins';
    @import 'vars';

    #header {
        position: relative;

        height: calc(100vh - #{$nav-height});

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

        .left {
            flex-direction: column;

            padding-top: 5vh;
            padding-left: 10vw;

            .inner {
                flex-direction: column;
            }

            .since {
                font-size: 4vh;
            }

            .description {
                flex-direction: column;

                width: 40vw;

                margin-top: 2vh;

                font-size: 3vh;

                p {
                    margin: 0;
                }
            }

            .team-container {
                display: flex;
                flex-direction: column;
                align-items: center;

                height: 6vh; // Little hack simplifying a lot

                margin-top: 5vh;
            }
        }

        .right {
            padding-left: 4vw;
        }

        .corner {
            $size: 150px;

            position: absolute;

            left: -(math.div($size, 2));
            bottom: -(math.div($size, 2));

            width: $size;
            height: $size;

            background-color: white;

            transform: rotate(45deg);
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

        .members {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            grid-gap: 2vw;

            padding-top: 3vw;

            .member {
                flex-direction: column;
                align-items: center;

                .photo {
                    width: 150px;
                    height: auto;
                }

                .name {
                    margin-top: 15px;

                    font-family: $font-suez;
                    font-weight: bold;
                    font-size: 25px;

                    @include colored(color);
                }

                .role {
                    font-size: 20px;
                    text-align: center;

                    color: black;
                }

                .description {
                    width: 18vw;

                    margin-top: 2vh;

                    font-size: 1vw;
                    text-align: justify;

                    color: black;
                }
            }
        }
    }

    #Info {
        padding: 1vw;
        padding-top: 10vh;

        background-color: $color-red;
        display: flex;
        justify-content: center;

        padding-bottom: 10vh;

        .villes {
            display: grid;
            grid-template-columns: auto auto auto auto;

            grid-gap: 10vw;

            .ville {
                flex-direction: column;
                align-items: center;

                font-family: $font-barlow;

                .photo {
                    height: 10vw;
                    width: auto;
                }

                .subject {
                    margin-top: 3vh;

                    font-family: $font-barlow;
                    font-weight: bold;
                    font-size: 3vw;

                    text-align: center;
                    justify-content: center;
                    width: 10vw;
                }
            }
        }
        
    }

    #recrutement {
        
        background-color: $color-red;
                
        font-size: 4vw;
        font-weight: bold;
        padding-bottom: 5vh;
        padding-bottom: 10vh;

        text-decoration: underline;
        text-decoration-thickness: 0.7vh;

        align-items: center;
        justify-content: center;
    }
</style>
