<script>
    import { title } from '/app';

    import Shadows from '$components/Shadows.svelte';
    import Arrow from '$components/Arrow.svelte';

    import Cubes from '/assets/cubes.svg';
    import Cup from '/assets/cup.svg';
    import PtitsSups from '/assets/teams/0/ptits_sups.webp';
    import Alcoolib from '/assets/teams/0/alcoolib.webp';
    import Harmoniks from '/assets/teams/0/harmoniks.webp';
    import EzTax from '/assets/teams/0/ez_tax.webp';
    import Zelanders from '/assets/teams/0/zelanders.webp';
    import TroyTeam from '/assets/teams/0/troy_team.webp';
    import ReunitedHackers from '/assets/teams/0/reunited_hackers.webp';
    import DDD from '/assets/teams/0/ddd.webp';
    import Loic from '/assets/juries/0/loic.webp';
    import Anne from '/assets/juries/0/anne.webp';
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
                Directrice du campus de Lyon de l'EPITA.
            `
        },
        {
            photo: Jury,
            name: 'Saliha Adi Hakil',
            content: `
                Responsable Qualité et Plan Vert et référente RGPD à l'EPITA.
            `
        },{
            photo: Loic,
            name: 'Loïc Blet',
            content: `
                Professeur d'algorithmie et de programmation à l'EPITA Lyon.
            `
        },{
            photo: Anne,
            name: 'Anne Dewilde',
            content: `
                Directrice du laboratoire d'innovation (3IE) de l'EPITA.
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
            <h1>Hackathon</h1>
            <h1>Gotta Go Hack</h1>
            <h1>edition #0</h1>
            <hr />

            <div class="date">21 - 23 Mai 2021</div>
            <div class="online">100% en ligne</div>
        </div>

        <a href="#projects" class="see-projects clickable">
            <h3 class="red">Tous les projets</h3>
            <h3 class="red">présentés</h3>

            <Arrow />
        </a>
    </div>
    <div class="right">
        <Shadows top="blue" bottom="red" width="40" height="60" shadowWidth="20" shadowHeight="10" margin="3">
            <img class="cubes" src={Cubes} alt="Cubes" />
            <iframe src="https://www.youtube.com/embed/9e9MS6DhNMc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <h1 class="title">Le jury<br /> du hackathon edition #0</h1>
            <hr class="separator" />
        </div>
    </div>

    <div id="juries">
        {#each juries as { photo, name, content }}
            <div class="jury">
                <img class="photo" src={photo} alt="Photo de {name}"/>
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

            .see-projects {
                display: flex;
                flex-direction: column;
                align-items: center;

                height: 6vh; // Little hack simplifying a lot

                margin-top: 2vh;
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
