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

<div class="image">
    <img src={image} alt={title} width="800" height="500"/>
    <div class="title">
        {title}
        <hr />
    </div>
</div>



<slot>
</slot>

<style lang="scss">

  @import 'mixins';
  @import 'vars';

  .image {
      vertical-align: baseline;
      padding-left: 35vh;
      margin-top: 25px;
      margin-bottom: 25px;
  }
  .title
  {
      padding-bottom: 25px;
      flex-direction: column;
      font-size: 60px;

      margin-top: auto;
      margin-left: 25px;

      width: 450px;
      text-align: left;
      font-family: "Suez One";
  }

  #article-header {

    padding-top: 20px;
    margin-left: 25px;
    padding-bottom: 20px;
    font-size: 20px;

  }

</style>