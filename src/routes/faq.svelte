<script>

    import { title } from '/app';

    import Shadows from '$components/Shadows.svelte';
    import Arrow from '$components/Arrow.svelte';
    import Question from '$components/Question.svelte';

    
    const general_question = [
        {
            question: 'Qu\'est ce que l\'association Gotta Go Hack ?',
            answer: 'Gotta Go Hack est l\'association étudiante pour l\'innovation et l\'entrepreneuriat à l\'EPITA et à l\'EPITECH depuis février 2021.'
        },
        {
            question: 'Qu\'est-ce qu\'un Hackathon ?',
            answer: 'On t\'explique tout sur la page \"Hackahon ?\"'
        },
        {
            question: 'Combien y-a-t-il de Hackathon par an ?',
            answer: 'Il y a deux hackathons de 48h par an : la Winter Edition autour de novembre, et la Spring Edition, en mai.'
        },
        {
            question: 'Quelles sont les dates du prochain Hackathon ?',
            answer: 'La Spring Edition du hackathon Gotta Go Hack se déroulera du 13 au 15 mai 2022'
        },
        {
            question: 'Combien de temps dure le Hackathon ?',
            answer: 'Le hackathon se déroule sur un week-end entier, du vendredi 18h au dimanche 16h.'
        },
        {
            question: 'Où a lieu le Hackathon ?',
            answer: 'La Spring Edition 2022 du Hackathon Gotta Go Hack se déroulera en présentiel sur les campus de l\'EPITA Paris et Lyon. Les participations en distanciel pour les élèves à l\'étranger ou en incapacité de se déplacer vers un centre présentiel sont également possibles.'
        }
    ];

    const inscription_question = [
        {
            question: 'Comment s\'inscrire au prochain Hackathon ?',
            answer: 'Les inscriptions s\'ouvriront 1 mois avant l\'évènement, à travers un formulaire d\'inscription partagé sur nos réseaux et notre site web.'
        },
        {
            question: 'Qui peut s\'inscrire ?',
            answer: 'Les élèves de tous niveaux de l\'EPITA, l\'EPITECH, l\'ESME et de SupbioTech peuvent s\'inscrire au Hackathon.'
        },
        {
            question: 'Combien coûte l\'inscription ?',
            answer: 'Rien. 0. Nada. Lors de l\'inscription seule une caution sera demandé. Cette dernière sera rendu si le participant se rend bien au Hackathon.'
        },
        {
            question: 'Comment s\'inscrire en équipe au Hackathon ?',
            answer: 'Tous les membres de l\'équipe doivent être inscrits à l\'évènement, l\'enregistrement des équipes se fait le vendredi soir, suite au lancement du Hackathon.'
        },
        {
            question: 'Peut-on s\'inscrire seul au Hackathon ?',
            answer: 'Oui, il est possible et même conseillé de venir au Hackathon en solo et rencontrer d\'autres super hackers pour former ta team. Cela permet de choisir ces team mates en fonction d\'un projet qui te plait plutôt qu\'en fonction de ses affinités.'
        }
    ];

    const participant_question = [
        {
            question: 'Faut-il emmener son PC pour le Hackathon ?',
            answer: 'Les participants doivent amenés leur propre matériel informatique. L\'utilisation du PIE de l\'EPITA pendant le week-end sera interdite.'
        },
        {
            question: 'Doit-on emmener ses repas pendant le Hackathon ?',
            answer: 'Les participants présentiels au Hackathon sont fournis en snack & nourriture tout le long du week-end.'
        },
        {
            question: 'Comment faire si j\'ai un régime particulier ?',
            answer: 'Le GGH essait de proposer des menus adaptés pour chaque participants ayant communiqué un régime alimentaire particulier dans son form d\'inscription.'
        },
        {
            question: 'Où dormir pendant le Hackathon ?',
            answer: 'Des salles de repos non-mixtes sont à disposition des participants, ainsi que des matelas individuels. Les participants sont chargés d\'amener sac de couchage, couverture et oreiller s\'ils le souhaitent.'
        },
        {
            question: 'Où poser ces affaires pendant le Hackathon si on arrive de loin ?',
            answer: 'Pour les participants arrivant d\'un autre campus pour l\'occasion, une salle fermée sera mise à disposition pour entreposer valise et effets personnels de valeurs.'
        }
    ]

</script>

<svelte:head>
    <title>{title('FAQ')}</title>
</svelte:head>
<div id="top"></div>

<div id="header">FAQ</div>

<div class="categories">GENERAL</div>

<div class="list">
    {#each general_question as { q, a }, i}
        <div class="question"><Question question={general_question[i].question} answer={general_question[i].answer}/></div>
    {/each}
</div>

<div class="categories">INSCRIPTION</div>

<div class="list">
    {#each inscription_question as { q, a }, i}
        <div class="question"><Question question={inscription_question[i].question} answer={inscription_question[i].answer}/></div>
    {/each}
</div>

<div class="categories">PARTICIPANT</div>

<div class="list">
    {#each participant_question as { q, a }, i}
        <div class="question"><Question question={participant_question[i].question} answer={participant_question[i].answer}/></div>
    {/each}
</div>



<style lang="scss">
    @use 'sass:math';

    @import 'mixins';
    @import 'vars';

    #top {
        background-color: white;

    }


    #header {
        background-color: white;
        background-size: 100vh;

        padding-top: 10vh;
        padding-left: 15vw;

        font-size: 5vw;
        color: black;

        font-family: $font-barlow;
    }

    .categories {

        background-color: white;

        padding-left: 15vw;
        padding-top: 7vh;
        padding-bottom: 2vh;

        color: grey;
        font-size: 2vw;
    }

    .list {
        background-color: white;
        padding-left: 15vw;

        color: black;
        font-size: 2vh;

        flex-direction: column;
        padding-bottom: 5vh;

        .question {
            padding-bottom: 1vh;
        }
    }

    @keyframes sub-appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

   
</style>
