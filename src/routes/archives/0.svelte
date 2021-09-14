<script>
    import { title } from '/app';

    import Shadows from '/components/Shadows.svelte';
    import Arrow from '/components/Arrow.svelte';

    import Cubes from '/assets/cubes.svg';
    import Cup from '/assets/cup.svg';
    import PtitsSups from '/assets/teams/ptits_sups.webp';
    import Alcoolib from '/assets/teams/alcoolib.webp';
    import Harmoniks from '/assets/teams/harmoniks.webp';
    import EzTax from '/assets/teams/ez_tax.webp';
    import Zelanders from '/assets/teams/zelanders.webp';
    import TroyTeam from '/assets/teams/troy_team.webp';
    import ReunitedHackers from '/assets/teams/reunited_hackers.webp';
    import DDD from '/assets/teams/ddd.webp';
    import Jury from '/assets/jury.svg';

    const projects = [
        {
            image: PtitsSups,
            name: "Once Student A Time - Les p'tits sups",
            content: `
                Un "serious game", permettant de s'immiscer dans la vie d'un étudiant en 2020 et visant principalement à
                sensibiliser la population non-étudinante aux problèmes des jeunes, qui se sentent ignorés dans cette
                crise sanitaire, et d'encourager les dons envers les associations concernées. Ce jeu vidéo vise aussi
                accessoirement à servir un devoir de mémoire pour que les générations futures puissent revivre ce que
                les étudiants de 2020 ont vécu.
            `
        },
        {
            image: Alcoolib,
            name: "Alcolib - ETGM",
            content: `
                Une application web et mobile permettant d'obtenir des informations sur un alcool à partir d'une photo,
                'une marque ou d'un nom de bouteille, et offrant des recommandations comme le ferait un caviste. Elle
                met notamment en avant les alcools bios et locaux.
            `
        },
        {
            image: Harmoniks,
            name: "Do Me A Favor - Harmoniks",
            content: `
                Une application web permettant de demander de l'aide entre étudiants. Elle possède un système de dettes
                de services. Les étudiants trop endettés y ont la possibilité de repayer leur dû en effectuant des
                services éco-respoonsables.
            `
        },
        {
            image: EzTax,
            name: "EZ-TAX - Groot",
            content: `
                Une applicaiton web eprmettant de guider les étudiants et les jeunes adultes dans leur découvert des
                joies de l'administration française, et les accompagnants dans leurs démarches administratives.
            `
        },
        {
            image: Zelanders,
            name: "Giwa - Les Zelanders",
            content: `
                Une application web permettant à tous, mais notamment aux étudiants, de trouver des groupes avec
                lesquels organiser des évènements comme des parties de jeux Minecraft ou Among US en période de Covid.
                La plus value de cette application est qu'elle se focaliste sur l'instantanéité du processus. Le projet
                pouvait aussi s'étendre à l'organisation d'évènements en présentiel.
            `
        },
        {
            image: TroyTeam,
            name: "Java rencontre un python - TroyTeam",
            content: `
                Une plateforme d'échange en ligne permettant de filtrer les éléments toxiques afin d'offrir des
                interactions plus saines.
            `
        },
        {
            image: ReunitedHackers,
            name: "La PEC - Reunited Hackers",
            content: `
                Une application web permettant à un étudiant de rencontrer un autre étudiant, et de s'apprendre l'un
                l'autre des cours, à la manière des applications existantes permettant à deux personnes de s'apprendre
                l'une l'autre leurs langues.
            `
        },
        {
            image: DDD,
            name: "Salut ça taff ? - Les développeurs du dimanche",
            content: `
                Une plateforme d'échange de connaissances permettant à des étudiants et des professeurs de plusieurs
                établissements différents de partager leurs fiches de cours et exercices afin d'avoir une base de données
                centralisée et unifiée facilitant la révision et permettant d'explorer plus que le seul programme
                scolaire de son école.
            `
        }
    ];

    const juries = [
        {
            photo: Jury,
            name: 'Lamia Derrode',
            content: `
                Ajouter des lignes dans le corps du texte Ajouter des lignes dans le corps du texte Ajouter des lignes
                dans le corps du texte
            `
        },
        {
            photo: Jury,
            name: 'Saliha Adi Hakil',
            content: `
                Ajouter des lignes dans le corps du texte Ajouter des lignes dans le corps du texte Ajouter des lignes
                dans le corps du texte
            `
        },{
            photo: Jury,
            name: 'Loïc Blet',
            content: `
                Ajouter des lignes dans le corps du texte Ajouter des lignes dans le corps du texte Ajouter des lignes
                dans le corps du texte
            `
        },{
            photo: Jury,
            name: 'Anne Dewilde',
            content: `
                Ajouter des lignes dans le corps du texte Ajouter des lignes dans le corps du texte Ajouter des lignes
                dans le corps du texte
            `
        }
    ];
</script>

<svelte:head>
    <title>{title('Hackathon #0')}</title>
</svelte:head>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Hackathon Gotta Go Hack edition #0</h1>
            <hr />

            <div class="date">21 - 23 Mai 2021</div>
            <div class="online">100% en ligne</div>
        </div>

        <div class="see-projects clickable">
            <!-- TODO: Clean this ? -->
            <a href="#projects" class="opaque">
                <h3 class="red opaque">Tous les projets</h3>
            </a>
            <a href="#projects" class="opaque">
                <h3 class="red opaque">présentés</h3>
            </a>

            <Arrow />
        </div>
    </div>
    <div class="right">
        <Shadows top="blue" bottom="red" width="800" height="500" shadowWidth="450" shadowHeight="100" margin="40">
            <img class="cubes" src={Cubes} alt="Cubes" />
            <iframe src="https://www.youtube.com/embed/9e9MS6DhNMc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Shadows>
    </div>
</div>

<div id="projects">
    {#each projects as { image, name, content }, i}
        <div class="project">
            <img class="team" src={image} alt={`Logo de ${name}`} />
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
            <h1 class="title">Le jury<br /> Gotta go Hack edition #0</h1>
            <hr class="separator" />
        </div>
    </div>

    <div id="juries">
        {#each juries as { photo, name, content }}
            <div class="jury">
                <img class="photo" src={photo} alt={`Photo de ${name}`} />
                <div class="name">{name}</div>
                <div class="content">{content}</div>
            </div>
        {/each}
    </div>
</div>

<div id="ribbon"></div>

<style lang="scss">
    @import "vars";

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

            color: #222; // TODO: Make this a variable ?

            .jury {
                flex-direction: column;
                align-items: center;

                position: relative;

                width: 275px;

                margin-top: 50px;

                .photo {
                    width: 150px;
                }

                .name {
                    position: absolute;
                    top: 100px;
                    left: 0;

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
