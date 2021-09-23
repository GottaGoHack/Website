<script>
    import { title } from '/app';

    import Shadows from '/components/Shadows.svelte';
    import Arrow from '/components/Arrow.svelte';

    import Jeanne from '/assets/staff/jeanne.webp';
    import Alexandre from '/assets/staff/alexandre.webp';
    import Tao from '/assets/staff/tao.webp';
    import Mehdi from '/assets/staff/mehdi.webp';
    import Victor from '/assets/staff/victor.webp';
    import Adrien from '/assets/staff/adrien.webp';
    import Sarah from '/assets/staff/sarah.webp';
    import Adele from '/assets/staff/adele.webp';
    import Ronan from '/assets/staff/ronan.webp';
    import Matthieu from '/assets/staff/matthieu.webp';
    import Quentin from '/assets/staff/quentin.webp';
    import Sixou from '/assets/staff/gros_bg.webp';

    const members = [
        {
            name: 'Jeanne Morin',
            photo: Jeanne,
            role: 'Bureau | Présidente',
            description: `
                Micro-manageuse tyrannique de la team GGH, une légende dit qu'un jour on l'aurait entendu arrêter de
                parler (si si !). Si vous arrivez à en placer une quand elle est lancée, vous êtes très fort...
            `
        },
        {
            name: 'Alexandre Lemonnier',
            photo: Alexandre,
            role: 'Bureau | Trésorier',
            description: `
                Prêt à braquer des banques pour avoir le plus d'argent possible, Alexandre n'est expert en rien mais va
                toujours au bout de ses idées (17km ça ne lui fait pas froid aux yeux).
            `
        },
        {
            name: 'Tao Blancheton',
            photo: Tao,
            role: 'Bureau | Secrétaire',
            description: `
                Super flexeur mais incapable d'écrire une phrase sans faute d'orthographe, Tao avait le parfait profil
                pour devenir notre bouc émissaire à chaque coquille laissée dans un e-mail. Mairssi Taheaux <3
            `
        },
        {
            name: 'Mehdi Oueslati',
            photo: Mehdi,
            role: 'Bureau | Vice président',
            description: `
                Hackathonien récidiviste, avec des projets plus ou moins dans le thème, Mehdi est un peu notre
                directeur artistique chez GGH. Mais surtout il offre toujours les pizzas, et ça c'est pas négligeable.
            `
        },
        {
            name: 'Victor Simonin',
            photo: Victor,
            role: 'Pôle com | CM LinkedIn',
            description: `
                De la musique, du fromage, et tout un tas de bonnes choses, tels étaient au départ les ingrédients
                choisis pour créer le savoyard parfait. Mais le hasard ajouta un autre ingrédient : du sel !
            `
        },
        {
            name: 'Adrien Anton-Ludwig',
            photo: Adrien,
            role: 'Pôle recrutement jury',
            description: `
                Touche à tout et la main sur le coeur, Adrien, depuis sa 4L, est chargé de recruter les personnes
                composant le jury de nos hackathon !
            `
        },
        {
            name: 'Sarah Gutierrez',
            photo: Sarah,
            role: 'Pôle com | CM Discord',
            description: `
                Meilleure animatrice de live Twitch depuis Michel Drucker, vous ne pourrez pas la rater dans les
                couloirs avec sa chevelure mauve et son enceinte greffée à la main. Elle est là pour mettre l'ambiance !
            `
        },
        {
            name: 'Adèle Pluquet',
            photo: Adele,
            role: 'Pôle com | Designeuse',
            description: `
                En réunion dans le métro, dans le train ou même en plein rally 4L, notre pro de canvas est toujours en
                pleine aventure. Mais comme on dit, tous les chemins mènent au Hackathon !
            `
        },
        {
            name: 'Ronan Pédron',
            photo: Ronan,
            role: 'Pôle partenariat et sponsors',
            description: `
                Toujours partant pour des projets délirants, vif d'esprit, Ronan est tellement rapide qu'il n'a pas eu
                le temps d'écrire un seul mail pour la recherche de sponsor !
            `
        },
        {
            name: 'Matthieu Camart',
            photo: Matthieu,
            role: 'Pôle recrutement jury',
            description: `
                Dans le milieu, on l'appelle l'annuaire. En effet son bras est tellement long qu'il a un nombre de
                contact inimaginable pour le commun des mortels !
            `
        },
        {
            name: 'Quentin Abel-Marceau',
            photo: Quentin,
            role: 'Pôle com | CM Instagram & Facebook',
            description: `
                Ayant toujours rêvé de devenir influenceur, Quentin n'a pas hésité à prendre les devants lors de son
                arrivée chez GGH pour prendre le contrôle de nos réseaux !
            `
        },
        {
            name: 'Victor Sixou',
            photo: Sixou,
            role: 'Pôle com | Brainstormer & meme guy',
            description: `
                Victor (ou Susucre pour les intimes), dernier arrivant venu gonfler les rangs de GGH, est un peu notre
                quota diversité (et oui chez GGH la diversité régionale c'est important #N'oublieJamaisD'oùTuViens).
            `
        }
    ];
</script>

<svelte:head>
    <title>{title('L\'asso')}</title>
</svelte:head>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>L'association Gotta Go Hack</h1>
            <hr />

            <div class="since">Depuis février 2021</div>

            <div class="description">
                <p>
                    Saviez-vous que l'innovation était un muscle ? Et l'entraîner c'est notre raison d'être.
                    L'association Gotta Go Hack est là pour proposer des programmes intensifs de musculations créatives
                    et innovantes aux élèves ingénieurs de l'EPITA depuis 2021.
                </p>
                <p>
                    À travers notre évènement phare, le Hackathon, nous voulons amener les élèves à se servir de leur
                    créativité dans un but professionnalisant, mais surtout bon-enfant !
                </p>
            </div>

            <a class="team-container" href="#team">
                <h3 class="yellow">Toute la team</h3>
                <Arrow />
            </a>
        </div>
    </div>
    <div class="right">
        <Shadows top="yellow" bottom="red" width="800" height="500" shadowWidth="450" shadowHeight="100" margin="40">
            <!-- TODO: Nouvelle vidéo -->
            <iframe src="https://www.youtube.com/embed/JxOdWvtRns0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                <img class="photo" src={photo} alt="Photo de {name}" />

                <div class="name {['red', 'blue', 'yellow'][i % 3]}">{name}</div>
                <div class="role">{role}</div>
                <div class="description">{description}</div>
            </div>
        {/each}
    </div>
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

            margin-left: 25px;

            .inner {
                flex-direction: column;
            }

            .since {
                font-size: 32px;
            }

            .description {
                flex-direction: column;

                width: 700px;

                margin-top: 25px;

                font-size: 22px;

                p {
                    margin: 0;
                }
            }

            .team-container {
                display: flex;
                flex-direction: column;
                align-items: center;

                height: 50px; // Little hack simplifying a lot

                margin-top: 75px;
            }
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

        padding: 35px;

        background-color: white;

        .title-container {
            justify-content: center;

            .title {
                margin: 15px 0;
                padding: 0 5px;

                font-size: 44px;
                font-weight: bold;
                text-transform: uppercase;

                color: #333;

                box-shadow: $color-yellow 0 -28px inset;
            }
        }

        .members {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 35px;

            padding: 35px;

            .member {
                flex-direction: column;
                align-items: center;

                .name {
                    margin-top: 15px;

                    font-family: $font-suez;
                    font-weight: bold;
                    font-size: 24px;

                    @include colored(color);
                }

                .role {
                    font-size: 14px;

                    color: black;
                }

                .description {
                    width: 275px;

                    margin-top: 20px;

                    font-size: 20px;
                    text-align: justify;

                    color: black;
                }
            }
        }
    }
</style>
