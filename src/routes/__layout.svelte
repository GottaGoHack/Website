<script>

    import { page } from '$app/stores';

    import GGH from '/assets/logo.svg';
    import EPITA from '/assets/school/epita-logo.png';
    import EPITECH from '/assets/school/epitech-logo.png';
    import Facebook from '/assets/socials/facebook.png';
    import Instagram from '/assets/socials/instagram.webp';
    import YouTube from '/assets/socials/youtube.png';
    import LinkedIn from '/assets/socials/linkedin.png';

    import NavBar from '$components/NavBar.svelte';
    import Footer from '$components/Footer.svelte';

    import '/app.scss';

    const routes = [
        { label: 'Home', route: '/'},
        { label: 'L\'asso', route: '/association' },
        { label: 'Hackathon ?', route: '/hackathon' },
        { label: 'Actu', route: '/actu' },
        {label: 'Archives', route: '/archives'},
        { label: 'Contact', route: '#footer' }
    ];

    const socials = [
        { image: Facebook, label: 'gottagohack', link: 'https://www.facebook.com/gottagohack' },
        { image: Instagram, label: '@gotta_go_hack', link: 'https://www.instagram.com/gotta_go_hack/' },
        { image: YouTube, label: 'Gotta Go Hack', link: 'https://www.youtube.com/channel/UCWoPWLWl-gT11wkwTxai8ZA' },
        { image: LinkedIn, label: 'Gotta Go Hack', link: 'https://www.linkedin.com/company/gotta-go-hack/' }
    ];

    const bottom = [
        { image: GGH, label: 'gottagohack', link: 'https://www.linktr.ee/GottaGoHack' },
        { image: EPITA, label: 'epita', link: 'https://www.epita.fr' },
        { image: EPITECH, label: 'epitech', link: 'https://www.epitech.eu' },     
    ]

</script>

<NavBar routes={routes}/>
<slot />
<Footer routes={routes} socials={socials}/>


<style lang="scss">
    @import 'vars';
</style>
