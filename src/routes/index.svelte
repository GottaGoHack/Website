
<script>
    import CountDown from "$components/home/CountDown.svelte";
    import Event from "$components/home/Event.svelte";
    import List from "$components/home/List.svelte";
    import Tuto from "$components/home/Tuto.svelte";
    import Faq from "$components/home/FAQ.svelte";
    import Themes from "$components/home/Themes.svelte";

    import StripeLeft from "$components/home/StripeLeft.svelte";
    import StripeRight from "$components/home/StripeRight.svelte";

    import catering from '/assets/home/catering.jpg';
    import fun from '/assets/home/fun.jpg';
    import workshop from '/assets/home/workshop.jpg';

    const first_info = [
        {
            title: 'A Paris',
            description: `
                Dans les locaux de l'EPITA Paris, au Kremlin Bicêtre.
                Accessible par ligne 7 et T3a, Porte d'Italie.`
        },
        {
            title: 'Pour tous !',
            description: `
                Accessible gratuitement à tous les étudiants ingénieurs et/ou en informatique. Viens défendre les couleurs de ton
                école !           
                `
        },
        {
            title: 'Par équipe',
            description: `
                De 2 à 4 personnes. Motive tes amis ou inscrits toi seul et rencontre
                de super Hacker pour composer ta team.           
                `
        }
    ]

    const catering_infos = {
        title: "Sur place, tout à disposition !",
        description: "Pour innover dans les meilleurs conditions, Gotta Go Hack fournit les repas, snacks et boissons tout le week-end gratuitement ! Sur place, sont également à disposition des salles de repos non-mixtes."
    }

    const fun_infos = {
        title: "Une ambiance de folie",
        description: "Travailler c'est bien, en s'amusant c'est mieux ! Pendant ces 48h, des rencontres, des animations, et des jeux t'attendent pour passer le meilleur des week-ends, ainsi qu'une pile de goodies incroyables et collectors. Viens vivre une expérience unique !"
    }
    
    const workshop_infos = {
        title: "Des workshops et des conférences",
        description: "Tout au long des 48h, des conférences animées par des professionnels autour des thèmes de l'édition auront lieu. Le staff GGH est également là pour t'aider avec des workshops pour réussir au mieux ton hackathon ! "
    }
</script>


<Event />
<CountDown />
<List elements={first_info}/>


<Themes />
<StripeRight content={catering_infos} image={catering}/>
<StripeLeft content={fun_infos} image={fun}/>
<StripeRight content={workshop_infos} image={workshop}/>
<Tuto />
<Faq />


<style lang="scss">
    @import 'vars';


  .swipe-holder{
	  height: 30vh;
	  width: 100%;
	}
	img{
	  max-width: 100%;
	  height: auto;
	}
</style>