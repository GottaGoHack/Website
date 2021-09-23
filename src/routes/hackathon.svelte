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

<div id="header">
    <div class="left">
        <div class="inner">
            <h1>Vous avez dit hackathon ?</h1>
            <hr class="separator" />

            <img class="cubes" src={Cubes} alt="Cubes" />

            <Shadows top="red" bottom="white" width="575" height="383" shadowWidth="300" shadowHeight="70" margin="30">
                <img src={Hackathon} alt="Hackathon" />
            </Shadows>
        </div>
    </div>
    <div class="right">
        <Shadows top="blue" bottom="yellow" width="800" height="535" shadowWidth="350" shadowHeight="75" margin="25">
            <div class="title">Mais qu'est-ce que c'est quoi dis donc un Hackathon ?</div>

            <div class="content">
                <p>
                    C'est un évènement qui réunit pendant un <span class="bold">weekend des étudiants</span>, par
                    groupe, pour essayer d'imaginer et de prototyper un <span class="bold">projet innovant</span>.
                    L'objectif est d'aboutir au meilleur résultat possible dans le lapse de temps accordé, en répondant
                    à des problématiques données, et tout ça évalué par des professionnels.
                </p>
                <p>
                    L'innovation est un muscle, qu'il faut entraîner ! Le but de l'Association Gotta Go Hack est donc de
                    proposer des programmes de musculation innovante aux élèves d'EPITA, notamment à travers des
                    Hackathons ! A plus long terme, le projet de l'association est d'organiser un Hackathon de référence
                    dans le paysage de la tech français et de contribuer à faire croître le nombre d'évènements de ce
                    type dans notre pays. Notre rêve : que les hackathons soient incontournables dans toutes les écoles
                    d'ingénieurs françaises d'ici 5 à 10 ans.
                </p>
            </div>
        </Shadows>
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

    #header {
        height: calc(100vh - #{$nav-height});

        background-color: $color-red;

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

        .left, .right {
            flex: 0.5;

            justify-content: center;
            align-items: center;
        }

        .left {
            flex-direction: column;

            position: relative;

            margin-left: 50px;

            .inner {
                flex-direction: column;

                position: relative;
            }

            .separator {
                margin-bottom: 75px;
            }

            .cubes {
                position: absolute;
                top: 205px;
                left: -120px;

                z-index: 1;

                width: 175px;
            }

            :global(.shadows) {
                margin-left: 0;
            }
        }

        .right {
            padding-top: 50px;
            padding-right: 25px;

            :global(.shadows) {
                margin-left: 0;
            }

            :global(.shadows-content) {
                flex-direction: column;

                padding: 20px 25px;

                font-size: 22px;

                background-color: $color-red;
            }

            .title {
                font-weight: bold;
                font-style: italic;
            }

            .content {
                flex-direction: column;


                p {
                    margin: 0;
                    margin-top: 20px;

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

                width: calc(100vw + 100px);
                height: 320px;

                background-color: $color-yellow;

                transform: rotate(-5deg);
            }

            .percentage {
                z-index: 1;

                margin-right: 15px;

                font-size: 224px;
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

                .top {
                    position: relative;

                    .digit {
                        justify-content: center;

                        width: 100%;

                        font-size: 196px;
                        font-weight: bold;
                        line-height: 215px;

                        color: $color-blue;
                    }

                    .title {
                        position: absolute;
                        top: 140px;
                        left: 0;

                        font-size: 24px;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                }

                .text {
                    width: 275px;

                    font-size: 18px;
                    font-weight: 300;
                    text-align: justify;
                }
            }
        }
    }
</style>
