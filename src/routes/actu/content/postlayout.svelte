<script>
    export let title;
    export let date;
    export let image;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div id="article-header">
    <a href="/actu">Retour aux Actu</a>
</div>

<div class=header>
    <div class="left">
        <img src={image} alt={title}/>
    </div>
    <div class="right">
        {title}
        <hr />
    </div>
</div>

<slot>
</slot>

<style lang="scss">

  @import 'mixins';
  @import 'vars';

    .header {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3vh;
    grid-auto-rows: minmax(100px, auto);

    }

    .left {
        grid-column: 1 / 2;
        grid-row: 1;

        padding-bottom: 5vh;
        padding-left: 10vh;
        margin-left: 15vw;

        vertical-align: baseline;

        width:40vw;
        height: 70vh;
    }
    .right {
        grid-column: 2 / 2;
        grid-row: 1;

        flex-direction: column;

        font-size: 5vw;

        margin-top : auto;
        padding-bottom: 5vh;
        padding-left: 15vh;

        width: 40vw;
    }

  #article-header {

    padding-top: 20px;
    margin-left: 25px;
    padding-bottom: 20px;
    font-size: 20px;

  }

</style>