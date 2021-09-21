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
        { name: 'Jeanne Morin', photo: Jeanne },
        { name: 'Alexandre Lemonnier', photo: Alexandre },
        { name: 'Tao Blancheton', photo: Tao },
        { name: 'Mehdi Oueslati', photo: Mehdi },
        { name: 'Victor Simonin', photo: Victor },
        { name: 'Adrien Anton-Ludwig', photo: Adrien },
        { name: 'Sarah Gutierrez', photo: Sarah },
        { name: 'Adèle Pluquet', photo: Adele },
        { name: 'Ronan Pédron', photo: Ronan },
        { name: 'Matthieu Camart', photo: Matthieu },
        { name: 'Quentin Abel-Marceau', photo: Quentin },
        { name: 'Victor Sixou', photo: Sixou }
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
        {#each members as { name, photo }, i}
            <div class="member">
                <img class="photo" src={photo} alt="Photo de {name}" />

                <div class="name {['red', 'blue', 'yellow'][i % 3]}">{name}</div>
                <div class="description">Ajouter des lignes dans le corps du texte Ajouter des lignes</div> <!-- TODO: Real text -->
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
                    margin: 15px 0;

                    font-family: $font-suez;
                    font-weight: bold;
                    font-size: 24px;

                    @include colored(color);
                }

                .description {
                    width: 275px;

                    font-size: 21px;
                    text-align: justify;

                    color: black;
                }
            }
        }
    }
</style>
