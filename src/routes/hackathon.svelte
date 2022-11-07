<script>
    import { title } from '/app';

    import Shadows from '$components/Shadows.svelte';

    import Hackathon from '/assets/hackathon.webp';
    import Cubes from '/assets/cubes.svg';
    import Pie from '/assets/pie.webp';

    const steps = [
        {
            title: "Team building",
            content: `
                D'abord, on forme des équipes de 4 et on trouve une idée de projet en rapport avec le thème fraîchement
                révélé par la team GGH.
            `
        },
        {
            title: "Et z'est partiiiii",
            content: `
                Une fois l'idée pitchée au Jury et validée, c'est parti pour 42h de développement du projet. L'objectif
                : réaliser un prototype le plus fonctionnel possible.
            `
        },
        {
            title: "Le super suivi",
            content: `
                Tout au long de ces 42h, différents workshops sont proposés pour vous aider dans votre processus
                d'innovation. Toute les 8h, des reviews pour constater votre avancement sont réalisées par le staff GGH.
            `
        },
        {
            title: "C'est qui qui gagne ?",
            content: `
                Pour les quatres équipes finalistes, c'est le moment de préparer une présentation de 15min sur tous les
                aspects de leur projet et le prototype réalisé.
            `
        }
    ];
</script>

<svelte:head>
    <title>{title('Hackathon ?')}</title>
</svelte:head>
<div id="top"></div>

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Vous avez dit hackathon ?</h1>
            <hr class="separator" />

            <img class="cubes" src={Cubes} alt="Cubes" />

        </div>
    </div>
    <div class="right">
            <div class="content">
                <p>
                    Rien à voir avec du Hacking et des CTF ! Un Hackathon, c’est une compétition de 
                    projets technologiques et entrepreneuriaux par équipe de 4 qui se déroule sur 48h. 
                    Autour d’un thème, toi et ta team aurez tout le week-end pour imaginer un projet 
                    innovant et réaliser son prototype mais aussi son business plan ! 
                </p>
                <p>L’objectif avant la présentation devant le jury : avoir un projet qui pourrait devenir une vraie startup.</p>
            </div>
    </div>
</div>

<div id="pie">
    <img class="image" src={Pie} alt="Diagramme" />
</div>

<div id="steps">
    <div class="sub-header">
        <div class="background"></div>

        <div class="percentage">100%</div>
        <div class="title">Gotta Go Hack</div>
    </div>

    <div class="content">
        {#each steps as { title, content }, i}
            <div class="step">
                <div class="top">
                    <div class="digit">{i + 1}.</div>
                    <div class="title">{title}</div>
                </div>
                <div class="text">{content}</div>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import 'vars';

    #top {
        background-color: white;

    }

    #header {
        height: calc(100vh - #{$nav-height});

        background-color: $color-red;

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

       .left {
            flex-direction: column;

            position: relative;

            padding-left: 10vw;
            padding-top: 4vh;

            .inner {
                flex-direction: column;

                position: relative;
            }

            .separator {
                margin-bottom: 3vh;
            }

            .cubes {
                position: absolute;
                top: 20vh;
                left: -10vh;

                z-index: 1;

                width: 10vw;
            }

            :global(.shadows) {
                margin-left: 0;
            }
        }

        .right {
            padding-right: 10vw;
            flex-direction: column;

            .title {
                font-weight: bold;
                font-style: italic;
                font-size: 1.5vw;

                padding-bottom: 2vh;
            }

            .content {
                flex-direction: column;
                font-size: 20px;
                max-width: 600px;


                p {
                    padding-top: 20px;

                    .bold {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    #pie {
        justify-content: center;
        align-items: center;

        height: 100vh;

        background-color: white;

        .image {
            width: 100vw;
            max-width: 1900px;
        }
    }

    #steps {
        flex-direction: column;

        background-color: white;

        .sub-header {
            justify-content: center;

            position: relative;

            font-family: $font-suez;
            font-weight: bold;

            background-color: white;

            .background {
                position: absolute;
                top: 0;

                width: 100vw;
                height: 320px;

                background-color: $color-yellow;

                transform: rotate(-5deg);
            }

            .percentage {
                z-index: 1;

                margin-right: 2vh;

                font-size: 15vw;
            }

            .title {
                align-items: center;

                z-index: 1;

                width: 225px;

                font-size: 64px;
                text-transform: uppercase;
                line-height: 68px;
            }
        }

        .content {
            justify-content: space-evenly;

            margin-top: 50px;
            padding: 75px 50px;

            color: #333;

            .step {
                flex-direction: column;
                padding-left: 2vw;;

                .top {
                    position: relative;

                    .digit {
                        justify-content: center;

                        width: 100%;

                        font-size: 15vw;
                        font-weight: bold;
                        line-height: 17vw;

                        color: $color-blue;
                    }

                    .title {
                        position: absolute;
                        top: 11.5vw;
                        left: 0;

                        font-size: 1.7vw;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                }

                .text {
                    width: 20vw;

                    font-size: 1.4vw;
                    font-weight: 300;
                    text-align: justify;
                }
            }
        }
    }
</style>
